// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSendSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 1.22C14.988 1.427 15.055 1.736 14.953 2.01L9.953 15.511C9.851 15.786 9.597 15.977 9.304 15.998C9.011 16.019 8.732 15.867 8.592 15.609L5.697 10.303L0.391 7.408C0.133 7.268 -0.019 6.989 0.002 6.696C0.023 6.403 0.214 6.149 0.49 6.047L13.99 1.047C14.264 0.945 14.573 1.012 14.78 1.22ZM7.177 9.884L9.119 13.444L12.356 4.705L7.177 9.884ZM11.295 3.644L2.556 6.881L6.116 8.823L11.295 3.644Z"/>
  </svg>
);

const aDSSendIconDefinition = svgToIconDefinition(
  aDSSendSvg,
  'ads-send'
);

/**![ADSSend](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0Ljc4IDEuMjJDMTQuOTg4IDEuNDI3IDE1LjA1NSAxLjczNiAxNC45NTMgMi4wMUw5Ljk1MyAxNS41MTFDOS44NTEgMTUuNzg2IDkuNTk3IDE1Ljk3NyA5LjMwNCAxNS45OThDOS4wMTEgMTYuMDE5IDguNzMyIDE1Ljg2NyA4LjU5MiAxNS42MDlMNS42OTcgMTAuMzAzTDAuMzkxIDcuNDA4QzAuMTMzIDcuMjY4IC0wLjAxOSA2Ljk4OSAwLjAwMiA2LjY5NkMwLjAyMyA2LjQwMyAwLjIxNCA2LjE0OSAwLjQ5IDYuMDQ3TDEzLjk5IDEuMDQ3QzE0LjI2NCAwLjk0NSAxNC41NzMgMS4wMTIgMTQuNzggMS4yMlpNNy4xNzcgOS44ODRMOS4xMTkgMTMuNDQ0TDEyLjM1NiA0LjcwNUw3LjE3NyA5Ljg4NFpNMTEuMjk1IDMuNjQ0TDIuNTU2IDYuODgxTDYuMTE2IDguODIzTDExLjI5NSAzLjY0NFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSendIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSend';
}

export default RefIcon;
