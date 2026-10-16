// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 4V7.25H9.5V4L8 4L8 7.25L0 7.25L0 8.75L8 8.75V12H9.5V8.75L11 8.75V12H12.5V8.75L16 8.75V7.25L12.5 7.25V4L11 4Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneRightSvg,
  'ads-diagram-arrowhead-only-one-right'
);

/**![ADSDiagramArrowheadOnlyOneRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgNFY3LjI1SDkuNVY0TDggNEw4IDcuMjVMMCA3LjI1TDAgOC43NUw4IDguNzVWMTJIOS41VjguNzVMMTEgOC43NVYxMkgxMi41VjguNzVMMTYgOC43NVY3LjI1TDEyLjUgNy4yNVY0TDExIDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneRight';
}

export default RefIcon;
