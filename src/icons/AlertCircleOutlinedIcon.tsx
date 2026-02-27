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
    <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM12.0088 14.5996C12.5609 14.5996 13.0086 15.0475 13.0088 15.5996C13.0088 16.1519 12.5611 16.5996 12.0088 16.5996H12C11.4477 16.5996 11 16.1519 11 15.5996C11.0002 15.0475 11.4478 14.5996 12 14.5996H12.0088ZM11 12V8.40039C11 7.84811 11.4477 7.40039 12 7.40039C12.5523 7.40039 13 7.84811 13 8.40039V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
  </svg>
);

const alertCircleOutlinedIconDefinition = svgToIconDefinition(
  alertCircleOutlinedSvg,
  'alert-circle-outlined'
);

/**![AlertCircleOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyWk0xMi4wMDg4IDE0LjU5OTZDMTIuNTYwOSAxNC41OTk2IDEzLjAwODYgMTUuMDQ3NSAxMy4wMDg4IDE1LjU5OTZDMTMuMDA4OCAxNi4xNTE5IDEyLjU2MTEgMTYuNTk5NiAxMi4wMDg4IDE2LjU5OTZIMTJDMTEuNDQ3NyAxNi41OTk2IDExIDE2LjE1MTkgMTEgMTUuNTk5NkMxMS4wMDAyIDE1LjA0NzUgMTEuNDQ3OCAxNC41OTk2IDEyIDE0LjU5OTZIMTIuMDA4OFpNMTEgMTJWOC40MDAzOUMxMSA3Ljg0ODExIDExLjQ0NzcgNy40MDAzOSAxMiA3LjQwMDM5QzEyLjU1MjMgNy40MDAzOSAxMyA3Ljg0ODExIDEzIDguNDAwMzlWMTJDMTMgMTIuNTUyMyAxMi41NTIzIDEzIDEyIDEzQzExLjQ0NzcgMTMgMTEgMTIuNTUyMyAxMSAxMlpNMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={alertCircleOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AlertCircleOutlinedIcon';
}

export default RefIcon;
