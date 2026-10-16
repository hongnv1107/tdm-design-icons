// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramObjectBoundarySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSDiagramObjectBoundary](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDhDMTQuNSA1LjUxNSAxMi40ODUgMy41IDEwIDMuNUM3LjUxNSAzLjUgNS41IDUuNTE1IDUuNSA4QzUuNSAxMC40ODUgNy41MTUgMTIuNSAxMCAxMi41QzEyLjQ4NSAxMi41IDE0LjUgMTAuNDg1IDE0LjUgOFpNMTYgOEMxNiAxMS4zMTQgMTMuMzE0IDE0IDEwIDE0QzYuNjg2IDE0IDQgMTEuMzE0IDQgOEM0IDQuNjg2IDYuNjg2IDIgMTAgMkMxMy4zMTQgMiAxNiA0LjY4NiAxNiA4WiIvPjxwYXRoIGQ9Ik0xLjUgMlY3LjI1SDQuNzVWOC43NUgxLjVWMTRIMFYySDEuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramObjectBoundaryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramObjectBoundary';
}

export default RefIcon;
