// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolActionSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1.5 12.5H14.5V3.5H1.5V12.5ZM16 12.625C16 13.384 15.384 14 14.625 14H1.375C0.616 14 0 13.384 0 12.625V3.375C0 2.616 0.616 2 1.375 2H14.625C15.384 2 16 2.616 16 3.375V12.625Z"/>
  </svg>
);

const aDSDiagramSymbolActionIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolActionSvg,
  'ads-diagram-symbol-action'
);

/**![ADSDiagramSymbolAction](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xLjUgMTIuNUgxNC41VjMuNUgxLjVWMTIuNVpNMTYgMTIuNjI1QzE2IDEzLjM4NCAxNS4zODQgMTQgMTQuNjI1IDE0SDEuMzc1QzAuNjE2IDE0IDAgMTMuMzg0IDAgMTIuNjI1VjMuMzc1QzAgMi42MTYgMC42MTYgMiAxLjM3NSAySDE0LjYyNUMxNS4zODQgMiAxNiAyLjYxNiAxNiAzLjM3NVYxMi42MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolActionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolAction';
}

export default RefIcon;
