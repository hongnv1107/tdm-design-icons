// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeDiamondSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.028 0.662C7.565 0.125 8.435 0.125 8.972 0.662L15.338 7.028C15.875 7.565 15.875 8.435 15.338 8.972L8.972 15.338C8.435 15.875 7.565 15.875 7.028 15.338L0.662 8.972C0.125 8.435 0.125 7.565 0.662 7.028L7.028 0.662ZM8 1.811L1.811 8L8 14.189L14.189 8L8 1.811Z"/>
  </svg>
);

const aDSShapeDiamondIconDefinition = svgToIconDefinition(
  aDSShapeDiamondSvg,
  'ads-shape-diamond'
);

/**![ADSShapeDiamond](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMDI4IDAuNjYyQzcuNTY1IDAuMTI1IDguNDM1IDAuMTI1IDguOTcyIDAuNjYyTDE1LjMzOCA3LjAyOEMxNS44NzUgNy41NjUgMTUuODc1IDguNDM1IDE1LjMzOCA4Ljk3Mkw4Ljk3MiAxNS4zMzhDOC40MzUgMTUuODc1IDcuNTY1IDE1Ljg3NSA3LjAyOCAxNS4zMzhMMC42NjIgOC45NzJDMC4xMjUgOC40MzUgMC4xMjUgNy41NjUgMC42NjIgNy4wMjhMNy4wMjggMC42NjJaTTggMS44MTFMMS44MTEgOEw4IDE0LjE4OUwxNC4xODkgOEw4IDEuODExWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeDiamondIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeDiamond';
}

export default RefIcon;
