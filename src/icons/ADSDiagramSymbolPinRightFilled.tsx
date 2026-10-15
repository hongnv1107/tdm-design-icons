// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinRightFilledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM7.491 5.551L9.332 7.25H4V8.75H9.332L7.491 10.449L8.509 11.551L11.759 8.551C11.913 8.409 12 8.209 12 8C12 7.791 11.913 7.591 11.759 7.449L8.509 4.449L7.491 5.551Z"/>
  </svg>
);

const aDSDiagramSymbolPinRightFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPinRightFilledSvg,
  'ads-diagram-symbol-pin-right-filled'
);

/**![ADSDiagramSymbolPinRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgMUMxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM1pNNy40OTEgNS41NTFMOS4zMzIgNy4yNUg0VjguNzVIOS4zMzJMNy40OTEgMTAuNDQ5TDguNTA5IDExLjU1MUwxMS43NTkgOC41NTFDMTEuOTEzIDguNDA5IDEyIDguMjA5IDEyIDhDMTIgNy43OTEgMTEuOTEzIDcuNTkxIDExLjc1OSA3LjQ0OUw4LjUwOSA0LjQ0OUw3LjQ5MSA1LjU1MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinRightFilled';
}

export default RefIcon;
