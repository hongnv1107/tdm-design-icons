// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedRightDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 2.5C7.657 2.5 9 3.843 9 5.5V12.44L5.78 9.22L4.72 10.28L9.22 14.78C9.36 14.921 9.551 15 9.75 15C9.949 15 10.14 14.921 10.28 14.78L14.78 10.28L13.72 9.22L10.5 12.44V5.5C10.5 3.015 8.485 1 6 1L1 1L1 2.5L6 2.5Z"/>
  </svg>
);

const aDSArrowCurvedRightDownIconDefinition = svgToIconDefinition(
  aDSArrowCurvedRightDownSvg,
  'ads-arrow-curved-right-down'
);

/**![ADSArrowCurvedRightDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiAyLjVDNy42NTcgMi41IDkgMy44NDMgOSA1LjVWMTIuNDRMNS43OCA5LjIyTDQuNzIgMTAuMjhMOS4yMiAxNC43OEM5LjM2IDE0LjkyMSA5LjU1MSAxNSA5Ljc1IDE1QzkuOTQ5IDE1IDEwLjE0IDE0LjkyMSAxMC4yOCAxNC43OEwxNC43OCAxMC4yOEwxMy43MiA5LjIyTDEwLjUgMTIuNDRWNS41QzEwLjUgMy4wMTUgOC40ODUgMSA2IDFMMSAxTDEgMi41TDYgMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedRightDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedRightDown';
}

export default RefIcon;
