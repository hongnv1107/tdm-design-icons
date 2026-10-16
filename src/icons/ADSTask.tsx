// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTaskSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3ZM12.326 5.48L7.326 11.48C7.184 11.651 6.973 11.75 6.75 11.75C6.527 11.75 6.316 11.651 6.174 11.48L3.674 8.48L4.826 7.52L6.75 9.828L11.174 4.52L12.326 5.48Z"/>
  </svg>
);

const aDSTaskIconDefinition = svgToIconDefinition(
  aDSTaskSvg,
  'ads-task'
);

/**![ADSTask](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDNaTTEyLjMyNiA1LjQ4TDcuMzI2IDExLjQ4QzcuMTg0IDExLjY1MSA2Ljk3MyAxMS43NSA2Ljc1IDExLjc1QzYuNTI3IDExLjc1IDYuMzE2IDExLjY1MSA2LjE3NCAxMS40OEwzLjY3NCA4LjQ4TDQuODI2IDcuNTJMNi43NSA5LjgyOEwxMS4xNzQgNC41MkwxMi4zMjYgNS40OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTaskIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTask';
}

export default RefIcon;
