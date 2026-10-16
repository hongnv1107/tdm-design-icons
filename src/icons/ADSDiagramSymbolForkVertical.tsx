// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolForkVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 0C10.105 0 11 0.895 11 2V14C11 15.105 10.105 16 9 16H7C5.895 16 5 15.105 5 14V2C5 0.895 5.895 0 7 0H9Z"/>
  </svg>
);

const aDSDiagramSymbolForkVerticalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolForkVerticalSvg,
  'ads-diagram-symbol-fork-vertical'
);

/**![ADSDiagramSymbolForkVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOSAwQzEwLjEwNSAwIDExIDAuODk1IDExIDJWMTRDMTEgMTUuMTA1IDEwLjEwNSAxNiA5IDE2SDdDNS44OTUgMTYgNSAxNS4xMDUgNSAxNFYyQzUgMC44OTUgNS44OTUgMCA3IDBIOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolForkVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolForkVertical';
}

export default RefIcon;
