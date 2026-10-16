// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolInterfaceAttributesSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 5H3V14C3 14.276 3.224 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V5ZM13 2C13 1.724 12.776 1.5 12.5 1.5H3.5C3.224 1.5 3 1.724 3 2V3.5H13V2ZM14.5 14C14.5 15.105 13.605 16 12.5 16H3.5C2.395 16 1.5 15.105 1.5 14V2C1.5 0.895 2.395 0 3.5 0H12.5C13.605 0 14.5 0.895 14.5 2V14Z"/>
  </svg>
);

const aDSDiagramSymbolInterfaceAttributesIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolInterfaceAttributesSvg,
  'ads-diagram-symbol-interface-attributes'
);

/**![ADSDiagramSymbolInterfaceAttributes](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgNUgzVjE0QzMgMTQuMjc2IDMuMjI0IDE0LjUgMy41IDE0LjVIMTIuNUMxMi43NzYgMTQuNSAxMyAxNC4yNzYgMTMgMTRWNVpNMTMgMkMxMyAxLjcyNCAxMi43NzYgMS41IDEyLjUgMS41SDMuNUMzLjIyNCAxLjUgMyAxLjcyNCAzIDJWMy41SDEzVjJaTTE0LjUgMTRDMTQuNSAxNS4xMDUgMTMuNjA1IDE2IDEyLjUgMTZIMy41QzIuMzk1IDE2IDEuNSAxNS4xMDUgMS41IDE0VjJDMS41IDAuODk1IDIuMzk1IDAgMy41IDBIMTIuNUMxMy42MDUgMCAxNC41IDAuODk1IDE0LjUgMlYxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolInterfaceAttributesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolInterfaceAttributes';
}

export default RefIcon;
