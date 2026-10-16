// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPinRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolPinRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy41IDNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgzQzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjNaTTExLjc1OSA3LjQ0OUMxMS45MTMgNy41OTEgMTIgNy43OTEgMTIgOEMxMiA4LjIwOSAxMS45MTMgOC40MDkgMTEuNzU5IDguNTUxTDguNTA5IDExLjU1MUw3LjQ5MSAxMC40NDlMOS4zMzIgOC43NUg0VjcuMjVIOS4zMzJMNy40OTEgNS41NTFMOC41MDkgNC40NDlMMTEuNzU5IDcuNDQ5Wk0xNSAxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPinRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPinRight';
}

export default RefIcon;
