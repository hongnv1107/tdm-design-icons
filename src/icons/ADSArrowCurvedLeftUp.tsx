// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedLeftUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 13.5C8.343 13.5 7 12.157 7 10.5V3.561L10.22 6.78L11.28 5.72L6.78 1.22C6.64 1.079 6.449 1 6.25 1C6.051 1 5.86 1.079 5.72 1.22L1.22 5.72L2.28 6.78L5.5 3.561V10.5C5.5 12.985 7.515 15 10 15H15V13.5H10Z"/>
  </svg>
);

const aDSArrowCurvedLeftUpIconDefinition = svgToIconDefinition(
  aDSArrowCurvedLeftUpSvg,
  'ads-arrow-curved-left-up'
);

/**![ADSArrowCurvedLeftUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTAgMTMuNUM4LjM0MyAxMy41IDcgMTIuMTU3IDcgMTAuNVYzLjU2MUwxMC4yMiA2Ljc4TDExLjI4IDUuNzJMNi43OCAxLjIyQzYuNjQgMS4wNzkgNi40NDkgMSA2LjI1IDFDNi4wNTEgMSA1Ljg2IDEuMDc5IDUuNzIgMS4yMkwxLjIyIDUuNzJMMi4yOCA2Ljc4TDUuNSAzLjU2MVYxMC41QzUuNSAxMi45ODUgNy41MTUgMTUgMTAgMTVIMTVWMTMuNUgxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedLeftUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedLeftUp';
}

export default RefIcon;
