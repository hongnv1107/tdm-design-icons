// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 4L5 7.25H6.5L6.5 4L8 4V7.25L16 7.25V8.75L8 8.75L8 12H6.5L6.5 8.75L5 8.75L5 12H3.5L3.5 8.75L0 8.75L0 7.25L3.5 7.25L3.5 4L5 4Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneLeftSvg,
  'ads-diagram-arrowhead-only-one-left'
);

/**![ADSDiagramArrowheadOnlyOneLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01IDRMNSA3LjI1SDYuNUw2LjUgNEw4IDRWNy4yNUwxNiA3LjI1VjguNzVMOCA4Ljc1TDggMTJINi41TDYuNSA4Ljc1TDUgOC43NUw1IDEySDMuNUwzLjUgOC43NUwwIDguNzVMMCA3LjI1TDMuNSA3LjI1TDMuNSA0TDUgNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneLeft';
}

export default RefIcon;
