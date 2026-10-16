// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedDownLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 6C13.5 7.657 12.157 9 10.5 9H3.561L6.78 5.78L5.72 4.72L1.22 9.22C1.079 9.36 1 9.551 1 9.75C1 9.949 1.079 10.14 1.22 10.28L5.72 14.78L6.78 13.72L3.561 10.5H10.5C12.985 10.5 15 8.485 15 6V1H13.5V6Z"/>
  </svg>
);

const aDSArrowCurvedDownLeftIconDefinition = svgToIconDefinition(
  aDSArrowCurvedDownLeftSvg,
  'ads-arrow-curved-down-left'
);

/**![ADSArrowCurvedDownLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSA2QzEzLjUgNy42NTcgMTIuMTU3IDkgMTAuNSA5SDMuNTYxTDYuNzggNS43OEw1LjcyIDQuNzJMMS4yMiA5LjIyQzEuMDc5IDkuMzYgMSA5LjU1MSAxIDkuNzVDMSA5Ljk0OSAxLjA3OSAxMC4xNCAxLjIyIDEwLjI4TDUuNzIgMTQuNzhMNi43OCAxMy43MkwzLjU2MSAxMC41SDEwLjVDMTIuOTg1IDEwLjUgMTUgOC40ODUgMTUgNlYxSDEzLjVWNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedDownLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedDownLeft';
}

export default RefIcon;
