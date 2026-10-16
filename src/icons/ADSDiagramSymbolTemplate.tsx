// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolTemplateSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 12V10H1.5V12C1.5 12.276 1.724 12.5 2 12.5H4V14H2C0.895 14 0 13.105 0 12ZM9.5 12.5V14H6.5V12.5H9.5ZM14.5 12V10H16V12C16 13.105 15.105 14 14 14H12V12.5H14C14.276 12.5 14.5 12.276 14.5 12ZM0 4C0 2.895 0.895 2 2 2H4V3.5H2C1.724 3.5 1.5 3.724 1.5 4V6H0V4ZM14.5 4C14.5 3.724 14.276 3.5 14 3.5H12V2H14C15.105 2 16 2.895 16 4V6H14.5V4ZM9.5 2V3.5H6.5V2H9.5Z"/>
  </svg>
);

const aDSDiagramSymbolTemplateIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolTemplateSvg,
  'ads-diagram-symbol-template'
);

/**![ADSDiagramSymbolTemplate](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0wIDEyVjEwSDEuNVYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDRWMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyWk05LjUgMTIuNVYxNEg2LjVWMTIuNUg5LjVaTTE0LjUgMTJWMTBIMTZWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgxMlYxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJaTTAgNEMwIDIuODk1IDAuODk1IDIgMiAySDRWMy41SDJDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFY2SDBWNFpNMTQuNSA0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMTJWMkgxNEMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjZIMTQuNVY0Wk05LjUgMlYzLjVINi41VjJIOS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolTemplateIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolTemplate';
}

export default RefIcon;
