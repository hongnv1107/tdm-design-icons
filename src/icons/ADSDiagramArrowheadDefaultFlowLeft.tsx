// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadDefaultFlowLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramArrowheadDefaultFlowLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03Ljc4IDUuNTI5TDYuMDYxIDcuMjQ5TDE2IDcuMjQ5VjguNzQ5TDQuNTYxIDguNzQ5TDIuMDMgMTEuMjc5TDAuOTcgMTAuMjE5TDIuNDM5IDguNzQ5SDBMMCA3LjI0OUwzLjkzOSA3LjI0OUw2LjcyIDQuNDY5TDcuNzggNS41MjlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadDefaultFlowLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadDefaultFlowLeft';
}

export default RefIcon;
