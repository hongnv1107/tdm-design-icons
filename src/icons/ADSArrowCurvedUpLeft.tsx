// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedUpLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 10C13.5 8.343 12.157 7 10.5 7H3.561L6.78 10.22L5.72 11.28L1.22 6.78C1.079 6.64 1 6.449 1 6.25C1 6.051 1.079 5.86 1.22 5.72L5.72 1.22L6.78 2.28L3.561 5.5H10.5C12.985 5.5 15 7.515 15 10V15H13.5V10Z"/>
  </svg>
);

const aDSArrowCurvedUpLeftIconDefinition = svgToIconDefinition(
  aDSArrowCurvedUpLeftSvg,
  'ads-arrow-curved-up-left'
);

/**![ADSArrowCurvedUpLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAxMEMxMy41IDguMzQzIDEyLjE1NyA3IDEwLjUgN0gzLjU2MUw2Ljc4IDEwLjIyTDUuNzIgMTEuMjhMMS4yMiA2Ljc4QzEuMDc5IDYuNjQgMSA2LjQ0OSAxIDYuMjVDMSA2LjA1MSAxLjA3OSA1Ljg2IDEuMjIgNS43Mkw1LjcyIDEuMjJMNi43OCAyLjI4TDMuNTYxIDUuNUgxMC41QzEyLjk4NSA1LjUgMTUgNy41MTUgMTUgMTBWMTVIMTMuNVYxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedUpLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedUpLeft';
}

export default RefIcon;
