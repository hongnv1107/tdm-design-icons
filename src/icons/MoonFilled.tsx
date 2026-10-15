// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const moonFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.6691 0V0.0535714C13.9905 0.0535714 14.3655 0.0535714 14.6869 0.0535714C15.0619 0.107143 15.3834 0.375 15.4369 0.75C15.5441 1.125 15.3834 1.5 15.0619 1.66071C12.1691 3.26786 10.2405 6.375 10.2405 9.85714C10.2405 15.1071 14.4727 19.2857 19.6691 19.2857C20.2048 19.2857 20.7405 19.2857 21.2762 19.1786C21.6512 19.125 22.0262 19.2857 22.1869 19.6071C22.3477 19.9821 22.2941 20.3571 22.0262 20.625C19.8834 22.7143 16.9369 24 13.6691 24C7.0798 24 1.72266 18.6429 1.72266 12C1.72266 5.41071 7.0798 0 13.6691 0Z"/>
  </svg>
);

const moonFilledIconDefinition = svgToIconDefinition(
  moonFilledSvg,
  'moon-filled'
);

/**![MoonFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNjY5MSAwVjAuMDUzNTcxNEMxMy45OTA1IDAuMDUzNTcxNCAxNC4zNjU1IDAuMDUzNTcxNCAxNC42ODY5IDAuMDUzNTcxNEMxNS4wNjE5IDAuMTA3MTQzIDE1LjM4MzQgMC4zNzUgMTUuNDM2OSAwLjc1QzE1LjU0NDEgMS4xMjUgMTUuMzgzNCAxLjUgMTUuMDYxOSAxLjY2MDcxQzEyLjE2OTEgMy4yNjc4NiAxMC4yNDA1IDYuMzc1IDEwLjI0MDUgOS44NTcxNEMxMC4yNDA1IDE1LjEwNzEgMTQuNDcyNyAxOS4yODU3IDE5LjY2OTEgMTkuMjg1N0MyMC4yMDQ4IDE5LjI4NTcgMjAuNzQwNSAxOS4yODU3IDIxLjI3NjIgMTkuMTc4NkMyMS42NTEyIDE5LjEyNSAyMi4wMjYyIDE5LjI4NTcgMjIuMTg2OSAxOS42MDcxQzIyLjM0NzcgMTkuOTgyMSAyMi4yOTQxIDIwLjM1NzEgMjIuMDI2MiAyMC42MjVDMTkuODgzNCAyMi43MTQzIDE2LjkzNjkgMjQgMTMuNjY5MSAyNEM3LjA3OTggMjQgMS43MjI2NiAxOC42NDI5IDEuNzIyNjYgMTJDMS43MjI2NiA1LjQxMDcxIDcuMDc5OCAwIDEzLjY2OTEgMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={moonFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoonFilled';
}

export default RefIcon;
