// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolProvidedInterfaceSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 8C12.5 6.619 11.381 5.5 10 5.5C8.619 5.5 7.5 6.619 7.5 8C7.5 9.381 8.619 10.5 10 10.5C11.381 10.5 12.5 9.381 12.5 8ZM14 8C14 10.209 12.209 12 10 12C8.047 12 6.422 10.601 6.071 8.75H2V7.25H6.071C6.422 5.399 8.047 4 10 4C12.209 4 14 5.791 14 8Z"/>
  </svg>
);

const aDSDiagramSymbolProvidedInterfaceIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolProvidedInterfaceSvg,
  'ads-diagram-symbol-provided-interface'
);

/**![ADSDiagramSymbolProvidedInterface](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi41IDhDMTIuNSA2LjYxOSAxMS4zODEgNS41IDEwIDUuNUM4LjYxOSA1LjUgNy41IDYuNjE5IDcuNSA4QzcuNSA5LjM4MSA4LjYxOSAxMC41IDEwIDEwLjVDMTEuMzgxIDEwLjUgMTIuNSA5LjM4MSAxMi41IDhaTTE0IDhDMTQgMTAuMjA5IDEyLjIwOSAxMiAxMCAxMkM4LjA0NyAxMiA2LjQyMiAxMC42MDEgNi4wNzEgOC43NUgyVjcuMjVINi4wNzFDNi40MjIgNS4zOTkgOC4wNDcgNCAxMCA0QzEyLjIwOSA0IDE0IDUuNzkxIDE0IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolProvidedInterfaceIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolProvidedInterface';
}

export default RefIcon;
