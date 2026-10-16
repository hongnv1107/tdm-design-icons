// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDevicesSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 7.724 14.276 7.5 14 7.5H11.5C11.224 7.5 11 7.724 11 8V14C11 14.276 11.224 14.5 11.5 14.5H14C14.276 14.5 14.5 14.276 14.5 14V8ZM13 3C13 2.724 12.776 2.5 12.5 2.5H3.5C3.224 2.5 3 2.724 3 3V10H8V11.5H1.5V12C1.5 12.276 1.724 12.5 2 12.5H8V14H2C0.895 14 0 13.105 0 12V10.75L0.004 10.673C0.043 10.295 0.362 10 0.75 10H1.5V3C1.5 1.895 2.395 1 3.5 1H12.5C13.605 1 14.5 1.895 14.5 3V4.5H13V3ZM16 14C16 15.105 15.105 16 14 16H11.5C10.395 16 9.5 15.105 9.5 14V8C9.5 6.895 10.395 6 11.5 6H14C15.105 6 16 6.895 16 8V14Z"/>
  </svg>
);

const aDSDevicesIconDefinition = svgToIconDefinition(
  aDSDevicesSvg,
  'ads-devices'
);

/**![ADSDevices](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNy43MjQgMTQuMjc2IDcuNSAxNCA3LjVIMTEuNUMxMS4yMjQgNy41IDExIDcuNzI0IDExIDhWMTRDMTEgMTQuMjc2IDExLjIyNCAxNC41IDExLjUgMTQuNUgxNEMxNC4yNzYgMTQuNSAxNC41IDE0LjI3NiAxNC41IDE0VjhaTTEzIDNDMTMgMi43MjQgMTIuNzc2IDIuNSAxMi41IDIuNUgzLjVDMy4yMjQgMi41IDMgMi43MjQgMyAzVjEwSDhWMTEuNUgxLjVWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUg4VjE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlYxMC43NUwwLjAwNCAxMC42NzNDMC4wNDMgMTAuMjk1IDAuMzYyIDEwIDAuNzUgMTBIMS41VjNDMS41IDEuODk1IDIuMzk1IDEgMy41IDFIMTIuNUMxMy42MDUgMSAxNC41IDEuODk1IDE0LjUgM1Y0LjVIMTNWM1pNMTYgMTRDMTYgMTUuMTA1IDE1LjEwNSAxNiAxNCAxNkgxMS41QzEwLjM5NSAxNiA5LjUgMTUuMTA1IDkuNSAxNFY4QzkuNSA2Ljg5NSAxMC4zOTUgNiAxMS41IDZIMTRDMTUuMTA1IDYgMTYgNi44OTUgMTYgOFYxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDevicesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDevices';
}

export default RefIcon;
