// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolManualInputSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3.435L1.5 6.349V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V3.435ZM16 12C16 13.104 15.105 14 14 14H2C0.895 14 0 13.104 0 12V6.25C0 5.606 0.446 5.05 1.074 4.909L14.324 1.938L14.484 1.912C15.282 1.828 16 2.454 16 3.28V12Z"/>
  </svg>
);

const aDSDiagramSymbolManualInputIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolManualInputSvg,
  'ads-diagram-symbol-manual-input'
);

/**![ADSDiagramSymbolManualInput](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzLjQzNUwxLjUgNi4zNDlWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjMuNDM1Wk0xNiAxMkMxNiAxMy4xMDQgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDQgMCAxMlY2LjI1QzAgNS42MDYgMC40NDYgNS4wNSAxLjA3NCA0LjkwOUwxNC4zMjQgMS45MzhMMTQuNDg0IDEuOTEyQzE1LjI4MiAxLjgyOCAxNiAyLjQ1NCAxNiAzLjI4VjEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolManualInputIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolManualInput';
}

export default RefIcon;
