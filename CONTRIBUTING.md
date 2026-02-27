# Contributing — Thêm icon, Generate & Publish

Tài liệu này mô tả toàn bộ luồng từ khi có file SVG mới cho đến khi publish lên npm.

---

## Cấu trúc thư mục

```
tdm-design-icons/
├── svg/                        # SVG nguồn được dùng để generate
│   ├── filled/                 # Icon kiểu filled  (VD: BellFilledIcon.svg)
│   ├── outlined/               # Icon kiểu outlined (VD: BellOutlinedIcon.svg)
│   ├── color/                  # Icon có màu       (VD: SocialGoogleColorIcon.svg)
│   ├── flag/                   # Icon cờ quốc gia  (VD: VNCircleIcon.svg)
│   └── *.svg                   # Icon không thuộc nhóm cụ thể
├── svg-source/                 # SVG gốc tải về từ Figma (chưa phân loại)
├── src/
│   ├── icons/                  # TSX component được generate tự động (không sửa tay)
│   ├── components/
│   │   └── TdmIcon.tsx         # Base icon component
│   └── utils.ts
├── scripts/
│   └── generate.ts             # Script generate component từ SVG
├── figma-script/
│   ├── figma-sync-svgs.js      # Sync SVG từ Figma
│   └── classify-svgs.js        # Phân loại SVG vào svg/filled, svg/outlined...
└── package.json
```

---

## Luồng thêm icon mới

### Bước 1 — Thêm file SVG

Đảm bảo file SVG đáp ứng chuẩn sau trước khi thêm vào thư mục:

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="#cacaca" xmlns="http://www.w3.org/2000/svg">
  <path d="..." />
</svg>
```

**Yêu cầu nội dung SVG:**

- `fill="#cacaca"` trên thẻ `<svg>`, không đặt `fill` trên các thẻ con (`<path>`, `<rect>`,…)
- Kích thước `width="24" height="24"`, `viewBox="0 0 24 24"`
- Nội dung đã minify (1 dòng)

**Quy tắc đặt tên file:** `{Name}{Style}Icon.svg`

| Style          | Hậu tố                  | Ví dụ                       |
| -------------- | ----------------------- | --------------------------- |
| Solid/Filled   | `FilledIcon`            | `BellFilledIcon.svg`        |
| Stroke/Outline | `OutlinedIcon`          | `BellOutlinedIcon.svg`      |
| Multi-color    | `ColorIcon`             | `SocialGoogleColorIcon.svg` |
| Flag           | (không có suffix style) | `VNCircleIcon.svg`          |

**Vị trí đặt file:**

| Loại icon             | Thư mục         |
| --------------------- | --------------- |
| `*FilledIcon.svg`     | `svg/filled/`   |
| `*OutlinedIcon.svg`   | `svg/outlined/` |
| `*ColorIcon.svg`      | `svg/color/`    |
| Flag icon             | `svg/flag/`     |
| Không thuộc nhóm trên | `svg/` (root)   |

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

> **Không sửa tay** bất kỳ file nào trong `src/icons/` — chúng sẽ bị ghi đè mỗi lần generate.

---

## Build

```bash
npm run compile
```

Lệnh này chạy `father build` để tạo:

| Output  | Format | Dùng cho                |
| ------- | ------ | ----------------------- |
| `es/`   | ESM    | Bundler (webpack, vite) |
| `lib/`  | CJS    | Node.js / fallback      |
| `dist/` | UMD    | CDN / unpkg             |

`postcompile` tự động chạy sau `compile` để tạo các entry file `*.js` / `*.d.ts` ở root (hỗ trợ import trực tiếp theo tên icon).

---

## Tạo changeset & bump version

Dùng [Changesets](https://github.com/changesets/changesets) để quản lý version:

```bash
# 1. Ghi nhận thay đổi
npm run changeset
```

Chọn loại bump:

- `patch` — sửa lỗi nhỏ, không thêm icon mới (0.0.**x**)
- `minor` — thêm icon mới (0.**x**.0)
- `major` — breaking change (**x**.0.0)

Nhập mô tả, ví dụ: `Add BellFilledIcon, BellOutlinedIcon`.

```bash
# 2. Áp dụng changeset → cập nhật package.json + CHANGELOG.md
npm run version
```

---

## Publish lên npm

```bash
# Đảm bảo đã đăng nhập npm
npm login

# Build + publish
npm run generate && npm run compile
npm publish
```

Hoặc dùng script tổng hợp (generate + compile + changeset publish):

```bash
npm run release
```

> **Lưu ý**: `publishConfig.access` đã được đặt là `"public"` trong `package.json`, không cần thêm `--access public`.

---

## Demo

Chạy demo local:

```bash
npm run demo:dev
```

Build demo để deploy:

```bash
npm run demo:build
```

Demo sẽ được auto-deploy lên Vercel khi push lên nhánh `main` thông qua GitHub Actions.

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
