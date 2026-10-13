// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const diamondFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.3125 0.5625L23.4375 10.6875C23.8125 11.0625 24 11.5 24 12C24 12.5 23.8125 12.9375 23.4375 13.3125L13.3125 23.4375C12.9375 23.8125 12.5 24 12 24C11.5 24 11.0625 23.8125 10.6875 23.4375L0.5625 13.3125C0.1875 12.9375 0 12.5 0 12C0 11.5 0.1875 11.0625 0.5625 10.6875L10.6875 0.5625C11.0625 0.1875 11.5 0 12 0C12.5 0 12.9375 0.1875 13.3125 0.5625Z"/>
  </svg>
);

const diamondFilledIconDefinition = svgToIconDefinition(
  diamondFilledSvg,
  'diamond-filled'
);

/**![DiamondFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMzEyNSAwLjU2MjVMMjMuNDM3NSAxMC42ODc1QzIzLjgxMjUgMTEuMDYyNSAyNCAxMS41IDI0IDEyQzI0IDEyLjUgMjMuODEyNSAxMi45Mzc1IDIzLjQzNzUgMTMuMzEyNUwxMy4zMTI1IDIzLjQzNzVDMTIuOTM3NSAyMy44MTI1IDEyLjUgMjQgMTIgMjRDMTEuNSAyNCAxMS4wNjI1IDIzLjgxMjUgMTAuNjg3NSAyMy40Mzc1TDAuNTYyNSAxMy4zMTI1QzAuMTg3NSAxMi45Mzc1IDAgMTIuNSAwIDEyQzAgMTEuNSAwLjE4NzUgMTEuMDYyNSAwLjU2MjUgMTAuNjg3NUwxMC42ODc1IDAuNTYyNUMxMS4wNjI1IDAuMTg3NSAxMS41IDAgMTIgMEMxMi41IDAgMTIuOTM3NSAwLjE4NzUgMTMuMzEyNSAwLjU2MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={diamondFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DiamondFilled';
}

export default RefIcon;
