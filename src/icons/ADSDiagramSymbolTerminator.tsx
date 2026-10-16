// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolTerminatorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.515 12.485 3.5 10 3.5H6C3.515 3.5 1.5 5.515 1.5 8C1.5 10.485 3.515 12.5 6 12.5H10C12.485 12.5 14.5 10.485 14.5 8ZM16 8C16 11.314 13.314 14 10 14H6C2.686 14 0 11.314 0 8C0 4.686 2.686 2 6 2H10C13.314 2 16 4.686 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolTerminatorIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolTerminatorSvg,
  'ads-diagram-symbol-terminator'
);

/**![ADSDiagramSymbolTerminator](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA1LjUxNSAxMi40ODUgMy41IDEwIDMuNUg2QzMuNTE1IDMuNSAxLjUgNS41MTUgMS41IDhDMS41IDEwLjQ4NSAzLjUxNSAxMi41IDYgMTIuNUgxMEMxMi40ODUgMTIuNSAxNC41IDEwLjQ4NSAxNC41IDhaTTE2IDhDMTYgMTEuMzE0IDEzLjMxNCAxNCAxMCAxNEg2QzIuNjg2IDE0IDAgMTEuMzE0IDAgOEMwIDQuNjg2IDIuNjg2IDIgNiAySDEwQzEzLjMxNCAyIDE2IDQuNjg2IDE2IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolTerminatorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolTerminator';
}

export default RefIcon;
