// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStopwatchSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStopwatch](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMEgxMVYxLjVIOC43NVYzLjA0M0M5Ljg4NSAzLjE3MyAxMC45MzEgMy41OTYgMTEuODEgNC4yMzNMMTIuOTQ3IDIuOTkzTDE0LjA1MyA0LjAwN0wxMi45MTYgNS4yNDdDMTMuOTAyIDYuMzg3IDE0LjUgNy44NzQgMTQuNSA5LjVDMTQuNSAxMy4wOSAxMS41OSAxNiA4IDE2QzQuNDEgMTYgMS41IDEzLjA5IDEuNSA5LjVDMS41IDcuODc0IDIuMDk4IDYuMzg3IDMuMDg0IDUuMjQ3TDEuOTQ3IDQuMDA3TDMuMDUzIDIuOTkzTDQuMTkgNC4yMzNDNS4wNjkgMy41OTYgNi4xMTYgMy4xNzMgNy4yNSAzLjA0M1YxLjVINVYwWk04IDQuNUM2LjY5NyA0LjUgNS41MTIgNC45OTcgNC42MjIgNS44MTRDMy42MjQgNi43MjkgMyA4LjA0MSAzIDkuNUMzIDEyLjI2MSA1LjIzOSAxNC41IDggMTQuNUMxMC43NjEgMTQuNSAxMyAxMi4yNjEgMTMgOS41QzEzIDguMDQxIDEyLjM3NiA2LjcyOSAxMS4zNzkgNS44MTRDMTAuNDg4IDQuOTk3IDkuMzAzIDQuNSA4IDQuNVpNMTAuODQyIDcuNTA5TDguMzAxIDEwLjI1OUw3LjE5OSA5LjI0MUw5Ljc0MSA2LjQ5MUwxMC44NDIgNy41MDlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStopwatchIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStopwatch';
}

export default RefIcon;
