// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowDangerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM8 10.5C7.448 10.5 7 10.948 7 11.5C7 12.052 7.448 12.5 8 12.5C8.552 12.5 9 12.052 9 11.5C9 10.948 8.552 10.5 8 10.5ZM7.25 3.5V9H8.75V3.5H7.25Z"/>
  </svg>
);

const aDSStatusWorkflowDangerIconDefinition = svgToIconDefinition(
  aDSStatusWorkflowDangerSvg,
  'ads-status-workflow-danger'
);

/**![ADSStatusWorkflowDanger](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwWk04IDEwLjVDNy40NDggMTAuNSA3IDEwLjk0OCA3IDExLjVDNyAxMi4wNTIgNy40NDggMTIuNSA4IDEyLjVDOC41NTIgMTIuNSA5IDEyLjA1MiA5IDExLjVDOSAxMC45NDggOC41NTIgMTAuNSA4IDEwLjVaTTcuMjUgMy41VjlIOC43NVYzLjVINy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowDangerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowDanger';
}

export default RefIcon;
