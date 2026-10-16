// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignImageCenterSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM6.5 6.5V9.5H9.5V6.5L6.5 6.5ZM6.375 5L9.625 5C10.384 5 11 5.616 11 6.375V9.625C11 10.384 10.384 11 9.625 11H6.375C5.616 11 5 10.384 5 9.625L5 6.375C5 5.616 5.616 5 6.375 5ZM15 15L1 15L1 13.5L15 13.5V15Z"/>
  </svg>
);

const aDSAlignImageCenterIconDefinition = svgToIconDefinition(
  aDSAlignImageCenterSvg,
  'ads-align-image-center'
);

/**![ADSAlignImageCenter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxVjIuNVpNNi41IDYuNVY5LjVIOS41VjYuNUw2LjUgNi41Wk02LjM3NSA1TDkuNjI1IDVDMTAuMzg0IDUgMTEgNS42MTYgMTEgNi4zNzVWOS42MjVDMTEgMTAuMzg0IDEwLjM4NCAxMSA5LjYyNSAxMUg2LjM3NUM1LjYxNiAxMSA1IDEwLjM4NCA1IDkuNjI1TDUgNi4zNzVDNSA1LjYxNiA1LjYxNiA1IDYuMzc1IDVaTTE1IDE1TDEgMTVMMSAxMy41TDE1IDEzLjVWMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignImageCenterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignImageCenter';
}

export default RefIcon;
