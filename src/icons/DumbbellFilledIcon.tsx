// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dumbbellFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 6C5 5.46875 5.4375 5 6 5H7C7.53125 5 8 5.46875 8 6V11V13V18C8 18.5625 7.53125 19 7 19H6C5.4375 19 5 18.5625 5 18V16H4C3.4375 16 3 15.5625 3 15V13C2.4375 13 2 12.5625 2 12C2 11.4688 2.4375 11 3 11V9C3 8.46875 3.4375 8 4 8H5V6ZM19 6V8H20C20.5312 8 21 8.46875 21 9V11C21.5312 11 22 11.4688 22 12C22 12.5625 21.5312 13 21 13V15C21 15.5625 20.5312 16 20 16H19V18C19 18.5625 18.5312 19 18 19H17C16.4375 19 16 18.5625 16 18V13V11V6C16 5.46875 16.4375 5 17 5H18C18.5312 5 19 5.46875 19 6ZM15 11V13H9V11H15Z"/>
  </svg>
);

const dumbbellFilledIconDefinition = svgToIconDefinition(
  dumbbellFilledSvg,
  'dumbbell-filled'
);

/**![DumbbellFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNSA2QzUgNS40Njg3NSA1LjQzNzUgNSA2IDVIN0M3LjUzMTI1IDUgOCA1LjQ2ODc1IDggNlYxMVYxM1YxOEM4IDE4LjU2MjUgNy41MzEyNSAxOSA3IDE5SDZDNS40Mzc1IDE5IDUgMTguNTYyNSA1IDE4VjE2SDRDMy40Mzc1IDE2IDMgMTUuNTYyNSAzIDE1VjEzQzIuNDM3NSAxMyAyIDEyLjU2MjUgMiAxMkMyIDExLjQ2ODggMi40Mzc1IDExIDMgMTFWOUMzIDguNDY4NzUgMy40Mzc1IDggNCA4SDVWNlpNMTkgNlY4SDIwQzIwLjUzMTIgOCAyMSA4LjQ2ODc1IDIxIDlWMTFDMjEuNTMxMiAxMSAyMiAxMS40Njg4IDIyIDEyQzIyIDEyLjU2MjUgMjEuNTMxMiAxMyAyMSAxM1YxNUMyMSAxNS41NjI1IDIwLjUzMTIgMTYgMjAgMTZIMTlWMThDMTkgMTguNTYyNSAxOC41MzEyIDE5IDE4IDE5SDE3QzE2LjQzNzUgMTkgMTYgMTguNTYyNSAxNiAxOFYxM1YxMVY2QzE2IDUuNDY4NzUgMTYuNDM3NSA1IDE3IDVIMThDMTguNTMxMiA1IDE5IDUuNDY4NzUgMTkgNlpNMTUgMTFWMTNIOVYxMUgxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dumbbellFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DumbbellFilledIcon';
}

export default RefIcon;
