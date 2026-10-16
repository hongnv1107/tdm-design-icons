// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolInputOutputSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.642 2C15.522 2 16.159 2.808 15.991 3.643L15.947 3.81L12.863 13.06C12.675 13.621 12.151 14 11.559 14H1.376C0.438 14 -0.225 13.081 0.072 12.19L3.155 2.94L3.194 2.837C3.408 2.333 3.904 2 4.459 2H14.642ZM1.549 12.5H11.468L14.469 3.5H4.55L1.549 12.5Z"/>
  </svg>
);

const aDSDiagramSymbolInputOutputIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolInputOutputSvg,
  'ads-diagram-symbol-input-output'
);

/**![ADSDiagramSymbolInputOutput](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC42NDIgMkMxNS41MjIgMiAxNi4xNTkgMi44MDggMTUuOTkxIDMuNjQzTDE1Ljk0NyAzLjgxTDEyLjg2MyAxMy4wNkMxMi42NzUgMTMuNjIxIDEyLjE1MSAxNCAxMS41NTkgMTRIMS4zNzZDMC40MzggMTQgLTAuMjI1IDEzLjA4MSAwLjA3MiAxMi4xOUwzLjE1NSAyLjk0TDMuMTk0IDIuODM3QzMuNDA4IDIuMzMzIDMuOTA0IDIgNC40NTkgMkgxNC42NDJaTTEuNTQ5IDEyLjVIMTEuNDY4TDE0LjQ2OSAzLjVINC41NUwxLjU0OSAxMi41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolInputOutputIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolInputOutput';
}

export default RefIcon;
