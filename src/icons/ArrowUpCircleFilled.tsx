// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpCircleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C8.59036e-08 5.37258 5.37258 8.59008e-08 12 0ZM12.9424 6.79004C12.4543 6.30242 11.6827 6.27249 11.1592 6.69922L11.0576 6.79004L6.79004 11.0576C6.26995 11.5782 6.26995 12.4218 6.79004 12.9424C7.31069 13.463 8.15507 13.463 8.67578 12.9424L10.667 10.9521V16.2666C10.6671 17.0029 11.2637 17.6006 12 17.6006C12.7363 17.6006 13.3329 17.0029 13.333 16.2666V10.9521L15.3242 12.9424L15.4248 13.0342C15.9485 13.4615 16.7217 13.4306 17.21 12.9424C17.6976 12.4543 17.7275 11.6827 17.3008 11.1592L17.21 11.0576L12.9424 6.79004Z"/>
  </svg>
);

const arrowUpCircleFilledIconDefinition = svgToIconDefinition(
  arrowUpCircleFilledSvg,
  'arrow-up-circle-filled'
);

/**![ArrowUpCircleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDBDMTguNjI3NCAwIDI0IDUuMzcyNTggMjQgMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0QzUuMzcyNTggMjQgMCAxOC42Mjc0IDAgMTJDOC41OTAzNmUtMDggNS4zNzI1OCA1LjM3MjU4IDguNTkwMDhlLTA4IDEyIDBaTTEyLjk0MjQgNi43OTAwNEMxMi40NTQzIDYuMzAyNDIgMTEuNjgyNyA2LjI3MjQ5IDExLjE1OTIgNi42OTkyMkwxMS4wNTc2IDYuNzkwMDRMNi43OTAwNCAxMS4wNTc2QzYuMjY5OTUgMTEuNTc4MiA2LjI2OTk1IDEyLjQyMTggNi43OTAwNCAxMi45NDI0QzcuMzEwNjkgMTMuNDYzIDguMTU1MDcgMTMuNDYzIDguNjc1NzggMTIuOTQyNEwxMC42NjcgMTAuOTUyMVYxNi4yNjY2QzEwLjY2NzEgMTcuMDAyOSAxMS4yNjM3IDE3LjYwMDYgMTIgMTcuNjAwNkMxMi43MzYzIDE3LjYwMDYgMTMuMzMyOSAxNy4wMDI5IDEzLjMzMyAxNi4yNjY2VjEwLjk1MjFMMTUuMzI0MiAxMi45NDI0TDE1LjQyNDggMTMuMDM0MkMxNS45NDg1IDEzLjQ2MTUgMTYuNzIxNyAxMy40MzA2IDE3LjIxIDEyLjk0MjRDMTcuNjk3NiAxMi40NTQzIDE3LjcyNzUgMTEuNjgyNyAxNy4zMDA4IDExLjE1OTJMMTcuMjEgMTEuMDU3NkwxMi45NDI0IDYuNzkwMDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpCircleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpCircleFilled';
}

export default RefIcon;
