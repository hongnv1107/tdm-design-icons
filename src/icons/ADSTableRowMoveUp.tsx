// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableRowMoveUpSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 16C1.616 16 1 15.384 1 14.625L1 8.875C1 8.116 1.616 7.5 2.375 7.5L13.625 7.5C14.384 7.5 15 8.116 15 8.875L15 14.625C15 15.384 14.384 16 13.625 16L2.375 16ZM2.5 14.5L13.5 14.5L13.5 12.5L2.5 12.5L2.5 14.5ZM2.5 11L13.5 11L13.5 9L2.5 9L2.5 11ZM4.47 3.22L7.47 0.22C7.763 -0.073 8.237 -0.073 8.53 0.22L11.53 3.22L10.47 4.28L8.75 2.561L8.75 6L7.25 6L7.25 2.561L5.53 4.28L4.47 3.22Z"/>
  </svg>
);

const aDSTableRowMoveUpIconDefinition = svgToIconDefinition(
  aDSTableRowMoveUpSvg,
  'ads-table-row-move-up'
);

/**![ADSTableRowMoveUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMzc1IDE2QzEuNjE2IDE2IDEgMTUuMzg0IDEgMTQuNjI1TDEgOC44NzVDMSA4LjExNiAxLjYxNiA3LjUgMi4zNzUgNy41TDEzLjYyNSA3LjVDMTQuMzg0IDcuNSAxNSA4LjExNiAxNSA4Ljg3NUwxNSAxNC42MjVDMTUgMTUuMzg0IDE0LjM4NCAxNiAxMy42MjUgMTZMMi4zNzUgMTZaTTIuNSAxNC41TDEzLjUgMTQuNUwxMy41IDEyLjVMMi41IDEyLjVMMi41IDE0LjVaTTIuNSAxMUwxMy41IDExTDEzLjUgOUwyLjUgOUwyLjUgMTFaTTQuNDcgMy4yMkw3LjQ3IDAuMjJDNy43NjMgLTAuMDczIDguMjM3IC0wLjA3MyA4LjUzIDAuMjJMMTEuNTMgMy4yMkwxMC40NyA0LjI4TDguNzUgMi41NjFMOC43NSA2TDcuMjUgNkw3LjI1IDIuNTYxTDUuNTMgNC4yOEw0LjQ3IDMuMjJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableRowMoveUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableRowMoveUp';
}

export default RefIcon;
