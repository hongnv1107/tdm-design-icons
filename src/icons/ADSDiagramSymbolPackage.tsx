// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolPackageSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 6C14.5 5.724 14.276 5.5 14 5.5H1.5V13L1.51 13.101C1.556 13.329 1.758 13.5 2 13.5H14C14.276 13.5 14.5 13.276 14.5 13V6ZM6.5 3C6.5 2.724 6.276 2.5 6 2.5H2C1.724 2.5 1.5 2.724 1.5 3V4H6.5V3ZM8 4H14C15.105 4 16 4.895 16 6V13C16 14.105 15.105 15 14 15H2C0.964 15 0.113 14.213 0.011 13.204L0 13V3C0 1.895 0.895 1 2 1H6C7.105 1 8 1.895 8 3V4Z"/>
  </svg>
);

const aDSDiagramSymbolPackageIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolPackageSvg,
  'ads-diagram-symbol-package'
);

/**![ADSDiagramSymbolPackage](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDZDMTQuNSA1LjcyNCAxNC4yNzYgNS41IDE0IDUuNUgxLjVWMTNMMS41MSAxMy4xMDFDMS41NTYgMTMuMzI5IDEuNzU4IDEzLjUgMiAxMy41SDE0QzE0LjI3NiAxMy41IDE0LjUgMTMuMjc2IDE0LjUgMTNWNlpNNi41IDNDNi41IDIuNzI0IDYuMjc2IDIuNSA2IDIuNUgyQzEuNzI0IDIuNSAxLjUgMi43MjQgMS41IDNWNEg2LjVWM1pNOCA0SDE0QzE1LjEwNSA0IDE2IDQuODk1IDE2IDZWMTNDMTYgMTQuMTA1IDE1LjEwNSAxNSAxNCAxNUgyQzAuOTY0IDE1IDAuMTEzIDE0LjIxMyAwLjAxMSAxMy4yMDRMMCAxM1YzQzAgMS44OTUgMC44OTUgMSAyIDFINkM3LjEwNSAxIDggMS44OTUgOCAzVjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolPackageIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolPackage';
}

export default RefIcon;
