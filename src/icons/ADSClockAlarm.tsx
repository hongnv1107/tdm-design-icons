// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSClockAlarmSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 8.5C13 5.739 10.761 3.5 8 3.5C5.239 3.5 3 5.739 3 8.5C3 11.261 5.239 13.5 8 13.5C10.761 13.5 13 11.261 13 8.5ZM14.5 8.5C14.5 12.09 11.59 15 8 15C4.41 15 1.5 12.09 1.5 8.5C1.5 4.91 4.41 2 8 2C11.59 2 14.5 4.91 14.5 8.5Z"/><path d="M8.5 5V8.262L10.305 9.064L9.695 10.436L7.445 9.436C7.174 9.315 7 9.046 7 8.75V5H8.5Z"/><path d="M15.244 2.686L14.256 3.814L11.256 1.189L12.244 0.061L15.244 2.686Z"/><path d="M0.756 2.686L1.744 3.814L4.744 1.189L3.756 0.061L0.756 2.686Z"/><path d="M14.815 14.006L13.686 14.994L11.936 12.994L13.065 12.006L14.815 14.006Z"/><path d="M1.186 14.006L2.314 14.994L4.064 12.994L2.936 12.006L1.186 14.006Z"/>
  </svg>
);

const aDSClockAlarmIconDefinition = svgToIconDefinition(
  aDSClockAlarmSvg,
  'ads-clock-alarm'
);

/**![ADSClockAlarm](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyA4LjVDMTMgNS43MzkgMTAuNzYxIDMuNSA4IDMuNUM1LjIzOSAzLjUgMyA1LjczOSAzIDguNUMzIDExLjI2MSA1LjIzOSAxMy41IDggMTMuNUMxMC43NjEgMTMuNSAxMyAxMS4yNjEgMTMgOC41Wk0xNC41IDguNUMxNC41IDEyLjA5IDExLjU5IDE1IDggMTVDNC40MSAxNSAxLjUgMTIuMDkgMS41IDguNUMxLjUgNC45MSA0LjQxIDIgOCAyQzExLjU5IDIgMTQuNSA0LjkxIDE0LjUgOC41WiIvPjxwYXRoIGQ9Ik04LjUgNVY4LjI2MkwxMC4zMDUgOS4wNjRMOS42OTUgMTAuNDM2TDcuNDQ1IDkuNDM2QzcuMTc0IDkuMzE1IDcgOS4wNDYgNyA4Ljc1VjVIOC41WiIvPjxwYXRoIGQ9Ik0xNS4yNDQgMi42ODZMMTQuMjU2IDMuODE0TDExLjI1NiAxLjE4OUwxMi4yNDQgMC4wNjFMMTUuMjQ0IDIuNjg2WiIvPjxwYXRoIGQ9Ik0wLjc1NiAyLjY4NkwxLjc0NCAzLjgxNEw0Ljc0NCAxLjE4OUwzLjc1NiAwLjA2MUwwLjc1NiAyLjY4NloiLz48cGF0aCBkPSJNMTQuODE1IDE0LjAwNkwxMy42ODYgMTQuOTk0TDExLjkzNiAxMi45OTRMMTMuMDY1IDEyLjAwNkwxNC44MTUgMTQuMDA2WiIvPjxwYXRoIGQ9Ik0xLjE4NiAxNC4wMDZMMi4zMTQgMTQuOTk0TDQuMDY0IDEyLjk5NEwyLjkzNiAxMi4wMDZMMS4xODYgMTQuMDA2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSClockAlarmIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSClockAlarm';
}

export default RefIcon;
