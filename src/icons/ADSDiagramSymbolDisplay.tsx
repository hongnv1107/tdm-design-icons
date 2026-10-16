// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolDisplaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 8C14.5 6.694 14.109 5.525 13.568 4.699C13.001 3.834 12.386 3.5 12 3.5H4.69C4.518 3.5 4.358 3.588 4.267 3.733L1.573 8L4.267 12.267C4.358 12.412 4.518 12.5 4.69 12.5H12C12.386 12.5 13.001 12.166 13.568 11.301C14.109 10.475 14.5 9.306 14.5 8ZM16 8C16 9.593 15.526 11.049 14.822 12.123C14.144 13.158 13.133 14 12 14H4.69C4.003 14 3.364 13.648 2.998 13.067L0.264 8.733C-0.019 8.285 -0.019 7.715 0.264 7.267L2.998 2.933C3.364 2.352 4.003 2 4.69 2H12C13.133 2 14.144 2.842 14.822 3.877C15.526 4.951 16 6.407 16 8Z"/>
  </svg>
);

const aDSDiagramSymbolDisplayIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolDisplaySvg,
  'ads-diagram-symbol-display'
);

/**![ADSDiagramSymbolDisplay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA4QzE0LjUgNi42OTQgMTQuMTA5IDUuNTI1IDEzLjU2OCA0LjY5OUMxMy4wMDEgMy44MzQgMTIuMzg2IDMuNSAxMiAzLjVINC42OUM0LjUxOCAzLjUgNC4zNTggMy41ODggNC4yNjcgMy43MzNMMS41NzMgOEw0LjI2NyAxMi4yNjdDNC4zNTggMTIuNDEyIDQuNTE4IDEyLjUgNC42OSAxMi41SDEyQzEyLjM4NiAxMi41IDEzLjAwMSAxMi4xNjYgMTMuNTY4IDExLjMwMUMxNC4xMDkgMTAuNDc1IDE0LjUgOS4zMDYgMTQuNSA4Wk0xNiA4QzE2IDkuNTkzIDE1LjUyNiAxMS4wNDkgMTQuODIyIDEyLjEyM0MxNC4xNDQgMTMuMTU4IDEzLjEzMyAxNCAxMiAxNEg0LjY5QzQuMDAzIDE0IDMuMzY0IDEzLjY0OCAyLjk5OCAxMy4wNjdMMC4yNjQgOC43MzNDLTAuMDE5IDguMjg1IC0wLjAxOSA3LjcxNSAwLjI2NCA3LjI2N0wyLjk5OCAyLjkzM0MzLjM2NCAyLjM1MiA0LjAwMyAyIDQuNjkgMkgxMkMxMy4xMzMgMiAxNC4xNDQgMi44NDIgMTQuODIyIDMuODc3QzE1LjUyNiA0Ljk1MSAxNiA2LjQwNyAxNiA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolDisplayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolDisplay';
}

export default RefIcon;
