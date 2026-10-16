// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSortDescendingSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5L1 3.5L1 2L15 2L15 3.5ZM13.25 7.25L13.25 12.439L14.97 10.72L16.03 11.78L13.03 14.78C12.89 14.921 12.699 15 12.5 15C12.301 15 12.11 14.921 11.97 14.78L8.97 11.78L10.03 10.72L11.75 12.439L11.75 7.25L13.25 7.25ZM8 8.75L1 8.75L1 7.25L8 7.25L8 8.75ZM6 14L1 14L1 12.5L6 12.5L6 14Z"/>
  </svg>
);

const aDSSortDescendingIconDefinition = svgToIconDefinition(
  aDSSortDescendingSvg,
  'ads-sort-descending'
);

/**![ADSSortDescending](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMy41TDEgMy41TDEgMkwxNSAyTDE1IDMuNVpNMTMuMjUgNy4yNUwxMy4yNSAxMi40MzlMMTQuOTcgMTAuNzJMMTYuMDMgMTEuNzhMMTMuMDMgMTQuNzhDMTIuODkgMTQuOTIxIDEyLjY5OSAxNSAxMi41IDE1QzEyLjMwMSAxNSAxMi4xMSAxNC45MjEgMTEuOTcgMTQuNzhMOC45NyAxMS43OEwxMC4wMyAxMC43MkwxMS43NSAxMi40MzlMMTEuNzUgNy4yNUwxMy4yNSA3LjI1Wk04IDguNzVMMSA4Ljc1TDEgNy4yNUw4IDcuMjVMOCA4Ljc1Wk02IDE0TDEgMTRMMSAxMi41TDYgMTIuNUw2IDE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSortDescendingIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSortDescending';
}

export default RefIcon;
