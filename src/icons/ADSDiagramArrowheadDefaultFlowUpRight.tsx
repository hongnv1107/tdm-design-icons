// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramArrowheadDefaultFlowUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC4wNDQgMy4wMTZMMTIuMzE5IDQuNzRIMTQuMzk4VjYuMjRIMTAuODE5TDIuNzMgMTQuMzI5TDEuNjcgMTMuMjY5TDguNjk4IDYuMjRINi4yNjZWNC43NEgxMC4xOThMMTIuOTgzIDEuOTU1TDE0LjA0NCAzLjAxNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowUpRight';
}

export default RefIcon;
