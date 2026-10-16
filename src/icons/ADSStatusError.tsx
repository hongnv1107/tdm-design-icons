// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusErrorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.586 0.603C7.367 -0.178 8.633 -0.178 9.414 0.603L15.396 6.586C16.177 7.367 16.177 8.633 15.396 9.414L9.414 15.396C8.633 16.177 7.367 16.177 6.586 15.396L0.603 9.414C-0.178 8.633 -0.178 7.367 0.603 6.586L6.586 0.603ZM8 10.25C7.448 10.25 7 10.698 7 11.25C7 11.802 7.448 12.25 8 12.25C8.552 12.25 9 11.802 9 11.25C9 10.698 8.552 10.25 8 10.25ZM7.25 3.75V9H8.75V3.75H7.25Z"/>
  </svg>
);

const aDSStatusErrorIconDefinition = svgToIconDefinition(
  aDSStatusErrorSvg,
  'ads-status-error'
);

/**![ADSStatusError](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi41ODYgMC42MDNDNy4zNjcgLTAuMTc4IDguNjMzIC0wLjE3OCA5LjQxNCAwLjYwM0wxNS4zOTYgNi41ODZDMTYuMTc3IDcuMzY3IDE2LjE3NyA4LjYzMyAxNS4zOTYgOS40MTRMOS40MTQgMTUuMzk2QzguNjMzIDE2LjE3NyA3LjM2NyAxNi4xNzcgNi41ODYgMTUuMzk2TDAuNjAzIDkuNDE0Qy0wLjE3OCA4LjYzMyAtMC4xNzggNy4zNjcgMC42MDMgNi41ODZMNi41ODYgMC42MDNaTTggMTAuMjVDNy40NDggMTAuMjUgNyAxMC42OTggNyAxMS4yNUM3IDExLjgwMiA3LjQ0OCAxMi4yNSA4IDEyLjI1QzguNTUyIDEyLjI1IDkgMTEuODAyIDkgMTEuMjVDOSAxMC42OTggOC41NTIgMTAuMjUgOCAxMC4yNVpNNy4yNSAzLjc1VjlIOC43NVYzLjc1SDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusErrorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusError';
}

export default RefIcon;
