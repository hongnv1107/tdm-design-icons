// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const alertCircleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 1.54622e-07 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 1.54626e-07 24 5.37258 24 12ZM10.8 12V7.68047C10.8 7.01773 11.3373 6.48047 12 6.48047C12.6627 6.48047 13.2 7.01773 13.2 7.68047V12C13.2 12.6627 12.6627 13.2 12 13.2C11.3373 13.2 10.8 12.6627 10.8 12ZM13.2105 16.3195C13.2103 15.657 12.6731 15.1195 12.0105 15.1195H12C11.3374 15.1195 10.8003 15.657 10.8 16.3195C10.8 16.9823 11.3373 17.5195 12 17.5195H12.0105C12.6733 17.5195 13.2105 16.9823 13.2105 16.3195Z"/>
  </svg>
);

const alertCircleFilledIconDefinition = svgToIconDefinition(
  alertCircleFilledSvg,
  'alert-circle-filled'
);

/**![AlertCircleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI0IDEyQzI0IDE4LjYyNzQgMTguNjI3NCAyNCAxMiAyNEM1LjM3MjU4IDI0IDEuNTQ2MjJlLTA3IDE4LjYyNzQgMCAxMkMwIDUuMzcyNTggNS4zNzI1OCAwIDEyIDBDMTguNjI3NCAxLjU0NjI2ZS0wNyAyNCA1LjM3MjU4IDI0IDEyWk0xMC44IDEyVjcuNjgwNDdDMTAuOCA3LjAxNzczIDExLjMzNzMgNi40ODA0NyAxMiA2LjQ4MDQ3QzEyLjY2MjcgNi40ODA0NyAxMy4yIDcuMDE3NzMgMTMuMiA3LjY4MDQ3VjEyQzEzLjIgMTIuNjYyNyAxMi42NjI3IDEzLjIgMTIgMTMuMkMxMS4zMzczIDEzLjIgMTAuOCAxMi42NjI3IDEwLjggMTJaTTEzLjIxMDUgMTYuMzE5NUMxMy4yMTAzIDE1LjY1NyAxMi42NzMxIDE1LjExOTUgMTIuMDEwNSAxNS4xMTk1SDEyQzExLjMzNzQgMTUuMTE5NSAxMC44MDAzIDE1LjY1NyAxMC44IDE2LjMxOTVDMTAuOCAxNi45ODIzIDExLjMzNzMgMTcuNTE5NSAxMiAxNy41MTk1SDEyLjAxMDVDMTIuNjczMyAxNy41MTk1IDEzLjIxMDUgMTYuOTgyMyAxMy4yMTA1IDE2LjMxOTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={alertCircleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertCircleFilled';
}

export default RefIcon;
