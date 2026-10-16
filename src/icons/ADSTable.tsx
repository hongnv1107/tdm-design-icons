// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8.75H6.5V12.5H14C14.276 12.5 14.5 12.276 14.5 12V8.75ZM1.5 12C1.5 12.276 1.724 12.5 2 12.5H5V8.75H1.5V12ZM14.5 4C14.5 3.724 14.276 3.5 14 3.5H6.5V7.25H14.5V4ZM1.5 7.25H5V3.5H2C1.724 3.5 1.5 3.724 1.5 4V7.25ZM16 12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12Z"/>
  </svg>
);

const aDSTableIconDefinition = svgToIconDefinition(
  aDSTableSvg,
  'ads-table'
);

/**![ADSTable](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDguNzVINi41VjEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlY4Ljc1Wk0xLjUgMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUg1VjguNzVIMS41VjEyWk0xNC41IDRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUg2LjVWNy4yNUgxNC41VjRaTTEuNSA3LjI1SDVWMy41SDJDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFY3LjI1Wk0xNiAxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTable';
}

export default RefIcon;
