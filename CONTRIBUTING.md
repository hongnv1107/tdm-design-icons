# Contributing — Thêm icon mới & Publish lên npm

Tài liệu mô tả toàn bộ luồng từ khi có file SVG mới đến khi package được publish lên npm.

---

## Mục lục

1. [Cấu trúc thư mục](#cấu-trúc-thư-mục)
2. [Thêm icon mới](#thêm-icon-mới)
3. [Generate React components](#generate-react-components)
4. [Kiểm tra bằng demo local](#kiểm-tra-bằng-demo-local)
5. [Build](#build)
6. [Tạo changeset & bump version](#tạo-changeset--bump-version)
7. [Publish lên npm qua Git tag](#publish-lên-npm-qua-git-tag)
8. [Cấu hình GitHub & npm (một lần)](#cấu-hình-github--npm-một-lần)
9. [Post-process SVG (tiện ích)](#post-process-svg-tiện-ích)

---

## Cấu trúc thư mục

```
tdm-design-icons/
├── svg/                        # SVG nguồn — dùng để generate component
│   ├── filled/                 # Icon kiểu filled  (VD: BellFilledIcon.svg)
│   ├── outlined/               # Icon kiểu outlined (VD: BellOutlinedIcon.svg)
│   ├── color/                  # Icon có màu       (VD: SocialGoogleColorIcon.svg)
│   ├── flag/                   # Icon cờ quốc gia  (VD: VNCircleIcon.svg)
│   └── *.svg                   # Icon không thuộc nhóm cụ thể
├── svg-source/                 # SVG gốc tải về từ Figma (chưa phân loại)
├── src/
│   ├── icons/                  # ⚠️ TSX component được generate tự động — KHÔNG sửa tay
│   ├── components/
│   │   └── TdmIcon.tsx         # Base icon component
│   └── utils.ts
├── scripts/
│   └── generate.ts             # Script generate component từ SVG
├── figma-script/
│   ├── figma-sync-svgs.js      # Sync SVG từ Figma
│   └── classify-svgs.js        # Phân loại SVG vào svg/filled, svg/outlined...
├── .changeset/                 # Changeset config & pending changesets
├── .github/workflows/
│   └── publish.yml             # CI/CD — tự động publish khi push tag
└── package.json
```

---

## Thêm icon mới

### Bước 1 — Chuẩn hóa file SVG

Đảm bảo file SVG đáp ứng chuẩn sau **trước khi** thêm vào thư mục:

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="#cacaca" xmlns="http://www.w3.org/2000/svg">
  <path d="..." />
</svg>
```

**Yêu cầu:**

| Tiêu chí | Giá trị |
| --- | --- |
| Kích thước | `width="24" height="24"`, `viewBox="0 0 24 24"` |
| Fill | `fill="#cacaca"` trên thẻ `<svg>`, **không** đặt `fill` trên thẻ con (`<path>`, `<rect>`,…) |
| Nội dung | Đã minify (1 dòng) |

### Bước 2 — Đặt tên file

Quy tắc: **`{Name}{Style}Icon.svg`**

| Style | Hậu tố | Ví dụ |
| --- | --- | --- |
| Solid/Filled | `FilledIcon` | `BellFilledIcon.svg` |
| Stroke/Outline | `OutlinedIcon` | `BellOutlinedIcon.svg` |
| Multi-color | `ColorIcon` | `SocialGoogleColorIcon.svg` |
| Cờ quốc gia | _(không có suffix style)_ | `VNCircleIcon.svg` |

### Bước 3 — Đặt file vào đúng thư mục

| Loại icon | Thư mục |
| --- | --- |
| `*FilledIcon.svg` | `svg/filled/` |
| `*OutlinedIcon.svg` | `svg/outlined/` |
| `*ColorIcon.svg` | `svg/color/` |
| Flag icon | `svg/flag/` |
| Không thuộc nhóm trên | `svg/` (root) |

---

## Generate React components

Script `scripts/generate.ts` đọc toàn bộ SVG trong `svg/` và tạo file TSX tương ứng trong `src/icons/`.

```bash
npm run generate
```

Lệnh này sẽ:

1. Xóa toàn bộ `src/icons/`
2. Quét đệ quy `svg/**/*.svg`
3. Tạo `src/icons/{IconName}.tsx` cho từng icon
4. Tạo `src/icons/index.ts` export tất cả

> ⚠️ **Không sửa tay** bất kỳ file nào trong `src/icons/` — chúng sẽ bị ghi đè mỗi lần generate.

---

## Kiểm tra bằng demo local

Sau khi generate, kiểm tra icon mới bằng demo:

```bash
npm run demo:dev
```

Build demo để deploy:

```bash
npm run demo:build
```

Demo sẽ được auto-deploy lên Vercel khi push lên nhánh `main`.

---

## Build

```bash
npm run compile
```

Lệnh này chạy `father build` để tạo:

| Output | Format | Dùng cho |
| --- | --- | --- |
| `es/` | ESM | Bundler (webpack, vite) |
| `lib/` | CJS | Node.js / fallback |
| `dist/` | UMD | CDN / unpkg |

`postcompile` tự động chạy sau `compile` để tạo các entry file `*.js` / `*.d.ts` ở root (hỗ trợ import trực tiếp theo tên icon).

---

## Tạo changeset & bump version

Dùng [Changesets](https://github.com/changesets/changesets) để quản lý version:

```bash
# 1. Ghi nhận thay đổi
npm run changeset
```

Chọn loại bump:

| Loại | Khi nào dùng | Ví dụ version |
| --- | --- | --- |
| `patch` | Sửa lỗi nhỏ, không thêm icon | `0.0.x` |
| `minor` | **Thêm icon mới** (tính năng mới) | `0.x.0` |
| `major` | Breaking change | `x.0.0` |

Nhập mô tả, ví dụ: _"Add BellFilledIcon, BellOutlinedIcon"_

```bash
# 2. Áp dụng changeset → cập nhật package.json + CHANGELOG.md
npm run version
```

---

## Publish lên npm qua Git tag

Quy trình publish **hoàn toàn tự động** thông qua GitHub Actions khi push một Git tag có dạng `v*`.

### Các lệnh thực hiện

```bash
# 1. Ghi nhận thay đổi (chọn "minor" khi thêm icon mới)
npm run changeset

# 2. Bump version → cập nhật package.json + CHANGELOG.md
npm run version

# 3. Commit release
git add .
git commit -m "chore: release vX.Y.Z"

# 4. Push code + tag
git push origin main
git tag vX.Y.Z
git push origin --tags
```

---

## Post-process SVG (tiện ích)

Script `svg-postprocess-all.js` (ở root) dùng để chuẩn hóa toàn bộ SVG trong project:

- Xóa `fill` trên thẻ `<path>`
- Đặt đúng một `fill="#cacaca"` trên `<svg>`
- Minify nội dung
- Bỏ qua `svg/color/` và `svg/flag/` (chỉ minify, không đổi fill)

```bash
node svg-postprocess-all.js
```

---

## Tóm tắt nhanh — Thêm icon & Publish

```bash
# 1. Thêm file SVG vào svg/filled/, svg/outlined/,... (đã chuẩn hóa)

# 2. Generate component
npm run generate

# 3. Kiểm tra
npm run demo:dev

# 4. Tạo changeset (chọn minor)
npm run changeset

# 5. Bump version
npm run version

# 6. Commit & push
git add .
git commit -m "chore: release vX.Y.Z"
git push origin main

# 7. Tag & push → GitHub Actions tự publish
git tag vX.Y.Z
git push origin --tags
```
