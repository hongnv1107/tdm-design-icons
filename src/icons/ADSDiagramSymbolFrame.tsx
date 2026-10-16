// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolFrameSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3.5C14.5 3.224 14.276 3 14 3H8V5.75C8 6.164 7.664 6.5 7.25 6.5H1.5V12.5C1.5 12.776 1.724 13 2 13H14C14.276 13 14.5 12.776 14.5 12.5V3.5ZM1.5 5H6.5V3H2C1.724 3 1.5 3.224 1.5 3.5V5ZM16 12.5C16 13.605 15.105 14.5 14 14.5H2C0.895 14.5 0 13.605 0 12.5V3.5C0 2.395 0.895 1.5 2 1.5H14C15.105 1.5 16 2.395 16 3.5V12.5Z"/>
  </svg>
);

const aDSDiagramSymbolFrameIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolFrameSvg,
  'ads-diagram-symbol-frame'
);

/**![ADSDiagramSymbolFrame](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDMuNUMxNC41IDMuMjI0IDE0LjI3NiAzIDE0IDNIOFY1Ljc1QzggNi4xNjQgNy42NjQgNi41IDcuMjUgNi41SDEuNVYxMi41QzEuNSAxMi43NzYgMS43MjQgMTMgMiAxM0gxNEMxNC4yNzYgMTMgMTQuNSAxMi43NzYgMTQuNSAxMi41VjMuNVpNMS41IDVINi41VjNIMkMxLjcyNCAzIDEuNSAzLjIyNCAxLjUgMy41VjVaTTE2IDEyLjVDMTYgMTMuNjA1IDE1LjEwNSAxNC41IDE0IDE0LjVIMkMwLjg5NSAxNC41IDAgMTMuNjA1IDAgMTIuNVYzLjVDMCAyLjM5NSAwLjg5NSAxLjUgMiAxLjVIMTRDMTUuMTA1IDEuNSAxNiAyLjM5NSAxNiAzLjVWMTIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolFrameIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolFrame';
}

export default RefIcon;
