// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextSuperscriptSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.256 8L9.948 14H8.187L5.396 9.465L2.779 14H1.048L4.509 8L1.048 2H2.779L5.396 6.534L8.187 2H9.948L6.256 8Z"/><path d="M13.75 0L13.827 0.004C14.205 0.043 14.5 0.362 14.5 0.75V7.5H13V1.5H12V0H13.75Z"/>
  </svg>
);

const aDSTextSuperscriptIconDefinition = svgToIconDefinition(
  aDSTextSuperscriptSvg,
  'ads-text-superscript'
);

/**![ADSTextSuperscript](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi4yNTYgOEw5Ljk0OCAxNEg4LjE4N0w1LjM5NiA5LjQ2NUwyLjc3OSAxNEgxLjA0OEw0LjUwOSA4TDEuMDQ4IDJIMi43NzlMNS4zOTYgNi41MzRMOC4xODcgMkg5Ljk0OEw2LjI1NiA4WiIvPjxwYXRoIGQ9Ik0xMy43NSAwTDEzLjgyNyAwLjAwNEMxNC4yMDUgMC4wNDMgMTQuNSAwLjM2MiAxNC41IDAuNzVWNy41SDEzVjEuNUgxMlYwSDEzLjc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextSuperscriptIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextSuperscript';
}

export default RefIcon;
