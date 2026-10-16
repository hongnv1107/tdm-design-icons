// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.187 2.873L11.711 5.348L14.01 7.646L12.949 8.707L10.651 6.408L9.59 7.469L11.889 9.768L10.828 10.828L8.529 8.529L2.873 14.187L1.813 13.126L7.469 7.469L5.171 5.171L6.231 4.11L8.529 6.408L9.591 5.348L7.293 3.05L8.354 1.989L10.651 4.287L13.126 1.813L14.187 2.873Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneUpRightSvg,
  'ads-diagram-arrowhead-only-one-up-right'
);

/**![ADSDiagramArrowheadOnlyOneUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC4xODcgMi44NzNMMTEuNzExIDUuMzQ4TDE0LjAxIDcuNjQ2TDEyLjk0OSA4LjcwN0wxMC42NTEgNi40MDhMOS41OSA3LjQ2OUwxMS44ODkgOS43NjhMMTAuODI4IDEwLjgyOEw4LjUyOSA4LjUyOUwyLjg3MyAxNC4xODdMMS44MTMgMTMuMTI2TDcuNDY5IDcuNDY5TDUuMTcxIDUuMTcxTDYuMjMxIDQuMTFMOC41MjkgNi40MDhMOS41OTEgNS4zNDhMNy4yOTMgMy4wNUw4LjM1NCAxLjk4OUwxMC42NTEgNC4yODdMMTMuMTI2IDEuODEzTDE0LjE4NyAyLjg3M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneUpRight';
}

export default RefIcon;
