// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const layoutOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.3333 9.77734H9.77734V21.3333H20.2969C20.8692 21.333 21.333 20.8692 21.3333 20.2969V9.77734ZM2.66667 20.2969C2.66698 20.8692 3.13084 21.333 3.70312 21.3333H7.11068V9.77734H2.66667V20.2969ZM21.3333 3.70312C21.333 3.13084 20.8692 2.66698 20.2969 2.66667H3.70312C3.13084 2.66698 2.66698 3.13084 2.66667 3.70312V7.11068H21.3333V3.70312ZM24 20.2969C23.9997 22.3419 22.3419 23.9997 20.2969 24H3.70312C1.65809 23.9997 0.000312613 22.3419 0 20.2969V3.70312C0.0003127 1.65808 1.65808 0.0003127 3.70312 0H20.2969C22.3419 0.000312614 23.9997 1.65809 24 3.70312V20.2969Z"/>
  </svg>
);

const layoutOutlinedIconDefinition = svgToIconDefinition(
  layoutOutlinedSvg,
  'layout-outlined'
);

/**![LayoutOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuMzMzMyA5Ljc3NzM0SDkuNzc3MzRWMjEuMzMzM0gyMC4yOTY5QzIwLjg2OTIgMjEuMzMzIDIxLjMzMyAyMC44NjkyIDIxLjMzMzMgMjAuMjk2OVY5Ljc3NzM0Wk0yLjY2NjY3IDIwLjI5NjlDMi42NjY5OCAyMC44NjkyIDMuMTMwODQgMjEuMzMzIDMuNzAzMTIgMjEuMzMzM0g3LjExMDY4VjkuNzc3MzRIMi42NjY2N1YyMC4yOTY5Wk0yMS4zMzMzIDMuNzAzMTJDMjEuMzMzIDMuMTMwODQgMjAuODY5MiAyLjY2Njk4IDIwLjI5NjkgMi42NjY2N0gzLjcwMzEyQzMuMTMwODQgMi42NjY5OCAyLjY2Njk4IDMuMTMwODQgMi42NjY2NyAzLjcwMzEyVjcuMTEwNjhIMjEuMzMzM1YzLjcwMzEyWk0yNCAyMC4yOTY5QzIzLjk5OTcgMjIuMzQxOSAyMi4zNDE5IDIzLjk5OTcgMjAuMjk2OSAyNEgzLjcwMzEyQzEuNjU4MDkgMjMuOTk5NyAwLjAwMDMxMjYxMyAyMi4zNDE5IDAgMjAuMjk2OVYzLjcwMzEyQzAuMDAwMzEyNyAxLjY1ODA4IDEuNjU4MDggMC4wMDAzMTI3IDMuNzAzMTIgMEgyMC4yOTY5QzIyLjM0MTkgMC4wMDAzMTI2MTQgMjMuOTk5NyAxLjY1ODA5IDI0IDMuNzAzMTJWMjAuMjk2OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={layoutOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LayoutOutlined';
}

export default RefIcon;
