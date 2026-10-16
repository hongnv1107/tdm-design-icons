// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadSequenceLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramArrowheadSequenceLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi43OTMgMi40MDVDNy4wMTkgMi4yMzEgNy4zMjUgMi4yMDEgNy41ODEgMi4zMjdDNy44MzcgMi40NTMgOCAyLjcxNCA4IDNWNy4yNUgxNlY4Ljc1SDhWMTNDOCAxMy4yODYgNy44MzcgMTMuNTQ3IDcuNTgxIDEzLjY3M0M3LjMyNSAxMy43OTkgNy4wMTkgMTMuNzY5IDYuNzkzIDEzLjU5NUwwLjI5MyA4LjU5NUMwLjEwOCA4LjQ1MyAwIDguMjMzIDAgOEMwIDcuNzY3IDAuMTA4IDcuNTQ3IDAuMjkzIDcuNDA1TDYuNzkzIDIuNDA1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadSequenceLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadSequenceLeft';
}

export default RefIcon;
