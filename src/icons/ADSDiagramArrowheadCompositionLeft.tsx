// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadCompositionLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.375 3.1C5.645 2.944 5.99 2.97 6.235 3.179L11.025 7.25H16V8.75H11.025L6.235 12.821C5.955 13.059 5.545 13.059 5.265 12.821L0.265 8.571C0.097 8.429 0 8.22 0 8C0 7.78 0.097 7.571 0.265 7.429L5.265 3.179L5.375 3.1Z"/>
  </svg>
);

const aDSDiagramArrowheadCompositionLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadCompositionLeftSvg,
  'ads-diagram-arrowhead-composition-left'
);

/**![ADSDiagramArrowheadCompositionLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik01LjM3NSAzLjFDNS42NDUgMi45NDQgNS45OSAyLjk3IDYuMjM1IDMuMTc5TDExLjAyNSA3LjI1SDE2VjguNzVIMTEuMDI1TDYuMjM1IDEyLjgyMUM1Ljk1NSAxMy4wNTkgNS41NDUgMTMuMDU5IDUuMjY1IDEyLjgyMUwwLjI2NSA4LjU3MUMwLjA5NyA4LjQyOSAwIDguMjIgMCA4QzAgNy43OCAwLjA5NyA3LjU3MSAwLjI2NSA3LjQyOUw1LjI2NSAzLjE3OUw1LjM3NSAzLjFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadCompositionLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadCompositionLeft';
}

export default RefIcon;
