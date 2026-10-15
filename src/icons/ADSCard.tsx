// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3C1.895 1 1 1.895 1 3V13ZM3 13.5C2.724 13.5 2.5 13.276 2.5 13V9H13.5V13C13.5 13.276 13.276 13.5 13 13.5H3ZM13.5 7.5H2.5V3C2.5 2.724 2.724 2.5 3 2.5H13C13.276 2.5 13.5 2.724 13.5 3V7.5ZM4 12H9V10.5H4V12ZM10.5 12H12V10.5H10.5V12Z"/>
  </svg>
);

const aDSCardIconDefinition = svgToIconDefinition(
  aDSCardSvg,
  'ads-card'
);

/**![ADSCard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUgxM0MxNC4xMDUgMTUgMTUgMTQuMTA1IDE1IDEzVjNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUgzQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNaTTMgMTMuNUMyLjcyNCAxMy41IDIuNSAxMy4yNzYgMi41IDEzVjlIMTMuNVYxM0MxMy41IDEzLjI3NiAxMy4yNzYgMTMuNSAxMyAxMy41SDNaTTEzLjUgNy41SDIuNVYzQzIuNSAyLjcyNCAyLjcyNCAyLjUgMyAyLjVIMTNDMTMuMjc2IDIuNSAxMy41IDIuNzI0IDEzLjUgM1Y3LjVaTTQgMTJIOVYxMC41SDRWMTJaTTEwLjUgMTJIMTJWMTAuNUgxMC41VjEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCard';
}

export default RefIcon;
