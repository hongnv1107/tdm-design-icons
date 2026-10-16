// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSScreenRecordSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 3C0 1.895 0.895 1 2 1H12C13.105 1 14 1.895 14 3V4.5H12.5V3C12.5 2.724 12.276 2.5 12 2.5H2C1.724 2.5 1.5 2.724 1.5 3V10C1.5 10.276 1.724 10.5 2 10.5H8.5V12H7.75V13.5H11V15H3V13.5H6.25V12H2C0.895 12 0 11.105 0 10V3ZM10 9C10 7.343 11.343 6 13 6C14.657 6 16 7.343 16 9C16 10.657 14.657 12 13 12C11.343 12 10 10.657 10 9ZM13 7.5C12.172 7.5 11.5 8.172 11.5 9C11.5 9.828 12.172 10.5 13 10.5C13.828 10.5 14.5 9.828 14.5 9C14.5 8.172 13.828 7.5 13 7.5Z"/><path d="M11.5 9C11.5 8.172 12.172 7.5 13 7.5C13.828 7.5 14.5 8.172 14.5 9C14.5 9.828 13.828 10.5 13 10.5C12.172 10.5 11.5 9.828 11.5 9Z"/>
  </svg>
);

const aDSScreenRecordIconDefinition = svgToIconDefinition(
  aDSScreenRecordSvg,
  'ads-screen-record'
);

/**![ADSScreenRecord](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAzQzAgMS44OTUgMC44OTUgMSAyIDFIMTJDMTMuMTA1IDEgMTQgMS44OTUgMTQgM1Y0LjVIMTIuNVYzQzEyLjUgMi43MjQgMTIuMjc2IDIuNSAxMiAyLjVIMkMxLjcyNCAyLjUgMS41IDIuNzI0IDEuNSAzVjEwQzEuNSAxMC4yNzYgMS43MjQgMTAuNSAyIDEwLjVIOC41VjEySDcuNzVWMTMuNUgxMVYxNUgzVjEzLjVINi4yNVYxMkgyQzAuODk1IDEyIDAgMTEuMTA1IDAgMTBWM1pNMTAgOUMxMCA3LjM0MyAxMS4zNDMgNiAxMyA2QzE0LjY1NyA2IDE2IDcuMzQzIDE2IDlDMTYgMTAuNjU3IDE0LjY1NyAxMiAxMyAxMkMxMS4zNDMgMTIgMTAgMTAuNjU3IDEwIDlaTTEzIDcuNUMxMi4xNzIgNy41IDExLjUgOC4xNzIgMTEuNSA5QzExLjUgOS44MjggMTIuMTcyIDEwLjUgMTMgMTAuNUMxMy44MjggMTAuNSAxNC41IDkuODI4IDE0LjUgOUMxNC41IDguMTcyIDEzLjgyOCA3LjUgMTMgNy41WiIvPjxwYXRoIGQ9Ik0xMS41IDlDMTEuNSA4LjE3MiAxMi4xNzIgNy41IDEzIDcuNUMxMy44MjggNy41IDE0LjUgOC4xNzIgMTQuNSA5QzE0LjUgOS44MjggMTMuODI4IDEwLjUgMTMgMTAuNUMxMi4xNzIgMTAuNSAxMS41IDkuODI4IDExLjUgOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSScreenRecordIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSScreenRecord';
}

export default RefIcon;
