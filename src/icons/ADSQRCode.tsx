// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSQRCodeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 10H12V12H10V10Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V5.25H1V3C1 1.895 1.895 1 3 1H5.25V2.5H3ZM10.75 1H13C14.105 1 15 1.895 15 3V5.25H13.5V3C13.5 2.724 13.276 2.5 13 2.5H10.75V1ZM4 4H9V9H4V4ZM5.5 5.5V7.5H7.5V5.5H5.5ZM10.5 8V4H12V8H10.5ZM8 12H4V10.5H8V12ZM1 13V10.75H2.5V13C2.5 13.276 2.724 13.5 3 13.5H5.25V15H3C1.895 15 1 14.105 1 13ZM13.5 13V10.75H15V13C15 14.105 14.105 15 13 15H10.75V13.5H13C13.276 13.5 13.5 13.276 13.5 13Z"/>
  </svg>
);

const aDSQRCodeIconDefinition = svgToIconDefinition(
  aDSQRCodeSvg,
  'ads-qr-code'
);

/**![ADSQRCode](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAgMTBIMTJWMTJIMTBWMTBaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjUuMjVIMVYzQzEgMS44OTUgMS44OTUgMSAzIDFINS4yNVYyLjVIM1pNMTAuNzUgMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjUuMjVIMTMuNVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIMTAuNzVWMVpNNCA0SDlWOUg0VjRaTTUuNSA1LjVWNy41SDcuNVY1LjVINS41Wk0xMC41IDhWNEgxMlY4SDEwLjVaTTggMTJINFYxMC41SDhWMTJaTTEgMTNWMTAuNzVIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVINS4yNVYxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNaTTEzLjUgMTNWMTAuNzVIMTVWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgxMC43NVYxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSQRCodeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSQRCode';
}

export default RefIcon;
