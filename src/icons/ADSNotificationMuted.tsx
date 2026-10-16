// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNotificationMutedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 9.818L11.5 8.318V5C11.5 3.067 9.933 1.5 8 1.5C7.08 1.5 6.243 1.855 5.618 2.436L4.557 1.375C5.453 0.523 6.666 0 8 0C10.762 0 13 2.239 13 5V9.818Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.182L4.5 7.682V8.636C4.5 8.851 4.44 9.062 4.326 9.244L2.603 12H8.818L10.945 14.127C10.427 15.234 9.303 16 8 16C6.463 16 5.176 14.933 4.837 13.5H2.378C1.298 13.5 0.639 12.312 1.212 11.396L3 8.535V6.182ZM6.418 13.5C6.699 14.091 7.302 14.5 8 14.5C8.698 14.5 9.301 14.091 9.582 13.5H6.418Z"/><path d="M0.47 1.53L14.47 15.53L15.53 14.47L1.53 0.47L0.47 1.53Z"/>
  </svg>
);

const aDSNotificationMutedIconDefinition = svgToIconDefinition(
  aDSNotificationMutedSvg,
  'ads-notification-muted'
);

/**![ADSNotificationMuted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyA5LjgxOEwxMS41IDguMzE4VjVDMTEuNSAzLjA2NyA5LjkzMyAxLjUgOCAxLjVDNy4wOCAxLjUgNi4yNDMgMS44NTUgNS42MTggMi40MzZMNC41NTcgMS4zNzVDNS40NTMgMC41MjMgNi42NjYgMCA4IDBDMTAuNzYyIDAgMTMgMi4yMzkgMTMgNVY5LjgxOFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNi4xODJMNC41IDcuNjgyVjguNjM2QzQuNSA4Ljg1MSA0LjQ0IDkuMDYyIDQuMzI2IDkuMjQ0TDIuNjAzIDEySDguODE4TDEwLjk0NSAxNC4xMjdDMTAuNDI3IDE1LjIzNCA5LjMwMyAxNiA4IDE2QzYuNDYzIDE2IDUuMTc2IDE0LjkzMyA0LjgzNyAxMy41SDIuMzc4QzEuMjk4IDEzLjUgMC42MzkgMTIuMzEyIDEuMjEyIDExLjM5NkwzIDguNTM1VjYuMTgyWk02LjQxOCAxMy41QzYuNjk5IDE0LjA5MSA3LjMwMiAxNC41IDggMTQuNUM4LjY5OCAxNC41IDkuMzAxIDE0LjA5MSA5LjU4MiAxMy41SDYuNDE4WiIvPjxwYXRoIGQ9Ik0wLjQ3IDEuNTNMMTQuNDcgMTUuNTNMMTUuNTMgMTQuNDdMMS41MyAwLjQ3TDAuNDcgMS41M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNotificationMutedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNotificationMuted';
}

export default RefIcon;
