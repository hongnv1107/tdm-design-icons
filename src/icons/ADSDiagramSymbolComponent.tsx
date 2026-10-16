// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolComponentSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4C14.5 3.724 14.276 3.5 14 3.5H3.5C3.224 3.5 3 3.724 3 4V5.5H4.5V7H3V9H4.5V10.5H3V12C3 12.276 3.224 12.5 3.5 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4ZM16 12C16 13.105 15.105 14 14 14H3.5C2.395 14 1.5 13.105 1.5 12V10.5H0V9H1.5V7H0V5.5H1.5V4C1.5 2.895 2.395 2 3.5 2H14C15.105 2 16 2.895 16 4V12Z"/>
  </svg>
);

const aDSDiagramSymbolComponentIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolComponentSvg,
  'ads-diagram-symbol-component'
);

/**![ADSDiagramSymbolComponent](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUgzLjVDMy4yMjQgMy41IDMgMy43MjQgMyA0VjUuNUg0LjVWN0gzVjlINC41VjEwLjVIM1YxMkMzIDEyLjI3NiAzLjIyNCAxMi41IDMuNSAxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNFpNMTYgMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgzLjVDMi4zOTUgMTQgMS41IDEzLjEwNSAxLjUgMTJWMTAuNUgwVjlIMS41VjdIMFY1LjVIMS41VjRDMS41IDIuODk1IDIuMzk1IDIgMy41IDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolComponentIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolComponent';
}

export default RefIcon;
