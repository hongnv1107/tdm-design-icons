// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const backwardStepFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.375 17.7813L9 12.4688V17C9 17.2917 8.90625 17.5313 8.71875 17.7188C8.53125 17.9063 8.29167 18 8 18C7.70833 18 7.46875 17.9063 7.28125 17.7188C7.09375 17.5313 7 17.2917 7 17V7.00002C7 6.70836 7.09375 6.46877 7.28125 6.28127C7.46875 6.09377 7.70833 6.00002 8 6.00002C8.29167 6.00002 8.53125 6.09377 8.71875 6.28127C8.90625 6.46877 9 6.70836 9 7.00002V11.5313L15.375 6.21877C15.6875 5.96877 16.0417 5.92711 16.4375 6.09377C16.7917 6.28127 16.9792 6.58336 17 7.00002V17C16.9792 17.4167 16.7917 17.7188 16.4375 17.9063C16.0417 18.0729 15.6875 18.0313 15.375 17.7813Z"/>
  </svg>
);

const backwardStepFilledIconDefinition = svgToIconDefinition(
  backwardStepFilledSvg,
  'backward-step-filled'
);

/**![BackwardStepFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuMzc1IDE3Ljc4MTNMOSAxMi40Njg4VjE3QzkgMTcuMjkxNyA4LjkwNjI1IDE3LjUzMTMgOC43MTg3NSAxNy43MTg4QzguNTMxMjUgMTcuOTA2MyA4LjI5MTY3IDE4IDggMThDNy43MDgzMyAxOCA3LjQ2ODc1IDE3LjkwNjMgNy4yODEyNSAxNy43MTg4QzcuMDkzNzUgMTcuNTMxMyA3IDE3LjI5MTcgNyAxN1Y3LjAwMDAyQzcgNi43MDgzNiA3LjA5Mzc1IDYuNDY4NzcgNy4yODEyNSA2LjI4MTI3QzcuNDY4NzUgNi4wOTM3NyA3LjcwODMzIDYuMDAwMDIgOCA2LjAwMDAyQzguMjkxNjcgNi4wMDAwMiA4LjUzMTI1IDYuMDkzNzcgOC43MTg3NSA2LjI4MTI3QzguOTA2MjUgNi40Njg3NyA5IDYuNzA4MzYgOSA3LjAwMDAyVjExLjUzMTNMMTUuMzc1IDYuMjE4NzdDMTUuNjg3NSA1Ljk2ODc3IDE2LjA0MTcgNS45MjcxMSAxNi40Mzc1IDYuMDkzNzdDMTYuNzkxNyA2LjI4MTI3IDE2Ljk3OTIgNi41ODMzNiAxNyA3LjAwMDAyVjE3QzE2Ljk3OTIgMTcuNDE2NyAxNi43OTE3IDE3LjcxODggMTYuNDM3NSAxNy45MDYzQzE2LjA0MTcgMTguMDcyOSAxNS42ODc1IDE4LjAzMTMgMTUuMzc1IDE3Ljc4MTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={backwardStepFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardStepFilledIcon';
}

export default RefIcon;
