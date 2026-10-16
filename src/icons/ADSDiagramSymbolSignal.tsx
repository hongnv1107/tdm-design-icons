// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSignalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.603 14C15.692 14 16.349 12.794 15.758 11.879L9.156 1.656C8.614 0.817 7.387 0.817 6.845 1.656L0.243 11.879C-0.348 12.794 0.309 14 1.398 14H14.603ZM8 2.634L14.373 12.5H1.627L8 2.634Z"/>
  </svg>
);

const aDSDiagramSymbolSignalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSignalSvg,
  'ads-diagram-symbol-signal'
);

/**![ADSDiagramSymbolSignal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC42MDMgMTRDMTUuNjkyIDE0IDE2LjM0OSAxMi43OTQgMTUuNzU4IDExLjg3OUw5LjE1NiAxLjY1NkM4LjYxNCAwLjgxNyA3LjM4NyAwLjgxNyA2Ljg0NSAxLjY1NkwwLjI0MyAxMS44NzlDLTAuMzQ4IDEyLjc5NCAwLjMwOSAxNCAxLjM5OCAxNEgxNC42MDNaTTggMi42MzRMMTQuMzczIDEyLjVIMS42MjdMOCAyLjYzNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSignalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSignal';
}

export default RefIcon;
