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
│   └── SmIcon.tsx         # Base icon component
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

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
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
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={iconNameIconDefinition} />;
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

1. **Prepare SVG file**: Ensure your SVG has standard attributes:
   ```xml
   <svg width="24" height="24" viewBox="0 0 24 24" fill="#cacaca" xmlns="http://www.w3.org/2000/svg">
     <path d="..." />
   </svg>
   ```

2. **Place SVG file**: Add the file to the appropriate folder in `svg/`:
   - `svg/filled/` - For filled style icons (e.g., `BellFilledIcon.svg`)
   - `svg/outlined/` - For outlined style icons (e.g., `BellOutlinedIcon.svg`)
   - `svg/color/` - For color icons (e.g., `LogoColorIcon.svg`)
   - `svg/` - For icons without a specific style

3. **Run the generator**:
   ```bash
   node generate-icons.js
   ```

4. **Import and use** the new component:
   ```tsx
    import BellFilledIcon from '@tdm-design/icons/BellFilledIcon';

    function App() {
      return <BellFilledIcon />;
    }
    ```

    ### Using Barrel Export (Supports Tree-shaking)

    ```tsx
    import { BellFilledIcon } from '@tdm-design/icons';
    ```

    ### Customizing Icons
    ```tsx
    <BellFilledIcon style={{ color: 'red' }} spin />
    ```

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
