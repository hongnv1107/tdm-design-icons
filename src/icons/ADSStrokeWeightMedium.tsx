// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightMediumSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 8C5.25 6.481 6.481 5.25 8 5.25C9.519 5.25 10.75 6.481 10.75 8C10.75 9.519 9.519 10.75 8 10.75C6.481 10.75 5.25 9.519 5.25 8Z"/>
  </svg>
);

const aDSStrokeWeightMediumIconDefinition = svgToIconDefinition(
  aDSStrokeWeightMediumSvg,
  'ads-stroke-weight-medium'
);

/**![ADSStrokeWeightMedium](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgOEM1LjI1IDYuNDgxIDYuNDgxIDUuMjUgOCA1LjI1QzkuNTE5IDUuMjUgMTAuNzUgNi40ODEgMTAuNzUgOEMxMC43NSA5LjUxOSA5LjUxOSAxMC43NSA4IDEwLjc1QzYuNDgxIDEwLjc1IDUuMjUgOS41MTkgNS4yNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightMediumIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightMedium';
}

export default RefIcon;
