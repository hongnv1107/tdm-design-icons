// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedDownRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 6C2.5 7.657 3.843 9 5.5 9H12.44L9.22 5.78L10.28 4.72L14.78 9.22C14.921 9.36 15 9.551 15 9.75C15 9.949 14.921 10.14 14.78 10.28L10.28 14.78L9.22 13.72L12.44 10.5H5.5C3.015 10.5 1 8.485 1 6V1H2.5V6Z"/>
  </svg>
);

const aDSArrowCurvedDownRightIconDefinition = svgToIconDefinition(
  aDSArrowCurvedDownRightSvg,
  'ads-arrow-curved-down-right'
);

/**![ADSArrowCurvedDownRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi41IDZDMi41IDcuNjU3IDMuODQzIDkgNS41IDlIMTIuNDRMOS4yMiA1Ljc4TDEwLjI4IDQuNzJMMTQuNzggOS4yMkMxNC45MjEgOS4zNiAxNSA5LjU1MSAxNSA5Ljc1QzE1IDkuOTQ5IDE0LjkyMSAxMC4xNCAxNC43OCAxMC4yOEwxMC4yOCAxNC43OEw5LjIyIDEzLjcyTDEyLjQ0IDEwLjVINS41QzMuMDE1IDEwLjUgMSA4LjQ4NSAxIDZWMUgyLjVWNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedDownRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedDownRight';
}

export default RefIcon;
