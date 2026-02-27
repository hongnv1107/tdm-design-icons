// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const infoCircleOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM11 15.5996V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V15.5996C13 16.1519 12.5523 16.5996 12 16.5996C11.4477 16.5996 11 16.1519 11 15.5996ZM12.0088 7.40039L12.1113 7.40527C12.6155 7.45653 13.0088 7.88266 13.0088 8.40039C13.0086 8.91794 12.6154 9.34328 12.1113 9.39453L12.0088 9.40039H12C11.4478 9.40039 11.0002 8.9525 11 8.40039C11 7.84811 11.4477 7.40039 12 7.40039H12.0088ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
  </svg>
);

const infoCircleOutlinedIconDefinition = svgToIconDefinition(
  infoCircleOutlinedSvg,
  'info-circle-outlined'
);

/**![InfoCircleOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyWk0xMSAxNS41OTk2VjEyQzExIDExLjQ0NzcgMTEuNDQ3NyAxMSAxMiAxMUMxMi41NTIzIDExIDEzIDExLjQ0NzcgMTMgMTJWMTUuNTk5NkMxMyAxNi4xNTE5IDEyLjU1MjMgMTYuNTk5NiAxMiAxNi41OTk2QzExLjQ0NzcgMTYuNTk5NiAxMSAxNi4xNTE5IDExIDE1LjU5OTZaTTEyLjAwODggNy40MDAzOUwxMi4xMTEzIDcuNDA1MjdDMTIuNjE1NSA3LjQ1NjUzIDEzLjAwODggNy44ODI2NiAxMy4wMDg4IDguNDAwMzlDMTMuMDA4NiA4LjkxNzk0IDEyLjYxNTQgOS4zNDMyOCAxMi4xMTEzIDkuMzk0NTNMMTIuMDA4OCA5LjQwMDM5SDEyQzExLjQ0NzggOS40MDAzOSAxMS4wMDAyIDguOTUyNSAxMSA4LjQwMDM5QzExIDcuODQ4MTEgMTEuNDQ3NyA3LjQwMDM5IDEyIDcuNDAwMzlIMTIuMDA4OFpNMjIgMTJDMjIgMTcuNTIyOCAxNy41MjI4IDIyIDEyIDIyQzYuNDc3MTUgMjIgMiAxNy41MjI4IDIgMTJDMiA2LjQ3NzE1IDYuNDc3MTUgMiAxMiAyQzE3LjUyMjggMiAyMiA2LjQ3NzE1IDIyIDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={infoCircleOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InfoCircleOutlinedIcon';
}

export default RefIcon;
