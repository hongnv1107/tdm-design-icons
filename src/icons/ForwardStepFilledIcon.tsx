// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const forwardStepFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.65625 17.7813C8.32292 18.0313 7.95833 18.0729 7.5625 17.9063C7.20833 17.7188 7.02083 17.4167 7 17V7.00002C7.02083 6.58336 7.20833 6.28127 7.5625 6.09377C7.95833 5.92711 8.32292 5.96877 8.65625 6.21877L14.6562 11.2188L15 11.5313V7.00002C15 6.70836 15.0938 6.46877 15.2812 6.28127C15.4688 6.09377 15.7083 6.00002 16 6.00002C16.2917 6.00002 16.5312 6.09377 16.7188 6.28127C16.9062 6.46877 17 6.70836 17 7.00002V17C17 17.2917 16.9062 17.5313 16.7188 17.7188C16.5312 17.9063 16.2917 18 16 18C15.7083 18 15.4688 17.9063 15.2812 17.7188C15.0938 17.5313 15 17.2917 15 17V12.4688L14.6562 12.7813L8.65625 17.7813Z"/>
  </svg>
);

const forwardStepFilledIconDefinition = svgToIconDefinition(
  forwardStepFilledSvg,
  'forward-step-filled'
);

/**![ForwardStepFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC42NTYyNSAxNy43ODEzQzguMzIyOTIgMTguMDMxMyA3Ljk1ODMzIDE4LjA3MjkgNy41NjI1IDE3LjkwNjNDNy4yMDgzMyAxNy43MTg4IDcuMDIwODMgMTcuNDE2NyA3IDE3VjcuMDAwMDJDNy4wMjA4MyA2LjU4MzM2IDcuMjA4MzMgNi4yODEyNyA3LjU2MjUgNi4wOTM3N0M3Ljk1ODMzIDUuOTI3MTEgOC4zMjI5MiA1Ljk2ODc3IDguNjU2MjUgNi4yMTg3N0wxNC42NTYyIDExLjIxODhMMTUgMTEuNTMxM1Y3LjAwMDAyQzE1IDYuNzA4MzYgMTUuMDkzOCA2LjQ2ODc3IDE1LjI4MTIgNi4yODEyN0MxNS40Njg4IDYuMDkzNzcgMTUuNzA4MyA2LjAwMDAyIDE2IDYuMDAwMDJDMTYuMjkxNyA2LjAwMDAyIDE2LjUzMTIgNi4wOTM3NyAxNi43MTg4IDYuMjgxMjdDMTYuOTA2MiA2LjQ2ODc3IDE3IDYuNzA4MzYgMTcgNy4wMDAwMlYxN0MxNyAxNy4yOTE3IDE2LjkwNjIgMTcuNTMxMyAxNi43MTg4IDE3LjcxODhDMTYuNTMxMiAxNy45MDYzIDE2LjI5MTcgMTggMTYgMThDMTUuNzA4MyAxOCAxNS40Njg4IDE3LjkwNjMgMTUuMjgxMiAxNy43MTg4QzE1LjA5MzggMTcuNTMxMyAxNSAxNy4yOTE3IDE1IDE3VjEyLjQ2ODhMMTQuNjU2MiAxMi43ODEzTDguNjU2MjUgMTcuNzgxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={forwardStepFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardStepFilledIcon';
}

export default RefIcon;
