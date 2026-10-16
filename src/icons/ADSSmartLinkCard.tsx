// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSmartLinkCardSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C1.724 4.5 1.5 4.724 1.5 5V11C1.5 11.276 1.724 11.5 2 11.5H10V4.5H2ZM11.5 4.5V11.5H14C14.276 11.5 14.5 11.276 14.5 11V5C14.5 4.724 14.276 4.5 14 4.5H11.5ZM0 5C0 3.895 0.895 3 2 3H14C15.105 3 16 3.895 16 5V11C16 12.105 15.105 13 14 13H2C0.895 13 0 12.105 0 11V5ZM8.5 7.5H3V6H8.5V7.5ZM6 10H3V8.5H6V10Z"/>
  </svg>
);

const aDSSmartLinkCardIconDefinition = svgToIconDefinition(
  aDSSmartLinkCardSvg,
  'ads-smart-link-card'
);

/**![ADSSmartLinkCard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiA0LjVDMS43MjQgNC41IDEuNSA0LjcyNCAxLjUgNVYxMUMxLjUgMTEuMjc2IDEuNzI0IDExLjUgMiAxMS41SDEwVjQuNUgyWk0xMS41IDQuNVYxMS41SDE0QzE0LjI3NiAxMS41IDE0LjUgMTEuMjc2IDE0LjUgMTFWNUMxNC41IDQuNzI0IDE0LjI3NiA0LjUgMTQgNC41SDExLjVaTTAgNUMwIDMuODk1IDAuODk1IDMgMiAzSDE0QzE1LjEwNSAzIDE2IDMuODk1IDE2IDVWMTFDMTYgMTIuMTA1IDE1LjEwNSAxMyAxNCAxM0gyQzAuODk1IDEzIDAgMTIuMTA1IDAgMTFWNVpNOC41IDcuNUgzVjZIOC41VjcuNVpNNiAxMEgzVjguNUg2VjEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSmartLinkCardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSmartLinkCard';
}

export default RefIcon;
