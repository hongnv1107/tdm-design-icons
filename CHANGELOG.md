# @tdm-design/icons

## 0.2.0-rc.4

### Minor Changes

- Add `viewBox` prop to all icon components to override the inner `<svg>` viewBox (e.g. `<ADSAdd viewBox="-4 -4 24 24" />`).

## 0.2.0-rc.3

### Patch Changes

- Revert the rc.2 ADS viewBox change: ADS icons are back to their original 16×16 `viewBox="0 0 16 16"`.

## 0.2.0-rc.2

### Patch Changes

- ADS icons: padded from a 16×16 grid onto a 24×24 canvas (`viewBox="-4 -4 24 24"`) so they render at the same visual size as the other icon sets.

## 0.2.0-rc.1

### Minor Changes

- Add 826 ADS (Atlassian Design System) icons (16×16) from `svg/ads/`, exported as `ADS{Name}` components (e.g. `ADSAIAgent`, `ADSChartPie`). Import: `@tdm-design/icons/ADSAIAgent`.

### Patch Changes

- `MoonFilled` / `MoonOutlined`: re-exported from Figma with a 24×24 viewBox (was 23×24).

## 0.2.0-rc.0

### Major Changes

- Icons are now synced from the new Figma source. **Breaking:** no component name ends with `Icon` anymore.
  - Filled/Outlined: `BellFilledIcon` → `BellFilled`, `BellOutlinedIcon` → `BellOutlined`.
  - Color/Flag: `SocialGoogleColorIcon` → `SocialGoogleColor`, `VNCircleIcon` → `VNCircle`.
  - Entry imports change the same way: `@tdm-design/icons/BellFilled`.
- Renamed icons: `XxxCircle` → `CircleXxx` (Check, Close, Dollar, Exclamation, Heart, Info, Minus, Phone, Play, Question, User, Video), `XxxSquare` → `SquareXxx` (Check, Close, Code, Dollar, Heart, Info, List, Minus, Phone, Question, User), `CloseOctagon` → `OctagonClose`, `ShieldClose` → `ShieldXmark`, `Link2` → `LinkSimple`, `QRCode` → `QrCode`, `TV` → `Tv`, `TVRetro` → `TvRetro`, `ParkRotateLeft/Right` → `ObjectRotateLeft/Right`, `ArrowLeftRight` → `SwapOutlined`.
- Removed: `ArrowUpDown` (use `SwapOutlined` with `rotate={90}`), `ArrowRightLeft`.
- Style changes: `LoadingLines` and `Usb` are Filled only; `ForensicWatermarking` is Outlined only.
- Added: `ZoomInFilled/Outlined`, `ZoomOutFilled/Outlined`, `CopyPlusOutlined`, and other new icons. 1038 icons in total.

## 0.1.10

### Patch Changes

- docs: rewrite CONTRIBUTING.md & add EqualIcon SVGs

## 0.1.9

### Patch Changes

- Add github action, auto publish, change icon ChevronUpFilledIcon

## 0.1.5

### Patch Changes

- update fill currentColor

## 0.1.4

### Patch Changes

- add 10 icon new: ZoomOutOutlinedIcon, ZoomInOutlinedIcon, ArrowUpDownOutlinedIcon,...

## 0.1.2

### Patch Changes

- add ForensicWatermarkingIcon

## 0.1.1

### Patch Changes

- add ChevronUpDoubleFilledIcon and change ChevronRightDoubleFilledIcon

## 0.1.0

### Minor Changes

- Chuẩn hóa lại README.md để tập trung hướng dẫn sử dụng thư viện icon.

## 0.0.21

### Patch Changes

- update name

## 0.0.20

### Patch Changes

- add flag icon

## 0.0.19

### Patch Changes

- add some icon

## 0.0.18

### Patch Changes

- refactor code

## 0.0.17

### Patch Changes

- change build tool\

## 0.0.16

### Patch Changes

- refactor file and add some icon

## 0.0.15

### Patch Changes

- add some icon

## 0.0.14

### Patch Changes

- add some icon

## 0.0.13

### Patch Changes

- add some iocn

## 0.0.12

### Patch Changes

- add some icon

## 0.0.11

### Patch Changes

- add OrientationRotateOutlinedIcon

## 0.0.10

### Patch Changes

- add MoonFilledIcon, SunFilledIcon, TrashCanOutlinedIcon

## 0.0.9

### Patch Changes

- change classname smicon to tdmicon

## 0.0.8

### Patch Changes

- change name component

## 0.0.7

### Patch Changes

- change build config

## 0.0.6

### Patch Changes

- change build config

## 0.0.5

### Patch Changes

- change build

## 0.0.4

### Patch Changes

- Update build config

## 0.0.3

### Patch Changes

- feat: update build config

## 0.0.2

### Patch Changes

- change build

## 0.0.1

### Patch Changes

- First release 0.0.1
