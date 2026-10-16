// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFeedbackSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V11C15 12.105 14.105 13 13 13H6.221L2.157 15.63C1.927 15.779 1.633 15.79 1.392 15.659C1.15 15.528 1 15.275 1 15V9.5H2.5V13.621L5.593 11.62C5.714 11.542 5.855 11.5 6 11.5H13C13.276 11.5 13.5 11.276 13.5 11V3C13.5 2.724 13.276 2.5 13 2.5H3C2.724 2.5 2.5 2.724 2.5 3V5.75C2.5 6.026 2.724 6.25 3 6.25H8.439L7.22 5.03L8.28 3.97L10.78 6.47C11.073 6.763 11.073 7.237 10.78 7.53L8.28 10.03L7.22 8.97L8.439 7.75H3C1.895 7.75 1 6.855 1 5.75V3Z"/>
  </svg>
);

const aDSFeedbackIconDefinition = svgToIconDefinition(
  aDSFeedbackSvg,
  'ads-feedback'
);

/**![ADSFeedback](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxMUMxNSAxMi4xMDUgMTQuMTA1IDEzIDEzIDEzSDYuMjIxTDIuMTU3IDE1LjYzQzEuOTI3IDE1Ljc3OSAxLjYzMyAxNS43OSAxLjM5MiAxNS42NTlDMS4xNSAxNS41MjggMSAxNS4yNzUgMSAxNVY5LjVIMi41VjEzLjYyMUw1LjU5MyAxMS42MkM1LjcxNCAxMS41NDIgNS44NTUgMTEuNSA2IDExLjVIMTNDMTMuMjc2IDExLjUgMTMuNSAxMS4yNzYgMTMuNSAxMVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjUuNzVDMi41IDYuMDI2IDIuNzI0IDYuMjUgMyA2LjI1SDguNDM5TDcuMjIgNS4wM0w4LjI4IDMuOTdMMTAuNzggNi40N0MxMS4wNzMgNi43NjMgMTEuMDczIDcuMjM3IDEwLjc4IDcuNTNMOC4yOCAxMC4wM0w3LjIyIDguOTdMOC40MzkgNy43NUgzQzEuODk1IDcuNzUgMSA2Ljg1NSAxIDUuNzVWM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFeedbackIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFeedback';
}

export default RefIcon;
