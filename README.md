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
import BellFilled from "@tdm-design/icons/BellFilled";
import BellOutlined from "@tdm-design/icons/BellOutlined";

function App() {
  return (
    <>
      <BellFilled />
      <BellOutlined />
    </>
  );
}
```

### Named import (tree-shaking supported)

```tsx
import { BellFilled, BellOutlined } from "@tdm-design/icons";
```

## Props

All icons accept the same props via `TdmIconProps`:

| Prop           | Type                  | Default | Description                          |
| -------------- | --------------------- | ------- | ------------------------------------ |
| `style`        | `React.CSSProperties` | —       | Inline styles applied to the wrapper |
| `className`    | `string`              | —       | CSS class for the wrapper            |
| `spin`         | `boolean`             | `false` | Applies a spinning animation         |
| `rotate`       | `number`              | —       | Rotation angle in degrees            |
| `viewBox`      | `string`              | —       | Overrides the inner `<svg>` viewBox  |
| `twoToneColor` | `string`              | —       | Secondary color for two-tone icons   |

```tsx
<BellFilled
  style={{ color: "#1890ff", fontSize: 24 }}
  className="my-icon"
  spin
/>

// Pad a 16×16 ADS icon onto a 24×24 grid
<ADSAdd viewBox="-4 -4 24 24" />
```

## Icon categories

Icons are organized into groups based on their visual style:

| Category   | Description          | Example                 |
| ---------- | -------------------- | ----------------------- |
| `Filled`   | Solid filled icons   | `BellFilled`        |
| `Outlined` | Stroke/outline icons | `BellOutlined`      |
| `Color`    | Multi-color icons    | `SocialGoogleColor` |
| `Flag`     | Country flag icons   | `VNCircle`          |
| `ADS`      | Atlassian Design System icons (16×16) | `ADSAIAgent` |

## Naming convention

Component names never end with `Icon`. ADS icons get the `ADS` prefix at generate time. The style is taken from the SVG folder:

| SVG file                       | Import name         |
| ------------------------------ | ------------------- |
| `svg/filled/Bell.svg`          | `BellFilled`        |
| `svg/outlined/ArrowUp.svg`     | `ArrowUpOutlined`   |
| `svg/color/SocialGoogleColorIcon.svg` | `SocialGoogleColor` |
| `svg/flag/VNCircleIcon.svg`    | `VNCircle`          |
| `svg/ads/AIAgent.svg`          | `ADSAIAgent`        |

## License

MIT
