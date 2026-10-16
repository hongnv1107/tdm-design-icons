// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWarningSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.242 1.168C6.999 -0.227 9.002 -0.227 9.758 1.168L15.658 12.046C16.381 13.379 15.416 14.999 13.9 14.999H2.1C0.584 14.999 -0.38 13.379 0.342 12.046L6.242 1.168ZM8 10.749C7.448 10.749 7 11.197 7 11.749C7 12.301 7.448 12.749 8 12.749C8.552 12.749 9 12.301 9 11.749C9 11.197 8.552 10.749 8 10.749ZM7.25 4.499V9.499H8.75V4.499H7.25Z"/>
  </svg>
);

const aDSStatusWarningIconDefinition = svgToIconDefinition(
  aDSStatusWarningSvg,
  'ads-status-warning'
);

/**![ADSStatusWarning](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNDIgMS4xNjhDNi45OTkgLTAuMjI3IDkuMDAyIC0wLjIyNyA5Ljc1OCAxLjE2OEwxNS42NTggMTIuMDQ2QzE2LjM4MSAxMy4zNzkgMTUuNDE2IDE0Ljk5OSAxMy45IDE0Ljk5OUgyLjFDMC41ODQgMTQuOTk5IC0wLjM4IDEzLjM3OSAwLjM0MiAxMi4wNDZMNi4yNDIgMS4xNjhaTTggMTAuNzQ5QzcuNDQ4IDEwLjc0OSA3IDExLjE5NyA3IDExLjc0OUM3IDEyLjMwMSA3LjQ0OCAxMi43NDkgOCAxMi43NDlDOC41NTIgMTIuNzQ5IDkgMTIuMzAxIDkgMTEuNzQ5QzkgMTEuMTk3IDguNTUyIDEwLjc0OSA4IDEwLjc0OVpNNy4yNSA0LjQ5OVY5LjQ5OUg4Ljc1VjQuNDk5SDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWarningIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWarning';
}

export default RefIcon;
