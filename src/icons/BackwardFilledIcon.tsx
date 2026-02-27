// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const backwardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.375 17.7813L13 13.3125V10.6875L18.375 6.21877C18.6875 5.96877 19.0417 5.92711 19.4375 6.09377C19.7917 6.28127 19.9792 6.58336 20 7.00002V17C19.9792 17.4167 19.7917 17.7188 19.4375 17.9063C19.0417 18.0729 18.6875 18.0313 18.375 17.7813ZM12 17C11.9792 17.4167 11.7917 17.7188 11.4375 17.9063C11.0417 18.0729 10.6875 18.0313 10.375 17.7813L4.375 12.7813C4.125 12.5729 4 12.3125 4 12C4 11.6875 4.125 11.4271 4.375 11.2188L10.375 6.21877C10.6875 5.96877 11.0417 5.92711 11.4375 6.09377C11.7917 6.28127 11.9792 6.58336 12 7.00002V17Z"/>
  </svg>
);

const backwardFilledIconDefinition = svgToIconDefinition(
  backwardFilledSvg,
  'backward-filled'
);

/**![BackwardFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguMzc1IDE3Ljc4MTNMMTMgMTMuMzEyNVYxMC42ODc1TDE4LjM3NSA2LjIxODc3QzE4LjY4NzUgNS45Njg3NyAxOS4wNDE3IDUuOTI3MTEgMTkuNDM3NSA2LjA5Mzc3QzE5Ljc5MTcgNi4yODEyNyAxOS45NzkyIDYuNTgzMzYgMjAgNy4wMDAwMlYxN0MxOS45NzkyIDE3LjQxNjcgMTkuNzkxNyAxNy43MTg4IDE5LjQzNzUgMTcuOTA2M0MxOS4wNDE3IDE4LjA3MjkgMTguNjg3NSAxOC4wMzEzIDE4LjM3NSAxNy43ODEzWk0xMiAxN0MxMS45NzkyIDE3LjQxNjcgMTEuNzkxNyAxNy43MTg4IDExLjQzNzUgMTcuOTA2M0MxMS4wNDE3IDE4LjA3MjkgMTAuNjg3NSAxOC4wMzEzIDEwLjM3NSAxNy43ODEzTDQuMzc1IDEyLjc4MTNDNC4xMjUgMTIuNTcyOSA0IDEyLjMxMjUgNCAxMkM0IDExLjY4NzUgNC4xMjUgMTEuNDI3MSA0LjM3NSAxMS4yMTg4TDEwLjM3NSA2LjIxODc3QzEwLjY4NzUgNS45Njg3NyAxMS4wNDE3IDUuOTI3MTEgMTEuNDM3NSA2LjA5Mzc3QzExLjc5MTcgNi4yODEyNyAxMS45NzkyIDYuNTgzMzYgMTIgNy4wMDAwMlYxN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={backwardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardFilledIcon';
}

export default RefIcon;
