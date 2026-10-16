// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStopwatchSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0H11V1.5H8.75V3.043C9.885 3.173 10.931 3.596 11.81 4.233L12.947 2.993L14.053 4.007L12.916 5.247C13.902 6.387 14.5 7.874 14.5 9.5C14.5 13.09 11.59 16 8 16C4.41 16 1.5 13.09 1.5 9.5C1.5 7.874 2.098 6.387 3.084 5.247L1.947 4.007L3.053 2.993L4.19 4.233C5.069 3.596 6.116 3.173 7.25 3.043V1.5H5V0ZM8 4.5C6.697 4.5 5.512 4.997 4.622 5.814C3.624 6.729 3 8.041 3 9.5C3 12.261 5.239 14.5 8 14.5C10.761 14.5 13 12.261 13 9.5C13 8.041 12.376 6.729 11.379 5.814C10.488 4.997 9.303 4.5 8 4.5ZM10.842 7.509L8.301 10.259L7.199 9.241L9.741 6.491L10.842 7.509Z"/>
  </svg>
);

const aDSStopwatchIconDefinition = svgToIconDefinition(
  aDSStopwatchSvg,
  'ads-stopwatch'
);

/**![ADSStopwatch](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSAwSDExVjEuNUg4Ljc1VjMuMDQzQzkuODg1IDMuMTczIDEwLjkzMSAzLjU5NiAxMS44MSA0LjIzM0wxMi45NDcgMi45OTNMMTQuMDUzIDQuMDA3TDEyLjkxNiA1LjI0N0MxMy45MDIgNi4zODcgMTQuNSA3Ljg3NCAxNC41IDkuNUMxNC41IDEzLjA5IDExLjU5IDE2IDggMTZDNC40MSAxNiAxLjUgMTMuMDkgMS41IDkuNUMxLjUgNy44NzQgMi4wOTggNi4zODcgMy4wODQgNS4yNDdMMS45NDcgNC4wMDdMMy4wNTMgMi45OTNMNC4xOSA0LjIzM0M1LjA2OSAzLjU5NiA2LjExNiAzLjE3MyA3LjI1IDMuMDQzVjEuNUg1VjBaTTggNC41QzYuNjk3IDQuNSA1LjUxMiA0Ljk5NyA0LjYyMiA1LjgxNEMzLjYyNCA2LjcyOSAzIDguMDQxIDMgOS41QzMgMTIuMjYxIDUuMjM5IDE0LjUgOCAxNC41QzEwLjc2MSAxNC41IDEzIDEyLjI2MSAxMyA5LjVDMTMgOC4wNDEgMTIuMzc2IDYuNzI5IDExLjM3OSA1LjgxNEMxMC40ODggNC45OTcgOS4zMDMgNC41IDggNC41Wk0xMC44NDIgNy41MDlMOC4zMDEgMTAuMjU5TDcuMTk5IDkuMjQxTDkuNzQxIDYuNDkxTDEwLjg0MiA3LjUwOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStopwatchIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStopwatch';
}

export default RefIcon;
