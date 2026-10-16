// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolPinLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMUMxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM1pNNC4yNDEgNy40NDlDNC4wODggNy41OTEgNCA3Ljc5MSA0IDhDNCA4LjIwOSA0LjA4OCA4LjQwOSA0LjI0MSA4LjU1MUw3LjQ5MSAxMS41NTFMOC41MDkgMTAuNDQ5TDYuNjY4IDguNzVIMTJWNy4yNUg2LjY2OEw4LjUwOSA1LjU1MUw3LjQ5MSA0LjQ0OUw0LjI0MSA3LjQ0OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinLeftFilled';
}

export default RefIcon;
