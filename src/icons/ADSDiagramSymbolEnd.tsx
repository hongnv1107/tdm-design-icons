// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolEndSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8C4 5.791 5.791 4 8 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1ZM8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8C13.5 4.962 11.038 2.5 8 2.5Z"/>
  </svg>
);

const aDSDiagramSymbolEndIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolEndSvg,
  'ads-diagram-symbol-end'
);

/**![ADSDiagramSymbolEnd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04IDRDMTAuMjA5IDQgMTIgNS43OTEgMTIgOEMxMiAxMC4yMDkgMTAuMjA5IDEyIDggMTJDNS43OTEgMTIgNCAxMC4yMDkgNCA4QzQgNS43OTEgNS43OTEgNCA4IDRaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFDMTEuODY2IDEgMTUgNC4xMzQgMTUgOEMxNSAxMS44NjYgMTEuODY2IDE1IDggMTVDNC4xMzQgMTUgMSAxMS44NjYgMSA4QzEgNC4xMzQgNC4xMzQgMSA4IDFaTTggMi41QzQuOTYyIDIuNSAyLjUgNC45NjIgMi41IDhDMi41IDExLjAzOCA0Ljk2MiAxMy41IDggMTMuNUMxMS4wMzggMTMuNSAxMy41IDExLjAzOCAxMy41IDhDMTMuNSA0Ljk2MiAxMS4wMzggMi41IDggMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolEndIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolEnd';
}

export default RefIcon;
