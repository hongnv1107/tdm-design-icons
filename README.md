# @tdm-design/icons

React icon component library built from SVG, with full TypeScript support and tree-shaking.

## Installation

```bash
npm install @tdm-design/icons
# or
yarn add @tdm-design/icons
# or
pnpm add @tdm-design/icons
```

> **Peer dependencies**: React >= 16.8.0

## Usage

### Direct import (recommended)

Best for bundle size — only the icon you import is included:

```tsx
import BellFilledIcon from "@tdm-design/icons/BellFilledIcon";
import BellOutlinedIcon from "@tdm-design/icons/BellOutlinedIcon";

function App() {
  return (
    <>
      <BellFilledIcon />
      <BellOutlinedIcon />
    </>
  );
}
```

### Named import (tree-shaking supported)

```tsx
import { BellFilledIcon, BellOutlinedIcon } from "@tdm-design/icons";
```

## Props

All icons accept the same props via `TdmIconProps`:

| Prop           | Type                  | Default | Description                          |
| -------------- | --------------------- | ------- | ------------------------------------ |
| `style`        | `React.CSSProperties` | —       | Inline styles applied to the wrapper |
| `className`    | `string`              | —       | CSS class for the wrapper            |
| `spin`         | `boolean`             | `false` | Applies a spinning animation         |
| `rotate`       | `number`              | —       | Rotation angle in degrees            |
| `twoToneColor` | `string`              | —       | Secondary color for two-tone icons   |

```tsx
<BellFilledIcon
  style={{ color: "#1890ff", fontSize: 24 }}
  className="my-icon"
  spin
/>
```

## Icon categories

Icons are organized into groups based on their visual style:

| Category   | Description          | Example                 |
| ---------- | -------------------- | ----------------------- |
| `Filled`   | Solid filled icons   | `BellFilledIcon`        |
| `Outlined` | Stroke/outline icons | `BellOutlinedIcon`      |
| `Color`    | Multi-color icons    | `SocialGoogleColorIcon` |
| `Flag`     | Country flag icons   | `VNCircleIcon`          |

## Naming convention

Icon names follow the pattern: `{Name}{Style}Icon`

| SVG file                    | Import name             |
| --------------------------- | ----------------------- |
| `BellFilledIcon.svg`        | `BellFilledIcon`        |
| `ArrowUpOutlinedIcon.svg`   | `ArrowUpOutlinedIcon`   |
| `SocialGoogleColorIcon.svg` | `SocialGoogleColorIcon` |

## License

MIT
