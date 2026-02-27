// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const forwardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.65625 17.7813C5.32292 18.0313 4.95833 18.0729 4.5625 17.9063C4.20833 17.7188 4.02083 17.4167 4 17V7.00002C4.02083 6.58336 4.20833 6.28127 4.5625 6.09377C4.95833 5.92711 5.32292 5.96877 5.65625 6.21877L11 10.6875V13.3125L5.65625 17.7813ZM12 7.00002C12.0208 6.58336 12.2083 6.28127 12.5625 6.09377C12.9583 5.92711 13.3229 5.96877 13.6562 6.21877L19.6562 11.2188C19.8854 11.4271 20 11.6875 20 12C20 12.3125 19.8854 12.5729 19.6562 12.7813L13.6562 17.7813C13.3229 18.0313 12.9583 18.0729 12.5625 17.9063C12.2083 17.7188 12.0208 17.4167 12 17V7.00002Z"/>
  </svg>
);

const forwardFilledIconDefinition = svgToIconDefinition(
  forwardFilledSvg,
  'forward-filled'
);

/**![ForwardFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS42NTYyNSAxNy43ODEzQzUuMzIyOTIgMTguMDMxMyA0Ljk1ODMzIDE4LjA3MjkgNC41NjI1IDE3LjkwNjNDNC4yMDgzMyAxNy43MTg4IDQuMDIwODMgMTcuNDE2NyA0IDE3VjcuMDAwMDJDNC4wMjA4MyA2LjU4MzM2IDQuMjA4MzMgNi4yODEyNyA0LjU2MjUgNi4wOTM3N0M0Ljk1ODMzIDUuOTI3MTEgNS4zMjI5MiA1Ljk2ODc3IDUuNjU2MjUgNi4yMTg3N0wxMSAxMC42ODc1VjEzLjMxMjVMNS42NTYyNSAxNy43ODEzWk0xMiA3LjAwMDAyQzEyLjAyMDggNi41ODMzNiAxMi4yMDgzIDYuMjgxMjcgMTIuNTYyNSA2LjA5Mzc3QzEyLjk1ODMgNS45MjcxMSAxMy4zMjI5IDUuOTY4NzcgMTMuNjU2MiA2LjIxODc3TDE5LjY1NjIgMTEuMjE4OEMxOS44ODU0IDExLjQyNzEgMjAgMTEuNjg3NSAyMCAxMkMyMCAxMi4zMTI1IDE5Ljg4NTQgMTIuNTcyOSAxOS42NTYyIDEyLjc4MTNMMTMuNjU2MiAxNy43ODEzQzEzLjMyMjkgMTguMDMxMyAxMi45NTgzIDE4LjA3MjkgMTIuNTYyNSAxNy45MDYzQzEyLjIwODMgMTcuNzE4OCAxMi4wMjA4IDE3LjQxNjcgMTIgMTdWNy4wMDAwMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={forwardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardFilledIcon';
}

export default RefIcon;
