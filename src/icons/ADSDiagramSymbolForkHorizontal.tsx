// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolForkHorizontalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.204 5.011C15.213 5.113 16 5.964 16 7V9C16 10.105 15.105 11 14 11H2C0.895 11 0 10.105 0 9V7C0 5.895 0.895 5 2 5H14L14.204 5.011Z"/>
  </svg>
);

const aDSDiagramSymbolForkHorizontalIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolForkHorizontalSvg,
  'ads-diagram-symbol-fork-horizontal'
);

/**![ADSDiagramSymbolForkHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMjA0IDUuMDExQzE1LjIxMyA1LjExMyAxNiA1Ljk2NCAxNiA3VjlDMTYgMTAuMTA1IDE1LjEwNSAxMSAxNCAxMUgyQzAuODk1IDExIDAgMTAuMTA1IDAgOVY3QzAgNS44OTUgMC44OTUgNSAyIDVIMTRMMTQuMjA0IDUuMDExWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolForkHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolForkHorizontal';
}

export default RefIcon;
