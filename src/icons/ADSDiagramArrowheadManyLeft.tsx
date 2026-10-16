// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.199 7.249H16V8.749H8.199L1.372 12.65L0.628 11.348L5.176 8.749H0V7.249H5.176L0.628 4.65L1.372 3.348L8.199 7.249Z"/>
  </svg>
);

const aDSDiagramArrowheadManyLeftIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyLeftSvg,
  'ads-diagram-arrowhead-many-left'
);

/**![ADSDiagramArrowheadManyLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04LjE5OSA3LjI0OUgxNlY4Ljc0OUg4LjE5OUwxLjM3MiAxMi42NUwwLjYyOCAxMS4zNDhMNS4xNzYgOC43NDlIMFY3LjI0OUg1LjE3NkwwLjYyOCA0LjY1TDEuMzcyIDMuMzQ4TDguMTk5IDcuMjQ5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyLeft';
}

export default RefIcon;
