// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolActivationSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.5 2C9.5 1.724 9.276 1.5 9 1.5H7C6.724 1.5 6.5 1.724 6.5 2V14C6.5 14.276 6.724 14.5 7 14.5H9C9.276 14.5 9.5 14.276 9.5 14V2ZM11 14C11 15.105 10.105 16 9 16H7C5.895 16 5 15.105 5 14V2C5 0.895 5.895 0 7 0H9C10.105 0 11 0.895 11 2V14Z"/>
  </svg>
);

const aDSDiagramSymbolActivationIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolActivationSvg,
  'ads-diagram-symbol-activation'
);

/**![ADSDiagramSymbolActivation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik05LjUgMkM5LjUgMS43MjQgOS4yNzYgMS41IDkgMS41SDdDNi43MjQgMS41IDYuNSAxLjcyNCA2LjUgMlYxNEM2LjUgMTQuMjc2IDYuNzI0IDE0LjUgNyAxNC41SDlDOS4yNzYgMTQuNSA5LjUgMTQuMjc2IDkuNSAxNFYyWk0xMSAxNEMxMSAxNS4xMDUgMTAuMTA1IDE2IDkgMTZIN0M1Ljg5NSAxNiA1IDE1LjEwNSA1IDE0VjJDNSAwLjg5NSA1Ljg5NSAwIDcgMEg5QzEwLjEwNSAwIDExIDAuODk1IDExIDJWMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolActivationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolActivation';
}

export default RefIcon;
