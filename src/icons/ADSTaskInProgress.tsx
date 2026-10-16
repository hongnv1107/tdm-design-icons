// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTaskInProgressSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSTaskInProgress](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41NDMgNy4yNUg5LjE4OUw2Ljk3IDUuMDNMOC4wMyAzLjk3TDExLjUzIDcuNDdDMTEuNjcxIDcuNjEgMTEuNzUgNy44MDEgMTEuNzUgOEMxMS43NSA4LjE5OSAxMS42NzEgOC4zOSAxMS41MyA4LjUzTDguMDMgMTIuMDNMNi45NyAxMC45N0w5LjE4OSA4Ljc1SDEuNTQzQzEuOTE1IDExLjk4NyA0LjY2NCAxNC41IDggMTQuNUMxMS41OSAxNC41IDE0LjUgMTEuNTkgMTQuNSA4QzE0LjUgNC40MSAxMS41OSAxLjUgOCAxLjVDNC42NjQgMS41IDEuOTE1IDQuMDEzIDEuNTQzIDcuMjVaTTAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTaskInProgressIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTaskInProgress';
}

export default RefIcon;
