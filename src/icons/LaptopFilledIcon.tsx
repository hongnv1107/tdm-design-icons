// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const laptopFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.6 5.70001H17.4C17.9062 5.71876 18.3281 5.89689 18.6656 6.23439C19.0031 6.57189 19.1812 6.99376 19.2 7.50001V14.7H17.4V7.50001H6.6V14.7H4.8V7.50001C4.81875 6.99376 4.99687 6.57189 5.33437 6.23439C5.67188 5.89689 6.09375 5.71876 6.6 5.70001ZM3.53438 15.6H20.4656C20.7844 15.6375 20.9625 15.8156 21 16.1344C20.9812 16.7531 20.775 17.2688 20.3813 17.6813C19.9688 18.075 19.4531 18.2813 18.8344 18.3H5.16562C4.54688 18.2813 4.04062 18.075 3.64687 17.6813C3.23437 17.2688 3.01875 16.7531 3 16.1344C3.0375 15.8156 3.21563 15.6375 3.53438 15.6Z"/>
  </svg>
);

const laptopFilledIconDefinition = svgToIconDefinition(
  laptopFilledSvg,
  'laptop-filled'
);

/**![LaptopFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi42IDUuNzAwMDFIMTcuNEMxNy45MDYyIDUuNzE4NzYgMTguMzI4MSA1Ljg5Njg5IDE4LjY2NTYgNi4yMzQzOUMxOS4wMDMxIDYuNTcxODkgMTkuMTgxMiA2Ljk5Mzc2IDE5LjIgNy41MDAwMVYxNC43SDE3LjRWNy41MDAwMUg2LjZWMTQuN0g0LjhWNy41MDAwMUM0LjgxODc1IDYuOTkzNzYgNC45OTY4NyA2LjU3MTg5IDUuMzM0MzcgNi4yMzQzOUM1LjY3MTg4IDUuODk2ODkgNi4wOTM3NSA1LjcxODc2IDYuNiA1LjcwMDAxWk0zLjUzNDM4IDE1LjZIMjAuNDY1NkMyMC43ODQ0IDE1LjYzNzUgMjAuOTYyNSAxNS44MTU2IDIxIDE2LjEzNDRDMjAuOTgxMiAxNi43NTMxIDIwLjc3NSAxNy4yNjg4IDIwLjM4MTMgMTcuNjgxM0MxOS45Njg4IDE4LjA3NSAxOS40NTMxIDE4LjI4MTMgMTguODM0NCAxOC4zSDUuMTY1NjJDNC41NDY4OCAxOC4yODEzIDQuMDQwNjIgMTguMDc1IDMuNjQ2ODcgMTcuNjgxM0MzLjIzNDM3IDE3LjI2ODggMy4wMTg3NSAxNi43NTMxIDMgMTYuMTM0NEMzLjAzNzUgMTUuODE1NiAzLjIxNTYzIDE1LjYzNzUgMy41MzQzOCAxNS42WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={laptopFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LaptopFilledIcon';
}

export default RefIcon;
