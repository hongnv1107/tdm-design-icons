// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCircleLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramArrowheadCircleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0zLjI1IDQuNzVDNC43ODcgNC43NSA2LjA3MyA1LjgxNyA2LjQxMiA3LjI1SDE2VjguNzVINi40MTJDNi4wNzMgMTAuMTgzIDQuNzg3IDExLjI1IDMuMjUgMTEuMjVDMS40NTUgMTEuMjUgMCA5Ljc5NSAwIDhDMCA2LjIwNSAxLjQ1NSA0Ljc1IDMuMjUgNC43NVpNMS41IDhDMS41IDguOTY3IDIuMjg0IDkuNzUgMy4yNSA5Ljc1QzQuMjE3IDkuNzUgNSA4Ljk2NyA1IDhDNSA3LjAzNCA0LjIxNyA2LjI1IDMuMjUgNi4yNUMyLjI4NCA2LjI1IDEuNSA3LjAzNCAxLjUgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCircleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCircleLeft';
}

export default RefIcon;
