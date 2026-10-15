// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 3C2.5 2.724 2.724 2.5 3 2.5H13C13.276 2.5 13.5 2.724 13.5 3V13C13.5 13.276 13.276 13.5 13 13.5H3C2.724 13.5 2.5 13.276 2.5 13V3ZM4.241 7.449C4.088 7.591 4 7.791 4 8C4 8.209 4.088 8.409 4.241 8.551L7.491 11.551L8.509 10.449L6.668 8.75H12V7.25H6.668L8.509 5.551L7.491 4.449L4.241 7.449ZM1 13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3C1.895 1 1 1.895 1 3V13Z"/>
  </svg>
);

const aDSDiagramSymbolPinLeftIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPinLeftSvg,
  'ads-diagram-symbol-pin-left'
);

/**![ADSDiagramSymbolPinLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi41IDNDMi41IDIuNzI0IDIuNzI0IDIuNSAzIDIuNUgxM0MxMy4yNzYgMi41IDEzLjUgMi43MjQgMTMuNSAzVjEzQzEzLjUgMTMuMjc2IDEzLjI3NiAxMy41IDEzIDEzLjVIM0MyLjcyNCAxMy41IDIuNSAxMy4yNzYgMi41IDEzVjNaTTQuMjQxIDcuNDQ5QzQuMDg4IDcuNTkxIDQgNy43OTEgNCA4QzQgOC4yMDkgNC4wODggOC40MDkgNC4yNDEgOC41NTFMNy40OTEgMTEuNTUxTDguNTA5IDEwLjQ0OUw2LjY2OCA4Ljc1SDEyVjcuMjVINi42NjhMOC41MDkgNS41NTFMNy40OTEgNC40NDlMNC4yNDEgNy40NDlaTTEgMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUgxM0MxNC4xMDUgMTUgMTUgMTQuMTA1IDE1IDEzVjNDMTUgMS44OTUgMTQuMTA1IDEgMTMgMUgzQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinLeft';
}

export default RefIcon;
