// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneOverdueSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.585 2.603C7.366 1.822 8.633 1.823 9.414 2.603L13.396 6.585C14.128 7.318 14.174 8.477 13.534 9.262L13.396 9.414L9.414 13.396C8.633 14.177 7.366 14.177 6.585 13.396L2.603 9.414C1.823 8.633 1.822 7.366 2.603 6.585L6.585 2.603ZM8 10C7.448 10 7.001 10.447 7 11C7 11.552 7.448 12 8 12C8.553 11.999 9 11.552 9 11C9 10.448 8.552 10 8 10ZM7.25 4V9H8.75V4H7.25Z"/>
  </svg>
);

const aDSMilestoneOverdueIconDefinition = svgToIconDefinition(
  aDSMilestoneOverdueSvg,
  'ads-milestone-overdue'
);

/**![ADSMilestoneOverdue](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi41ODUgMi42MDNDNy4zNjYgMS44MjIgOC42MzMgMS44MjMgOS40MTQgMi42MDNMMTMuMzk2IDYuNTg1QzE0LjEyOCA3LjMxOCAxNC4xNzQgOC40NzcgMTMuNTM0IDkuMjYyTDEzLjM5NiA5LjQxNEw5LjQxNCAxMy4zOTZDOC42MzMgMTQuMTc3IDcuMzY2IDE0LjE3NyA2LjU4NSAxMy4zOTZMMi42MDMgOS40MTRDMS44MjMgOC42MzMgMS44MjIgNy4zNjYgMi42MDMgNi41ODVMNi41ODUgMi42MDNaTTggMTBDNy40NDggMTAgNy4wMDEgMTAuNDQ3IDcgMTFDNyAxMS41NTIgNy40NDggMTIgOCAxMkM4LjU1MyAxMS45OTkgOSAxMS41NTIgOSAxMUM5IDEwLjQ0OCA4LjU1MiAxMCA4IDEwWk03LjI1IDRWOUg4Ljc1VjRINy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneOverdueIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneOverdue';
}

export default RefIcon;
