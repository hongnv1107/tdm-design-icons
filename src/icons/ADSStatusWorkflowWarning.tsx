// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWorkflowWarningSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8ZM16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8Z"/><path d="M8.75 3.5V9H7.25V3.5H8.75Z"/><path d="M8 10.5C8.553 10.5 9 10.948 9 11.5C9 12.052 8.553 12.5 8 12.5C7.448 12.5 7 12.052 7 11.5C7 10.948 7.448 10.5 8 10.5Z"/>
  </svg>
);

const aDSStatusWorkflowWarningIconDefinition = svgToIconDefinition(
  aDSStatusWorkflowWarningSvg,
  'ads-status-workflow-warning'
);

/**![ADSStatusWorkflowWarning](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNC40MSAxLjUgMS41IDQuNDEgMS41IDhDMS41IDExLjU5IDQuNDEgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOFpNMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOFoiLz48cGF0aCBkPSJNOC43NSAzLjVWOUg3LjI1VjMuNUg4Ljc1WiIvPjxwYXRoIGQ9Ik04IDEwLjVDOC41NTMgMTAuNSA5IDEwLjk0OCA5IDExLjVDOSAxMi4wNTIgOC41NTMgMTIuNSA4IDEyLjVDNy40NDggMTIuNSA3IDEyLjA1MiA3IDExLjVDNyAxMC45NDggNy40NDggMTAuNSA4IDEwLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWorkflowWarningIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWorkflowWarning';
}

export default RefIcon;
