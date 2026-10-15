// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDockWindowBottomRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.25 7C11.664 7 12 7.336 12 7.75V11.25C12 11.664 11.664 12 11.25 12H7.75C7.336 12 7 11.664 7 11.25V7.75C7 7.336 7.336 7 7.75 7H11.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3Z"/>
  </svg>
);

const aDSDockWindowBottomRightIconDefinition = svgToIconDefinition(
  aDSDockWindowBottomRightSvg,
  'ads-dock-window-bottom-right'
);

/**![ADSDockWindowBottomRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuMjUgN0MxMS42NjQgNyAxMiA3LjMzNiAxMiA3Ljc1VjExLjI1QzEyIDExLjY2NCAxMS42NjQgMTIgMTEuMjUgMTJINy43NUM3LjMzNiAxMiA3IDExLjY2NCA3IDExLjI1VjcuNzVDNyA3LjMzNiA3LjMzNiA3IDcuNzUgN0gxMS4yNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDFDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNaTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDockWindowBottomRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDockWindowBottomRight';
}

export default RefIcon;
