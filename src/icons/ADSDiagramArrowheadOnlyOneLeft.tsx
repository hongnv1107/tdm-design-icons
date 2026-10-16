// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4L5 7.25H6.5L6.5 4L8 4V7.25L16 7.25V8.75L8 8.75L8 12H6.5L6.5 8.75L5 8.75L5 12H3.5L3.5 8.75L0 8.75L0 7.25L3.5 7.25L3.5 4L5 4Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneLeftSvg,
  'ads-diagram-arrowhead-only-one-left'
);

/**![ADSDiagramArrowheadOnlyOneLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNSA0TDUgNy4yNUg2LjVMNi41IDRMOCA0VjcuMjVMMTYgNy4yNVY4Ljc1TDggOC43NUw4IDEySDYuNUw2LjUgOC43NUw1IDguNzVMNSAxMkgzLjVMMy41IDguNzVMMCA4Ljc1TDAgNy4yNUwzLjUgNy4yNUwzLjUgNEw1IDRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneLeft';
}

export default RefIcon;
