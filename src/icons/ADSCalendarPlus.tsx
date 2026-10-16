// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCalendarPlusSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 2.5V4.5H6V2.5H10V4.5H11.5V2.5H13C13.276 2.5 13.5 2.724 13.5 3V6H2.5V3C2.5 2.724 2.724 2.5 3 2.5H4.5ZM2.5 7.5V13C2.5 13.276 2.724 13.5 3 13.5H7.5V15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H4.5V0H6V1H10V0H11.5V1H13C14.105 1 15 1.895 15 3V7.5H2.5ZM12.25 12.25V10H13.75V12.25H16V13.75H13.75V16H12.25V13.75H10V12.25H12.25Z"/>
  </svg>
);

const aDSCalendarPlusIconDefinition = svgToIconDefinition(
  aDSCalendarPlusSvg,
  'ads-calendar-plus'
);

/**![ADSCalendarPlus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC41IDIuNVY0LjVINlYyLjVIMTBWNC41SDExLjVWMi41SDEzQzEzLjI3NiAyLjUgMTMuNSAyLjcyNCAxMy41IDNWNkgyLjVWM0MyLjUgMi43MjQgMi43MjQgMi41IDMgMi41SDQuNVpNMi41IDcuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDcuNVYxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDQuNVYwSDZWMUgxMFYwSDExLjVWMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjcuNUgyLjVaTTEyLjI1IDEyLjI1VjEwSDEzLjc1VjEyLjI1SDE2VjEzLjc1SDEzLjc1VjE2SDEyLjI1VjEzLjc1SDEwVjEyLjI1SDEyLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCalendarPlusIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCalendarPlus';
}

export default RefIcon;
