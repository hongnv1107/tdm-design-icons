// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3ZM11.759 7.449C11.913 7.591 12 7.791 12 8C12 8.209 11.913 8.409 11.759 8.551L8.509 11.551L7.491 10.449L9.332 8.75H4V7.25H9.332L7.491 5.551L8.509 4.449L11.759 7.449ZM15 13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13Z"/>
  </svg>
);

const aDSDiagramSymbolPinRightIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPinRightSvg,
  'ads-diagram-symbol-pin-right'
);

/**![ADSDiagramSymbolPinRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuNSAzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YzWk0xMS43NTkgNy40NDlDMTEuOTEzIDcuNTkxIDEyIDcuNzkxIDEyIDhDMTIgOC4yMDkgMTEuOTEzIDguNDA5IDExLjc1OSA4LjU1MUw4LjUwOSAxMS41NTFMNy40OTEgMTAuNDQ5TDkuMzMyIDguNzVINFY3LjI1SDkuMzMyTDcuNDkxIDUuNTUxTDguNTA5IDQuNDQ5TDExLjc1OSA3LjQ0OVpNMTUgMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinRight';
}

export default RefIcon;
