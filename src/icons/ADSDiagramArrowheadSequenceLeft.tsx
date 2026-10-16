// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadSequenceLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.793 2.405C7.019 2.231 7.325 2.201 7.581 2.327C7.837 2.453 8 2.714 8 3V7.25H16V8.75H8V13C8 13.286 7.837 13.547 7.581 13.673C7.325 13.799 7.019 13.769 6.793 13.595L0.293 8.595C0.108 8.453 0 8.233 0 8C0 7.767 0.108 7.547 0.293 7.405L6.793 2.405Z"/>
  </svg>
);

const aDSDiagramArrowheadSequenceLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadSequenceLeftSvg,
  'ads-diagram-arrowhead-sequence-left'
);

/**![ADSDiagramArrowheadSequenceLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02Ljc5MyAyLjQwNUM3LjAxOSAyLjIzMSA3LjMyNSAyLjIwMSA3LjU4MSAyLjMyN0M3LjgzNyAyLjQ1MyA4IDIuNzE0IDggM1Y3LjI1SDE2VjguNzVIOFYxM0M4IDEzLjI4NiA3LjgzNyAxMy41NDcgNy41ODEgMTMuNjczQzcuMzI1IDEzLjc5OSA3LjAxOSAxMy43NjkgNi43OTMgMTMuNTk1TDAuMjkzIDguNTk1QzAuMTA4IDguNDUzIDAgOC4yMzMgMCA4QzAgNy43NjcgMC4xMDggNy41NDcgMC4yOTMgNy40MDVMNi43OTMgMi40MDVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadSequenceLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadSequenceLeft';
}

export default RefIcon;
