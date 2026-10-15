// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSignalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.603 14C15.692 14 16.349 12.794 15.758 11.879L9.156 1.656C8.614 0.817 7.387 0.817 6.845 1.656L0.243 11.879C-0.348 12.794 0.309 14 1.398 14H14.603ZM8 2.634L14.373 12.5H1.627L8 2.634Z"/>
  </svg>
);

const aDSDiagramSymbolSignalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSignalSvg,
  'ads-diagram-symbol-signal'
);

/**![ADSDiagramSymbolSignal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNjAzIDE0QzE1LjY5MiAxNCAxNi4zNDkgMTIuNzk0IDE1Ljc1OCAxMS44NzlMOS4xNTYgMS42NTZDOC42MTQgMC44MTcgNy4zODcgMC44MTcgNi44NDUgMS42NTZMMC4yNDMgMTEuODc5Qy0wLjM0OCAxMi43OTQgMC4zMDkgMTQgMS4zOTggMTRIMTQuNjAzWk04IDIuNjM0TDE0LjM3MyAxMi41SDEuNjI3TDggMi42MzRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSignalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSignal';
}

export default RefIcon;
