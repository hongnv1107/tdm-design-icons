// Tool: Sync SVG icons từ Figma theo luồng đầy đủ:
//   1. Gọi Figma lấy cây node gốc
//   2. Thu thập COMPONENT / COMPONENT_SET → ghi ra components.txt
//   3. Tạo tên icon (PascalCase) theo quy tắc ghép tên set + variant → ghi ra icon-names.txt
//   4. Tải SVG cho mỗi COMPONENT → lưu vào ./svg-source/<iconName>.svg
//   5. Post-process mỗi file: xóa fill trên path, đặt fill="#cacaca" trên svg, minify
//
// Usage:
//   node figma-sync-svgs.js
//
// Yêu cầu: Node 18+ (built-in fetch)

/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

// https://www.figma.com/design/jhYzNrKCkSfyKF3gKSEDDl/TDM-Design-System-202504?node-id=14206-5949&m=dev

const FIGMA_TOKEN = "";
const FILE_KEY = "jhYzNrKCkSfyKF3gKSEDDl";
const ROOT_NODE_ID = "14206:5949";

const COMPONENTS_FILE = path.join(__dirname, "components.txt");
const ICON_NAMES_FILE = path.join(__dirname, "icon-names.txt");
const OUTPUT_DIR = path.join(__dirname, "svg-source");

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

async function fetchImagesBatch(fileKey, ids) {
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids.join(","))}&format=svg`;
  const res = await fetch(url, { headers: { "X-Figma-Token": FIGMA_TOKEN } });
  if (!res.ok)
    throw new Error(
      `Figma images API error ${res.status}: ${await res.text()}`,
    );
  const data = await res.json();
  return data.images || {};
}

async function downloadSvg(url) {
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(`Download SVG error ${res.status}: ${await res.text()}`);
  return res.text();
}

// ─── Step 1: Thu thập components từ cây Figma ──────────────────────────────────

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

// ─── Step 2: Tạo tên icon ──────────────────────────────────────────────────────

function toPascalCase(str) {
  if (!str) return "";
  return str
    .replace(/[-_\s]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^(.)/, (c) => c.toUpperCase());
}

// "Status=True, Style=Outlined" → ["True", "Outlined"]
// Key style/type/variant → đặt sau, key khác (Status, Size…) → đặt trước
function parseVariantValues(variantStr) {
  const styleValues = [];
  const otherValues = [];

  for (const part of variantStr.split(",").map((s) => s.trim())) {
    const eqIdx = part.indexOf("=");
    if (eqIdx === -1) {
      otherValues.push(toPascalCase(part));
      continue;
    }
    const key = part.slice(0, eqIdx).trim().toLowerCase();
    const val = toPascalCase(part.slice(eqIdx + 1).trim());

    if (["style", "type", "variant"].includes(key)) {
      styleValues.push(val);
    } else {
      otherValues.push(val);
    }
  }

  return [...otherValues, ...styleValues];
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

    const setPart = toPascalCase(currentSetName);
    let iconName;

    if (row.name.includes("=")) {
      const parts = parseVariantValues(row.name).filter(
        (v) => v.toLowerCase() !== "default",
      );
      iconName = setPart + parts.join("") + "Icon";
    } else {
      iconName = setPart + toPascalCase(row.name) + "Icon";
    }

    result.push({ id: row.id, iconName });
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
    // Step 3: Tạo tên icon → ghi đè toàn bộ icon-names.txt
    console.log("[3/4] Tạo tên icon và ghi icon-names.txt...");
    const iconNames = buildIconNames(allComponents);
    const iconLines = iconNames.map((r) => `${r.id}\t${r.iconName}`);
    if (fs.existsSync(ICON_NAMES_FILE)) fs.unlinkSync(ICON_NAMES_FILE);
    fs.writeFileSync(ICON_NAMES_FILE, iconLines.join("\n"), {
      encoding: "utf8",
      flag: "w",
    });
    console.log(`      Đã tạo ${iconNames.length} tên icon.`);
    // =================================================================================//
    // Step 4+5: Tải SVG → post-process → lưu theo iconName vào svg-source/
    const total = iconNames.length;
    console.log(
      `[4/4] Tải và xử lý SVG cho ${total} COMPONENT vào ${OUTPUT_DIR}...`,
    );
    if (!fs.existsSync(OUTPUT_DIR))
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    const idToName = new Map(iconNames.map((r) => [r.id, r.iconName]));
    let doneCount = 0;
    const batchSize = 50;
    for (let i = 0; i < iconNames.length; i += batchSize) {
      const batch = iconNames.slice(i, i + batchSize);
      const ids = batch.map((r) => r.id);
      const imagesMap = await fetchImagesBatch(FILE_KEY, ids);
      for (const { id } of batch) {
        const imageUrl = imagesMap[id];
        const iconName = idToName.get(id);
        if (!imageUrl) {
          doneCount++;
          console.warn(
            `  [${doneCount}/${total}] Không có URL SVG cho ${iconName}`,
          );
          continue;
        }
        try {
          const raw = await downloadSvg(imageUrl);
          const processed = postProcessSvg(raw);
          fs.writeFileSync(
            path.join(OUTPUT_DIR, `${iconName}.svg`),
            processed,
            "utf8",
          );
          doneCount++;
          console.log(`  [${doneCount}/${total}] ${iconName}.svg`);
        } catch (err) {
          doneCount++;
          console.error(
            `  [${doneCount}/${total}] Lỗi tải ${iconName}: ${err.message}`,
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
