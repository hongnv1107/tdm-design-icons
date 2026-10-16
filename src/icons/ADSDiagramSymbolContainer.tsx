// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolContainerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramSymbolContainer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDMuNUMxNC41IDMuMjI0IDE0LjI3NiAzIDE0IDNINVYxM0gxNEMxNC4yNzYgMTMgMTQuNSAxMi43NzYgMTQuNSAxMi41VjMuNVpNMS41IDEyLjVDMS41IDEyLjc3NiAxLjcyNCAxMyAyIDEzSDMuNVYzSDJDMS43MjQgMyAxLjUgMy4yMjQgMS41IDMuNVYxMi41Wk0xNiAxMi41QzE2IDEzLjYwNSAxNS4xMDUgMTQuNSAxNCAxNC41SDJDMC44OTUgMTQuNSAwIDEzLjYwNSAwIDEyLjVWMy41QzAgMi4zOTUgMC44OTUgMS41IDIgMS41SDE0QzE1LjEwNSAxLjUgMTYgMi4zOTUgMTYgMy41VjEyLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolContainerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolContainer';
}

export default RefIcon;
