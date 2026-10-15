// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolActionSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSDiagramSymbolAction](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMS41IDEyLjVIMTQuNVYzLjVIMS41VjEyLjVaTTE2IDEyLjYyNUMxNiAxMy4zODQgMTUuMzg0IDE0IDE0LjYyNSAxNEgxLjM3NUMwLjYxNiAxNCAwIDEzLjM4NCAwIDEyLjYyNVYzLjM3NUMwIDIuNjE2IDAuNjE2IDIgMS4zNzUgMkgxNC42MjVDMTUuMzg0IDIgMTYgMi42MTYgMTYgMy4zNzVWMTIuNjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolActionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolAction';
}

export default RefIcon;
