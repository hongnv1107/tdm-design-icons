// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLayoutTwoColumnsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H5.875C6.634 1 7.25 1.616 7.25 2.375V13.625C7.25 14.384 6.634 15 5.875 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H5.75V2.5H1.5ZM8.75 2.375C8.75 1.616 9.366 1 10.125 1H14.625C15.384 1 16 1.616 16 2.375V13.625C16 14.384 15.384 15 14.625 15H10.125C9.366 15 8.75 14.384 8.75 13.625V2.375ZM10.25 2.5V13.5H14.5V2.5H10.25Z"/>
  </svg>
);

const aDSLayoutTwoColumnsIconDefinition = svgToIconDefinition(
  aDSLayoutTwoColumnsSvg,
  'ads-layout-two-columns'
);

/**![ADSLayoutTwoColumns](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjM3NUMwIDEuNjE2IDAuNjE2IDEgMS4zNzUgMUg1Ljg3NUM2LjYzNCAxIDcuMjUgMS42MTYgNy4yNSAyLjM3NVYxMy42MjVDNy4yNSAxNC4zODQgNi42MzQgMTUgNS44NzUgMTVIMS4zNzVDMC42MTYgMTUgMCAxNC4zODQgMCAxMy42MjVWMi4zNzVaTTEuNSAyLjVWMTMuNUg1Ljc1VjIuNUgxLjVaTTguNzUgMi4zNzVDOC43NSAxLjYxNiA5LjM2NiAxIDEwLjEyNSAxSDE0LjYyNUMxNS4zODQgMSAxNiAxLjYxNiAxNiAyLjM3NVYxMy42MjVDMTYgMTQuMzg0IDE1LjM4NCAxNSAxNC42MjUgMTVIMTAuMTI1QzkuMzY2IDE1IDguNzUgMTQuMzg0IDguNzUgMTMuNjI1VjIuMzc1Wk0xMC4yNSAyLjVWMTMuNUgxNC41VjIuNUgxMC4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLayoutTwoColumnsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLayoutTwoColumns';
}

export default RefIcon;
