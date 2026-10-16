// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCameraSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0.8C5.542 0.611 5.764 0.5 6 0.5H10C10.236 0.5 10.458 0.611 10.6 0.8L11.875 2.5H13.25C14.769 2.5 16 3.731 16 5.25V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V5.25C0 3.731 1.231 2.5 2.75 2.5H4.125L5.4 0.8ZM6.375 2L5.1 3.7C4.958 3.889 4.736 4 4.5 4H2.75C2.06 4 1.5 4.56 1.5 5.25V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V5.25C14.5 4.56 13.94 4 13.25 4H11.5C11.264 4 11.042 3.889 10.9 3.7L9.625 2H6.375ZM8 6.5C7.034 6.5 6.25 7.284 6.25 8.25C6.25 9.217 7.034 10 8 10C8.967 10 9.75 9.217 9.75 8.25C9.75 7.284 8.967 6.5 8 6.5ZM4.75 8.25C4.75 6.455 6.205 5 8 5C9.795 5 11.25 6.455 11.25 8.25C11.25 10.045 9.795 11.5 8 11.5C6.205 11.5 4.75 10.045 4.75 8.25Z"/>
  </svg>
);

const aDSCameraIconDefinition = svgToIconDefinition(
  aDSCameraSvg,
  'ads-camera'
);

/**![ADSCamera](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS40IDAuOEM1LjU0MiAwLjYxMSA1Ljc2NCAwLjUgNiAwLjVIMTBDMTAuMjM2IDAuNSAxMC40NTggMC42MTEgMTAuNiAwLjhMMTEuODc1IDIuNUgxMy4yNUMxNC43NjkgMi41IDE2IDMuNzMxIDE2IDUuMjVWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNS4yNUMwIDMuNzMxIDEuMjMxIDIuNSAyLjc1IDIuNUg0LjEyNUw1LjQgMC44Wk02LjM3NSAyTDUuMSAzLjdDNC45NTggMy44ODkgNC43MzYgNCA0LjUgNEgyLjc1QzIuMDYgNCAxLjUgNC41NiAxLjUgNS4yNVYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNS4yNUMxNC41IDQuNTYgMTMuOTQgNCAxMy4yNSA0SDExLjVDMTEuMjY0IDQgMTEuMDQyIDMuODg5IDEwLjkgMy43TDkuNjI1IDJINi4zNzVaTTggNi41QzcuMDM0IDYuNSA2LjI1IDcuMjg0IDYuMjUgOC4yNUM2LjI1IDkuMjE3IDcuMDM0IDEwIDggMTBDOC45NjcgMTAgOS43NSA5LjIxNyA5Ljc1IDguMjVDOS43NSA3LjI4NCA4Ljk2NyA2LjUgOCA2LjVaTTQuNzUgOC4yNUM0Ljc1IDYuNDU1IDYuMjA1IDUgOCA1QzkuNzk1IDUgMTEuMjUgNi40NTUgMTEuMjUgOC4yNUMxMS4yNSAxMC4wNDUgOS43OTUgMTEuNSA4IDExLjVDNi4yMDUgMTEuNSA0Ljc1IDEwLjA0NSA0Ljc1IDguMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCameraIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCamera';
}

export default RefIcon;
