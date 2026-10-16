// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRetrySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 8C1 4.134 4.134 1 8 1C10.232 1 12.219 2.044 13.5 3.67V1H15V6C15 6.414 14.664 6.75 14.25 6.75H9.5V5.25H12.764C11.813 3.606 10.035 2.5 8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C10.737 13.5 13.009 11.5 13.43 8.881L14.911 9.119C14.375 12.453 11.486 15 8 15C4.134 15 1 11.866 1 8Z"/>
  </svg>
);

const aDSRetryIconDefinition = svgToIconDefinition(
  aDSRetrySvg,
  'ads-retry'
);

/**![ADSRetry](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSA4QzEgNC4xMzQgNC4xMzQgMSA4IDFDMTAuMjMyIDEgMTIuMjE5IDIuMDQ0IDEzLjUgMy42N1YxSDE1VjZDMTUgNi40MTQgMTQuNjY0IDYuNzUgMTQuMjUgNi43NUg5LjVWNS4yNUgxMi43NjRDMTEuODEzIDMuNjA2IDEwLjAzNSAyLjUgOCAyLjVDNC45NjIgMi41IDIuNSA0Ljk2MiAyLjUgOEMyLjUgMTEuMDM4IDQuOTYyIDEzLjUgOCAxMy41QzEwLjczNyAxMy41IDEzLjAwOSAxMS41IDEzLjQzIDguODgxTDE0LjkxMSA5LjExOUMxNC4zNzUgMTIuNDUzIDExLjQ4NiAxNSA4IDE1QzQuMTM0IDE1IDEgMTEuODY2IDEgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRetryIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRetry';
}

export default RefIcon;
