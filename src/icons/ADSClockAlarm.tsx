// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSClockAlarmSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSClockAlarm](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgOC41QzEzIDUuNzM5IDEwLjc2MSAzLjUgOCAzLjVDNS4yMzkgMy41IDMgNS43MzkgMyA4LjVDMyAxMS4yNjEgNS4yMzkgMTMuNSA4IDEzLjVDMTAuNzYxIDEzLjUgMTMgMTEuMjYxIDEzIDguNVpNMTQuNSA4LjVDMTQuNSAxMi4wOSAxMS41OSAxNSA4IDE1QzQuNDEgMTUgMS41IDEyLjA5IDEuNSA4LjVDMS41IDQuOTEgNC40MSAyIDggMkMxMS41OSAyIDE0LjUgNC45MSAxNC41IDguNVoiLz48cGF0aCBkPSJNOC41IDVWOC4yNjJMMTAuMzA1IDkuMDY0TDkuNjk1IDEwLjQzNkw3LjQ0NSA5LjQzNkM3LjE3NCA5LjMxNSA3IDkuMDQ2IDcgOC43NVY1SDguNVoiLz48cGF0aCBkPSJNMTUuMjQ0IDIuNjg2TDE0LjI1NiAzLjgxNEwxMS4yNTYgMS4xODlMMTIuMjQ0IDAuMDYxTDE1LjI0NCAyLjY4NloiLz48cGF0aCBkPSJNMC43NTYgMi42ODZMMS43NDQgMy44MTRMNC43NDQgMS4xODlMMy43NTYgMC4wNjFMMC43NTYgMi42ODZaIi8+PHBhdGggZD0iTTE0LjgxNSAxNC4wMDZMMTMuNjg2IDE0Ljk5NEwxMS45MzYgMTIuOTk0TDEzLjA2NSAxMi4wMDZMMTQuODE1IDE0LjAwNloiLz48cGF0aCBkPSJNMS4xODYgMTQuMDA2TDIuMzE0IDE0Ljk5NEw0LjA2NCAxMi45OTRMMi45MzYgMTIuMDA2TDEuMTg2IDE0LjAwNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSClockAlarmIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSClockAlarm';
}

export default RefIcon;
