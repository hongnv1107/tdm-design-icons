// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPaintBrushSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 0.75C2.5 0.336 2.836 0 3.25 0H12.75C13.164 0 13.5 0.336 13.5 0.75V9C13.5 10.105 12.605 11 11.5 11H10V14C10 15.105 9.105 16 8 16C6.895 16 6 15.105 6 14V11H4.5C3.395 11 2.5 10.105 2.5 9V0.75ZM7.5 11V14C7.5 14.276 7.724 14.5 8 14.5C8.276 14.5 8.5 14.276 8.5 14V11H7.5ZM4 1.5V6.5H12V1.5H10.5V4H9V1.5H7V3H5.5V1.5H4ZM12 8H4V9C4 9.276 4.224 9.5 4.5 9.5H11.5C11.776 9.5 12 9.276 12 9V8Z"/>
  </svg>
);

const aDSPaintBrushIconDefinition = svgToIconDefinition(
  aDSPaintBrushSvg,
  'ads-paint-brush'
);

/**![ADSPaintBrush](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSAwLjc1QzIuNSAwLjMzNiAyLjgzNiAwIDMuMjUgMEgxMi43NUMxMy4xNjQgMCAxMy41IDAuMzM2IDEzLjUgMC43NVY5QzEzLjUgMTAuMTA1IDEyLjYwNSAxMSAxMS41IDExSDEwVjE0QzEwIDE1LjEwNSA5LjEwNSAxNiA4IDE2QzYuODk1IDE2IDYgMTUuMTA1IDYgMTRWMTFINC41QzMuMzk1IDExIDIuNSAxMC4xMDUgMi41IDlWMC43NVpNNy41IDExVjE0QzcuNSAxNC4yNzYgNy43MjQgMTQuNSA4IDE0LjVDOC4yNzYgMTQuNSA4LjUgMTQuMjc2IDguNSAxNFYxMUg3LjVaTTQgMS41VjYuNUgxMlYxLjVIMTAuNVY0SDlWMS41SDdWM0g1LjVWMS41SDRaTTEyIDhINFY5QzQgOS4yNzYgNC4yMjQgOS41IDQuNSA5LjVIMTEuNUMxMS43NzYgOS41IDEyIDkuMjc2IDEyIDlWOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPaintBrushIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPaintBrush';
}

export default RefIcon;
