// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightExtraLargeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 8C3.25 5.377 5.377 3.25 8 3.25C10.623 3.25 12.75 5.377 12.75 8C12.75 10.623 10.623 12.75 8 12.75C5.377 12.75 3.25 10.623 3.25 8Z"/>
  </svg>
);

const aDSStrokeWeightExtraLargeIconDefinition = svgToIconDefinition(
  aDSStrokeWeightExtraLargeSvg,
  'ads-stroke-weight-extra-large'
);

/**![ADSStrokeWeightExtraLarge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjUgOEMzLjI1IDUuMzc3IDUuMzc3IDMuMjUgOCAzLjI1QzEwLjYyMyAzLjI1IDEyLjc1IDUuMzc3IDEyLjc1IDhDMTIuNzUgMTAuNjIzIDEwLjYyMyAxMi43NSA4IDEyLjc1QzUuMzc3IDEyLjc1IDMuMjUgMTAuNjIzIDMuMjUgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightExtraLargeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightExtraLarge';
}

export default RefIcon;
