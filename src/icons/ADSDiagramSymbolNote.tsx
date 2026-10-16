// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolNoteSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 12.5C14.5 12.742 14.329 12.944 14.101 12.99L14 13H2C1.724 13 1.5 12.776 1.5 12.5V3.5C1.5 3.224 1.724 3 2 3H10V6.75C10 7.164 10.336 7.5 10.75 7.5H14.5V12.5ZM11.5 3.561L13.94 6H11.5V3.561ZM16 6.75C16 6.231 15.794 5.733 15.427 5.366L12.134 2.073C11.767 1.706 11.269 1.5 10.75 1.5H2C0.895 1.5 0 2.395 0 3.5V12.5C0 13.605 0.895 14.5 2 14.5H14L14.204 14.489C15.213 14.387 16 13.536 16 12.5V6.75Z"/>
  </svg>
);

const aDSDiagramSymbolNoteIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolNoteSvg,
  'ads-diagram-symbol-note'
);

/**![ADSDiagramSymbolNote](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSAxMi41QzE0LjUgMTIuNzQyIDE0LjMyOSAxMi45NDQgMTQuMTAxIDEyLjk5TDE0IDEzSDJDMS43MjQgMTMgMS41IDEyLjc3NiAxLjUgMTIuNVYzLjVDMS41IDMuMjI0IDEuNzI0IDMgMiAzSDEwVjYuNzVDMTAgNy4xNjQgMTAuMzM2IDcuNSAxMC43NSA3LjVIMTQuNVYxMi41Wk0xMS41IDMuNTYxTDEzLjk0IDZIMTEuNVYzLjU2MVpNMTYgNi43NUMxNiA2LjIzMSAxNS43OTQgNS43MzMgMTUuNDI3IDUuMzY2TDEyLjEzNCAyLjA3M0MxMS43NjcgMS43MDYgMTEuMjY5IDEuNSAxMC43NSAxLjVIMkMwLjg5NSAxLjUgMCAyLjM5NSAwIDMuNVYxMi41QzAgMTMuNjA1IDAuODk1IDE0LjUgMiAxNC41SDE0TDE0LjIwNCAxNC40ODlDMTUuMjEzIDE0LjM4NyAxNiAxMy41MzYgMTYgMTIuNVY2Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolNoteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolNote';
}

export default RefIcon;
