// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadOnlyOneRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 4V7.25H9.5V4L8 4L8 7.25L0 7.25L0 8.75L8 8.75V12H9.5V8.75L11 8.75V12H12.5V8.75L16 8.75V7.25L12.5 7.25V4L11 4Z"/>
  </svg>
);

const aDSDiagramArrowheadOnlyOneRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadOnlyOneRightSvg,
  'ads-diagram-arrowhead-only-one-right'
);

/**![ADSDiagramArrowheadOnlyOneRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSA0VjcuMjVIOS41VjRMOCA0TDggNy4yNUwwIDcuMjVMMCA4Ljc1TDggOC43NVYxMkg5LjVWOC43NUwxMSA4Ljc1VjEySDEyLjVWOC43NUwxNiA4Ljc1VjcuMjVMMTIuNSA3LjI1VjRMMTEgNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadOnlyOneRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadOnlyOneRight';
}

export default RefIcon;
