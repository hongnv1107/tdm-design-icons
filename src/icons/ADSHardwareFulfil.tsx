// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareFulfilSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M15.446 1.988L11.612 6.488C11.47 6.655 11.262 6.752 11.042 6.752C10.822 6.752 10.613 6.656 10.471 6.488L8.554 4.238L9.696 3.266L11.041 4.845L14.304 1.016L15.446 1.988Z"/>
  </svg>
);

const aDSHardwareFulfilIconDefinition = svgToIconDefinition(
  aDSHardwareFulfilSvg,
  'ads-hardware-fulfil'
);

/**![ADSHardwareFulfil](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxMFYzQzEgMS44OTUgMS44OTUgMSAzIDFIN1YyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEwQzIuNSAxMC4yNzYgMi43MjQgMTAuNSAzIDEwLjVIMTNDMTMuMjc2IDEwLjUgMTMuNSAxMC4yNzYgMTMuNSAxMFY4SDE1VjEwQzE1IDExLjEwNSAxNC4xMDUgMTIgMTMgMTJIOC43NVYxMy41SDEyVjE1SDRWMTMuNUg3LjI1VjEySDNDMS44OTUgMTIgMSAxMS4xMDUgMSAxMFoiLz48cGF0aCBkPSJNMTUuNDQ2IDEuOTg4TDExLjYxMiA2LjQ4OEMxMS40NyA2LjY1NSAxMS4yNjIgNi43NTIgMTEuMDQyIDYuNzUyQzEwLjgyMiA2Ljc1MiAxMC42MTMgNi42NTYgMTAuNDcxIDYuNDg4TDguNTU0IDQuMjM4TDkuNjk2IDMuMjY2TDExLjA0MSA0Ljg0NUwxNC4zMDQgMS4wMTZMMTUuNDQ2IDEuOTg4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareFulfilIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareFulfil';
}

export default RefIcon;
