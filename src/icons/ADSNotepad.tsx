// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNotepadSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSNotepad](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMVYwSDUuNVYxSDcuMjVWMEg4Ljc1VjFIMTAuNVYwSDEyVjFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxMC43NUMxNSAxMS4yNjkgMTQuNzk0IDExLjc2NyAxNC40MjcgMTIuMTM0TDExLjEzNCAxNS40MjdDMTAuNzY3IDE1Ljc5NCAxMC4yNjkgMTYgOS43NSAxNkgzQzEuODk1IDE2IDEgMTUuMTA1IDEgMTRWM0MxIDEuODk1IDEuODk1IDEgMyAxSDRaTTQgMi41SDNDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxNEMyLjUgMTQuMjc2IDIuNzI0IDE0LjUgMyAxNC41SDlWMTAuNzVDOSAxMC4zMzYgOS4zMzYgMTAgOS43NSAxMEgxMy41VjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgxMlY0LjVIMTAuNVYyLjVIOC43NVY0LjVINy4yNVYyLjVINS41VjQuNUg0VjIuNVpNMTIuOTM5IDExLjVIMTAuNVYxMy45MzlMMTIuOTM5IDExLjVaTTEyIDhINFY2LjVIMTJWOFpNNyAxMFYxMS41SDRWMTBIN1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNotepadIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNotepad';
}

export default RefIcon;
