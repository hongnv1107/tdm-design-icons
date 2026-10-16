// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOneRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.75 4V7.25H16V8.75H12.75V12H11.25V8.75H0V7.25H11.25V4H12.75Z"/>
  </svg>
);

const aDSDiagramArrowheadOneRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOneRightSvg,
  'ads-diagram-arrowhead-one-right'
);

/**![ADSDiagramArrowheadOneRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNzUgNFY3LjI1SDE2VjguNzVIMTIuNzVWMTJIMTEuMjVWOC43NUgwVjcuMjVIMTEuMjVWNEgxMi43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOneRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOneRight';
}

export default RefIcon;
