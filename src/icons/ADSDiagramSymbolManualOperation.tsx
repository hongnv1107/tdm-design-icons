// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolManualOperationSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.594 2C15.517 2 16.178 2.891 15.91 3.774L13.237 12.581C12.981 13.424 12.204 14 11.323 14H4.676C3.796 14 3.018 13.424 2.762 12.581L0.09 3.774C-0.179 2.891 0.482 2 1.405 2H14.594ZM4.198 12.146C4.262 12.356 4.456 12.5 4.676 12.5H11.323C11.543 12.5 11.737 12.356 11.801 12.146L14.426 3.5H1.574L4.198 12.146Z"/>
  </svg>
);

const aDSDiagramSymbolManualOperationIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolManualOperationSvg,
  'ads-diagram-symbol-manual-operation'
);

/**![ADSDiagramSymbolManualOperation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41OTQgMkMxNS41MTcgMiAxNi4xNzggMi44OTEgMTUuOTEgMy43NzRMMTMuMjM3IDEyLjU4MUMxMi45ODEgMTMuNDI0IDEyLjIwNCAxNCAxMS4zMjMgMTRINC42NzZDMy43OTYgMTQgMy4wMTggMTMuNDI0IDIuNzYyIDEyLjU4MUwwLjA5IDMuNzc0Qy0wLjE3OSAyLjg5MSAwLjQ4MiAyIDEuNDA1IDJIMTQuNTk0Wk00LjE5OCAxMi4xNDZDNC4yNjIgMTIuMzU2IDQuNDU2IDEyLjUgNC42NzYgMTIuNUgxMS4zMjNDMTEuNTQzIDEyLjUgMTEuNzM3IDEyLjM1NiAxMS44MDEgMTIuMTQ2TDE0LjQyNiAzLjVIMS41NzRMNC4xOTggMTIuMTQ2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolManualOperationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolManualOperation';
}

export default RefIcon;
