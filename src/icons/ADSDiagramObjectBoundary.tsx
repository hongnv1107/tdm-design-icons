// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramObjectBoundarySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 5.515 12.485 3.5 10 3.5C7.515 3.5 5.5 5.515 5.5 8C5.5 10.485 7.515 12.5 10 12.5C12.485 12.5 14.5 10.485 14.5 8ZM16 8C16 11.314 13.314 14 10 14C6.686 14 4 11.314 4 8C4 4.686 6.686 2 10 2C13.314 2 16 4.686 16 8Z"/><path d="M1.5 2V7.25H4.75V8.75H1.5V14H0V2H1.5Z"/>
  </svg>
);

const aDSDiagramObjectBoundaryIconDefinition = svgToIconDefinition(
  aDSDiagramObjectBoundarySvg,
  'ads-diagram-object-boundary'
);

/**![ADSDiagramObjectBoundary](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNS41MTUgMTIuNDg1IDMuNSAxMCAzLjVDNy41MTUgMy41IDUuNSA1LjUxNSA1LjUgOEM1LjUgMTAuNDg1IDcuNTE1IDEyLjUgMTAgMTIuNUMxMi40ODUgMTIuNSAxNC41IDEwLjQ4NSAxNC41IDhaTTE2IDhDMTYgMTEuMzE0IDEzLjMxNCAxNCAxMCAxNEM2LjY4NiAxNCA0IDExLjMxNCA0IDhDNCA0LjY4NiA2LjY4NiAyIDEwIDJDMTMuMzE0IDIgMTYgNC42ODYgMTYgOFoiLz48cGF0aCBkPSJNMS41IDJWNy4yNUg0Ljc1VjguNzVIMS41VjE0SDBWMkgxLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramObjectBoundaryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramObjectBoundary';
}

export default RefIcon;
