// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCompositionUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.173 2.02C13.392 2.002 13.608 2.081 13.764 2.237C13.919 2.392 13.999 2.608 13.981 2.828L13.451 9.369C13.421 9.735 13.13 10.026 12.764 10.055L6.497 10.563L2.98 14.081L1.92 13.02L5.437 9.502L5.945 3.237L5.969 3.103C6.049 2.802 6.312 2.576 6.632 2.55L13.173 2.02Z"/>
  </svg>
);

const aDSDiagramArrowheadCompositionUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCompositionUpRightSvg,
  'ads-diagram-arrowhead-composition-up-right'
);

/**![ADSDiagramArrowheadCompositionUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMTczIDIuMDJDMTMuMzkyIDIuMDAyIDEzLjYwOCAyLjA4MSAxMy43NjQgMi4yMzdDMTMuOTE5IDIuMzkyIDEzLjk5OSAyLjYwOCAxMy45ODEgMi44MjhMMTMuNDUxIDkuMzY5QzEzLjQyMSA5LjczNSAxMy4xMyAxMC4wMjYgMTIuNzY0IDEwLjA1NUw2LjQ5NyAxMC41NjNMMi45OCAxNC4wODFMMS45MiAxMy4wMkw1LjQzNyA5LjUwMkw1Ljk0NSAzLjIzN0w1Ljk2OSAzLjEwM0M2LjA0OSAyLjgwMiA2LjMxMiAyLjU3NiA2LjYzMiAyLjU1TDEzLjE3MyAyLjAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCompositionUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCompositionUpRight';
}

export default RefIcon;
