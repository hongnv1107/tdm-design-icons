// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const stopOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 3H4C3.375 3.04167 3.04167 3.375 3 4V20C3.04167 20.625 3.375 20.9583 4 21H20C20.625 20.9583 20.9583 20.625 21 20V4C20.9583 3.375 20.625 3.04167 20 3ZM4 0H20C21.125 0.0416667 22.0625 0.4375 22.8125 1.1875C23.5625 1.9375 23.9583 2.875 24 4V20C23.9583 21.125 23.5625 22.0625 22.8125 22.8125C22.0625 23.5625 21.125 23.9583 20 24H4C2.875 23.9583 1.9375 23.5625 1.1875 22.8125C0.4375 22.0625 0.0416667 21.125 0 20V4C0.0416667 2.875 0.4375 1.9375 1.1875 1.1875C1.9375 0.4375 2.875 0.0416667 4 0Z"/>
  </svg>
);

const stopOutlinedIconDefinition = svgToIconDefinition(
  stopOutlinedSvg,
  'stop-outlined'
);

/**![StopOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgM0g0QzMuMzc1IDMuMDQxNjcgMy4wNDE2NyAzLjM3NSAzIDRWMjBDMy4wNDE2NyAyMC42MjUgMy4zNzUgMjAuOTU4MyA0IDIxSDIwQzIwLjYyNSAyMC45NTgzIDIwLjk1ODMgMjAuNjI1IDIxIDIwVjRDMjAuOTU4MyAzLjM3NSAyMC42MjUgMy4wNDE2NyAyMCAzWk00IDBIMjBDMjEuMTI1IDAuMDQxNjY2NyAyMi4wNjI1IDAuNDM3NSAyMi44MTI1IDEuMTg3NUMyMy41NjI1IDEuOTM3NSAyMy45NTgzIDIuODc1IDI0IDRWMjBDMjMuOTU4MyAyMS4xMjUgMjMuNTYyNSAyMi4wNjI1IDIyLjgxMjUgMjIuODEyNUMyMi4wNjI1IDIzLjU2MjUgMjEuMTI1IDIzLjk1ODMgMjAgMjRINEMyLjg3NSAyMy45NTgzIDEuOTM3NSAyMy41NjI1IDEuMTg3NSAyMi44MTI1QzAuNDM3NSAyMi4wNjI1IDAuMDQxNjY2NyAyMS4xMjUgMCAyMFY0QzAuMDQxNjY2NyAyLjg3NSAwLjQzNzUgMS45Mzc1IDEuMTg3NSAxLjE4NzVDMS45Mzc1IDAuNDM3NSAyLjg3NSAwLjA0MTY2NjcgNCAwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={stopOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'StopOutlined';
}

export default RefIcon;
