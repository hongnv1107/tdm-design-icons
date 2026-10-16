// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolConnectorOnPageSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 8C13.5 4.962 11.038 2.5 8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8ZM15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"/>
  </svg>
);

const aDSDiagramSymbolConnectorOnPageIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolConnectorOnPageSvg,
  'ads-diagram-symbol-connector-on-page'
);

/**![ADSDiagramSymbolConnectorOnPage](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDhDMTMuNSA0Ljk2MiAxMS4wMzggMi41IDggMi41QzQuOTYyIDIuNSAyLjUgNC45NjIgMi41IDhDMi41IDExLjAzOCA0Ljk2MiAxMy41IDggMTMuNUMxMS4wMzggMTMuNSAxMy41IDExLjAzOCAxMy41IDhaTTE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0IDE1IDEgMTEuODY2IDEgOEMxIDQuMTM0IDQuMTM0IDEgOCAxQzExLjg2NiAxIDE1IDQuMTM0IDE1IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolConnectorOnPageIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolConnectorOnPage';
}

export default RefIcon;
