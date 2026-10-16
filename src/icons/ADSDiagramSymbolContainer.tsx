// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolContainerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3.5C14.5 3.224 14.276 3 14 3H5V13H14C14.276 13 14.5 12.776 14.5 12.5V3.5ZM1.5 12.5C1.5 12.776 1.724 13 2 13H3.5V3H2C1.724 3 1.5 3.224 1.5 3.5V12.5ZM16 12.5C16 13.605 15.105 14.5 14 14.5H2C0.895 14.5 0 13.605 0 12.5V3.5C0 2.395 0.895 1.5 2 1.5H14C15.105 1.5 16 2.395 16 3.5V12.5Z"/>
  </svg>
);

const aDSDiagramSymbolContainerIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolContainerSvg,
  'ads-diagram-symbol-container'
);

/**![ADSDiagramSymbolContainer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzLjVDMTQuNSAzLjIyNCAxNC4yNzYgMyAxNCAzSDVWMTNIMTRDMTQuMjc2IDEzIDE0LjUgMTIuNzc2IDE0LjUgMTIuNVYzLjVaTTEuNSAxMi41QzEuNSAxMi43NzYgMS43MjQgMTMgMiAxM0gzLjVWM0gyQzEuNzI0IDMgMS41IDMuMjI0IDEuNSAzLjVWMTIuNVpNMTYgMTIuNUMxNiAxMy42MDUgMTUuMTA1IDE0LjUgMTQgMTQuNUgyQzAuODk1IDE0LjUgMCAxMy42MDUgMCAxMi41VjMuNUMwIDIuMzk1IDAuODk1IDEuNSAyIDEuNUgxNEMxNS4xMDUgMS41IDE2IDIuMzk1IDE2IDMuNVYxMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolContainerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolContainer';
}

export default RefIcon;
