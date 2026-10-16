// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareShipSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M14.78 0.721C14.935 0.876 15.014 1.091 14.998 1.309L14.748 4.559C14.721 4.915 14.446 5.203 14.092 5.246C13.737 5.29 13.402 5.078 13.289 4.739L12.923 3.64L9.78 6.782L8.719 5.722L11.862 2.579L10.763 2.213C10.424 2.1 10.212 1.765 10.256 1.41C10.299 1.056 10.587 0.781 10.943 0.754L14.193 0.504L14.274 0.502C14.463 0.508 14.645 0.586 14.78 0.721Z"/>
  </svg>
);

const aDSHardwareShipIconDefinition = svgToIconDefinition(
  aDSHardwareShipSvg,
  'ads-hardware-ship'
);

/**![ADSHardwareShip](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxMFYzQzEgMS44OTUgMS44OTUgMSAzIDFIN1YyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEwQzIuNSAxMC4yNzYgMi43MjQgMTAuNSAzIDEwLjVIMTNDMTMuMjc2IDEwLjUgMTMuNSAxMC4yNzYgMTMuNSAxMFY4SDE1VjEwQzE1IDExLjEwNSAxNC4xMDUgMTIgMTMgMTJIOC43NVYxMy41SDEyVjE1SDRWMTMuNUg3LjI1VjEySDNDMS44OTUgMTIgMSAxMS4xMDUgMSAxMFoiLz48cGF0aCBkPSJNMTQuNzggMC43MjFDMTQuOTM1IDAuODc2IDE1LjAxNCAxLjA5MSAxNC45OTggMS4zMDlMMTQuNzQ4IDQuNTU5QzE0LjcyMSA0LjkxNSAxNC40NDYgNS4yMDMgMTQuMDkyIDUuMjQ2QzEzLjczNyA1LjI5IDEzLjQwMiA1LjA3OCAxMy4yODkgNC43MzlMMTIuOTIzIDMuNjRMOS43OCA2Ljc4Mkw4LjcxOSA1LjcyMkwxMS44NjIgMi41NzlMMTAuNzYzIDIuMjEzQzEwLjQyNCAyLjEgMTAuMjEyIDEuNzY1IDEwLjI1NiAxLjQxQzEwLjI5OSAxLjA1NiAxMC41ODcgMC43ODEgMTAuOTQzIDAuNzU0TDE0LjE5MyAwLjUwNEwxNC4yNzQgMC41MDJDMTQuNDYzIDAuNTA4IDE0LjY0NSAwLjU4NiAxNC43OCAwLjcyMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareShipIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareShip';
}

export default RefIcon;
