// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSunsetSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V3H7.25V1H8.75ZM11.75 3.845L13.164 2.43L14.225 3.491L12.811 4.905L11.75 3.845ZM3.164 4.914L1.75 3.5L2.811 2.439L4.225 3.854L3.164 4.914ZM8 6C6.343 6 5 7.343 5 9H3.5C3.5 6.515 5.515 4.5 8 4.5C10.485 4.5 12.5 6.515 12.5 9H11C11 7.343 9.657 6 8 6ZM2 9H0V7.5H2V9ZM16 9H14V7.5H16V9ZM15 12H1V10.5H15V12ZM10.5 13.5V15H5.5V13.5H10.5Z"/>
  </svg>
);

const aDSSunsetIconDefinition = svgToIconDefinition(
  aDSSunsetSvg,
  'ads-sunset'
);

/**![ADSSunset](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSAxVjNINy4yNVYxSDguNzVaTTExLjc1IDMuODQ1TDEzLjE2NCAyLjQzTDE0LjIyNSAzLjQ5MUwxMi44MTEgNC45MDVMMTEuNzUgMy44NDVaTTMuMTY0IDQuOTE0TDEuNzUgMy41TDIuODExIDIuNDM5TDQuMjI1IDMuODU0TDMuMTY0IDQuOTE0Wk04IDZDNi4zNDMgNiA1IDcuMzQzIDUgOUgzLjVDMy41IDYuNTE1IDUuNTE1IDQuNSA4IDQuNUMxMC40ODUgNC41IDEyLjUgNi41MTUgMTIuNSA5SDExQzExIDcuMzQzIDkuNjU3IDYgOCA2Wk0yIDlIMFY3LjVIMlY5Wk0xNiA5SDE0VjcuNUgxNlY5Wk0xNSAxMkgxVjEwLjVIMTVWMTJaTTEwLjUgMTMuNVYxNUg1LjVWMTMuNUgxMC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSunsetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSunset';
}

export default RefIcon;
