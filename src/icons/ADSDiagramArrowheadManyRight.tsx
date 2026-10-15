// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.372 4.65L10.824 7.249H16V8.749H10.824L15.372 11.348L14.628 12.65L7.801 8.749H0V7.249H7.801L14.628 3.348L15.372 4.65Z"/>
  </svg>
);

const aDSDiagramArrowheadManyRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyRightSvg,
  'ads-diagram-arrowhead-many-right'
);

/**![ADSDiagramArrowheadManyRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuMzcyIDQuNjVMMTAuODI0IDcuMjQ5SDE2VjguNzQ5SDEwLjgyNEwxNS4zNzIgMTEuMzQ4TDE0LjYyOCAxMi42NUw3LjgwMSA4Ljc0OUgwVjcuMjQ5SDcuODAxTDE0LjYyOCAzLjM0OEwxNS4zNzIgNC42NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyRight';
}

export default RefIcon;
