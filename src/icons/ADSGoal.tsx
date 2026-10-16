// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGoalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8C1.5 11.59 4.41 14.5 8 14.5C11.59 14.5 14.5 11.59 14.5 8C14.5 4.41 11.59 1.5 8 1.5ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8ZM8 5.5C6.619 5.5 5.5 6.619 5.5 8C5.5 9.381 6.619 10.5 8 10.5C9.381 10.5 10.5 9.381 10.5 8C10.5 6.619 9.381 5.5 8 5.5ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8Z"/>
  </svg>
);

const aDSGoalIconDefinition = svgToIconDefinition(
  aDSGoalSvg,
  'ads-goal'
);

/**![ADSGoal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMS41QzQuNDEgMS41IDEuNSA0LjQxIDEuNSA4QzEuNSAxMS41OSA0LjQxIDE0LjUgOCAxNC41QzExLjU5IDE0LjUgMTQuNSAxMS41OSAxNC41IDhDMTQuNSA0LjQxIDExLjU5IDEuNSA4IDEuNVpNMCA4QzAgMy41ODIgMy41ODIgMCA4IDBDMTIuNDE4IDAgMTYgMy41ODIgMTYgOEMxNiAxMi40MTggMTIuNDE4IDE2IDggMTZDMy41ODIgMTYgMCAxMi40MTggMCA4Wk04IDUuNUM2LjYxOSA1LjUgNS41IDYuNjE5IDUuNSA4QzUuNSA5LjM4MSA2LjYxOSAxMC41IDggMTAuNUM5LjM4MSAxMC41IDEwLjUgOS4zODEgMTAuNSA4QzEwLjUgNi42MTkgOS4zODEgNS41IDggNS41Wk00IDhDNCA1Ljc5MSA1Ljc5MSA0IDggNEMxMC4yMDkgNCAxMiA1Ljc5MSAxMiA4QzEyIDEwLjIwOSAxMC4yMDkgMTIgOCAxMkM1Ljc5MSAxMiA0IDEwLjIwOSA0IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGoalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGoal';
}

export default RefIcon;
