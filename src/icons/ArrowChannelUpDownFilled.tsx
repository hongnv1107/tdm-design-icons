// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowChannelUpDownFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10.796 0.521739C11.4381 -0.173913 12.5619 -0.173913 13.204 0.521739L20.0535 7.37124C20.5351 7.85284 20.6956 8.60201 20.4281 9.24415C20.1605 9.88629 19.5719 10.3144 18.8762 10.3144H5.17725C4.4816 10.3144 3.83946 9.88629 3.5719 9.24415C3.30434 8.60201 3.46488 7.85284 3.94648 7.37124L10.796 0.521739ZM10.796 23.4783L3.94648 16.6288C3.46488 16.1472 3.30434 15.398 3.5719 14.7559C3.83946 14.1137 4.4816 13.6856 5.17725 13.6856H18.8762C19.5184 13.6856 20.1605 14.1137 20.4281 14.7559C20.6956 15.398 20.5351 16.1472 20.0535 16.6288L13.204 23.4783C12.5619 24.1739 11.4381 24.1739 10.796 23.4783Z"/>
  </svg>
);

const arrowChannelUpDownFilledIconDefinition = svgToIconDefinition(
  arrowChannelUpDownFilledSvg,
  'arrow-channel-up-down-filled'
);

/**![ArrowChannelUpDownFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAuNzk2IDAuNTIxNzM5QzExLjQzODEgLTAuMTczOTEzIDEyLjU2MTkgLTAuMTczOTEzIDEzLjIwNCAwLjUyMTczOUwyMC4wNTM1IDcuMzcxMjRDMjAuNTM1MSA3Ljg1Mjg0IDIwLjY5NTYgOC42MDIwMSAyMC40MjgxIDkuMjQ0MTVDMjAuMTYwNSA5Ljg4NjI5IDE5LjU3MTkgMTAuMzE0NCAxOC44NzYyIDEwLjMxNDRINS4xNzcyNUM0LjQ4MTYgMTAuMzE0NCAzLjgzOTQ2IDkuODg2MjkgMy41NzE5IDkuMjQ0MTVDMy4zMDQzNCA4LjYwMjAxIDMuNDY0ODggNy44NTI4NCAzLjk0NjQ4IDcuMzcxMjRMMTAuNzk2IDAuNTIxNzM5Wk0xMC43OTYgMjMuNDc4M0wzLjk0NjQ4IDE2LjYyODhDMy40NjQ4OCAxNi4xNDcyIDMuMzA0MzQgMTUuMzk4IDMuNTcxOSAxNC43NTU5QzMuODM5NDYgMTQuMTEzNyA0LjQ4MTYgMTMuNjg1NiA1LjE3NzI1IDEzLjY4NTZIMTguODc2MkMxOS41MTg0IDEzLjY4NTYgMjAuMTYwNSAxNC4xMTM3IDIwLjQyODEgMTQuNzU1OUMyMC42OTU2IDE1LjM5OCAyMC41MzUxIDE2LjE0NzIgMjAuMDUzNSAxNi42Mjg4TDEzLjIwNCAyMy40NzgzQzEyLjU2MTkgMjQuMTczOSAxMS40MzgxIDI0LjE3MzkgMTAuNzk2IDIzLjQ3ODNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowChannelUpDownFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowChannelUpDownFilled';
}

export default RefIcon;
