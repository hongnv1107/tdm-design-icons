// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.735 7.429C15.903 7.571 16 7.78 16 8C16 8.22 15.903 8.429 15.735 8.571L10.735 12.821L9.765 11.679L13.21 8.75H0V7.25H13.21L9.765 4.321L10.735 3.179L15.735 7.429Z"/>
  </svg>
);

const aDSDiagramArrowheadAssociationRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadAssociationRightSvg,
  'ads-diagram-arrowhead-association-right'
);

/**![ADSDiagramArrowheadAssociationRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTUuNzM1IDcuNDI5QzE1LjkwMyA3LjU3MSAxNiA3Ljc4IDE2IDhDMTYgOC4yMiAxNS45MDMgOC40MjkgMTUuNzM1IDguNTcxTDEwLjczNSAxMi44MjFMOS43NjUgMTEuNjc5TDEzLjIxIDguNzVIMFY3LjI1SDEzLjIxTDkuNzY1IDQuMzIxTDEwLjczNSAzLjE3OUwxNS43MzUgNy40MjlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationRight';
}

export default RefIcon;
