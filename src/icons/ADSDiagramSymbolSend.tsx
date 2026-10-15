// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSendSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14ZM8 8.131L1.5 4.531V6.246L7.637 9.645C7.863 9.77 8.137 9.77 8.363 9.645L14.5 6.246V4.531L8 8.131Z"/>
  </svg>
);

const aDSDiagramSymbolSendIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSendSvg,
  'ads-diagram-symbol-send'
);

/**![ADSDiagramSymbolSend](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDJDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRaTTggOC4xMzFMMS41IDQuNTMxVjYuMjQ2TDcuNjM3IDkuNjQ1QzcuODYzIDkuNzcgOC4xMzcgOS43NyA4LjM2MyA5LjY0NUwxNC41IDYuMjQ2VjQuNTMxTDggOC4xMzFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSendIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSend';
}

export default RefIcon;
