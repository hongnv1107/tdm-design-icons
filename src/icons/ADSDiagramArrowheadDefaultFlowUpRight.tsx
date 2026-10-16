// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.044 3.016L12.319 4.74H14.398V6.24H10.819L2.73 14.329L1.67 13.269L8.698 6.24H6.266V4.74H10.198L12.983 1.955L14.044 3.016Z"/>
  </svg>
);

const aDSDiagramArrowheadDefaultFlowUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadDefaultFlowUpRightSvg,
  'ads-diagram-arrowhead-default-flow-up-right'
);

/**![ADSDiagramArrowheadDefaultFlowUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMDQ0IDMuMDE2TDEyLjMxOSA0Ljc0SDE0LjM5OFY2LjI0SDEwLjgxOUwyLjczIDE0LjMyOUwxLjY3IDEzLjI2OUw4LjY5OCA2LjI0SDYuMjY2VjQuNzRIMTAuMTk4TDEyLjk4MyAxLjk1NUwxNC4wNDQgMy4wMTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowUpRight';
}

export default RefIcon;
