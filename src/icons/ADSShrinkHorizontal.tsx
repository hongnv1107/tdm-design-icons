// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkHorizontalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75H0V7.25H6.25V8.75ZM9.75 7.25H16V8.75H9.75V7.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.189 8L2.22 5.03L3.28 3.97L6.78 7.47C7.073 7.763 7.073 8.237 6.78 8.53L3.28 12.03L2.22 10.97L5.189 8ZM9.22 7.47L12.72 3.97L13.78 5.03L10.811 8L13.78 10.97L12.72 12.03L9.22 8.53C8.927 8.237 8.927 7.763 9.22 7.47Z"/>
  </svg>
);

const aDSShrinkHorizontalIconDefinition = svgToIconDefinition(
  aDSShrinkHorizontalSvg,
  'ads-shrink-horizontal'
);

/**![ADSShrinkHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjUgOC43NUgwVjcuMjVINi4yNVY4Ljc1Wk05Ljc1IDcuMjVIMTZWOC43NUg5Ljc1VjcuMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjE4OSA4TDIuMjIgNS4wM0wzLjI4IDMuOTdMNi43OCA3LjQ3QzcuMDczIDcuNzYzIDcuMDczIDguMjM3IDYuNzggOC41M0wzLjI4IDEyLjAzTDIuMjIgMTAuOTdMNS4xODkgOFpNOS4yMiA3LjQ3TDEyLjcyIDMuOTdMMTMuNzggNS4wM0wxMC44MTEgOEwxMy43OCAxMC45N0wxMi43MiAxMi4wM0w5LjIyIDguNTNDOC45MjcgOC4yMzcgOC45MjcgNy43NjMgOS4yMiA3LjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkHorizontal';
}

export default RefIcon;
