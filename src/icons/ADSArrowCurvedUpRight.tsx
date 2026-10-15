// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 10C2.5 8.343 3.843 7 5.5 7H12.44L9.22 10.22L10.28 11.28L14.78 6.78C14.921 6.64 15 6.449 15 6.25C15 6.051 14.921 5.86 14.78 5.72L10.28 1.22L9.22 2.28L12.44 5.5H5.5C3.015 5.5 1 7.515 1 10V15H2.5V10Z"/>
  </svg>
);

const aDSArrowCurvedUpRightIconDefinition = svgToIconDefinition(
  aDSArrowCurvedUpRightSvg,
  'ads-arrow-curved-up-right'
);

/**![ADSArrowCurvedUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi41IDEwQzIuNSA4LjM0MyAzLjg0MyA3IDUuNSA3SDEyLjQ0TDkuMjIgMTAuMjJMMTAuMjggMTEuMjhMMTQuNzggNi43OEMxNC45MjEgNi42NCAxNSA2LjQ0OSAxNSA2LjI1QzE1IDYuMDUxIDE0LjkyMSA1Ljg2IDE0Ljc4IDUuNzJMMTAuMjggMS4yMkw5LjIyIDIuMjhMMTIuNDQgNS41SDUuNUMzLjAxNSA1LjUgMSA3LjUxNSAxIDEwVjE1SDIuNVYxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedUpRight';
}

export default RefIcon;
