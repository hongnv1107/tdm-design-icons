// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableRowDeleteSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.375 0C1.616 0 1 0.616 1 1.375L1 7.125C1 7.884 1.616 8.5 2.375 8.5L13.625 8.5C14.384 8.5 15 7.884 15 7.125L15 1.375C15 0.616 14.384 0 13.625 0L2.375 0ZM2.5 1.5L13.5 1.5L13.5 3.5L2.5 3.5L2.5 1.5ZM2.5 5L13.5 5L13.5 7L2.5 7L2.5 5ZM11 12.25L5 12.25L5 13.75L11 13.75L11 12.25Z"/>
  </svg>
);

const aDSTableRowDeleteIconDefinition = svgToIconDefinition(
  aDSTableRowDeleteSvg,
  'ads-table-row-delete'
);

/**![ADSTableRowDelete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMi4zNzUgMEMxLjYxNiAwIDEgMC42MTYgMSAxLjM3NUwxIDcuMTI1QzEgNy44ODQgMS42MTYgOC41IDIuMzc1IDguNUwxMy42MjUgOC41QzE0LjM4NCA4LjUgMTUgNy44ODQgMTUgNy4xMjVMMTUgMS4zNzVDMTUgMC42MTYgMTQuMzg0IDAgMTMuNjI1IDBMMi4zNzUgMFpNMi41IDEuNUwxMy41IDEuNUwxMy41IDMuNUwyLjUgMy41TDIuNSAxLjVaTTIuNSA1TDEzLjUgNUwxMy41IDdMMi41IDdMMi41IDVaTTExIDEyLjI1TDUgMTIuMjVMNSAxMy43NUwxMSAxMy43NUwxMSAxMi4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableRowDeleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableRowDelete';
}

export default RefIcon;
