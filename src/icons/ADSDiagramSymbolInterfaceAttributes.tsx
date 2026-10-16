// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolInterfaceAttributesSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolInterfaceAttributes](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyA1SDNWMTRDMyAxNC4yNzYgMy4yMjQgMTQuNSAzLjUgMTQuNUgxMi41QzEyLjc3NiAxNC41IDEzIDE0LjI3NiAxMyAxNFY1Wk0xMyAyQzEzIDEuNzI0IDEyLjc3NiAxLjUgMTIuNSAxLjVIMy41QzMuMjI0IDEuNSAzIDEuNzI0IDMgMlYzLjVIMTNWMlpNMTQuNSAxNEMxNC41IDE1LjEwNSAxMy42MDUgMTYgMTIuNSAxNkgzLjVDMi4zOTUgMTYgMS41IDE1LjEwNSAxLjUgMTRWMkMxLjUgMC44OTUgMi4zOTUgMCAzLjUgMEgxMi41QzEzLjYwNSAwIDE0LjUgMC44OTUgMTQuNSAyVjE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolInterfaceAttributesIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolInterfaceAttributes';
}

export default RefIcon;
