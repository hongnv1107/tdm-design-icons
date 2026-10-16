// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.952 1.313L8.573 6.365L12.233 2.706L13.294 3.767L9.634 7.427L14.688 6.049L14.885 6.772L15.083 7.496L7.496 9.564L1.98 15.081L0.92 14.02L6.436 8.504L8.505 0.918L9.952 1.313Z"/>
  </svg>
);

const aDSDiagramArrowheadManyUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyUpRightSvg,
  'ads-diagram-arrowhead-many-up-right'
);

/**![ADSDiagramArrowheadManyUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS45NTIgMS4zMTNMOC41NzMgNi4zNjVMMTIuMjMzIDIuNzA2TDEzLjI5NCAzLjc2N0w5LjYzNCA3LjQyN0wxNC42ODggNi4wNDlMMTQuODg1IDYuNzcyTDE1LjA4MyA3LjQ5Nkw3LjQ5NiA5LjU2NEwxLjk4IDE1LjA4MUwwLjkyIDE0LjAyTDYuNDM2IDguNTA0TDguNTA1IDAuOTE4TDkuOTUyIDEuMzEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyUpRight';
}

export default RefIcon;
