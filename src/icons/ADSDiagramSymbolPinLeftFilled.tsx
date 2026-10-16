// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinLeftFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM4.241 7.449C4.088 7.591 4 7.791 4 8C4 8.209 4.088 8.409 4.241 8.551L7.491 11.551L8.509 10.449L6.668 8.75H12V7.25H6.668L8.509 5.551L7.491 4.449L4.241 7.449Z"/>
  </svg>
);

const aDSDiagramSymbolPinLeftFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPinLeftFilledSvg,
  'ads-diagram-symbol-pin-left-filled'
);

/**![ADSDiagramSymbolPinLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzIDFDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNaTTQuMjQxIDcuNDQ5QzQuMDg4IDcuNTkxIDQgNy43OTEgNCA4QzQgOC4yMDkgNC4wODggOC40MDkgNC4yNDEgOC41NTFMNy40OTEgMTEuNTUxTDguNTA5IDEwLjQ0OUw2LjY2OCA4Ljc1SDEyVjcuMjVINi42NjhMOC41MDkgNS41NTFMNy40OTEgNC40NDlMNC4yNDEgNy40NDlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinLeftFilled';
}

export default RefIcon;
