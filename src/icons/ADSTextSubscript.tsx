// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSubscriptSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.256 8L9.948 14H8.187L5.396 9.465L2.779 14H1.048L4.509 8L1.048 2H2.779L5.396 6.534L8.187 2H9.948L6.256 8Z"/><path d="M13.75 8.5L13.827 8.504C14.205 8.543 14.5 8.862 14.5 9.25V16H13V10H12V8.5H13.75Z"/>
  </svg>
);

const aDSTextSubscriptIconDefinition = svgToIconDefinition(
  aDSTextSubscriptSvg,
  'ads-text-subscript'
);

/**![ADSTextSubscript](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi4yNTYgOEw5Ljk0OCAxNEg4LjE4N0w1LjM5NiA5LjQ2NUwyLjc3OSAxNEgxLjA0OEw0LjUwOSA4TDEuMDQ4IDJIMi43NzlMNS4zOTYgNi41MzRMOC4xODcgMkg5Ljk0OEw2LjI1NiA4WiIvPjxwYXRoIGQ9Ik0xMy43NSA4LjVMMTMuODI3IDguNTA0QzE0LjIwNSA4LjU0MyAxNC41IDguODYyIDE0LjUgOS4yNVYxNkgxM1YxMEgxMlY4LjVIMTMuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSubscriptIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSubscript';
}

export default RefIcon;
