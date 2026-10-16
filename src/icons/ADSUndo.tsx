// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSUndoSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22 4.72L4.72 1.22L5.78 2.28L3.561 4.5L10.25 4.5C12.873 4.5 15 6.627 15 9.25C15 11.873 12.873 14 10.25 14H8V12.5H10.25C12.045 12.5 13.5 11.045 13.5 9.25C13.5 7.455 12.045 6 10.25 6L3.561 6L5.78 8.22L4.72 9.28L1.22 5.78C1.079 5.64 1 5.449 1 5.25C1 5.051 1.079 4.86 1.22 4.72Z"/>
  </svg>
);

const aDSUndoIconDefinition = svgToIconDefinition(
  aDSUndoSvg,
  'ads-undo'
);

/**![ADSUndo](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMjIgNC43Mkw0LjcyIDEuMjJMNS43OCAyLjI4TDMuNTYxIDQuNUwxMC4yNSA0LjVDMTIuODczIDQuNSAxNSA2LjYyNyAxNSA5LjI1QzE1IDExLjg3MyAxMi44NzMgMTQgMTAuMjUgMTRIOFYxMi41SDEwLjI1QzEyLjA0NSAxMi41IDEzLjUgMTEuMDQ1IDEzLjUgOS4yNUMxMy41IDcuNDU1IDEyLjA0NSA2IDEwLjI1IDZMMy41NjEgNkw1Ljc4IDguMjJMNC43MiA5LjI4TDEuMjIgNS43OEMxLjA3OSA1LjY0IDEgNS40NDkgMSA1LjI1QzEgNS4wNTEgMS4wNzkgNC44NiAxLjIyIDQuNzJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSUndoIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSUndo';
}

export default RefIcon;
