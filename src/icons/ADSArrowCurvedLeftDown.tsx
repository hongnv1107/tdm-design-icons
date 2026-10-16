// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedLeftDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 2.5C8.343 2.5 7 3.843 7 5.5V12.44L10.22 9.22L11.28 10.28L6.78 14.78C6.64 14.921 6.449 15 6.25 15C6.051 15 5.86 14.921 5.72 14.78L1.22 10.28L2.28 9.22L5.5 12.44V5.5C5.5 3.015 7.515 1 10 1H15V2.5H10Z"/>
  </svg>
);

const aDSArrowCurvedLeftDownIconDefinition = svgToIconDefinition(
  aDSArrowCurvedLeftDownSvg,
  'ads-arrow-curved-left-down'
);

/**![ADSArrowCurvedLeftDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAgMi41QzguMzQzIDIuNSA3IDMuODQzIDcgNS41VjEyLjQ0TDEwLjIyIDkuMjJMMTEuMjggMTAuMjhMNi43OCAxNC43OEM2LjY0IDE0LjkyMSA2LjQ0OSAxNSA2LjI1IDE1QzYuMDUxIDE1IDUuODYgMTQuOTIxIDUuNzIgMTQuNzhMMS4yMiAxMC4yOEwyLjI4IDkuMjJMNS41IDEyLjQ0VjUuNUM1LjUgMy4wMTUgNy41MTUgMSAxMCAxSDE1VjIuNUgxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedLeftDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedLeftDown';
}

export default RefIcon;
