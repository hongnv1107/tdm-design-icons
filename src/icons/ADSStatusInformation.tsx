// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusInformationSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8C0 3.582 3.582 0 8 0ZM6.5 6.75V8.25H7.25V12.5H8.75V7.5C8.75 7.086 8.414 6.75 8 6.75H6.5ZM8 3.5C7.448 3.5 7 3.948 7 4.5C7 5.052 7.448 5.5 8 5.5C8.552 5.5 9 5.052 9 4.5C9 3.948 8.552 3.5 8 3.5Z"/>
  </svg>
);

const aDSStatusInformationIconDefinition = svgToIconDefinition(
  aDSStatusInformationSvg,
  'ads-status-information'
);

/**![ADSStatusInformation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwWk02LjUgNi43NVY4LjI1SDcuMjVWMTIuNUg4Ljc1VjcuNUM4Ljc1IDcuMDg2IDguNDE0IDYuNzUgOCA2Ljc1SDYuNVpNOCAzLjVDNy40NDggMy41IDcgMy45NDggNyA0LjVDNyA1LjA1MiA3LjQ0OCA1LjUgOCA1LjVDOC41NTIgNS41IDkgNS4wNTIgOSA0LjVDOSAzLjk0OCA4LjU1MiAzLjUgOCAzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusInformationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusInformation';
}

export default RefIcon;
