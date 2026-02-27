// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowUpOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 7.09375L7.71875 17.125L11.5312 14.1562C11.8438 13.9479 12.1562 13.9479 12.4688 14.1562L16.2812 17.125L12 7.09375ZM10.9688 5.6875C11.1771 5.25 11.5208 5.02083 12 5C12.4792 5.02083 12.8229 5.25 13.0312 5.6875L17.9062 17.0938C17.9688 17.2604 18 17.4375 18 17.625V17.6875C18 18.0625 17.875 18.375 17.625 18.625C17.375 18.875 17.0625 19 16.6875 19C16.3958 19 16.125 18.9062 15.875 18.7188L12 15.6875L8.125 18.7188C7.875 18.9062 7.60417 19 7.3125 19C6.9375 19 6.625 18.875 6.375 18.625C6.125 18.375 6 18.0625 6 17.6875V17.625C6 17.4375 6.04167 17.2604 6.125 17.0938L10.9688 5.6875Z"/>
  </svg>
);

const locationArrowUpOutlinedIconDefinition = svgToIconDefinition(
  locationArrowUpOutlinedSvg,
  'location-arrow-up-outlined'
);

/**![LocationArrowUpOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIgNy4wOTM3NUw3LjcxODc1IDE3LjEyNUwxMS41MzEyIDE0LjE1NjJDMTEuODQzOCAxMy45NDc5IDEyLjE1NjIgMTMuOTQ3OSAxMi40Njg4IDE0LjE1NjJMMTYuMjgxMiAxNy4xMjVMMTIgNy4wOTM3NVpNMTAuOTY4OCA1LjY4NzVDMTEuMTc3MSA1LjI1IDExLjUyMDggNS4wMjA4MyAxMiA1QzEyLjQ3OTIgNS4wMjA4MyAxMi44MjI5IDUuMjUgMTMuMDMxMiA1LjY4NzVMMTcuOTA2MiAxNy4wOTM4QzE3Ljk2ODggMTcuMjYwNCAxOCAxNy40Mzc1IDE4IDE3LjYyNVYxNy42ODc1QzE4IDE4LjA2MjUgMTcuODc1IDE4LjM3NSAxNy42MjUgMTguNjI1QzE3LjM3NSAxOC44NzUgMTcuMDYyNSAxOSAxNi42ODc1IDE5QzE2LjM5NTggMTkgMTYuMTI1IDE4LjkwNjIgMTUuODc1IDE4LjcxODhMMTIgMTUuNjg3NUw4LjEyNSAxOC43MTg4QzcuODc1IDE4LjkwNjIgNy42MDQxNyAxOSA3LjMxMjUgMTlDNi45Mzc1IDE5IDYuNjI1IDE4Ljg3NSA2LjM3NSAxOC42MjVDNi4xMjUgMTguMzc1IDYgMTguMDYyNSA2IDE3LjY4NzVWMTcuNjI1QzYgMTcuNDM3NSA2LjA0MTY3IDE3LjI2MDQgNi4xMjUgMTcuMDkzOEwxMC45Njg4IDUuNjg3NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowUpOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowUpOutlinedIcon';
}

export default RefIcon;
