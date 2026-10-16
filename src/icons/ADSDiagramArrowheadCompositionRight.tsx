// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCompositionRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.875 3.1C10.145 2.944 10.49 2.97 10.735 3.179L15.735 7.429C15.903 7.571 16 7.78 16 8C16 8.22 15.903 8.429 15.735 8.571L10.735 12.821C10.455 13.059 10.045 13.059 9.765 12.821L4.975 8.75H0V7.25H4.975L9.765 3.179L9.875 3.1Z"/>
  </svg>
);

const aDSDiagramArrowheadCompositionRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCompositionRightSvg,
  'ads-diagram-arrowhead-composition-right'
);

/**![ADSDiagramArrowheadCompositionRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik05Ljg3NSAzLjFDMTAuMTQ1IDIuOTQ0IDEwLjQ5IDIuOTcgMTAuNzM1IDMuMTc5TDE1LjczNSA3LjQyOUMxNS45MDMgNy41NzEgMTYgNy43OCAxNiA4QzE2IDguMjIgMTUuOTAzIDguNDI5IDE1LjczNSA4LjU3MUwxMC43MzUgMTIuODIxQzEwLjQ1NSAxMy4wNTkgMTAuMDQ1IDEzLjA1OSA5Ljc2NSAxMi44MjFMNC45NzUgOC43NUgwVjcuMjVINC45NzVMOS43NjUgMy4xNzlMOS44NzUgMy4xWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCompositionRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCompositionRight';
}

export default RefIcon;
