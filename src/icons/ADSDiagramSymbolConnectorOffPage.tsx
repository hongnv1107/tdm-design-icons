// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolConnectorOffPageSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4C14.5 3.724 14.276 3.5 14 3.5H2C1.724 3.5 1.5 3.724 1.5 4V8.534C1.5 8.711 1.594 8.875 1.747 8.965L7.747 12.482C7.903 12.574 8.097 12.574 8.253 12.482L14.253 8.965C14.406 8.875 14.5 8.711 14.5 8.534V4ZM16 8.534C16 9.244 15.624 9.9 15.012 10.259L9.012 13.776C8.387 14.143 7.613 14.143 6.988 13.776L0.988 10.259C0.376 9.9 0 9.244 0 8.534V4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V8.534Z"/>
  </svg>
);

const aDSDiagramSymbolConnectorOffPageIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolConnectorOffPageSvg,
  'ads-diagram-symbol-connector-off-page'
);

/**![ADSDiagramSymbolConnectorOffPage](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMkMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjguNTM0QzEuNSA4LjcxMSAxLjU5NCA4Ljg3NSAxLjc0NyA4Ljk2NUw3Ljc0NyAxMi40ODJDNy45MDMgMTIuNTc0IDguMDk3IDEyLjU3NCA4LjI1MyAxMi40ODJMMTQuMjUzIDguOTY1QzE0LjQwNiA4Ljg3NSAxNC41IDguNzExIDE0LjUgOC41MzRWNFpNMTYgOC41MzRDMTYgOS4yNDQgMTUuNjI0IDkuOSAxNS4wMTIgMTAuMjU5TDkuMDEyIDEzLjc3NkM4LjM4NyAxNC4xNDMgNy42MTMgMTQuMTQzIDYuOTg4IDEzLjc3NkwwLjk4OCAxMC4yNTlDMC4zNzYgOS45IDAgOS4yNDQgMCA4LjUzNFY0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFY4LjUzNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolConnectorOffPageIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolConnectorOffPage';
}

export default RefIcon;
