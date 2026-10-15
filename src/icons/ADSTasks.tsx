// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTasksSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H11C12.105 1 13 1.895 13 3V11C13 12.105 12.105 13 11 13H3C1.895 13 1 12.105 1 11V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V11C2.5 11.276 2.724 11.5 3 11.5H11C11.276 11.5 11.5 11.276 11.5 11V3C11.5 2.724 11.276 2.5 11 2.5H3ZM9.426 4.017L10.574 4.983L6.574 9.733C6.431 9.902 6.221 10 6 10C5.779 10 5.569 9.902 5.426 9.733L3.426 7.358L4.574 6.392L6 8.086L9.426 4.017Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16 6V12.75C16 14.545 14.545 16 12.75 16H6V14.5H12.75C13.717 14.5 14.5 13.717 14.5 12.75V6H16Z"/>
  </svg>
);

const aDSTasksIconDefinition = svgToIconDefinition(
  aDSTasksSvg,
  'ads-tasks'
);

/**![ADSTasks](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDExQzEyLjEwNSAxIDEzIDEuODk1IDEzIDNWMTFDMTMgMTIuMTA1IDEyLjEwNSAxMyAxMSAxM0gzQzEuODk1IDEzIDEgMTIuMTA1IDEgMTFWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxMUMyLjUgMTEuMjc2IDIuNzI0IDExLjUgMyAxMS41SDExQzExLjI3NiAxMS41IDExLjUgMTEuMjc2IDExLjUgMTFWM0MxMS41IDIuNzI0IDExLjI3NiAyLjUgMTEgMi41SDNaTTkuNDI2IDQuMDE3TDEwLjU3NCA0Ljk4M0w2LjU3NCA5LjczM0M2LjQzMSA5LjkwMiA2LjIyMSAxMCA2IDEwQzUuNzc5IDEwIDUuNTY5IDkuOTAyIDUuNDI2IDkuNzMzTDMuNDI2IDcuMzU4TDQuNTc0IDYuMzkyTDYgOC4wODZMOS40MjYgNC4wMTdaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA2VjEyLjc1QzE2IDE0LjU0NSAxNC41NDUgMTYgMTIuNzUgMTZINlYxNC41SDEyLjc1QzEzLjcxNyAxNC41IDE0LjUgMTMuNzE3IDE0LjUgMTIuNzVWNkgxNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTasksIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTasks';
}

export default RefIcon;
