// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageScaledSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V6H1V3C1 1.895 1.895 1 3 1H6V2.5H3ZM13 2.5H10V1H13C14.105 1 15 1.895 15 3V6H13.5V3C13.5 2.724 13.276 2.5 13 2.5ZM1 9.375C1 8.616 1.616 8 2.375 8H6.625C7.384 8 8 8.616 8 9.375V13.625C8 14.384 7.384 15 6.625 15H2.375C1.616 15 1 14.384 1 13.625V9.375ZM2.5 9.5V13.5H6.5V9.5H2.5ZM15 10V13C15 14.105 14.105 15 13 15H10V13.5H13C13.276 13.5 13.5 13.276 13.5 13V10H15Z"/>
  </svg>
);

const aDSImageScaledIconDefinition = svgToIconDefinition(
  aDSImageScaledSvg,
  'ads-image-scaled'
);

/**![ADSImageScaled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWNkgxVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUg2VjIuNUgzWk0xMyAyLjVIMTBWMUgxM0MxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjZIMTMuNVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVaTTEgOS4zNzVDMSA4LjYxNiAxLjYxNiA4IDIuMzc1IDhINi42MjVDNy4zODQgOCA4IDguNjE2IDggOS4zNzVWMTMuNjI1QzggMTQuMzg0IDcuMzg0IDE1IDYuNjI1IDE1SDIuMzc1QzEuNjE2IDE1IDEgMTQuMzg0IDEgMTMuNjI1VjkuMzc1Wk0yLjUgOS41VjEzLjVINi41VjkuNUgyLjVaTTE1IDEwVjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIMTBWMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjEwSDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageScaledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImageScaled';
}

export default RefIcon;
