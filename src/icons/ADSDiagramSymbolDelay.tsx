// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolDelaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.515 12.485 3.5 10 3.5H1.5V12.5H10C12.485 12.5 14.5 10.485 14.5 8ZM16 8C16 11.314 13.314 14 10 14H1.447C0.648 14 0 13.352 0 12.553V3.447C0 2.648 0.648 2 1.447 2H10C13.314 2 16 4.686 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolDelayIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolDelaySvg,
  'ads-diagram-symbol-delay'
);

/**![ADSDiagramSymbolDelay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA1LjUxNSAxMi40ODUgMy41IDEwIDMuNUgxLjVWMTIuNUgxMEMxMi40ODUgMTIuNSAxNC41IDEwLjQ4NSAxNC41IDhaTTE2IDhDMTYgMTEuMzE0IDEzLjMxNCAxNCAxMCAxNEgxLjQ0N0MwLjY0OCAxNCAwIDEzLjM1MiAwIDEyLjU1M1YzLjQ0N0MwIDIuNjQ4IDAuNjQ4IDIgMS40NDcgMkgxMEMxMy4zMTQgMiAxNiA0LjY4NiAxNiA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolDelayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolDelay';
}

export default RefIcon;
