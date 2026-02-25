# Icon Generator

A Node.js script to automatically generate React TypeScript icon components from SVG files.

## Overview

This tool reads SVG files from the `svg/` directory and generates corresponding TSX React components in the `icons/` directory. Each generated component follows a consistent pattern, making it easy to use and maintain icons across your project.

## Directory Structure

```
icon/
├── svg/                    # Source SVG files
│   ├── filled/            # Filled style icons
│   ├── outlined/          # Outlined style icons
│   ├── color/             # Color icons
│   └── *.svg              # Other icons
├── icons/                  # Generated TSX components (output)
├── components/
│   └── TdmIcon.tsx        # Base icon component
├── utils.ts               # Utility functions
└── generate-icons.js      # The generator script
```

## Usage

### Basic Usage

Generate new icon components (skips existing files):

```bash
node generate-icons.js
```

### Force Regenerate

Overwrite existing icon components in the `icons/` directory:

```bash
node generate-icons.js --force
# or
node generate-icons.js -f
```

## How It Works

1. **Scans** the `svg/` directory (including subdirectories) for `.svg` files
2. **Parses** each SVG file and extracts the content
3. **Generates** a TSX component with:
   - JSX-formatted SVG content
   - Icon definition using `svgToIconDefinition`
   - ForwardRef component wrapper
   - Base64 encoded SVG preview in comments
4. **Outputs** the component to `icons/{IconName}.tsx`

## Generated Component Structure

Each generated component follows this structure:

```tsx
// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const iconNameSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="..." />
  </svg>
);

const iconNameIconDefinition = svgToIconDefinition(
  iconNameSvg,
  'icon-name'
);

/**![IconNameIcon](data:image/svg+xml;base64,...) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={iconNameIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IconNameIcon';
}

export default RefIcon;
```

## Naming Conventions

| SVG Filename | Component Name | Variable Name | Kebab Name |
|--------------|----------------|---------------|------------|
| `AddressBookFilledIcon.svg` | `AddressBookFilledIcon` | `addressBookFilledSvg` | `address-book-filled` |
| `BellOutlinedIcon.svg` | `BellOutlinedIcon` | `bellOutlinedSvg` | `bell-outlined` |
| `SocialGoogleColorIcon.svg` | `SocialGoogleColorIcon` | `socialGoogleColorSvg` | `social-google-color` |

## Adding New Icons

### 1. Chuẩn bị file SVG

Đảm bảo file SVG của bạn có các thuộc tính chuẩn:

```xml
<svg width="24" height="24" viewBox="0 0 24 24" fill="#cacaca" xmlns="http://www.w3.org/2000/svg">
  <path d="..." />
</svg>
```

### 2. Đặt file SVG vào thư mục phù hợp

Thêm file vào thư mục tương ứng trong `svg/`:
- `svg/filled/` - Icon kiểu filled (ví dụ: `BellFilledIcon.svg`)
- `svg/outlined/` - Icon kiểu outlined (ví dụ: `BellOutlinedIcon.svg`)
- `svg/color/` - Icon có màu (ví dụ: `LogoColorIcon.svg`)
- `svg/` - Icon không thuộc style cụ thể

### 3. Generate icon components

Chạy script để tạo các component React từ file SVG:

```bash
node generate-icons.js
```

Hoặc dùng `--force` để ghi đè các file đã tồn tại:

```bash
node generate-icons.js --force
```

### 4. Tạo changeset

Tạo changeset để ghi nhận thay đổi cho version tiếp theo:

```bash
pnpm changeset
```

Chọn loại thay đổi:
- **patch** - Sửa lỗi hoặc thay đổi nhỏ (0.0.x)
- **minor** - Thêm tính năng mới (0.x.0)
- **major** - Thay đổi breaking changes (x.0.0)

Nhập mô tả thay đổi (ví dụ: "Add new BellFilledIcon")

### 5. Publish lên npm (local flow)

Flow publish được thực hiện **tách biệt trên local**, không còn auto publish trong CI:

1. Tạo changeset mô tả thay đổi:

   ```bash
   pnpm changeset
   ```

2. Bump version + cập nhật CHANGELOG:

   ```bash
   npm run version
   ```

   Lệnh này sẽ:

   - Cập nhật version trong `package.json`
   - Tạo/cập nhật `CHANGELOG.md`
   - Xóa các changeset files đã được áp dụng

3. Build package:

   ```bash
   npm run generate && npm run compile
   ```

4. Publish lên npm:

   ```bash
   npm publish
   ```

**Lưu ý**: Đảm bảo đã `npm login` và có quyền publish package.

### 7. Sử dụng icon mới

Sau khi publish, bạn có thể sử dụng icon trong project:

#### Import trực tiếp (Recommended)

```tsx
import BellFilledIcon from '@tdm-design/icons/BellFilledIcon';

function App() {
  return <BellFilledIcon />;
}
```

#### Sử dụng Barrel Export (Hỗ trợ Tree-shaking)

```tsx
import { BellFilledIcon } from '@tdm-design/icons';
```

#### Tùy chỉnh Icon

```tsx
<BellFilledIcon style={{ color: 'red' }} spin />
```

## CI Release & Demo Deploy Flow

Repo này dùng **GitHub Actions + Vercel** để tự động deploy demo, còn publish npm được thực hiện thủ công trên local.

### Scripts chính

- **`npm run generate`**: đọc SVG trong `svg/` → sinh `src/icons/*.tsx` + `src/icons/index.ts`
- **`npm run compile`**: build lib bằng `father` → tạo `es/`, `lib/`, `dist/`
- **`npm run version`**: `changeset version` → update `package.json` + `CHANGELOG.md`
- **`npm run demo:build`**: build trang demo Vite vào `demo-dist/`

### Flow deploy demo khi push lên nhánh `main`

Workflow `.github/workflows/release.yml` chạy với trigger:

- `on.push.branches: [main]`

Các bước chính:

1. **Cài đặt**:

   ```yaml
   - name: Install dependencies
     run: npm ci
   ```

2. **Deploy demo lên Vercel (production)**:

   ```yaml
   - name: Deploy demo to Vercel (production)
     run: npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }} --yes
     env:
       VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
       VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
   ```

   - Vercel đọc cấu hình từ `vercel.json`:

     ```json
     {
       "buildCommand": "pnpm install --frozen-lockfile=false && pnpm demo:build",
       "outputDirectory": "demo-dist",
       "rewrites": [
         {
           "source": "/(.*)",
           "destination": "/index.html"
         }
       ]
     }
     ```

   - Build trang demo từ thư mục `demo/` (Vite) ra `demo-dist/` và deploy lên production.

## Output Status

When running the script, you'll see the following status indicators:

| Status | Description |
|--------|-------------|
| `[OK]` | New component generated successfully |
| `[OVERWRITE]` | Existing component overwritten (with `--force`) |
| `[SKIP]` | Component already exists, skipped |
| `[ERROR]` | Failed to parse SVG file |

## Example Output

```bash
$ node generate-icons.js --force

Force mode enabled: will overwrite existing files in icons/

[OVERWRITE] ArrowLeftIcon.tsx
[OK] BellFilledIcon.tsx
[SKIP] ChartSimpleIcon.tsx already exists in icons/
[ERROR] Failed to parse InvalidIcon.svg

=== Done ===
Generated: 15
Overwritten: 5
Skipped: 100
Errors: 1
Total SVG files: 121
```

## Troubleshooting

### SVG Not Parsing

Ensure your SVG file:
- Has valid XML structure
- Contains a `<svg>` root element
- Does not have extra characters (like trailing dots)

### Component Not Generating

Check that:
- The SVG file is in the `svg/` directory or its subdirectories
- The file has a `.svg` extension
- The SVG content is valid

### Overwriting Protected Files

By default, existing files are protected. Use `--force` to overwrite:

```bash
node generate-icons.js --force
```

## License

MIT
