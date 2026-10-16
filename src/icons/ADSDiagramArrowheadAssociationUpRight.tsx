// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.173 2.019C13.392 2.001 13.608 2.08 13.764 2.236C13.919 2.391 13.999 2.607 13.981 2.827L13.451 9.368L11.956 9.247L12.321 4.738L2.98 14.08L1.92 13.019L11.26 3.678L6.754 4.044L6.692 3.296L6.632 2.549L13.173 2.019Z"/>
  </svg>
);

const aDSDiagramArrowheadAssociationUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadAssociationUpRightSvg,
  'ads-diagram-arrowhead-association-up-right'
);

/**![ADSDiagramArrowheadAssociationUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy4xNzMgMi4wMTlDMTMuMzkyIDIuMDAxIDEzLjYwOCAyLjA4IDEzLjc2NCAyLjIzNkMxMy45MTkgMi4zOTEgMTMuOTk5IDIuNjA3IDEzLjk4MSAyLjgyN0wxMy40NTEgOS4zNjhMMTEuOTU2IDkuMjQ3TDEyLjMyMSA0LjczOEwyLjk4IDE0LjA4TDEuOTIgMTMuMDE5TDExLjI2IDMuNjc4TDYuNzU0IDQuMDQ0TDYuNjkyIDMuMjk2TDYuNjMyIDIuNTQ5TDEzLjE3MyAyLjAxOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationUpRight';
}

export default RefIcon;
