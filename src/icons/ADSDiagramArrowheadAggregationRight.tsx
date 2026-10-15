// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAggregationRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.875 3.1C10.145 2.944 10.49 2.97 10.735 3.179L15.735 7.429C15.903 7.571 16 7.78 16 8C16 8.22 15.903 8.429 15.735 8.571L10.735 12.821C10.455 13.059 10.045 13.059 9.765 12.821L4.975 8.75H0V7.25H4.975L9.765 3.179L9.875 3.1ZM6.407 8L10.25 11.265L14.092 8L10.25 4.733L6.407 8Z"/>
  </svg>
);

const aDSDiagramArrowheadAggregationRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadAggregationRightSvg,
  'ads-diagram-arrowhead-aggregation-right'
);

/**![ADSDiagramArrowheadAggregationRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOS44NzUgMy4xQzEwLjE0NSAyLjk0NCAxMC40OSAyLjk3IDEwLjczNSAzLjE3OUwxNS43MzUgNy40MjlDMTUuOTAzIDcuNTcxIDE2IDcuNzggMTYgOEMxNiA4LjIyIDE1LjkwMyA4LjQyOSAxNS43MzUgOC41NzFMMTAuNzM1IDEyLjgyMUMxMC40NTUgMTMuMDU5IDEwLjA0NSAxMy4wNTkgOS43NjUgMTIuODIxTDQuOTc1IDguNzVIMFY3LjI1SDQuOTc1TDkuNzY1IDMuMTc5TDkuODc1IDMuMVpNNi40MDcgOEwxMC4yNSAxMS4yNjVMMTQuMDkyIDhMMTAuMjUgNC43MzNMNi40MDcgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAggregationRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAggregationRight';
}

export default RefIcon;
