// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableRowAddAboveSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 16C1.616 16 1 15.384 1 14.625L1 8.875C1 8.116 1.616 7.5 2.375 7.5L13.625 7.5C14.384 7.5 15 8.116 15 8.875L15 14.625C15 15.384 14.384 16 13.625 16L2.375 16ZM2.5 14.5L13.5 14.5L13.5 12.5L2.5 12.5L2.5 14.5ZM2.5 11L13.5 11L13.5 9L2.5 9L2.5 11ZM8.75 3.75L11 3.75L11 2.25L8.75 2.25L8.75 0L7.25 0L7.25 2.25L5 2.25L5 3.75L7.25 3.75L7.25 6L8.75 6L8.75 3.75Z"/>
  </svg>
);

const aDSTableRowAddAboveIconDefinition = svgToIconDefinition(
  aDSTableRowAddAboveSvg,
  'ads-table-row-add-above'
);

/**![ADSTableRowAddAbove](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMzc1IDE2QzEuNjE2IDE2IDEgMTUuMzg0IDEgMTQuNjI1TDEgOC44NzVDMSA4LjExNiAxLjYxNiA3LjUgMi4zNzUgNy41TDEzLjYyNSA3LjVDMTQuMzg0IDcuNSAxNSA4LjExNiAxNSA4Ljg3NUwxNSAxNC42MjVDMTUgMTUuMzg0IDE0LjM4NCAxNiAxMy42MjUgMTZMMi4zNzUgMTZaTTIuNSAxNC41TDEzLjUgMTQuNUwxMy41IDEyLjVMMi41IDEyLjVMMi41IDE0LjVaTTIuNSAxMUwxMy41IDExTDEzLjUgOUwyLjUgOUwyLjUgMTFaTTguNzUgMy43NUwxMSAzLjc1TDExIDIuMjVMOC43NSAyLjI1TDguNzUgMEw3LjI1IDBMNy4yNSAyLjI1TDUgMi4yNUw1IDMuNzVMNy4yNSAzLjc1TDcuMjUgNkw4Ljc1IDZMOC43NSAzLjc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableRowAddAboveIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableRowAddAbove';
}

export default RefIcon;
