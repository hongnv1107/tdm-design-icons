// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.53 6.03L8.53 12.03C8.256 12.305 7.821 12.322 7.526 12.082L7.47 12.03L1.47 6.03L2.53 4.97L8 10.44L13.47 4.97L14.53 6.03Z"/>
  </svg>
);

const aDSChevronDownIconDefinition = svgToIconDefinition(
  aDSChevronDownSvg,
  'ads-chevron-down'
);

/**![ADSChevronDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNTMgNi4wM0w4LjUzIDEyLjAzQzguMjU2IDEyLjMwNSA3LjgyMSAxMi4zMjIgNy41MjYgMTIuMDgyTDcuNDcgMTIuMDNMMS40NyA2LjAzTDIuNTMgNC45N0w4IDEwLjQ0TDEzLjQ3IDQuOTdMMTQuNTMgNi4wM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDown';
}

export default RefIcon;
