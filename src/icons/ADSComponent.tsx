// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSComponentSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 2.336 2.336 2 2.75 2H6.25C6.664 2 7 2.336 7 2.75V4.5H9V2.75C9 2.336 9.336 2 9.75 2H13.25C13.664 2 14 2.336 14 2.75V4.5C15.105 4.5 16 5.395 16 6.5V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V6.5C0 5.395 0.895 4.5 2 4.5V2.75ZM3.5 4.5H5.5V3.5H3.5V4.5ZM12.5 4.5V3.5H10.5V4.5H12.5ZM2 6C1.724 6 1.5 6.224 1.5 6.5V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V6.5C14.5 6.224 14.276 6 14 6H2Z"/>
  </svg>
);

const aDSComponentIconDefinition = svgToIconDefinition(
  aDSComponentSvg,
  'ads-component'
);

/**![ADSComponent](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMi43NUMyIDIuMzM2IDIuMzM2IDIgMi43NSAySDYuMjVDNi42NjQgMiA3IDIuMzM2IDcgMi43NVY0LjVIOVYyLjc1QzkgMi4zMzYgOS4zMzYgMiA5Ljc1IDJIMTMuMjVDMTMuNjY0IDIgMTQgMi4zMzYgMTQgMi43NVY0LjVDMTUuMTA1IDQuNSAxNiA1LjM5NSAxNiA2LjVWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNi41QzAgNS4zOTUgMC44OTUgNC41IDIgNC41VjIuNzVaTTMuNSA0LjVINS41VjMuNUgzLjVWNC41Wk0xMi41IDQuNVYzLjVIMTAuNVY0LjVIMTIuNVpNMiA2QzEuNzI0IDYgMS41IDYuMjI0IDEuNSA2LjVWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjYuNUMxNC41IDYuMjI0IDE0LjI3NiA2IDE0IDZIMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSComponentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSComponent';
}

export default RefIcon;
