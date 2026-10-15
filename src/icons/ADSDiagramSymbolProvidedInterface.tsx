// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolProvidedInterfaceSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramSymbolProvidedInterface](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIuNSA4QzEyLjUgNi42MTkgMTEuMzgxIDUuNSAxMCA1LjVDOC42MTkgNS41IDcuNSA2LjYxOSA3LjUgOEM3LjUgOS4zODEgOC42MTkgMTAuNSAxMCAxMC41QzExLjM4MSAxMC41IDEyLjUgOS4zODEgMTIuNSA4Wk0xNCA4QzE0IDEwLjIwOSAxMi4yMDkgMTIgMTAgMTJDOC4wNDcgMTIgNi40MjIgMTAuNjAxIDYuMDcxIDguNzVIMlY3LjI1SDYuMDcxQzYuNDIyIDUuMzk5IDguMDQ3IDQgMTAgNEMxMi4yMDkgNCAxNCA1Ljc5MSAxNCA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolProvidedInterfaceIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolProvidedInterface';
}

export default RefIcon;
