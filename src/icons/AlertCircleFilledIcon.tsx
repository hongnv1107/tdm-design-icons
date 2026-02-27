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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM11 12V8.40039C11 7.84811 11.4477 7.40039 12 7.40039C12.5523 7.40039 13 7.84811 13 8.40039V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM13.0088 15.5996C13.0086 15.0475 12.5609 14.5996 12.0088 14.5996H12C11.4478 14.5996 11.0002 15.0475 11 15.5996C11 16.1519 11.4477 16.5996 12 16.5996H12.0088C12.5611 16.5996 13.0088 16.1519 13.0088 15.5996Z"/>
  </svg>
);

const alertCircleFilledIconDefinition = svgToIconDefinition(
  alertCircleFilledSvg,
  'alert-circle-filled'
);

/**![AlertCircleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIyIDEyQzIyIDE3LjUyMjggMTcuNTIyOCAyMiAxMiAyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMlpNMTEgMTJWOC40MDAzOUMxMSA3Ljg0ODExIDExLjQ0NzcgNy40MDAzOSAxMiA3LjQwMDM5QzEyLjU1MjMgNy40MDAzOSAxMyA3Ljg0ODExIDEzIDguNDAwMzlWMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTIuNTUyMyAxMSAxMlpNMTMuMDA4OCAxNS41OTk2QzEzLjAwODYgMTUuMDQ3NSAxMi41NjA5IDE0LjU5OTYgMTIuMDA4OCAxNC41OTk2SDEyQzExLjQ0NzggMTQuNTk5NiAxMS4wMDAyIDE1LjA0NzUgMTEgMTUuNTk5NkMxMSAxNi4xNTE5IDExLjQ0NzcgMTYuNTk5NiAxMiAxNi41OTk2SDEyLjAwODhDMTIuNTYxMSAxNi41OTk2IDEzLjAwODggMTYuMTUxOSAxMy4wMDg4IDE1LjU5OTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={alertCircleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertCircleFilledIcon';
}

export default RefIcon;
