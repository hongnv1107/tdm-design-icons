// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolMergeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.603 2C15.692 2 16.349 3.206 15.758 4.121L9.156 14.344C8.614 15.183 7.387 15.183 6.845 14.344L0.243 4.121C-0.348 3.206 0.309 2 1.398 2H14.603ZM8 13.366L14.373 3.5H1.627L8 13.366Z"/>
  </svg>
);

const aDSDiagramSymbolMergeIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolMergeSvg,
  'ads-diagram-symbol-merge'
);

/**![ADSDiagramSymbolMerge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC42MDMgMkMxNS42OTIgMiAxNi4zNDkgMy4yMDYgMTUuNzU4IDQuMTIxTDkuMTU2IDE0LjM0NEM4LjYxNCAxNS4xODMgNy4zODcgMTUuMTgzIDYuODQ1IDE0LjM0NEwwLjI0MyA0LjEyMUMtMC4zNDggMy4yMDYgMC4zMDkgMiAxLjM5OCAySDE0LjYwM1pNOCAxMy4zNjZMMTQuMzczIDMuNUgxLjYyN0w4IDEzLjM2NloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolMergeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolMerge';
}

export default RefIcon;
