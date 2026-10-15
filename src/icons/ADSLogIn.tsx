// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLogInSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.5H8V1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H8V13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5ZM7.439 7.25L5.22 5.03L6.28 3.97L9.78 7.47C10.073 7.763 10.073 8.237 9.78 8.53L6.28 12.03L5.22 10.97L7.439 8.75H1V7.25H7.439Z"/>
  </svg>
);

const aDSLogInIconDefinition = svgToIconDefinition(
  aDSLogInSvg,
  'ads-log-in'
);

/**![ADSLogIn](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDIuNUg4VjFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDhWMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNVpNNy40MzkgNy4yNUw1LjIyIDUuMDNMNi4yOCAzLjk3TDkuNzggNy40N0MxMC4wNzMgNy43NjMgMTAuMDczIDguMjM3IDkuNzggOC41M0w2LjI4IDEyLjAzTDUuMjIgMTAuOTdMNy40MzkgOC43NUgxVjcuMjVINy40MzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLogInIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLogIn';
}

export default RefIcon;
