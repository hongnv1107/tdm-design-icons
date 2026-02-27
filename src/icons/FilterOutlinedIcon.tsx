// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const filterOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4C20.3918 4 20.7477 4.22857 20.9102 4.58496C21.0726 4.94147 21.0119 5.36061 20.7549 5.65625L14.5997 12.7314V19C14.5997 19.3445 14.4228 19.6648 14.1309 19.8477C13.8389 20.0304 13.473 20.0499 13.1631 19.8994L9.96293 18.3438C9.61866 18.1764 9.40043 17.8271 9.40043 17.4443V12.7314L3.24516 5.65625C2.98815 5.36061 2.92749 4.94147 3.08989 4.58496C3.2524 4.22857 3.60833 4 4.00004 4H20ZM11.1543 11.7012C11.3126 11.8831 11.4003 12.1163 11.4004 12.3574V16.8184L12.5997 17.4014V12.3574C12.5997 12.1163 12.6875 11.8831 12.8457 11.7012L17.8047 6H6.19536L11.1543 11.7012Z"/>
  </svg>
);

const filterOutlinedIconDefinition = svgToIconDefinition(
  filterOutlinedSvg,
  'filter-outlined'
);

/**![FilterOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgNEMyMC4zOTE4IDQgMjAuNzQ3NyA0LjIyODU3IDIwLjkxMDIgNC41ODQ5NkMyMS4wNzI2IDQuOTQxNDcgMjEuMDExOSA1LjM2MDYxIDIwLjc1NDkgNS42NTYyNUwxNC41OTk3IDEyLjczMTRWMTlDMTQuNTk5NyAxOS4zNDQ1IDE0LjQyMjggMTkuNjY0OCAxNC4xMzA5IDE5Ljg0NzdDMTMuODM4OSAyMC4wMzA0IDEzLjQ3MyAyMC4wNDk5IDEzLjE2MzEgMTkuODk5NEw5Ljk2MjkzIDE4LjM0MzhDOS42MTg2NiAxOC4xNzY0IDkuNDAwNDMgMTcuODI3MSA5LjQwMDQzIDE3LjQ0NDNWMTIuNzMxNEwzLjI0NTE2IDUuNjU2MjVDMi45ODgxNSA1LjM2MDYxIDIuOTI3NDkgNC45NDE0NyAzLjA4OTg5IDQuNTg0OTZDMy4yNTI0IDQuMjI4NTcgMy42MDgzMyA0IDQuMDAwMDQgNEgyMFpNMTEuMTU0MyAxMS43MDEyQzExLjMxMjYgMTEuODgzMSAxMS40MDAzIDEyLjExNjMgMTEuNDAwNCAxMi4zNTc0VjE2LjgxODRMMTIuNTk5NyAxNy40MDE0VjEyLjM1NzRDMTIuNTk5NyAxMi4xMTYzIDEyLjY4NzUgMTEuODgzMSAxMi44NDU3IDExLjcwMTJMMTcuODA0NyA2SDYuMTk1MzZMMTEuMTU0MyAxMS43MDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={filterOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterOutlinedIcon';
}

export default RefIcon;
