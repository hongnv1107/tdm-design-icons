// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const clapperboardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21 1.5C21.0938 1.5 21.1875 1.5 21.2812 1.5L15.2812 7.5H10.9688L16.9688 1.5H21ZM24 7.5H18.4688L23.3438 2.625C23.7812 3.15625 24 3.78125 24 4.5V7.5ZM13.7812 1.5L7.78125 7.5H3.46875L9.46875 1.5H13.7812ZM3 1.5H6.28125L0.28125 7.5H0V4.5C0.03125 3.65625 0.328125 2.95312 0.890625 2.39062C1.45312 1.82812 2.15625 1.53125 3 1.5ZM24 9V19.5C23.9688 20.3438 23.6719 21.0469 23.1094 21.6094C22.5469 22.1719 21.8438 22.4688 21 22.5H3C2.15625 22.4688 1.45312 22.1719 0.890625 21.6094C0.328125 21.0469 0.03125 20.3438 0 19.5V9H24Z"/>
  </svg>
);

const clapperboardFilledIconDefinition = svgToIconDefinition(
  clapperboardFilledSvg,
  'clapperboard-filled'
);

/**![ClapperboardFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEgMS41QzIxLjA5MzggMS41IDIxLjE4NzUgMS41IDIxLjI4MTIgMS41TDE1LjI4MTIgNy41SDEwLjk2ODhMMTYuOTY4OCAxLjVIMjFaTTI0IDcuNUgxOC40Njg4TDIzLjM0MzggMi42MjVDMjMuNzgxMiAzLjE1NjI1IDI0IDMuNzgxMjUgMjQgNC41VjcuNVpNMTMuNzgxMiAxLjVMNy43ODEyNSA3LjVIMy40Njg3NUw5LjQ2ODc1IDEuNUgxMy43ODEyWk0zIDEuNUg2LjI4MTI1TDAuMjgxMjUgNy41SDBWNC41QzAuMDMxMjUgMy42NTYyNSAwLjMyODEyNSAyLjk1MzEyIDAuODkwNjI1IDIuMzkwNjJDMS40NTMxMiAxLjgyODEyIDIuMTU2MjUgMS41MzEyNSAzIDEuNVpNMjQgOVYxOS41QzIzLjk2ODggMjAuMzQzOCAyMy42NzE5IDIxLjA0NjkgMjMuMTA5NCAyMS42MDk0QzIyLjU0NjkgMjIuMTcxOSAyMS44NDM4IDIyLjQ2ODggMjEgMjIuNUgzQzIuMTU2MjUgMjIuNDY4OCAxLjQ1MzEyIDIyLjE3MTkgMC44OTA2MjUgMjEuNjA5NEMwLjMyODEyNSAyMS4wNDY5IDAuMDMxMjUgMjAuMzQzOCAwIDE5LjVWOUgyNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={clapperboardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ClapperboardFilled';
}

export default RefIcon;
