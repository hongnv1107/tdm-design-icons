// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolMergeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramSymbolMerge](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNjAzIDJDMTUuNjkyIDIgMTYuMzQ5IDMuMjA2IDE1Ljc1OCA0LjEyMUw5LjE1NiAxNC4zNDRDOC42MTQgMTUuMTgzIDcuMzg3IDE1LjE4MyA2Ljg0NSAxNC4zNDRMMC4yNDMgNC4xMjFDLTAuMzQ4IDMuMjA2IDAuMzA5IDIgMS4zOTggMkgxNC42MDNaTTggMTMuMzY2TDE0LjM3MyAzLjVIMS42MjdMOCAxMy4zNjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolMergeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolMerge';
}

export default RefIcon;
