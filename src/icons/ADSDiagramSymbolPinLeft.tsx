// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolPinLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yLjUgM0MyLjUgMi43MjQgMi43MjQgMi41IDMgMi41SDEzQzEzLjI3NiAyLjUgMTMuNSAyLjcyNCAxMy41IDNWMTNDMTMuNSAxMy4yNzYgMTMuMjc2IDEzLjUgMTMgMTMuNUgzQzIuNzI0IDEzLjUgMi41IDEzLjI3NiAyLjUgMTNWM1pNNC4yNDEgNy40NDlDNC4wODggNy41OTEgNCA3Ljc5MSA0IDhDNCA4LjIwOSA0LjA4OCA4LjQwOSA0LjI0MSA4LjU1MUw3LjQ5MSAxMS41NTFMOC41MDkgMTAuNDQ5TDYuNjY4IDguNzVIMTJWNy4yNUg2LjY2OEw4LjUwOSA1LjU1MUw3LjQ5MSA0LjQ0OUw0LjI0MSA3LjQ0OVpNMSAxM0MxIDE0LjEwNSAxLjg5NSAxNSAzIDE1SDEzQzE0LjEwNSAxNSAxNSAxNC4xMDUgMTUgMTNWM0MxNSAxLjg5NSAxNC4xMDUgMSAxMyAxSDNDMS44OTUgMSAxIDEuODk1IDEgM1YxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinLeft';
}

export default RefIcon;
