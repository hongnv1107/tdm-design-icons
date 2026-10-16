// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCrossOctagonSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.103 1L10.897 1L15 5.103V10.897L10.897 15H5.103L1 10.897L1 5.103L5.103 1ZM5.724 2.5L4.643 3.582L8 6.939L11.357 3.582L10.276 2.5L5.724 2.5ZM12.418 4.643L9.061 8L12.418 11.357L13.5 10.276V5.724L12.418 4.643ZM11.357 12.418L8 9.061L4.643 12.418L5.724 13.5H10.276L11.357 12.418ZM3.582 11.357L6.939 8L3.582 4.643L2.5 5.724L2.5 10.276L3.582 11.357Z"/>
  </svg>
);

const aDSCrossOctagonIconDefinition = svgToIconDefinition(
  aDSCrossOctagonSvg,
  'ads-cross-octagon'
);

/**![ADSCrossOctagon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4xMDMgMUwxMC44OTcgMUwxNSA1LjEwM1YxMC44OTdMMTAuODk3IDE1SDUuMTAzTDEgMTAuODk3TDEgNS4xMDNMNS4xMDMgMVpNNS43MjQgMi41TDQuNjQzIDMuNTgyTDggNi45MzlMMTEuMzU3IDMuNTgyTDEwLjI3NiAyLjVMNS43MjQgMi41Wk0xMi40MTggNC42NDNMOS4wNjEgOEwxMi40MTggMTEuMzU3TDEzLjUgMTAuMjc2VjUuNzI0TDEyLjQxOCA0LjY0M1pNMTEuMzU3IDEyLjQxOEw4IDkuMDYxTDQuNjQzIDEyLjQxOEw1LjcyNCAxMy41SDEwLjI3NkwxMS4zNTcgMTIuNDE4Wk0zLjU4MiAxMS4zNTdMNi45MzkgOEwzLjU4MiA0LjY0M0wyLjUgNS43MjRMMi41IDEwLjI3NkwzLjU4MiAxMS4zNTdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCrossOctagonIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCrossOctagon';
}

export default RefIcon;
