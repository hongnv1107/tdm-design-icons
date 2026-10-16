// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolFileSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 14C12.5 14.276 12.276 14.5 12 14.5H4C3.724 14.5 3.5 14.276 3.5 14V2C3.5 1.724 3.724 1.5 4 1.5H8V5.25C8 5.664 8.336 6 8.75 6H12.5V14ZM9.5 2.061L11.94 4.5H9.5V2.061ZM11 9.5V8H5V9.5H11ZM9 12.5V11H5V12.5H9ZM14 5.25C14 4.731 13.794 4.233 13.427 3.866L10.134 0.573C9.767 0.206 9.269 0 8.75 0H4C2.895 0 2 0.895 2 2V14C2 15.105 2.895 16 4 16H12C13.105 16 14 15.105 14 14V5.25Z"/>
  </svg>
);

const aDSDiagramSymbolFileIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolFileSvg,
  'ads-diagram-symbol-file'
);

/**![ADSDiagramSymbolFile](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNSAxNEMxMi41IDE0LjI3NiAxMi4yNzYgMTQuNSAxMiAxNC41SDRDMy43MjQgMTQuNSAzLjUgMTQuMjc2IDMuNSAxNFYyQzMuNSAxLjcyNCAzLjcyNCAxLjUgNCAxLjVIOFY1LjI1QzggNS42NjQgOC4zMzYgNiA4Ljc1IDZIMTIuNVYxNFpNOS41IDIuMDYxTDExLjk0IDQuNUg5LjVWMi4wNjFaTTExIDkuNVY4SDVWOS41SDExWk05IDEyLjVWMTFINVYxMi41SDlaTTE0IDUuMjVDMTQgNC43MzEgMTMuNzk0IDQuMjMzIDEzLjQyNyAzLjg2NkwxMC4xMzQgMC41NzNDOS43NjcgMC4yMDYgOS4yNjkgMCA4Ljc1IDBINEMyLjg5NSAwIDIgMC44OTUgMiAyVjE0QzIgMTUuMTA1IDIuODk1IDE2IDQgMTZIMTJDMTMuMTA1IDE2IDE0IDE1LjEwNSAxNCAxNFY1LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolFileIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolFile';
}

export default RefIcon;
