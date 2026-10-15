// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolFrameSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 3.5C14.5 3.224 14.276 3 14 3H8V5.75C8 6.164 7.664 6.5 7.25 6.5H1.5V12.5C1.5 12.776 1.724 13 2 13H14C14.276 13 14.5 12.776 14.5 12.5V3.5ZM1.5 5H6.5V3H2C1.724 3 1.5 3.224 1.5 3.5V5ZM16 12.5C16 13.605 15.105 14.5 14 14.5H2C0.895 14.5 0 13.605 0 12.5V3.5C0 2.395 0.895 1.5 2 1.5H14C15.105 1.5 16 2.395 16 3.5V12.5Z"/>
  </svg>
);

const aDSDiagramSymbolFrameIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolFrameSvg,
  'ads-diagram-symbol-frame'
);

/**![ADSDiagramSymbolFrame](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAzLjVDMTQuNSAzLjIyNCAxNC4yNzYgMyAxNCAzSDhWNS43NUM4IDYuMTY0IDcuNjY0IDYuNSA3LjI1IDYuNUgxLjVWMTIuNUMxLjUgMTIuNzc2IDEuNzI0IDEzIDIgMTNIMTRDMTQuMjc2IDEzIDE0LjUgMTIuNzc2IDE0LjUgMTIuNVYzLjVaTTEuNSA1SDYuNVYzSDJDMS43MjQgMyAxLjUgMy4yMjQgMS41IDMuNVY1Wk0xNiAxMi41QzE2IDEzLjYwNSAxNS4xMDUgMTQuNSAxNCAxNC41SDJDMC44OTUgMTQuNSAwIDEzLjYwNSAwIDEyLjVWMy41QzAgMi4zOTUgMC44OTUgMS41IDIgMS41SDE0QzE1LjEwNSAxLjUgMTYgMi4zOTUgMTYgMy41VjEyLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolFrameIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolFrame';
}

export default RefIcon;
