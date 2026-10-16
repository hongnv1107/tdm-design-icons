// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLockLockedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C6.619 1.5 5.5 2.619 5.5 4V7H10.5V4C10.5 2.619 9.381 1.5 8 1.5ZM12 7V4C12 1.791 10.209 0 8 0C5.791 0 4 1.791 4 4V7C2.895 7 2 7.895 2 9V14C2 15.105 2.895 16 4 16H12C13.105 16 14 15.105 14 14V9C14 7.895 13.105 7 12 7ZM4 8.5C3.724 8.5 3.5 8.724 3.5 9V14C3.5 14.276 3.724 14.5 4 14.5H12C12.276 14.5 12.5 14.276 12.5 14V9C12.5 8.724 12.276 8.5 12 8.5H4ZM7.25 13V10H8.75V13H7.25Z"/>
  </svg>
);

const aDSLockLockedIconDefinition = svgToIconDefinition(
  aDSLockLockedSvg,
  'ads-lock-locked'
);

/**![ADSLockLocked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxLjVDNi42MTkgMS41IDUuNSAyLjYxOSA1LjUgNFY3SDEwLjVWNEMxMC41IDIuNjE5IDkuMzgxIDEuNSA4IDEuNVpNMTIgN1Y0QzEyIDEuNzkxIDEwLjIwOSAwIDggMEM1Ljc5MSAwIDQgMS43OTEgNCA0VjdDMi44OTUgNyAyIDcuODk1IDIgOVYxNEMyIDE1LjEwNSAyLjg5NSAxNiA0IDE2SDEyQzEzLjEwNSAxNiAxNCAxNS4xMDUgMTQgMTRWOUMxNCA3Ljg5NSAxMy4xMDUgNyAxMiA3Wk00IDguNUMzLjcyNCA4LjUgMy41IDguNzI0IDMuNSA5VjE0QzMuNSAxNC4yNzYgMy43MjQgMTQuNSA0IDE0LjVIMTJDMTIuMjc2IDE0LjUgMTIuNSAxNC4yNzYgMTIuNSAxNFY5QzEyLjUgOC43MjQgMTIuMjc2IDguNSAxMiA4LjVINFpNNy4yNSAxM1YxMEg4Ljc1VjEzSDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLockLockedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLockLocked';
}

export default RefIcon;
