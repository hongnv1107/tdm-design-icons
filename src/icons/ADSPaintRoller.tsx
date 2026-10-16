// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPaintRollerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.75C1 0.336 1.336 0 1.75 0H11.75C12.164 0 12.5 0.336 12.5 0.75V1.75H13.625C14.384 1.75 15 2.366 15 3.125V5.5C15 6.605 14.105 7.5 13 7.5H7.75V9H8.25C8.664 9 9 9.336 9 9.75V14C9 15.105 8.105 16 7 16C5.895 16 5 15.105 5 14V9.75C5 9.336 5.336 9 5.75 9H6.25V7.388C6.25 6.621 6.871 6 7.638 6H13C13.276 6 13.5 5.776 13.5 5.5V3.25H12.5V4.25C12.5 4.664 12.164 5 11.75 5H1.75C1.336 5 1 4.664 1 4.25V0.75ZM6.5 10.5V14C6.5 14.276 6.724 14.5 7 14.5C7.276 14.5 7.5 14.276 7.5 14V10.5H6.5ZM2.5 1.5V3.5H11V1.5H2.5Z"/>
  </svg>
);

const aDSPaintRollerIconDefinition = svgToIconDefinition(
  aDSPaintRollerSvg,
  'ads-paint-roller'
);

/**![ADSPaintRoller](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAwLjc1QzEgMC4zMzYgMS4zMzYgMCAxLjc1IDBIMTEuNzVDMTIuMTY0IDAgMTIuNSAwLjMzNiAxMi41IDAuNzVWMS43NUgxMy42MjVDMTQuMzg0IDEuNzUgMTUgMi4zNjYgMTUgMy4xMjVWNS41QzE1IDYuNjA1IDE0LjEwNSA3LjUgMTMgNy41SDcuNzVWOUg4LjI1QzguNjY0IDkgOSA5LjMzNiA5IDkuNzVWMTRDOSAxNS4xMDUgOC4xMDUgMTYgNyAxNkM1Ljg5NSAxNiA1IDE1LjEwNSA1IDE0VjkuNzVDNSA5LjMzNiA1LjMzNiA5IDUuNzUgOUg2LjI1VjcuMzg4QzYuMjUgNi42MjEgNi44NzEgNiA3LjYzOCA2SDEzQzEzLjI3NiA2IDEzLjUgNS43NzYgMTMuNSA1LjVWMy4yNUgxMi41VjQuMjVDMTIuNSA0LjY2NCAxMi4xNjQgNSAxMS43NSA1SDEuNzVDMS4zMzYgNSAxIDQuNjY0IDEgNC4yNVYwLjc1Wk02LjUgMTAuNVYxNEM2LjUgMTQuMjc2IDYuNzI0IDE0LjUgNyAxNC41QzcuMjc2IDE0LjUgNy41IDE0LjI3NiA3LjUgMTRWMTAuNUg2LjVaTTIuNSAxLjVWMy41SDExVjEuNUgyLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPaintRollerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPaintRoller';
}

export default RefIcon;
