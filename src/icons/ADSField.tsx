// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.5H0V2H6V3.5ZM0 7C0 5.895 0.895 5 2 5H14C15.105 5 16 5.895 16 7V10C16 11.105 15.105 12 14 12H2C0.895 12 0 11.105 0 10V7ZM2 6.5C1.724 6.5 1.5 6.724 1.5 7V10C1.5 10.276 1.724 10.5 2 10.5H14C14.276 10.5 14.5 10.276 14.5 10V7C14.5 6.724 14.276 6.5 14 6.5H2Z"/>
  </svg>
);

const aDSFieldIconDefinition = svgToIconDefinition(
  aDSFieldSvg,
  'ads-field'
);

/**![ADSField](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAzLjVIMFYySDZWMy41Wk0wIDdDMCA1Ljg5NSAwLjg5NSA1IDIgNUgxNEMxNS4xMDUgNSAxNiA1Ljg5NSAxNiA3VjEwQzE2IDExLjEwNSAxNS4xMDUgMTIgMTQgMTJIMkMwLjg5NSAxMiAwIDExLjEwNSAwIDEwVjdaTTIgNi41QzEuNzI0IDYuNSAxLjUgNi43MjQgMS41IDdWMTBDMS41IDEwLjI3NiAxLjcyNCAxMC41IDIgMTAuNUgxNEMxNC4yNzYgMTAuNSAxNC41IDEwLjI3NiAxNC41IDEwVjdDMTQuNSA2LjcyNCAxNC4yNzYgNi41IDE0IDYuNUgyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSField';
}

export default RefIcon;
