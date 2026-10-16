// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnAddRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H7.125C7.884 1 8.5 1.616 8.5 2.375V13.625C8.5 14.384 7.884 15 7.125 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H3.5V2.5H1.5ZM5 2.5V13.5H7V2.5H5ZM12.25 8.75V11H13.75V8.75H16V7.25H13.75V5H12.25V7.25H10V8.75H12.25Z"/>
  </svg>
);

const aDSTableColumnAddRightIconDefinition = svgToIconDefinition(
  aDSTableColumnAddRightSvg,
  'ads-table-column-add-right'
);

/**![ADSTableColumnAddRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjM3NUMwIDEuNjE2IDAuNjE2IDEgMS4zNzUgMUg3LjEyNUM3Ljg4NCAxIDguNSAxLjYxNiA4LjUgMi4zNzVWMTMuNjI1QzguNSAxNC4zODQgNy44ODQgMTUgNy4xMjUgMTVIMS4zNzVDMC42MTYgMTUgMCAxNC4zODQgMCAxMy42MjVWMi4zNzVaTTEuNSAyLjVWMTMuNUgzLjVWMi41SDEuNVpNNSAyLjVWMTMuNUg3VjIuNUg1Wk0xMi4yNSA4Ljc1VjExSDEzLjc1VjguNzVIMTZWNy4yNUgxMy43NVY1SDEyLjI1VjcuMjVIMTBWOC43NUgxMi4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnAddRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnAddRight';
}

export default RefIcon;
