// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCircleLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.25 4.75C4.787 4.75 6.073 5.817 6.412 7.25H16V8.75H6.412C6.073 10.183 4.787 11.25 3.25 11.25C1.455 11.25 0 9.795 0 8C0 6.205 1.455 4.75 3.25 4.75ZM1.5 8C1.5 8.967 2.284 9.75 3.25 9.75C4.217 9.75 5 8.967 5 8C5 7.034 4.217 6.25 3.25 6.25C2.284 6.25 1.5 7.034 1.5 8Z"/>
  </svg>
);

const aDSDiagramArrowheadCircleLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCircleLeftSvg,
  'ads-diagram-arrowhead-circle-left'
);

/**![ADSDiagramArrowheadCircleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMy4yNSA0Ljc1QzQuNzg3IDQuNzUgNi4wNzMgNS44MTcgNi40MTIgNy4yNUgxNlY4Ljc1SDYuNDEyQzYuMDczIDEwLjE4MyA0Ljc4NyAxMS4yNSAzLjI1IDExLjI1QzEuNDU1IDExLjI1IDAgOS43OTUgMCA4QzAgNi4yMDUgMS40NTUgNC43NSAzLjI1IDQuNzVaTTEuNSA4QzEuNSA4Ljk2NyAyLjI4NCA5Ljc1IDMuMjUgOS43NUM0LjIxNyA5Ljc1IDUgOC45NjcgNSA4QzUgNy4wMzQgNC4yMTcgNi4yNSAzLjI1IDYuMjVDMi4yODQgNi4yNSAxLjUgNy4wMzQgMS41IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCircleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCircleLeft';
}

export default RefIcon;
