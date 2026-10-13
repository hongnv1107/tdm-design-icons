// Tool: Sync SVG icons từ Figma theo luồng đầy đủ:
//   1. Gọi Figma lấy cây node gốc
//   2. Thu thập COMPONENT / COMPONENT_SET → ghi ra components.txt
//   3. Tạo tên icon (PascalCase theo tên group) + xác định folder theo variant style
//      (giá trị variant = "filled" → folder filled, = "outlined" → folder outlined,
//      không xác định được → folder other) → ghi ra icon-names.txt
//   4. Tải SVG cho mỗi COMPONENT → lưu vào ../svg/<folder>/<iconName>.svg
//   5. Post-process mỗi file: xóa fill trên path, đặt fill="#cacaca" trên svg, minify
//
// Usage:
//   FIGMA_TOKEN=xxx node figma-sync-svgs.js
//
// Yêu cầu: Node 18+ (built-in fetch)

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// https://www.figma.com/design/3sJ5gG5bL6KyTYF3xWLHg0/Untitled?node-id=1-2940

const FIGMA_TOKEN = process.env.FIGMA_TOKEN || "";
const FILE_KEY = "3sJ5gG5bL6KyTYF3xWLHg0";
const ROOT_NODE_ID = "1:2940";

const COMPONENTS_FILE = path.join(__dirname, "components.txt");
const ICON_NAMES_FILE = path.join(__dirname, "icon-names.txt");
const OUTPUT_DIR = path.join(__dirname, "..", "svg");

if (!FIGMA_TOKEN) {
  console.error("Vui lòng set FIGMA_TOKEN trước.");
  process.exit(1);
}

// ─── Figma API helpers ─────────────────────────────────────────────────────────

async function fetchNode(fileKey, nodeId) {
  const url = `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(nodeId)}`;
  const res = await fetch(url, { headers: { "X-Figma-Token": FIGMA_TOKEN } });
  if (!res.ok)
    throw new Error(`Figma API error ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.nodes?.[nodeId]?.document;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchImagesBatch(fileKey, ids, retries = 8) {
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids.join(","))}&format=svg`;
  for (let attempt = 0; attempt <= retries; attempt++) {
    const res = await fetch(url, {
      headers: { "X-Figma-Token": FIGMA_TOKEN },
    });
    if (res.status === 429) {
      const waitMs = (attempt + 1) * 15000;
      console.warn(
        `      Rate limit (429), thử lại sau ${waitMs / 1000}s (lần ${attempt + 1}/${retries})...`,
      );
      await sleep(waitMs);
      continue;
    }
    if (!res.ok)
      throw new Error(
        `Figma images API error ${res.status}: ${await res.text()}`,
      );
    const data = await res.json();
    return data.images || {};
  }
  throw new Error("Figma images API: vượt quá số lần thử lại do rate limit");
}

async function downloadSvg(url) {
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(`Download SVG error ${res.status}: ${await res.text()}`);
  return res.text();
}

// ─── Step 1: Thu thập components từ cây Figma ──────────────────────────────────
//
// Mỗi COMPONENT_SET là một "group" icon (ví dụ "arrow-up-circle"). Các COMPONENT
// con của nó là các variant style (ví dụ "Style=Filled", "Style=Outlined").
// Component rời (không nằm trong set nào) được coi như group chỉ có 1 variant.

function collectComponents(node, list = []) {
  if (!node || typeof node !== "object") return list;
  const { id, name, type, children } = node;
  if (type === "COMPONENT" || type === "COMPONENT_SET") {
    list.push({ id, name, type });
  }
  if (Array.isArray(children)) {
    for (const child of children) collectComponents(child, list);
  }
  return list;
}

// ─── Step 2: Tạo tên icon + xác định folder theo variant style ────────────────

function toPascalCase(str) {
  if (!str) return "";
  return str
    .trim()
    .replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toUpperCase());
}

// Chỉ quan tâm giá trị variant là "filled" / "outlined" (không phân biệt hoa
// thường, không phụ thuộc tên key: Style=Filled, Type=Filled... đều tính là filled).
// Không xác định được → "other".
function resolveStyleFolder(variantStr) {
  if (!variantStr.includes("=")) return "other";
  for (const part of variantStr.split(",")) {
    const eqIdx = part.indexOf("=");
    if (eqIdx === -1) continue;
    const val = part.slice(eqIdx + 1).trim().toLowerCase();
    if (val === "filled") return "filled";
    if (val === "outlined") return "outlined";
  }
  return "other";
}

function buildIconNames(allComponents) {
  const result = [];
  let currentSetName = "";

  for (const row of allComponents) {
    if (row.type === "COMPONENT_SET") {
      currentSetName = row.name;
      continue;
    }
    if (row.type !== "COMPONENT") continue;

    const iconName = toPascalCase(currentSetName || row.name);
    const folder = resolveStyleFolder(row.name);

    result.push({ id: row.id, iconName, folder });
  }

  return result;
}

// ─── Step 5: Post-process SVG ──────────────────────────────────────────────────

function postProcessSvg(content) {
  let result = content;

  // Xóa fill="..." trên mọi thẻ <path ...>
  result = result.replace(/(<path\b[^>]*?)\s+fill=(["']).*?\2/gi, "$1");

  // Đặt đúng một fill="#cacaca" trên <svg> (xóa hết fill cũ trước, rồi thêm)
  result = result.replace(/<svg\b([^>]*)>/i, (_, attrs) => {
    const cleaned = attrs.replace(/\s+fill=(["']).*?\1/gi, "");
    return `<svg${cleaned} fill="#cacaca">`;
  });

  // Minify
  result = result
    .replace(/\r\n/g, "\n")
    .replace(/\n+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/\s{2,}/g, " ")
    .trim();

  return result;
}

// ─── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  try {
    // Step 1: Fetch cây node từ Figma
    console.log(`[1/4] Đang gọi Figma cho node ${ROOT_NODE_ID}...`);
    const root = await fetchNode(FILE_KEY, ROOT_NODE_ID);
    if (!root) {
      console.error("Không tìm thấy document cho node này.");
      process.exit(1);
    }
    const allComponents = collectComponents(root);
    if (!allComponents.length) {
      console.log("Không tìm thấy COMPONENT / COMPONENT_SET nào.");
      return;
    }
    // =================================================================================//
    // Step 2: Ghi đè toàn bộ components.txt
    console.log(
      `[2/4] Ghi ${allComponents.length} component vào components.txt...`,
    );
    const compLines = allComponents.map(
      (c) => `${c.id} | ${c.name} | ${c.type}`,
    );
    if (fs.existsSync(COMPONENTS_FILE)) fs.unlinkSync(COMPONENTS_FILE);
    fs.writeFileSync(COMPONENTS_FILE, compLines.join("\n"), {
      encoding: "utf8",
      flag: "w",
    });
    // =================================================================================//
    // Step 3: Tạo tên icon + folder → ghi đè toàn bộ icon-names.txt
    console.log("[3/4] Tạo tên icon, xác định folder và ghi icon-names.txt...");
    const iconNames = buildIconNames(allComponents);
    const iconLines = iconNames.map(
      (r) => `${r.id}\t${r.folder}/${r.iconName}.svg`,
    );
    if (fs.existsSync(ICON_NAMES_FILE)) fs.unlinkSync(ICON_NAMES_FILE);
    fs.writeFileSync(ICON_NAMES_FILE, iconLines.join("\n"), {
      encoding: "utf8",
      flag: "w",
    });
    console.log(`      Đã tạo ${iconNames.length} tên icon.`);

    // Cảnh báo nếu nhiều component khác nhau cùng ra 1 đường dẫn file
    // (group trùng tên trong cùng 1 style, ví dụ icon được tổ chức ở 2 category).
    // Chỉ giữ lại component xuất hiện sau cùng (là bản sẽ thắng khi ghi file),
    // bỏ các bản trùng trước đó để không tốn lượt gọi API tải ảnh.
    const pathToLast = new Map();
    for (const r of iconNames) {
      const key = `${r.folder}/${r.iconName}`;
      pathToLast.set(key, r);
    }
    const dedupedIconNames = [...pathToLast.values()];
    const dupCount = iconNames.length - dedupedIconNames.length;
    if (dupCount > 0) {
      console.warn(
        `      [trùng] ${dupCount} component bị trùng đường dẫn file với component khác, chỉ giữ bản xuất hiện sau cùng.`,
      );
    }
    // =================================================================================//
    // Step 4+5: Tải SVG → post-process → lưu theo folder/iconName vào svg/
    // Bỏ qua (resume) những file đã tồn tại sẵn trên đĩa, trừ khi đặt FORCE=1.
    // ONLY_NAMES="bell,award,..." (set name, không phân biệt hoa thường) → chỉ xử lý
    // các group này và luôn ghi đè (dùng để refetch lại 1 vài icon cụ thể).
    const FORCE = process.env.FORCE === "1";
    const onlyNames = process.env.ONLY_NAMES
      ? new Set(
          process.env.ONLY_NAMES.split(",").map((s) =>
            toPascalCase(s.trim()),
          ),
        )
      : null;
    const onlyFolder = process.env.ONLY_FOLDER || null;

    let scoped = dedupedIconNames;
    if (onlyNames) {
      scoped = scoped.filter((r) => onlyNames.has(r.iconName));
    }
    if (onlyFolder) {
      scoped = scoped.filter((r) => r.folder === onlyFolder);
    }

    const pending =
      FORCE || onlyNames
        ? scoped
        : scoped.filter(
            (r) => !fs.existsSync(path.join(OUTPUT_DIR, r.folder, `${r.iconName}.svg`)),
          );
    const skipped = scoped.length - pending.length;
    const total = scoped.length;
    console.log(
      `[4/4] Tải và xử lý SVG cho ${pending.length}/${total} COMPONENT (bỏ qua ${skipped} đã có sẵn) vào ${OUTPUT_DIR}...`,
    );
    for (const folder of new Set(dedupedIconNames.map((r) => r.folder))) {
      const dir = path.join(OUTPUT_DIR, folder);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }
    const idToEntry = new Map(pending.map((r) => [r.id, r]));
    let doneCount = skipped;
    const batchSize = 20;
    for (let i = 0; i < pending.length; i += batchSize) {
      if (i > 0) await sleep(3000);
      const batch = pending.slice(i, i + batchSize);
      const ids = batch.map((r) => r.id);
      const imagesMap = await fetchImagesBatch(FILE_KEY, ids);
      for (const { id } of batch) {
        const imageUrl = imagesMap[id];
        const { iconName, folder } = idToEntry.get(id);
        const relPath = `${folder}/${iconName}.svg`;
        if (!imageUrl) {
          doneCount++;
          console.warn(
            `  [${doneCount}/${total}] Không có URL SVG cho ${relPath}`,
          );
          continue;
        }
        try {
          const raw = await downloadSvg(imageUrl);
          const processed = postProcessSvg(raw);
          fs.writeFileSync(
            path.join(OUTPUT_DIR, folder, `${iconName}.svg`),
            processed,
            "utf8",
          );
          doneCount++;
          console.log(`  [${doneCount}/${total}] ${relPath}`);
        } catch (err) {
          doneCount++;
          console.error(
            `  [${doneCount}/${total}] Lỗi tải ${relPath}: ${err.message}`,
          );
        }
      }
    }
    console.log(`\nHoàn tất! ${doneCount} SVG được lưu tại: ${OUTPUT_DIR}`);
  } catch (err) {
    console.error("Lỗi tổng:", err.message);
    process.exit(1);
  }
}

main();
