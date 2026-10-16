// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldAlertSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9.5L7.25 3H8.75V9.5H7.25ZM2 6C1.724 6 1.5 6.224 1.5 6.5V9.5C1.5 9.776 1.724 10 2 10H4.5V11.5H2C0.895 11.5 0 10.605 0 9.5V6.5C0 5.395 0.895 4.5 2 4.5H4.5V6H2ZM14 6H11.5V4.5H14C15.105 4.5 16 5.395 16 6.5V9.5C16 10.605 15.105 11.5 14 11.5H11.5V10H14C14.276 10 14.5 9.776 14.5 9.5V6.5C14.5 6.224 14.276 6 14 6Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8.552 13 9 12.552 9 12C9 11.448 8.552 11 8 11C7.448 11 7 11.448 7 12C7 12.552 7.448 13 8 13Z"/>
  </svg>
);

const aDSFieldAlertIconDefinition = svgToIconDefinition(
  aDSFieldAlertSvg,
  'ads-field-alert'
);

/**![ADSFieldAlert](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yNSA5LjVMNy4yNSAzSDguNzVWOS41SDcuMjVaTTIgNkMxLjcyNCA2IDEuNSA2LjIyNCAxLjUgNi41VjkuNUMxLjUgOS43NzYgMS43MjQgMTAgMiAxMEg0LjVWMTEuNUgyQzAuODk1IDExLjUgMCAxMC42MDUgMCA5LjVWNi41QzAgNS4zOTUgMC44OTUgNC41IDIgNC41SDQuNVY2SDJaTTE0IDZIMTEuNVY0LjVIMTRDMTUuMTA1IDQuNSAxNiA1LjM5NSAxNiA2LjVWOS41QzE2IDEwLjYwNSAxNS4xMDUgMTEuNSAxNCAxMS41SDExLjVWMTBIMTRDMTQuMjc2IDEwIDE0LjUgOS43NzYgMTQuNSA5LjVWNi41QzE0LjUgNi4yMjQgMTQuMjc2IDYgMTQgNloiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTNDOC41NTIgMTMgOSAxMi41NTIgOSAxMkM5IDExLjQ0OCA4LjU1MiAxMSA4IDExQzcuNDQ4IDExIDcgMTEuNDQ4IDcgMTJDNyAxMi41NTIgNy40NDggMTMgOCAxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldAlertIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldAlert';
}

export default RefIcon;
