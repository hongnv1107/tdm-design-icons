// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramArrowheadAssociationRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNS43MzUgNy40MjlDMTUuOTAzIDcuNTcxIDE2IDcuNzggMTYgOEMxNiA4LjIyIDE1LjkwMyA4LjQyOSAxNS43MzUgOC41NzFMMTAuNzM1IDEyLjgyMUw5Ljc2NSAxMS42NzlMMTMuMjEgOC43NUgwVjcuMjVIMTMuMjFMOS43NjUgNC4zMjFMMTAuNzM1IDMuMTc5TDE1LjczNSA3LjQyOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationRight';
}

export default RefIcon;
