// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnMoveLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.375C16 1.616 15.384 1 14.625 1H8.875C8.116 1 7.5 1.616 7.5 2.375V13.625C7.5 14.384 8.116 15 8.875 15H14.625C15.384 15 16 14.384 16 13.625V2.375ZM14.5 2.5V13.5H12.5V2.5H14.5ZM11 2.5V13.5H9V2.5H11ZM3.22 4.47L0.22 7.47C-0.073 7.763 -0.073 8.237 0.22 8.53L3.22 11.53L4.28 10.47L2.561 8.75H6V7.25H2.561L4.28 5.53L3.22 4.47Z"/>
  </svg>
);

const aDSTableColumnMoveLeftIconDefinition = svgToIconDefinition(
  aDSTableColumnMoveLeftSvg,
  'ads-table-column-move-left'
);

/**![ADSTableColumnMoveLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIuMzc1QzE2IDEuNjE2IDE1LjM4NCAxIDE0LjYyNSAxSDguODc1QzguMTE2IDEgNy41IDEuNjE2IDcuNSAyLjM3NVYxMy42MjVDNy41IDE0LjM4NCA4LjExNiAxNSA4Ljg3NSAxNUgxNC42MjVDMTUuMzg0IDE1IDE2IDE0LjM4NCAxNiAxMy42MjVWMi4zNzVaTTE0LjUgMi41VjEzLjVIMTIuNVYyLjVIMTQuNVpNMTEgMi41VjEzLjVIOVYyLjVIMTFaTTMuMjIgNC40N0wwLjIyIDcuNDdDLTAuMDczIDcuNzYzIC0wLjA3MyA4LjIzNyAwLjIyIDguNTNMMy4yMiAxMS41M0w0LjI4IDEwLjQ3TDIuNTYxIDguNzVINlY3LjI1SDIuNTYxTDQuMjggNS41M0wzLjIyIDQuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnMoveLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnMoveLeft';
}

export default RefIcon;
