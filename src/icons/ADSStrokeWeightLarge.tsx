// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightLargeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 8C4.25 5.929 5.929 4.25 8 4.25C10.071 4.25 11.75 5.929 11.75 8C11.75 10.071 10.071 11.75 8 11.75C5.929 11.75 4.25 10.071 4.25 8Z"/>
  </svg>
);

const aDSStrokeWeightLargeIconDefinition = svgToIconDefinition(
  aDSStrokeWeightLargeSvg,
  'ads-stroke-weight-large'
);

/**![ADSStrokeWeightLarge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMjUgOEM0LjI1IDUuOTI5IDUuOTI5IDQuMjUgOCA0LjI1QzEwLjA3MSA0LjI1IDExLjc1IDUuOTI5IDExLjc1IDhDMTEuNzUgMTAuMDcxIDEwLjA3MSAxMS43NSA4IDExLjc1QzUuOTI5IDExLjc1IDQuMjUgMTAuMDcxIDQuMjUgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightLargeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightLarge';
}

export default RefIcon;
