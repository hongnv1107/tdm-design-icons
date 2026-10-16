// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNotificationSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.421 13.5C6.702 14.091 7.303 14.5 8 14.5C8.698 14.5 9.298 14.091 9.579 13.5H6.421ZM4.5 8.636C4.5 8.851 4.439 9.062 4.325 9.244L2.603 12H13.398L11.675 9.244C11.561 9.062 11.5 8.851 11.5 8.636V5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5V8.636ZM13 8.535L14.788 11.397C15.361 12.312 14.702 13.5 13.622 13.5H11.162C10.824 14.933 9.537 16 8 16C6.464 16 5.177 14.933 4.838 13.5H2.378C1.298 13.5 0.64 12.312 1.212 11.397L3 8.535V5C3 2.239 5.239 0 8 0C10.762 0 13 2.239 13 5V8.535Z"/>
  </svg>
);

const aDSNotificationIconDefinition = svgToIconDefinition(
  aDSNotificationSvg,
  'ads-notification'
);

/**![ADSNotification](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02LjQyMSAxMy41QzYuNzAyIDE0LjA5MSA3LjMwMyAxNC41IDggMTQuNUM4LjY5OCAxNC41IDkuMjk4IDE0LjA5MSA5LjU3OSAxMy41SDYuNDIxWk00LjUgOC42MzZDNC41IDguODUxIDQuNDM5IDkuMDYyIDQuMzI1IDkuMjQ0TDIuNjAzIDEySDEzLjM5OEwxMS42NzUgOS4yNDRDMTEuNTYxIDkuMDYyIDExLjUgOC44NTEgMTEuNSA4LjYzNlY1QzExLjUgMy4wNjcgOS45MzMgMS41IDggMS41QzYuMDY3IDEuNSA0LjUgMy4wNjcgNC41IDVWOC42MzZaTTEzIDguNTM1TDE0Ljc4OCAxMS4zOTdDMTUuMzYxIDEyLjMxMiAxNC43MDIgMTMuNSAxMy42MjIgMTMuNUgxMS4xNjJDMTAuODI0IDE0LjkzMyA5LjUzNyAxNiA4IDE2QzYuNDY0IDE2IDUuMTc3IDE0LjkzMyA0LjgzOCAxMy41SDIuMzc4QzEuMjk4IDEzLjUgMC42NCAxMi4zMTIgMS4yMTIgMTEuMzk3TDMgOC41MzVWNUMzIDIuMjM5IDUuMjM5IDAgOCAwQzEwLjc2MiAwIDEzIDIuMjM5IDEzIDVWOC41MzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNotificationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNotification';
}

export default RefIcon;
