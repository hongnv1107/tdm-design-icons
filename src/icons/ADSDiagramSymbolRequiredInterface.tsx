// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolRequiredInterfaceSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 1C5.613 1 8.586 3.737 8.96 7.25H14V8.75H8.96C8.586 12.263 5.613 15 2 15V13.5C5.038 13.5 7.5 11.038 7.5 8C7.5 4.962 5.038 2.5 2 2.5V1Z"/>
  </svg>
);

const aDSDiagramSymbolRequiredInterfaceIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolRequiredInterfaceSvg,
  'ads-diagram-symbol-required-interface'
);

/**![ADSDiagramSymbolRequiredInterface](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yIDFDNS42MTMgMSA4LjU4NiAzLjczNyA4Ljk2IDcuMjVIMTRWOC43NUg4Ljk2QzguNTg2IDEyLjI2MyA1LjYxMyAxNSAyIDE1VjEzLjVDNS4wMzggMTMuNSA3LjUgMTEuMDM4IDcuNSA4QzcuNSA0Ljk2MiA1LjAzOCAyLjUgMiAyLjVWMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolRequiredInterfaceIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolRequiredInterface';
}

export default RefIcon;
