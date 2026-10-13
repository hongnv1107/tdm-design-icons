// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const alertCircleOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.6 12C21.6 6.69807 17.3019 2.4 12 2.4C6.69807 2.4 2.4 6.69807 2.4 12C2.4 17.3019 6.69807 21.6 12 21.6C17.3019 21.6 21.6 17.3019 21.6 12ZM12.0105 15.1195C12.6731 15.1195 13.2103 15.657 13.2105 16.3195C13.2105 16.9823 12.6733 17.5195 12.0105 17.5195H12C11.3373 17.5195 10.8 16.9823 10.8 16.3195C10.8003 15.657 11.3374 15.1195 12 15.1195H12.0105ZM10.8 12V7.68047C10.8 7.01773 11.3373 6.48047 12 6.48047C12.6627 6.48047 13.2 7.01773 13.2 7.68047V12C13.2 12.6627 12.6627 13.2 12 13.2C11.3373 13.2 10.8 12.6627 10.8 12ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 1.54622e-07 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 1.54626e-07 24 5.37258 24 12Z"/>
  </svg>
);

const alertCircleOutlinedIconDefinition = svgToIconDefinition(
  alertCircleOutlinedSvg,
  'alert-circle-outlined'
);

/**![AlertCircleOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuNiAxMkMyMS42IDYuNjk4MDcgMTcuMzAxOSAyLjQgMTIgMi40QzYuNjk4MDcgMi40IDIuNCA2LjY5ODA3IDIuNCAxMkMyLjQgMTcuMzAxOSA2LjY5ODA3IDIxLjYgMTIgMjEuNkMxNy4zMDE5IDIxLjYgMjEuNiAxNy4zMDE5IDIxLjYgMTJaTTEyLjAxMDUgMTUuMTE5NUMxMi42NzMxIDE1LjExOTUgMTMuMjEwMyAxNS42NTcgMTMuMjEwNSAxNi4zMTk1QzEzLjIxMDUgMTYuOTgyMyAxMi42NzMzIDE3LjUxOTUgMTIuMDEwNSAxNy41MTk1SDEyQzExLjMzNzMgMTcuNTE5NSAxMC44IDE2Ljk4MjMgMTAuOCAxNi4zMTk1QzEwLjgwMDMgMTUuNjU3IDExLjMzNzQgMTUuMTE5NSAxMiAxNS4xMTk1SDEyLjAxMDVaTTEwLjggMTJWNy42ODA0N0MxMC44IDcuMDE3NzMgMTEuMzM3MyA2LjQ4MDQ3IDEyIDYuNDgwNDdDMTIuNjYyNyA2LjQ4MDQ3IDEzLjIgNy4wMTc3MyAxMy4yIDcuNjgwNDdWMTJDMTMuMiAxMi42NjI3IDEyLjY2MjcgMTMuMiAxMiAxMy4yQzExLjMzNzMgMTMuMiAxMC44IDEyLjY2MjcgMTAuOCAxMlpNMjQgMTJDMjQgMTguNjI3NCAxOC42Mjc0IDI0IDEyIDI0QzUuMzcyNTggMjQgMS41NDYyMmUtMDcgMTguNjI3NCAwIDEyQzAgNS4zNzI1OCA1LjM3MjU4IDAgMTIgMEMxOC42Mjc0IDEuNTQ2MjZlLTA3IDI0IDUuMzcyNTggMjQgMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={alertCircleOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertCircleOutlined';
}

export default RefIcon;
