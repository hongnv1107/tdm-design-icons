// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sidebarOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.3333 3.70312C21.333 3.13084 20.8692 2.66698 20.2969 2.66667H9.77734V21.3333H20.2969C20.8692 21.333 21.333 20.8692 21.3333 20.2969V3.70312ZM2.66667 20.2969C2.66698 20.8692 3.13084 21.333 3.70312 21.3333H7.11068V2.66667H3.70312C3.13084 2.66698 2.66698 3.13084 2.66667 3.70312V20.2969ZM24 20.2969C23.9997 22.3419 22.3419 23.9997 20.2969 24H3.70312C1.65809 23.9997 0.000312613 22.3419 0 20.2969V3.70312C0.0003127 1.65808 1.65808 0.0003127 3.70312 0H20.2969C22.3419 0.000312614 23.9997 1.65809 24 3.70312V20.2969Z"/>
  </svg>
);

const sidebarOutlinedIconDefinition = svgToIconDefinition(
  sidebarOutlinedSvg,
  'sidebar-outlined'
);

/**![SidebarOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuMzMzMyAzLjcwMzEyQzIxLjMzMyAzLjEzMDg0IDIwLjg2OTIgMi42NjY5OCAyMC4yOTY5IDIuNjY2NjdIOS43NzczNFYyMS4zMzMzSDIwLjI5NjlDMjAuODY5MiAyMS4zMzMgMjEuMzMzIDIwLjg2OTIgMjEuMzMzMyAyMC4yOTY5VjMuNzAzMTJaTTIuNjY2NjcgMjAuMjk2OUMyLjY2Njk4IDIwLjg2OTIgMy4xMzA4NCAyMS4zMzMgMy43MDMxMiAyMS4zMzMzSDcuMTEwNjhWMi42NjY2N0gzLjcwMzEyQzMuMTMwODQgMi42NjY5OCAyLjY2Njk4IDMuMTMwODQgMi42NjY2NyAzLjcwMzEyVjIwLjI5NjlaTTI0IDIwLjI5NjlDMjMuOTk5NyAyMi4zNDE5IDIyLjM0MTkgMjMuOTk5NyAyMC4yOTY5IDI0SDMuNzAzMTJDMS42NTgwOSAyMy45OTk3IDAuMDAwMzEyNjEzIDIyLjM0MTkgMCAyMC4yOTY5VjMuNzAzMTJDMC4wMDAzMTI3IDEuNjU4MDggMS42NTgwOCAwLjAwMDMxMjcgMy43MDMxMiAwSDIwLjI5NjlDMjIuMzQxOSAwLjAwMDMxMjYxNCAyMy45OTk3IDEuNjU4MDkgMjQgMy43MDMxMlYyMC4yOTY5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sidebarOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SidebarOutlined';
}

export default RefIcon;
