// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLobbyBellSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H10V2.5H8.75V4.25H9.67C12.09 4.25 14.124 6.07 14.391 8.475L14.745 11.667C14.769 11.879 14.701 12.091 14.559 12.25C14.417 12.409 14.213 12.5 14 12.5H2C1.787 12.5 1.583 12.409 1.441 12.25C1.299 12.091 1.231 11.879 1.255 11.667L1.609 8.475C1.877 6.07 3.91 4.25 6.33 4.25H7.25V2.5H6V1ZM6.33 5.75C4.674 5.75 3.283 6.995 3.1 8.641L2.838 11H13.162L12.9 8.641C12.717 6.995 11.326 5.75 9.67 5.75H6.33ZM15 13.5V15H1V13.5H15Z"/>
  </svg>
);

const aDSLobbyBellIconDefinition = svgToIconDefinition(
  aDSLobbyBellSvg,
  'ads-lobby-bell'
);

/**![ADSLobbyBell](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNiAxSDEwVjIuNUg4Ljc1VjQuMjVIOS42N0MxMi4wOSA0LjI1IDE0LjEyNCA2LjA3IDE0LjM5MSA4LjQ3NUwxNC43NDUgMTEuNjY3QzE0Ljc2OSAxMS44NzkgMTQuNzAxIDEyLjA5MSAxNC41NTkgMTIuMjVDMTQuNDE3IDEyLjQwOSAxNC4yMTMgMTIuNSAxNCAxMi41SDJDMS43ODcgMTIuNSAxLjU4MyAxMi40MDkgMS40NDEgMTIuMjVDMS4yOTkgMTIuMDkxIDEuMjMxIDExLjg3OSAxLjI1NSAxMS42NjdMMS42MDkgOC40NzVDMS44NzcgNi4wNyAzLjkxIDQuMjUgNi4zMyA0LjI1SDcuMjVWMi41SDZWMVpNNi4zMyA1Ljc1QzQuNjc0IDUuNzUgMy4yODMgNi45OTUgMy4xIDguNjQxTDIuODM4IDExSDEzLjE2MkwxMi45IDguNjQxQzEyLjcxNyA2Ljk5NSAxMS4zMjYgNS43NSA5LjY3IDUuNzVINi4zM1pNMTUgMTMuNVYxNUgxVjEzLjVIMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLobbyBellIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLobbyBell';
}

export default RefIcon;
