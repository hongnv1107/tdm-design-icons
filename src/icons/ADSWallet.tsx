// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWalletSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V3.5H13C14.105 3.5 15 4.395 15 5.5V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13.5V2.5H3ZM2.5 5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V11.5H12C10.895 11.5 10 10.605 10 9.5V9C10 7.895 10.895 7 12 7H13.5V5.5C13.5 5.224 13.276 5 13 5H2.5ZM13.5 8.5H12C11.724 8.5 11.5 8.724 11.5 9V9.5C11.5 9.776 11.724 10 12 10H13.5V8.5Z"/>
  </svg>
);

const aDSWalletIconDefinition = svgToIconDefinition(
  aDSWalletSvg,
  'ads-wallet'
);

/**![ADSWallet](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMy41SDEzQzE0LjEwNSAzLjUgMTUgNC4zOTUgMTUgNS41VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxMy41VjIuNUgzWk0yLjUgNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWMTEuNUgxMkMxMC44OTUgMTEuNSAxMCAxMC42MDUgMTAgOS41VjlDMTAgNy44OTUgMTAuODk1IDcgMTIgN0gxMy41VjUuNUMxMy41IDUuMjI0IDEzLjI3NiA1IDEzIDVIMi41Wk0xMy41IDguNUgxMkMxMS43MjQgOC41IDExLjUgOC43MjQgMTEuNSA5VjkuNUMxMS41IDkuNzc2IDExLjcyNCAxMCAxMiAxMEgxMy41VjguNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWalletIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWallet';
}

export default RefIcon;
