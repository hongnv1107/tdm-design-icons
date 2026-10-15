// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableRowAddBelowSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 0C1.616 0 1 0.616 1 1.375L1 7.125C1 7.884 1.616 8.5 2.375 8.5L13.625 8.5C14.384 8.5 15 7.884 15 7.125L15 1.375C15 0.616 14.384 0 13.625 0L2.375 0ZM2.5 1.5L13.5 1.5L13.5 3.5L2.5 3.5L2.5 1.5ZM2.5 5L13.5 5L13.5 7L2.5 7L2.5 5ZM8.75 12.25L11 12.25L11 13.75L8.75 13.75L8.75 16L7.25 16L7.25 13.75L5 13.75L5 12.25L7.25 12.25L7.25 10L8.75 10L8.75 12.25Z"/>
  </svg>
);

const aDSTableRowAddBelowIconDefinition = svgToIconDefinition(
  aDSTableRowAddBelowSvg,
  'ads-table-row-add-below'
);

/**![ADSTableRowAddBelow](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuMzc1IDBDMS42MTYgMCAxIDAuNjE2IDEgMS4zNzVMMSA3LjEyNUMxIDcuODg0IDEuNjE2IDguNSAyLjM3NSA4LjVMMTMuNjI1IDguNUMxNC4zODQgOC41IDE1IDcuODg0IDE1IDcuMTI1TDE1IDEuMzc1QzE1IDAuNjE2IDE0LjM4NCAwIDEzLjYyNSAwTDIuMzc1IDBaTTIuNSAxLjVMMTMuNSAxLjVMMTMuNSAzLjVMMi41IDMuNUwyLjUgMS41Wk0yLjUgNUwxMy41IDVMMTMuNSA3TDIuNSA3TDIuNSA1Wk04Ljc1IDEyLjI1TDExIDEyLjI1TDExIDEzLjc1TDguNzUgMTMuNzVMOC43NSAxNkw3LjI1IDE2TDcuMjUgMTMuNzVMNSAxMy43NUw1IDEyLjI1TDcuMjUgMTIuMjVMNy4yNSAxMEw4Ljc1IDEwTDguNzUgMTIuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableRowAddBelowIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableRowAddBelow';
}

export default RefIcon;
