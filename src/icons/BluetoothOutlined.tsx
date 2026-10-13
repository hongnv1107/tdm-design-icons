// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bluetoothOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.6875 12.1875L18.2812 17.0156L11.3438 24L11.2031 14.7188L7.17188 18.75L5.71875 17.25L10.7812 12.1875L5.71875 7.125L7.17188 5.625L11.2031 9.65625V0L18.0469 7.35938L13.6875 12.1875ZM15.6094 7.35938L13.2656 5.01562V9.70312L15.6094 7.35938ZM13.2656 14.6719V19.3594L15.6094 17.0156L13.2656 14.6719Z"/>
  </svg>
);

const bluetoothOutlinedIconDefinition = svgToIconDefinition(
  bluetoothOutlinedSvg,
  'bluetooth-outlined'
);

/**![BluetoothOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNjg3NSAxMi4xODc1TDE4LjI4MTIgMTcuMDE1NkwxMS4zNDM4IDI0TDExLjIwMzEgMTQuNzE4OEw3LjE3MTg4IDE4Ljc1TDUuNzE4NzUgMTcuMjVMMTAuNzgxMiAxMi4xODc1TDUuNzE4NzUgNy4xMjVMNy4xNzE4OCA1LjYyNUwxMS4yMDMxIDkuNjU2MjVWMEwxOC4wNDY5IDcuMzU5MzhMMTMuNjg3NSAxMi4xODc1Wk0xNS42MDk0IDcuMzU5MzhMMTMuMjY1NiA1LjAxNTYyVjkuNzAzMTJMMTUuNjA5NCA3LjM1OTM4Wk0xMy4yNjU2IDE0LjY3MTlWMTkuMzU5NEwxNS42MDk0IDE3LjAxNTZMMTMuMjY1NiAxNC42NzE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bluetoothOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BluetoothOutlined';
}

export default RefIcon;
