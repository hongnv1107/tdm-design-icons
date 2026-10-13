// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const menuOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.8 18C23.4627 18 24 18.5373 24 19.2C24 19.8627 23.4627 20.4 22.8 20.4H1.2C0.537258 20.4 0 19.8627 0 19.2C0 18.5373 0.537258 18 1.2 18H22.8ZM22.8 10.8C23.4627 10.8 24 11.3373 24 12C24 12.6627 23.4627 13.2 22.8 13.2H1.2C0.537258 13.2 0 12.6627 0 12C0 11.3373 0.537258 10.8 1.2 10.8H22.8ZM22.8 3.6C23.4627 3.6 24 4.13726 24 4.8C24 5.46274 23.4627 6 22.8 6H1.2C0.537258 6 0 5.46274 0 4.8C0 4.13726 0.537258 3.6 1.2 3.6H22.8Z"/>
  </svg>
);

const menuOutlinedIconDefinition = svgToIconDefinition(
  menuOutlinedSvg,
  'menu-outlined'
);

/**![MenuOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuOCAxOEMyMy40NjI3IDE4IDI0IDE4LjUzNzMgMjQgMTkuMkMyNCAxOS44NjI3IDIzLjQ2MjcgMjAuNCAyMi44IDIwLjRIMS4yQzAuNTM3MjU4IDIwLjQgMCAxOS44NjI3IDAgMTkuMkMwIDE4LjUzNzMgMC41MzcyNTggMTggMS4yIDE4SDIyLjhaTTIyLjggMTAuOEMyMy40NjI3IDEwLjggMjQgMTEuMzM3MyAyNCAxMkMyNCAxMi42NjI3IDIzLjQ2MjcgMTMuMiAyMi44IDEzLjJIMS4yQzAuNTM3MjU4IDEzLjIgMCAxMi42NjI3IDAgMTJDMCAxMS4zMzczIDAuNTM3MjU4IDEwLjggMS4yIDEwLjhIMjIuOFpNMjIuOCAzLjZDMjMuNDYyNyAzLjYgMjQgNC4xMzcyNiAyNCA0LjhDMjQgNS40NjI3NCAyMy40NjI3IDYgMjIuOCA2SDEuMkMwLjUzNzI1OCA2IDAgNS40NjI3NCAwIDQuOEMwIDQuMTM3MjYgMC41MzcyNTggMy42IDEuMiAzLjZIMjIuOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={menuOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuOutlined';
}

export default RefIcon;
