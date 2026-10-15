// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTaskInProgressSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.543 7.25H9.189L6.97 5.03L8.03 3.97L11.53 7.47C11.671 7.61 11.75 7.801 11.75 8C11.75 8.199 11.671 8.39 11.53 8.53L8.03 12.03L6.97 10.97L9.189 8.75H1.543C1.915 11.987 4.664 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5C4.664 1.5 1.915 4.013 1.543 7.25ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8Z"/>
  </svg>
);

const aDSTaskInProgressIconDefinition = svgToIconDefinition(
  aDSTaskInProgressSvg,
  'ads-task-in-progress'
);

/**![ADSTaskInProgress](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNTQzIDcuMjVIOS4xODlMNi45NyA1LjAzTDguMDMgMy45N0wxMS41MyA3LjQ3QzExLjY3MSA3LjYxIDExLjc1IDcuODAxIDExLjc1IDhDMTEuNzUgOC4xOTkgMTEuNjcxIDguMzkgMTEuNTMgOC41M0w4LjAzIDEyLjAzTDYuOTcgMTAuOTdMOS4xODkgOC43NUgxLjU0M0MxLjkxNSAxMS45ODcgNC42NjQgMTQuNSA4IDE0LjVDMTEuNTkgMTQuNSAxNC41IDExLjU5IDE0LjUgOEMxNC41IDQuNDEgMTEuNTkgMS41IDggMS41QzQuNjY0IDEuNSAxLjkxNSA0LjAxMyAxLjU0MyA3LjI1Wk0wIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTaskInProgressIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTaskInProgress';
}

export default RefIcon;
