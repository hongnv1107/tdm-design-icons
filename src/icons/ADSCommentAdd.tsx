// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCommentAddSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.625 2C2.004 2 1.5 2.504 1.5 3.125V13.958L4.051 12.5H13.375C13.996 12.5 14.5 11.996 14.5 11.375V3.125C14.5 2.504 13.996 2 13.375 2H2.625ZM0 3.125C0 1.675 1.175 0.5 2.625 0.5H13.375C14.825 0.5 16 1.675 16 3.125V11.375C16 12.825 14.825 14 13.375 14H4.449L1.122 15.901C0.89 16.034 0.605 16.033 0.374 15.899C0.142 15.765 0 15.517 0 15.25V3.125ZM7.25 6.5V4.25H8.75V6.5H11V8H8.75V10.25H7.25V8H5V6.5H7.25Z"/>
  </svg>
);

const aDSCommentAddIconDefinition = svgToIconDefinition(
  aDSCommentAddSvg,
  'ads-comment-add'
);

/**![ADSCommentAdd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi42MjUgMkMyLjAwNCAyIDEuNSAyLjUwNCAxLjUgMy4xMjVWMTMuOTU4TDQuMDUxIDEyLjVIMTMuMzc1QzEzLjk5NiAxMi41IDE0LjUgMTEuOTk2IDE0LjUgMTEuMzc1VjMuMTI1QzE0LjUgMi41MDQgMTMuOTk2IDIgMTMuMzc1IDJIMi42MjVaTTAgMy4xMjVDMCAxLjY3NSAxLjE3NSAwLjUgMi42MjUgMC41SDEzLjM3NUMxNC44MjUgMC41IDE2IDEuNjc1IDE2IDMuMTI1VjExLjM3NUMxNiAxMi44MjUgMTQuODI1IDE0IDEzLjM3NSAxNEg0LjQ0OUwxLjEyMiAxNS45MDFDMC44OSAxNi4wMzQgMC42MDUgMTYuMDMzIDAuMzc0IDE1Ljg5OUMwLjE0MiAxNS43NjUgMCAxNS41MTcgMCAxNS4yNVYzLjEyNVpNNy4yNSA2LjVWNC4yNUg4Ljc1VjYuNUgxMVY4SDguNzVWMTAuMjVINy4yNVY4SDVWNi41SDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCommentAddIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCommentAdd';
}

export default RefIcon;
