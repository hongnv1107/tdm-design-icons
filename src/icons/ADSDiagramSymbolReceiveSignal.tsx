// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolReceiveSignalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4.5C14.5 4.224 14.276 4 14 4H2.426L5.558 7.5C5.813 7.785 5.813 8.215 5.558 8.5L2.426 12H14C14.276 12 14.5 11.776 14.5 11.5V4.5ZM16 11.5C16 12.605 15.104 13.5 14 13.5H0.75C0.454 13.5 0.186 13.326 0.065 13.056C-0.055 12.786 -0.006 12.47 0.191 12.25L3.993 8L0.191 3.75C-0.006 3.53 -0.055 3.214 0.065 2.944C0.186 2.674 0.454 2.5 0.75 2.5H14C15.104 2.5 16 3.395 16 4.5V11.5Z"/>
  </svg>
);

const aDSDiagramSymbolReceiveSignalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolReceiveSignalSvg,
  'ads-diagram-symbol-receive-signal'
);

/**![ADSDiagramSymbolReceiveSignal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDQuNUMxNC41IDQuMjI0IDE0LjI3NiA0IDE0IDRIMi40MjZMNS41NTggNy41QzUuODEzIDcuNzg1IDUuODEzIDguMjE1IDUuNTU4IDguNUwyLjQyNiAxMkgxNEMxNC4yNzYgMTIgMTQuNSAxMS43NzYgMTQuNSAxMS41VjQuNVpNMTYgMTEuNUMxNiAxMi42MDUgMTUuMTA0IDEzLjUgMTQgMTMuNUgwLjc1QzAuNDU0IDEzLjUgMC4xODYgMTMuMzI2IDAuMDY1IDEzLjA1NkMtMC4wNTUgMTIuNzg2IC0wLjAwNiAxMi40NyAwLjE5MSAxMi4yNUwzLjk5MyA4TDAuMTkxIDMuNzVDLTAuMDA2IDMuNTMgLTAuMDU1IDMuMjE0IDAuMDY1IDIuOTQ0QzAuMTg2IDIuNjc0IDAuNDU0IDIuNSAwLjc1IDIuNUgxNEMxNS4xMDQgMi41IDE2IDMuMzk1IDE2IDQuNVYxMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolReceiveSignalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolReceiveSignal';
}

export default RefIcon;
