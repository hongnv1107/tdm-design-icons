// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolEndSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8C4 5.791 5.791 4 8 4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1ZM8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8C13.5 4.962 11.038 2.5 8 2.5Z"/>
  </svg>
);

const aDSDiagramSymbolEndIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolEndSvg,
  'ads-diagram-symbol-end'
);

/**![ADSDiagramSymbolEnd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOCA0QzEwLjIwOSA0IDEyIDUuNzkxIDEyIDhDMTIgMTAuMjA5IDEwLjIwOSAxMiA4IDEyQzUuNzkxIDEyIDQgMTAuMjA5IDQgOEM0IDUuNzkxIDUuNzkxIDQgOCA0WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxQzExLjg2NiAxIDE1IDQuMTM0IDE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0IDE1IDEgMTEuODY2IDEgOEMxIDQuMTM0IDQuMTM0IDEgOCAxWk04IDIuNUM0Ljk2MiAyLjUgMi41IDQuOTYyIDIuNSA4QzIuNSAxMS4wMzggNC45NjIgMTMuNSA4IDEzLjVDMTEuMDM4IDEzLjUgMTMuNSAxMS4wMzggMTMuNSA4QzEzLjUgNC45NjIgMTEuMDM4IDIuNSA4IDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolEndIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolEnd';
}

export default RefIcon;
