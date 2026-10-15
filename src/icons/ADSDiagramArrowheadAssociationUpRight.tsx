// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadAssociationUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramArrowheadAssociationUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMTczIDIuMDE5QzEzLjM5MiAyLjAwMSAxMy42MDggMi4wOCAxMy43NjQgMi4yMzZDMTMuOTE5IDIuMzkxIDEzLjk5OSAyLjYwNyAxMy45ODEgMi44MjdMMTMuNDUxIDkuMzY4TDExLjk1NiA5LjI0N0wxMi4zMjEgNC43MzhMMi45OCAxNC4wOEwxLjkyIDEzLjAxOUwxMS4yNiAzLjY3OEw2Ljc1NCA0LjA0NEw2LjY5MiAzLjI5Nkw2LjYzMiAyLjU0OUwxMy4xNzMgMi4wMTlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadAssociationUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadAssociationUpRight';
}

export default RefIcon;
