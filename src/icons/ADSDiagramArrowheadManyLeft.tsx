// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.199 7.249H16V8.749H8.199L1.372 12.65L0.628 11.348L5.176 8.749H0V7.249H5.176L0.628 4.65L1.372 3.348L8.199 7.249Z"/>
  </svg>
);

const aDSDiagramArrowheadManyLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyLeftSvg,
  'ads-diagram-arrowhead-many-left'
);

/**![ADSDiagramArrowheadManyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4xOTkgNy4yNDlIMTZWOC43NDlIOC4xOTlMMS4zNzIgMTIuNjVMMC42MjggMTEuMzQ4TDUuMTc2IDguNzQ5SDBWNy4yNDlINS4xNzZMMC42MjggNC42NUwxLjM3MiAzLjM0OEw4LjE5OSA3LjI0OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyLeft';
}

export default RefIcon;
