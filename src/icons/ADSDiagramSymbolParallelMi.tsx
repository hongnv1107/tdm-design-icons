// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolParallelMiSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 15H2L2 1L3.5 1L3.5 15ZM8.75 15H7.25L7.25 1L8.75 1L8.75 15ZM14 15L12.5 15L12.5 1L14 1L14 15Z"/>
  </svg>
);

const aDSDiagramSymbolParallelMiIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolParallelMiSvg,
  'ads-diagram-symbol-parallel-mi'
);

/**![ADSDiagramSymbolParallelMi](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0zLjUgMTVIMkwyIDFMMy41IDFMMy41IDE1Wk04Ljc1IDE1SDcuMjVMNy4yNSAxTDguNzUgMUw4Ljc1IDE1Wk0xNCAxNUwxMi41IDE1TDEyLjUgMUwxNCAxTDE0IDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolParallelMiIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolParallelMi';
}

export default RefIcon;
