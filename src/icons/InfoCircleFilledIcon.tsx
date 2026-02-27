// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const infoCircleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM11 12V15.5996C11 16.1519 11.4477 16.5996 12 16.5996C12.5523 16.5996 13 16.1519 13 15.5996V12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12ZM12.1113 7.40527L12.0088 7.40039H12C11.4477 7.40039 11 7.84811 11 8.40039C11.0002 8.9525 11.4478 9.40039 12 9.40039H12.0088L12.1113 9.39453C12.6154 9.34328 13.0086 8.91794 13.0088 8.40039C13.0088 7.88266 12.6155 7.45653 12.1113 7.40527Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"/>
  </svg>
);

const infoCircleFilledIconDefinition = svgToIconDefinition(
  infoCircleFilledSvg,
  'info-circle-filled'
);

/**![InfoCircleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDEyQzIwIDcuNTgxNzIgMTYuNDE4MyA0IDEyIDRDNy41ODE3MiA0IDQgNy41ODE3MiA0IDEyQzQgMTYuNDE4MyA3LjU4MTcyIDIwIDEyIDIwQzE2LjQxODMgMjAgMjAgMTYuNDE4MyAyMCAxMlpNMTEgMTJWMTUuNTk5NkMxMSAxNi4xNTE5IDExLjQ0NzcgMTYuNTk5NiAxMiAxNi41OTk2QzEyLjU1MjMgMTYuNTk5NiAxMyAxNi4xNTE5IDEzIDE1LjU5OTZWMTJDMTMgMTEuNDQ3NyAxMi41NTIzIDExIDEyIDExQzExLjQ0NzcgMTEgMTEgMTEuNDQ3NyAxMSAxMlpNMTIuMTExMyA3LjQwNTI3TDEyLjAwODggNy40MDAzOUgxMkMxMS40NDc3IDcuNDAwMzkgMTEgNy44NDgxMSAxMSA4LjQwMDM5QzExLjAwMDIgOC45NTI1IDExLjQ0NzggOS40MDAzOSAxMiA5LjQwMDM5SDEyLjAwODhMMTIuMTExMyA5LjM5NDUzQzEyLjYxNTQgOS4zNDMyOCAxMy4wMDg2IDguOTE3OTQgMTMuMDA4OCA4LjQwMDM5QzEzLjAwODggNy44ODI2NiAxMi42MTU1IDcuNDU2NTMgMTIuMTExMyA3LjQwNTI3WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAgMTJDMjAgNy41ODE3MiAxNi40MTgzIDQgMTIgNEM3LjU4MTcyIDQgNCA3LjU4MTcyIDQgMTJDNCAxNi40MTgzIDcuNTgxNzIgMjAgMTIgMjBDMTYuNDE4MyAyMCAyMCAxNi40MTgzIDIwIDEyWk0yMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJDNi40NzcxNSAyMiAyIDE3LjUyMjggMiAxMkMyIDYuNDc3MTUgNi40NzcxNSAyIDEyIDJDMTcuNTIyOCAyIDIyIDYuNDc3MTUgMjIgMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={infoCircleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'InfoCircleFilledIcon';
}

export default RefIcon;
