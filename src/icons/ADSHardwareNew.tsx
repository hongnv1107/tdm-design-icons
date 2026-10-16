// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareNewSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M13.5 0V2.25H15.75V3.75H13.5V6H12V3.75H9.75V2.25H12V0H13.5Z"/>
  </svg>
);

const aDSHardwareNewIconDefinition = svgToIconDefinition(
  aDSHardwareNewSvg,
  'ads-hardware-new'
);

/**![ADSHardwareNew](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxMFYzQzEgMS44OTUgMS44OTUgMSAzIDFIN1YyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEwQzIuNSAxMC4yNzYgMi43MjQgMTAuNSAzIDEwLjVIMTNDMTMuMjc2IDEwLjUgMTMuNSAxMC4yNzYgMTMuNSAxMFY4SDE1VjEwQzE1IDExLjEwNSAxNC4xMDUgMTIgMTMgMTJIOC43NVYxMy41SDEyVjE1SDRWMTMuNUg3LjI1VjEySDNDMS44OTUgMTIgMSAxMS4xMDUgMSAxMFoiLz48cGF0aCBkPSJNMTMuNSAwVjIuMjVIMTUuNzVWMy43NUgxMy41VjZIMTJWMy43NUg5Ljc1VjIuMjVIMTJWMEgxMy41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareNewIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareNew';
}

export default RefIcon;
