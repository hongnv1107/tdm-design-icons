// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignImageRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM10.5 6.5V9.5L13.5 9.5V6.5H10.5ZM10.375 5L13.625 5C14.384 5 15 5.616 15 6.375V9.625C15 10.384 14.384 11 13.625 11L10.375 11C9.616 11 9 10.384 9 9.625V6.375C9 5.616 9.616 5 10.375 5ZM15 15L1 15L1 13.5L15 13.5V15Z"/>
  </svg>
);

const aDSAlignImageRightIconDefinition = svgToIconDefinition(
  aDSAlignImageRightSvg,
  'ads-align-image-right'
);

/**![ADSAlignImageRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxVjIuNVpNMTAuNSA2LjVWOS41TDEzLjUgOS41VjYuNUgxMC41Wk0xMC4zNzUgNUwxMy42MjUgNUMxNC4zODQgNSAxNSA1LjYxNiAxNSA2LjM3NVY5LjYyNUMxNSAxMC4zODQgMTQuMzg0IDExIDEzLjYyNSAxMUwxMC4zNzUgMTFDOS42MTYgMTEgOSAxMC4zODQgOSA5LjYyNVY2LjM3NUM5IDUuNjE2IDkuNjE2IDUgMTAuMzc1IDVaTTE1IDE1TDEgMTVMMSAxMy41TDE1IDEzLjVWMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignImageRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignImageRight';
}

export default RefIcon;
