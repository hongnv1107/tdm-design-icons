// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSignalFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.844 1.656C7.386 0.818 8.613 0.818 9.155 1.656L15.757 11.879C16.348 12.794 15.691 14 14.602 14H1.397C0.308 14 -0.349 12.794 0.241 11.879L6.844 1.656Z"/>
  </svg>
);

const aDSDiagramSymbolSignalFilledIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSignalFilledSvg,
  'ads-diagram-symbol-signal-filled'
);

/**![ADSDiagramSymbolSignalFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik02Ljg0NCAxLjY1NkM3LjM4NiAwLjgxOCA4LjYxMyAwLjgxOCA5LjE1NSAxLjY1NkwxNS43NTcgMTEuODc5QzE2LjM0OCAxMi43OTQgMTUuNjkxIDE0IDE0LjYwMiAxNEgxLjM5N0MwLjMwOCAxNCAtMC4zNDkgMTIuNzk0IDAuMjQxIDExLjg3OUw2Ljg0NCAxLjY1NloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSignalFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSignalFilled';
}

export default RefIcon;
