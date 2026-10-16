// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolClassSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 10.25H3V14L3.01 14.101C3.056 14.329 3.258 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V10.25ZM3 8.75H13V4.5H3V8.75ZM13 2C13 1.724 12.776 1.5 12.5 1.5H3.5C3.224 1.5 3 1.724 3 2V3H13V2ZM14.5 14C14.5 15.105 13.605 16 12.5 16H3.5C2.464 16 1.613 15.213 1.511 14.204L1.5 14V2C1.5 0.895 2.395 0 3.5 0H12.5C13.605 0 14.5 0.895 14.5 2V14Z"/>
  </svg>
);

const aDSDiagramSymbolClassIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolClassSvg,
  'ads-diagram-symbol-class'
);

/**![ADSDiagramSymbolClass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMyAxMC4yNUgzVjE0TDMuMDEgMTQuMTAxQzMuMDU2IDE0LjMyOSAzLjI1OCAxNC41IDMuNSAxNC41SDEyLjVDMTIuNzc2IDE0LjUgMTMgMTQuMjc2IDEzIDE0VjEwLjI1Wk0zIDguNzVIMTNWNC41SDNWOC43NVpNMTMgMkMxMyAxLjcyNCAxMi43NzYgMS41IDEyLjUgMS41SDMuNUMzLjIyNCAxLjUgMyAxLjcyNCAzIDJWM0gxM1YyWk0xNC41IDE0QzE0LjUgMTUuMTA1IDEzLjYwNSAxNiAxMi41IDE2SDMuNUMyLjQ2NCAxNiAxLjYxMyAxNS4yMTMgMS41MTEgMTQuMjA0TDEuNSAxNFYyQzEuNSAwLjg5NSAyLjM5NSAwIDMuNSAwSDEyLjVDMTMuNjA1IDAgMTQuNSAwLjg5NSAxNC41IDJWMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolClassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolClass';
}

export default RefIcon;
