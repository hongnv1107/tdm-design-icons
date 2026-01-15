// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const filterOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4C20.3917 4 20.7476 4.22857 20.9101 4.58496C21.0725 4.94147 21.0119 5.36061 20.7549 5.65625L14.5996 12.7314V19C14.5996 19.3445 14.4228 19.6648 14.1308 19.8477C13.8388 20.0304 13.4729 20.0499 13.1631 19.8994L9.96287 18.3438C9.6186 18.1764 9.40037 17.8271 9.40037 17.4443V12.7314L3.2451 5.65625C2.98809 5.36061 2.92742 4.94147 3.08983 4.58496C3.25234 4.22857 3.60827 4 3.99998 4H20ZM11.1543 11.7012C11.3125 11.8831 11.4003 12.1163 11.4004 12.3574V16.8184L12.5996 17.4014V12.3574C12.5997 12.1163 12.6875 11.8831 12.8457 11.7012L17.8047 6H6.1953L11.1543 11.7012Z" />
  </svg>
);

const filterOutlinedIconDefinition = svgToIconDefinition(
  filterOutlinedSvg,
  'filter-outlined'
);

/**![FilterOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNEMyMC4zOTE3IDQgMjAuNzQ3NiA0LjIyODU3IDIwLjkxMDEgNC41ODQ5NkMyMS4wNzI1IDQuOTQxNDcgMjEuMDExOSA1LjM2MDYxIDIwLjc1NDkgNS42NTYyNUwxNC41OTk2IDEyLjczMTRWMTlDMTQuNTk5NiAxOS4zNDQ1IDE0LjQyMjggMTkuNjY0OCAxNC4xMzA4IDE5Ljg0NzdDMTMuODM4OCAyMC4wMzA0IDEzLjQ3MjkgMjAuMDQ5OSAxMy4xNjMxIDE5Ljg5OTRMOS45NjI4NyAxOC4zNDM4QzkuNjE4NiAxOC4xNzY0IDkuNDAwMzcgMTcuODI3MSA5LjQwMDM3IDE3LjQ0NDNWMTIuNzMxNEwzLjI0NTEgNS42NTYyNUMyLjk4ODA5IDUuMzYwNjEgMi45Mjc0MiA0Ljk0MTQ3IDMuMDg5ODMgNC41ODQ5NkMzLjI1MjM0IDQuMjI4NTcgMy42MDgyNyA0IDMuOTk5OTggNEgyMFpNMTEuMTU0MyAxMS43MDEyQzExLjMxMjUgMTEuODgzMSAxMS40MDAzIDEyLjExNjMgMTEuNDAwNCAxMi4zNTc0VjE2LjgxODRMMTIuNTk5NiAxNy40MDE0VjEyLjM1NzRDMTIuNTk5NyAxMi4xMTYzIDEyLjY4NzUgMTEuODgzMSAxMi44NDU3IDExLjcwMTJMMTcuODA0NyA2SDYuMTk1M0wxMS4xNTQzIDExLjcwMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={filterOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FilterOutlinedIcon';
}

export default RefIcon;
