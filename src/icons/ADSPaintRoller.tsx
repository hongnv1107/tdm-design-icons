// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPaintRollerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 0.75C1 0.336 1.336 0 1.75 0H11.75C12.164 0 12.5 0.336 12.5 0.75V1.75H13.625C14.384 1.75 15 2.366 15 3.125V5.5C15 6.605 14.105 7.5 13 7.5H7.75V9H8.25C8.664 9 9 9.336 9 9.75V14C9 15.105 8.105 16 7 16C5.895 16 5 15.105 5 14V9.75C5 9.336 5.336 9 5.75 9H6.25V7.388C6.25 6.621 6.871 6 7.638 6H13C13.276 6 13.5 5.776 13.5 5.5V3.25H12.5V4.25C12.5 4.664 12.164 5 11.75 5H1.75C1.336 5 1 4.664 1 4.25V0.75ZM6.5 10.5V14C6.5 14.276 6.724 14.5 7 14.5C7.276 14.5 7.5 14.276 7.5 14V10.5H6.5ZM2.5 1.5V3.5H11V1.5H2.5Z"/>
  </svg>
);

const aDSPaintRollerIconDefinition = svgToIconDefinition(
  aDSPaintRollerSvg,
  'ads-paint-roller'
);

/**![ADSPaintRoller](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMC43NUMxIDAuMzM2IDEuMzM2IDAgMS43NSAwSDExLjc1QzEyLjE2NCAwIDEyLjUgMC4zMzYgMTIuNSAwLjc1VjEuNzVIMTMuNjI1QzE0LjM4NCAxLjc1IDE1IDIuMzY2IDE1IDMuMTI1VjUuNUMxNSA2LjYwNSAxNC4xMDUgNy41IDEzIDcuNUg3Ljc1VjlIOC4yNUM4LjY2NCA5IDkgOS4zMzYgOSA5Ljc1VjE0QzkgMTUuMTA1IDguMTA1IDE2IDcgMTZDNS44OTUgMTYgNSAxNS4xMDUgNSAxNFY5Ljc1QzUgOS4zMzYgNS4zMzYgOSA1Ljc1IDlINi4yNVY3LjM4OEM2LjI1IDYuNjIxIDYuODcxIDYgNy42MzggNkgxM0MxMy4yNzYgNiAxMy41IDUuNzc2IDEzLjUgNS41VjMuMjVIMTIuNVY0LjI1QzEyLjUgNC42NjQgMTIuMTY0IDUgMTEuNzUgNUgxLjc1QzEuMzM2IDUgMSA0LjY2NCAxIDQuMjVWMC43NVpNNi41IDEwLjVWMTRDNi41IDE0LjI3NiA2LjcyNCAxNC41IDcgMTQuNUM3LjI3NiAxNC41IDcuNSAxNC4yNzYgNy41IDE0VjEwLjVINi41Wk0yLjUgMS41VjMuNUgxMVYxLjVIMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPaintRollerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPaintRoller';
}

export default RefIcon;
