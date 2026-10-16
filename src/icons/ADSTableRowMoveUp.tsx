// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableRowMoveUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 16C1.616 16 1 15.384 1 14.625L1 8.875C1 8.116 1.616 7.5 2.375 7.5L13.625 7.5C14.384 7.5 15 8.116 15 8.875L15 14.625C15 15.384 14.384 16 13.625 16L2.375 16ZM2.5 14.5L13.5 14.5L13.5 12.5L2.5 12.5L2.5 14.5ZM2.5 11L13.5 11L13.5 9L2.5 9L2.5 11ZM4.47 3.22L7.47 0.22C7.763 -0.073 8.237 -0.073 8.53 0.22L11.53 3.22L10.47 4.28L8.75 2.561L8.75 6L7.25 6L7.25 2.561L5.53 4.28L4.47 3.22Z"/>
  </svg>
);

const aDSTableRowMoveUpIconDefinition = svgToIconDefinition(
  aDSTableRowMoveUpSvg,
  'ads-table-row-move-up'
);

/**![ADSTableRowMoveUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzUgMTZDMS42MTYgMTYgMSAxNS4zODQgMSAxNC42MjVMMSA4Ljg3NUMxIDguMTE2IDEuNjE2IDcuNSAyLjM3NSA3LjVMMTMuNjI1IDcuNUMxNC4zODQgNy41IDE1IDguMTE2IDE1IDguODc1TDE1IDE0LjYyNUMxNSAxNS4zODQgMTQuMzg0IDE2IDEzLjYyNSAxNkwyLjM3NSAxNlpNMi41IDE0LjVMMTMuNSAxNC41TDEzLjUgMTIuNUwyLjUgMTIuNUwyLjUgMTQuNVpNMi41IDExTDEzLjUgMTFMMTMuNSA5TDIuNSA5TDIuNSAxMVpNNC40NyAzLjIyTDcuNDcgMC4yMkM3Ljc2MyAtMC4wNzMgOC4yMzcgLTAuMDczIDguNTMgMC4yMkwxMS41MyAzLjIyTDEwLjQ3IDQuMjhMOC43NSAyLjU2MUw4Ljc1IDZMNy4yNSA2TDcuMjUgMi41NjFMNS41MyA0LjI4TDQuNDcgMy4yMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableRowMoveUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableRowMoveUp';
}

export default RefIcon;
