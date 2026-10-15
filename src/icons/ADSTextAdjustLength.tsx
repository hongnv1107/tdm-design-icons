// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextAdjustLengthSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.25 1C3.449 1 3.64 1.079 3.78 1.22L6.28 3.72L5.22 4.78L4 3.561V12.44L5.22 11.22L6.28 12.28L3.78 14.78C3.487 15.073 3.013 15.073 2.72 14.78L0.22 12.28L1.28 11.22L2.5 12.44V3.561L1.28 4.78L0.22 3.72L2.72 1.22L2.834 1.126C2.956 1.044 3.101 1 3.25 1ZM13 11.5V13H8V11.5H13ZM16 7.25V8.75H8V7.25H16ZM16 3V4.5H8V3H16Z"/>
  </svg>
);

const aDSTextAdjustLengthIconDefinition = svgToIconDefinition(
  aDSTextAdjustLengthSvg,
  'ads-text-adjust-length'
);

/**![ADSTextAdjustLength](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy4yNSAxQzMuNDQ5IDEgMy42NCAxLjA3OSAzLjc4IDEuMjJMNi4yOCAzLjcyTDUuMjIgNC43OEw0IDMuNTYxVjEyLjQ0TDUuMjIgMTEuMjJMNi4yOCAxMi4yOEwzLjc4IDE0Ljc4QzMuNDg3IDE1LjA3MyAzLjAxMyAxNS4wNzMgMi43MiAxNC43OEwwLjIyIDEyLjI4TDEuMjggMTEuMjJMMi41IDEyLjQ0VjMuNTYxTDEuMjggNC43OEwwLjIyIDMuNzJMMi43MiAxLjIyTDIuODM0IDEuMTI2QzIuOTU2IDEuMDQ0IDMuMTAxIDEgMy4yNSAxWk0xMyAxMS41VjEzSDhWMTEuNUgxM1pNMTYgNy4yNVY4Ljc1SDhWNy4yNUgxNlpNMTYgM1Y0LjVIOFYzSDE2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextAdjustLengthIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextAdjustLength';
}

export default RefIcon;
