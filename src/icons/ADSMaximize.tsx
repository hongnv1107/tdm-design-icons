// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMaximizeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15 1.895 14.105 1 13 1H3C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3ZM13 2.5C13.276 2.5 13.5 2.724 13.5 3V13C13.5 13.276 13.276 13.5 13 13.5H3C2.724 13.5 2.5 13.276 2.5 13V3C2.5 2.724 2.724 2.5 3 2.5H13ZM8 4H4.75C4.336 4 4 4.336 4 4.75L4 8H5.5L5.5 5.5H8V4ZM10.5 10.5V8H12L12 11.25C12 11.449 11.921 11.64 11.781 11.78C11.64 11.921 11.449 12 11.25 12H8V10.5H10.5Z"/>
  </svg>
);

const aDSMaximizeIconDefinition = svgToIconDefinition(
  aDSMaximizeSvg,
  'ads-maximize'
);

/**![ADSMaximize](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUgzQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUgxM0MxNC4xMDUgMTUgMTUgMTQuMTA1IDE1IDEzVjNaTTEzIDIuNUMxMy4yNzYgMi41IDEzLjUgMi43MjQgMTMuNSAzVjEzQzEzLjUgMTMuMjc2IDEzLjI3NiAxMy41IDEzIDEzLjVIM0MyLjcyNCAxMy41IDIuNSAxMy4yNzYgMi41IDEzVjNDMi41IDIuNzI0IDIuNzI0IDIuNSAzIDIuNUgxM1pNOCA0SDQuNzVDNC4zMzYgNCA0IDQuMzM2IDQgNC43NUw0IDhINS41TDUuNSA1LjVIOFY0Wk0xMC41IDEwLjVWOEgxMkwxMiAxMS4yNUMxMiAxMS40NDkgMTEuOTIxIDExLjY0IDExLjc4MSAxMS43OEMxMS42NCAxMS45MjEgMTEuNDQ5IDEyIDExLjI1IDEySDhWMTAuNUgxMC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMaximizeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMaximize';
}

export default RefIcon;
