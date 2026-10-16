// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSComponentSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.75C2 2.336 2.336 2 2.75 2H6.25C6.664 2 7 2.336 7 2.75V4.5H9V2.75C9 2.336 9.336 2 9.75 2H13.25C13.664 2 14 2.336 14 2.75V4.5C15.105 4.5 16 5.395 16 6.5V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V6.5C0 5.395 0.895 4.5 2 4.5V2.75ZM3.5 4.5H5.5V3.5H3.5V4.5ZM12.5 4.5V3.5H10.5V4.5H12.5ZM2 6C1.724 6 1.5 6.224 1.5 6.5V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V6.5C14.5 6.224 14.276 6 14 6H2Z"/>
  </svg>
);

const aDSComponentIconDefinition = svgToIconDefinition(
  aDSComponentSvg,
  'ads-component'
);

/**![ADSComponent](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjc1QzIgMi4zMzYgMi4zMzYgMiAyLjc1IDJINi4yNUM2LjY2NCAyIDcgMi4zMzYgNyAyLjc1VjQuNUg5VjIuNzVDOSAyLjMzNiA5LjMzNiAyIDkuNzUgMkgxMy4yNUMxMy42NjQgMiAxNCAyLjMzNiAxNCAyLjc1VjQuNUMxNS4xMDUgNC41IDE2IDUuMzk1IDE2IDYuNVYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY2LjVDMCA1LjM5NSAwLjg5NSA0LjUgMiA0LjVWMi43NVpNMy41IDQuNUg1LjVWMy41SDMuNVY0LjVaTTEyLjUgNC41VjMuNUgxMC41VjQuNUgxMi41Wk0yIDZDMS43MjQgNiAxLjUgNi4yMjQgMS41IDYuNVYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNi41QzE0LjUgNi4yMjQgMTQuMjc2IDYgMTQgNkgyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSComponentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSComponent';
}

export default RefIcon;
