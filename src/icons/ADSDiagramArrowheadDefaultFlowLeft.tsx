// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.78 5.529L6.061 7.249L16 7.249V8.749L4.561 8.749L2.03 11.279L0.97 10.219L2.439 8.749H0L0 7.249L3.939 7.249L6.72 4.469L7.78 5.529Z"/>
  </svg>
);

const aDSDiagramArrowheadDefaultFlowLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadDefaultFlowLeftSvg,
  'ads-diagram-arrowhead-default-flow-left'
);

/**![ADSDiagramArrowheadDefaultFlowLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy43OCA1LjUyOUw2LjA2MSA3LjI0OUwxNiA3LjI0OVY4Ljc0OUw0LjU2MSA4Ljc0OUwyLjAzIDExLjI3OUwwLjk3IDEwLjIxOUwyLjQzOSA4Ljc0OUgwTDAgNy4yNDlMMy45MzkgNy4yNDlMNi43MiA0LjQ2OUw3Ljc4IDUuNTI5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowLeft';
}

export default RefIcon;
