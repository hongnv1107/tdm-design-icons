// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNotepadSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1V0H5.5V1H7.25V0H8.75V1H10.5V0H12V1H13C14.105 1 15 1.895 15 3V10.75C15 11.269 14.794 11.767 14.427 12.134L11.134 15.427C10.767 15.794 10.269 16 9.75 16H3C1.895 16 1 15.105 1 14V3C1 1.895 1.895 1 3 1H4ZM4 2.5H3C2.724 2.5 2.5 2.724 2.5 3V14C2.5 14.276 2.724 14.5 3 14.5H9V10.75C9 10.336 9.336 10 9.75 10H13.5V3C13.5 2.724 13.276 2.5 13 2.5H12V4.5H10.5V2.5H8.75V4.5H7.25V2.5H5.5V4.5H4V2.5ZM12.939 11.5H10.5V13.939L12.939 11.5ZM12 8H4V6.5H12V8ZM7 10V11.5H4V10H7Z"/>
  </svg>
);

const aDSNotepadIconDefinition = svgToIconDefinition(
  aDSNotepadSvg,
  'ads-notepad'
);

/**![ADSNotepad](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNCAxVjBINS41VjFINy4yNVYwSDguNzVWMUgxMC41VjBIMTJWMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEwLjc1QzE1IDExLjI2OSAxNC43OTQgMTEuNzY3IDE0LjQyNyAxMi4xMzRMMTEuMTM0IDE1LjQyN0MxMC43NjcgMTUuNzk0IDEwLjI2OSAxNiA5Ljc1IDE2SDNDMS44OTUgMTYgMSAxNS4xMDUgMSAxNFYzQzEgMS44OTUgMS44OTUgMSAzIDFINFpNNCAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjE0QzIuNSAxNC4yNzYgMi43MjQgMTQuNSAzIDE0LjVIOVYxMC43NUM5IDEwLjMzNiA5LjMzNiAxMCA5Ljc1IDEwSDEzLjVWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDEyVjQuNUgxMC41VjIuNUg4Ljc1VjQuNUg3LjI1VjIuNUg1LjVWNC41SDRWMi41Wk0xMi45MzkgMTEuNUgxMC41VjEzLjkzOUwxMi45MzkgMTEuNVpNMTIgOEg0VjYuNUgxMlY4Wk03IDEwVjExLjVINFYxMEg3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNotepadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNotepad';
}

export default RefIcon;
