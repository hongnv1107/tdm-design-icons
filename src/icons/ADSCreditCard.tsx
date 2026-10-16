// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCreditCardSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4ZM2 3.5C1.724 3.5 1.5 3.724 1.5 4V5.5H14.5V4C14.5 3.724 14.276 3.5 14 3.5H2ZM14.5 7H1.5V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V7ZM9 9.5H13V11H9V9.5Z"/>
  </svg>
);

const aDSCreditCardIconDefinition = svgToIconDefinition(
  aDSCreditCardSvg,
  'ads-credit-card'
);

/**![ADSCreditCard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0Wk0yIDMuNUMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjUuNUgxNC41VjRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUgyWk0xNC41IDdIMS41VjEyQzEuNSAxMi4yNzYgMS43MjQgMTIuNSAyIDEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlY3Wk05IDkuNUgxM1YxMUg5VjkuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCreditCardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCreditCard';
}

export default RefIcon;
