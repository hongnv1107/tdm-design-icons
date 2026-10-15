// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadSequenceRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.419 2.327C8.675 2.201 8.981 2.231 9.207 2.405L15.707 7.405C15.892 7.547 16 7.767 16 8C16 8.233 15.892 8.453 15.707 8.595L9.207 13.595C8.981 13.769 8.675 13.799 8.419 13.673C8.163 13.547 8 13.286 8 13V8.75H0V7.25H8V3C8 2.714 8.163 2.453 8.419 2.327Z"/>
  </svg>
);

const aDSDiagramArrowheadSequenceRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadSequenceRightSvg,
  'ads-diagram-arrowhead-sequence-right'
);

/**![ADSDiagramArrowheadSequenceRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC40MTkgMi4zMjdDOC42NzUgMi4yMDEgOC45ODEgMi4yMzEgOS4yMDcgMi40MDVMMTUuNzA3IDcuNDA1QzE1Ljg5MiA3LjU0NyAxNiA3Ljc2NyAxNiA4QzE2IDguMjMzIDE1Ljg5MiA4LjQ1MyAxNS43MDcgOC41OTVMOS4yMDcgMTMuNTk1QzguOTgxIDEzLjc2OSA4LjY3NSAxMy43OTkgOC40MTkgMTMuNjczQzguMTYzIDEzLjU0NyA4IDEzLjI4NiA4IDEzVjguNzVIMFY3LjI1SDhWM0M4IDIuNzE0IDguMTYzIDIuNDUzIDguNDE5IDIuMzI3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadSequenceRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadSequenceRight';
}

export default RefIcon;
