// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolTemplateSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramSymbolTemplate](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMCAxMlYxMEgxLjVWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUg0VjE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlpNOS41IDEyLjVWMTRINi41VjEyLjVIOS41Wk0xNC41IDEyVjEwSDE2VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMTJWMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyWk0wIDRDMCAyLjg5NSAwLjg5NSAyIDIgMkg0VjMuNUgyQzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWNkgwVjRaTTE0LjUgNEMxNC41IDMuNzI0IDE0LjI3NiAzLjUgMTQgMy41SDEyVjJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFY2SDE0LjVWNFpNOS41IDJWMy41SDYuNVYySDkuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolTemplateIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolTemplate';
}

export default RefIcon;
