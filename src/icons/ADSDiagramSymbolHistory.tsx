// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolHistorySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 8C13.5 4.962 11.038 2.5 8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8ZM7 5V7.25H9V5H10.5V11H9V8.75H7V11H5.5V5H7ZM15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"/>
  </svg>
);

const aDSDiagramSymbolHistoryIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolHistorySvg,
  'ads-diagram-symbol-history'
);

/**![ADSDiagramSymbolHistory](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSA4QzEzLjUgNC45NjIgMTEuMDM4IDIuNSA4IDIuNUM0Ljk2MiAyLjUgMi41IDQuOTYyIDIuNSA4QzIuNSAxMS4wMzggNC45NjIgMTMuNSA4IDEzLjVDMTEuMDM4IDEzLjUgMTMuNSAxMS4wMzggMTMuNSA4Wk03IDVWNy4yNUg5VjVIMTAuNVYxMUg5VjguNzVIN1YxMUg1LjVWNUg3Wk0xNSA4QzE1IDExLjg2NiAxMS44NjYgMTUgOCAxNUM0LjEzNCAxNSAxIDExLjg2NiAxIDhDMSA0LjEzNCA0LjEzNCAxIDggMUMxMS44NjYgMSAxNSA0LjEzNCAxNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolHistoryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolHistory';
}

export default RefIcon;
