// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolManualOperationSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.594 2C15.517 2 16.178 2.891 15.91 3.774L13.237 12.581C12.981 13.424 12.204 14 11.323 14H4.676C3.796 14 3.018 13.424 2.762 12.581L0.09 3.774C-0.179 2.891 0.482 2 1.405 2H14.594ZM4.198 12.146C4.262 12.356 4.456 12.5 4.676 12.5H11.323C11.543 12.5 11.737 12.356 11.801 12.146L14.426 3.5H1.574L4.198 12.146Z"/>
  </svg>
);

const aDSDiagramSymbolManualOperationIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolManualOperationSvg,
  'ads-diagram-symbol-manual-operation'
);

/**![ADSDiagramSymbolManualOperation](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNTk0IDJDMTUuNTE3IDIgMTYuMTc4IDIuODkxIDE1LjkxIDMuNzc0TDEzLjIzNyAxMi41ODFDMTIuOTgxIDEzLjQyNCAxMi4yMDQgMTQgMTEuMzIzIDE0SDQuNjc2QzMuNzk2IDE0IDMuMDE4IDEzLjQyNCAyLjc2MiAxMi41ODFMMC4wOSAzLjc3NEMtMC4xNzkgMi44OTEgMC40ODIgMiAxLjQwNSAySDE0LjU5NFpNNC4xOTggMTIuMTQ2QzQuMjYyIDEyLjM1NiA0LjQ1NiAxMi41IDQuNjc2IDEyLjVIMTEuMzIzQzExLjU0MyAxMi41IDExLjczNyAxMi4zNTYgMTEuODAxIDEyLjE0NkwxNC40MjYgMy41SDEuNTc0TDQuMTk4IDEyLjE0NloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolManualOperationIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolManualOperation';
}

export default RefIcon;
