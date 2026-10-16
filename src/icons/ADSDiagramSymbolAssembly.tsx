// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolAssemblySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 2C10.06 2 12.582 4.29 12.951 7.25H16V8.75H12.951C12.582 11.71 10.06 14 7 14V12.5C9.485 12.5 11.5 10.485 11.5 8C11.5 5.515 9.485 3.5 7 3.5V2ZM9 8C9 6.895 8.105 6 7 6C5.895 6 5 6.895 5 8C5 9.105 5.895 10 7 10C8.105 10 9 9.105 9 8ZM10.5 8C10.5 9.933 8.933 11.5 7 11.5C5.325 11.5 3.925 10.322 3.582 8.75H0V7.25H3.582C3.925 5.678 5.325 4.5 7 4.5C8.933 4.5 10.5 6.067 10.5 8Z"/>
  </svg>
);

const aDSDiagramSymbolAssemblyIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolAssemblySvg,
  'ads-diagram-symbol-assembly'
);

/**![ADSDiagramSymbolAssembly](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03IDJDMTAuMDYgMiAxMi41ODIgNC4yOSAxMi45NTEgNy4yNUgxNlY4Ljc1SDEyLjk1MUMxMi41ODIgMTEuNzEgMTAuMDYgMTQgNyAxNFYxMi41QzkuNDg1IDEyLjUgMTEuNSAxMC40ODUgMTEuNSA4QzExLjUgNS41MTUgOS40ODUgMy41IDcgMy41VjJaTTkgOEM5IDYuODk1IDguMTA1IDYgNyA2QzUuODk1IDYgNSA2Ljg5NSA1IDhDNSA5LjEwNSA1Ljg5NSAxMCA3IDEwQzguMTA1IDEwIDkgOS4xMDUgOSA4Wk0xMC41IDhDMTAuNSA5LjkzMyA4LjkzMyAxMS41IDcgMTEuNUM1LjMyNSAxMS41IDMuOTI1IDEwLjMyMiAzLjU4MiA4Ljc1SDBWNy4yNUgzLjU4MkMzLjkyNSA1LjY3OCA1LjMyNSA0LjUgNyA0LjVDOC45MzMgNC41IDEwLjUgNi4wNjcgMTAuNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolAssemblyIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolAssembly';
}

export default RefIcon;
