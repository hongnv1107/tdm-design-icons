// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCollapseHorizontalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.25 0V16H8.75V0H7.25ZM9.97 7.47C9.677 7.763 9.677 8.237 9.97 8.53L13.22 11.78L14.28 10.72L12.311 8.75H16V7.25H12.311L14.28 5.28L13.22 4.22L9.97 7.47ZM1.72 5.28L3.689 7.25H0V8.75H3.689L1.72 10.72L2.78 11.78L6.03 8.53C6.323 8.237 6.323 7.763 6.03 7.47L2.78 4.22L1.72 5.28Z"/>
  </svg>
);

const aDSCollapseHorizontalIconDefinition = svgToIconDefinition(
  aDSCollapseHorizontalSvg,
  'ads-collapse-horizontal'
);

/**![ADSCollapseHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy4yNSAwVjE2SDguNzVWMEg3LjI1Wk05Ljk3IDcuNDdDOS42NzcgNy43NjMgOS42NzcgOC4yMzcgOS45NyA4LjUzTDEzLjIyIDExLjc4TDE0LjI4IDEwLjcyTDEyLjMxMSA4Ljc1SDE2VjcuMjVIMTIuMzExTDE0LjI4IDUuMjhMMTMuMjIgNC4yMkw5Ljk3IDcuNDdaTTEuNzIgNS4yOEwzLjY4OSA3LjI1SDBWOC43NUgzLjY4OUwxLjcyIDEwLjcyTDIuNzggMTEuNzhMNi4wMyA4LjUzQzYuMzIzIDguMjM3IDYuMzIzIDcuNzYzIDYuMDMgNy40N0wyLjc4IDQuMjJMMS43MiA1LjI4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCollapseHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCollapseHorizontal';
}

export default RefIcon;
