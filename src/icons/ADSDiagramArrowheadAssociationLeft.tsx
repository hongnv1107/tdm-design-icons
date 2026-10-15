// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.235 4.321L2.79 7.25H16V8.75H2.79L6.235 11.679L5.265 12.821L0.265 8.571C0.097 8.429 0 8.22 0 8C0 7.78 0.097 7.571 0.265 7.429L5.265 3.179L6.235 4.321Z"/>
  </svg>
);

const aDSDiagramArrowheadAssociationLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadAssociationLeftSvg,
  'ads-diagram-arrowhead-association-left'
);

/**![ADSDiagramArrowheadAssociationLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi4yMzUgNC4zMjFMMi43OSA3LjI1SDE2VjguNzVIMi43OUw2LjIzNSAxMS42NzlMNS4yNjUgMTIuODIxTDAuMjY1IDguNTcxQzAuMDk3IDguNDI5IDAgOC4yMiAwIDhDMCA3Ljc4IDAuMDk3IDcuNTcxIDAuMjY1IDcuNDI5TDUuMjY1IDMuMTc5TDYuMjM1IDQuMzIxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationLeft';
}

export default RefIcon;
