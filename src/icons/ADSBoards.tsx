// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBoardsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C1.724 3.5 1.5 3.724 1.5 4V10C1.5 10.276 1.724 10.5 2 10.5H3.833V3.5H2ZM5.333 3.5V10.5H7.667V3.5H5.333ZM9.167 3.5V10.5H11C11.276 10.5 11.5 10.276 11.5 10V4C11.5 3.724 11.276 3.5 11 3.5H9.167ZM0 4C0 2.895 0.895 2 2 2H11C12.105 2 13 2.895 13 4V10C13 11.105 12.105 12 11 12H2C0.895 12 0 11.105 0 10V4ZM14.5 11.75L14.5 7H16V11.75C16 13.545 14.545 15 12.75 15H5V13.5H12.75C13.717 13.5 14.5 12.717 14.5 11.75Z"/>
  </svg>
);

const aDSBoardsIconDefinition = svgToIconDefinition(
  aDSBoardsSvg,
  'ads-boards'
);

/**![ADSBoards](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzLjVDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFYxMEMxLjUgMTAuMjc2IDEuNzI0IDEwLjUgMiAxMC41SDMuODMzVjMuNUgyWk01LjMzMyAzLjVWMTAuNUg3LjY2N1YzLjVINS4zMzNaTTkuMTY3IDMuNVYxMC41SDExQzExLjI3NiAxMC41IDExLjUgMTAuMjc2IDExLjUgMTBWNEMxMS41IDMuNzI0IDExLjI3NiAzLjUgMTEgMy41SDkuMTY3Wk0wIDRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxMUMxMi4xMDUgMiAxMyAyLjg5NSAxMyA0VjEwQzEzIDExLjEwNSAxMi4xMDUgMTIgMTEgMTJIMkMwLjg5NSAxMiAwIDExLjEwNSAwIDEwVjRaTTE0LjUgMTEuNzVMMTQuNSA3SDE2VjExLjc1QzE2IDEzLjU0NSAxNC41NDUgMTUgMTIuNzUgMTVINVYxMy41SDEyLjc1QzEzLjcxNyAxMy41IDE0LjUgMTIuNzE3IDE0LjUgMTEuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBoardsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoards';
}

export default RefIcon;
