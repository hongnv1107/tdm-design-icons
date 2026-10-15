// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBluetoothSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.69 0.317C7.958 0.195 8.272 0.242 8.494 0.436L12.494 3.936C12.656 4.078 12.75 4.284 12.75 4.5C12.75 4.716 12.656 4.922 12.494 5.064L9.139 8L12.494 10.936C12.656 11.078 12.75 11.284 12.75 11.5C12.75 11.716 12.656 11.922 12.494 12.064L8.494 15.564C8.272 15.758 7.958 15.805 7.69 15.683C7.422 15.561 7.25 15.294 7.25 15V9.653L4.494 12.064L3.506 10.936L6.861 8L3.506 5.064L4.494 3.936L7.25 6.347V1C7.25 0.706 7.422 0.439 7.69 0.317ZM8.75 9.653L10.861 11.5L8.75 13.347V9.653ZM8.75 6.347V2.653L10.861 4.5L8.75 6.347Z"/>
  </svg>
);

const aDSBluetoothIconDefinition = svgToIconDefinition(
  aDSBluetoothSvg,
  'ads-bluetooth'
);

/**![ADSBluetooth](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNjkgMC4zMTdDNy45NTggMC4xOTUgOC4yNzIgMC4yNDIgOC40OTQgMC40MzZMMTIuNDk0IDMuOTM2QzEyLjY1NiA0LjA3OCAxMi43NSA0LjI4NCAxMi43NSA0LjVDMTIuNzUgNC43MTYgMTIuNjU2IDQuOTIyIDEyLjQ5NCA1LjA2NEw5LjEzOSA4TDEyLjQ5NCAxMC45MzZDMTIuNjU2IDExLjA3OCAxMi43NSAxMS4yODQgMTIuNzUgMTEuNUMxMi43NSAxMS43MTYgMTIuNjU2IDExLjkyMiAxMi40OTQgMTIuMDY0TDguNDk0IDE1LjU2NEM4LjI3MiAxNS43NTggNy45NTggMTUuODA1IDcuNjkgMTUuNjgzQzcuNDIyIDE1LjU2MSA3LjI1IDE1LjI5NCA3LjI1IDE1VjkuNjUzTDQuNDk0IDEyLjA2NEwzLjUwNiAxMC45MzZMNi44NjEgOEwzLjUwNiA1LjA2NEw0LjQ5NCAzLjkzNkw3LjI1IDYuMzQ3VjFDNy4yNSAwLjcwNiA3LjQyMiAwLjQzOSA3LjY5IDAuMzE3Wk04Ljc1IDkuNjUzTDEwLjg2MSAxMS41TDguNzUgMTMuMzQ3VjkuNjUzWk04Ljc1IDYuMzQ3VjIuNjUzTDEwLjg2MSA0LjVMOC43NSA2LjM0N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBluetoothIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBluetooth';
}

export default RefIcon;
