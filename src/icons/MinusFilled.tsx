// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const minusFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.8824 9.88235C23.0519 9.88235 24 10.8305 24 12C24 13.1695 23.0519 14.1176 21.8824 14.1176H2.11765C0.948103 14.1176 0 13.1695 0 12C0 10.8305 0.948103 9.88235 2.11765 9.88235H21.8824Z"/>
  </svg>
);

const minusFilledIconDefinition = svgToIconDefinition(
  minusFilledSvg,
  'minus-filled'
);

/**![MinusFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuODgyNCA5Ljg4MjM1QzIzLjA1MTkgOS44ODIzNSAyNCAxMC44MzA1IDI0IDEyQzI0IDEzLjE2OTUgMjMuMDUxOSAxNC4xMTc2IDIxLjg4MjQgMTQuMTE3NkgyLjExNzY1QzAuOTQ4MTAzIDE0LjExNzYgMCAxMy4xNjk1IDAgMTJDMCAxMC44MzA1IDAuOTQ4MTAzIDkuODgyMzUgMi4xMTc2NSA5Ljg4MjM1SDIxLjg4MjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={minusFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusFilled';
}

export default RefIcon;
