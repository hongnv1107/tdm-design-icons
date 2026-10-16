// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGroupSelectionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15 1.895 14.105 1 13 1H6C4.895 1 4 1.895 4 3V10C4 11.105 4.895 12 6 12H13C14.105 12 15 11.105 15 10V3ZM13 2.5C13.276 2.5 13.5 2.724 13.5 3V10C13.5 10.276 13.276 10.5 13 10.5H6C5.724 10.5 5.5 10.276 5.5 10V3C5.5 2.724 5.724 2.5 6 2.5H13Z"/><path d="M7 4.5H8.5V6H7V4.5Z"/><path d="M10 4.5H11.5V6H10V4.5Z"/><path d="M10 7.5H11.5V9H10V7.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.5H4.464V4H3C1.895 4 1 4.895 1 6V13C1 14.105 1.895 15 3 15H10C11.105 15 12 14.105 12 13V11.536H10.5V13C10.5 13.276 10.276 13.5 10 13.5H3C2.724 13.5 2.5 13.276 2.5 13V6C2.5 5.724 2.724 5.5 3 5.5Z"/>
  </svg>
);

const aDSGroupSelectionIconDefinition = svgToIconDefinition(
  aDSGroupSelectionSvg,
  'ads-group-selection'
);

/**![ADSGroupSelection](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUg2QzQuODk1IDEgNCAxLjg5NSA0IDNWMTBDNCAxMS4xMDUgNC44OTUgMTIgNiAxMkgxM0MxNC4xMDUgMTIgMTUgMTEuMTA1IDE1IDEwVjNaTTEzIDIuNUMxMy4yNzYgMi41IDEzLjUgMi43MjQgMTMuNSAzVjEwQzEzLjUgMTAuMjc2IDEzLjI3NiAxMC41IDEzIDEwLjVINkM1LjcyNCAxMC41IDUuNSAxMC4yNzYgNS41IDEwVjNDNS41IDIuNzI0IDUuNzI0IDIuNSA2IDIuNUgxM1oiLz48cGF0aCBkPSJNNyA0LjVIOC41VjZIN1Y0LjVaIi8+PHBhdGggZD0iTTEwIDQuNUgxMS41VjZIMTBWNC41WiIvPjxwYXRoIGQ9Ik0xMCA3LjVIMTEuNVY5SDEwVjcuNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNS41SDQuNDY0VjRIM0MxLjg5NSA0IDEgNC44OTUgMSA2VjEzQzEgMTQuMTA1IDEuODk1IDE1IDMgMTVIMTBDMTEuMTA1IDE1IDEyIDE0LjEwNSAxMiAxM1YxMS41MzZIMTAuNVYxM0MxMC41IDEzLjI3NiAxMC4yNzYgMTMuNSAxMCAxMy41SDNDMi43MjQgMTMuNSAyLjUgMTMuMjc2IDIuNSAxM1Y2QzIuNSA1LjcyNCAyLjcyNCA1LjUgMyA1LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGroupSelectionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGroupSelection';
}

export default RefIcon;
