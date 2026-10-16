// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHourglassSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 12.392C11 11.947 10.831 11.522 10.532 11.2L10.397 11.069L8 8.991L5.604 11.069C5.22 11.402 5 11.884 5 12.392V13.5H11V12.392ZM11 2.5H5V3.608C5 4.116 5.22 4.598 5.604 4.931L8 7.008L10.397 4.931L10.532 4.8C10.831 4.478 11 4.053 11 3.608V2.5ZM12.5 3.608C12.5 4.492 12.141 5.335 11.509 5.945L11.379 6.064L9.145 8L11.379 9.936L11.509 10.055C12.141 10.665 12.5 11.508 12.5 12.392V13.5H14V15H2V13.5H3.5V12.392C3.5 11.449 3.909 10.553 4.621 9.936L6.854 8L4.621 6.064C3.909 5.447 3.5 4.551 3.5 3.608V2.5H2V1H14V2.5H12.5V3.608Z"/>
  </svg>
);

const aDSHourglassIconDefinition = svgToIconDefinition(
  aDSHourglassSvg,
  'ads-hourglass'
);

/**![ADSHourglass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEgMTIuMzkyQzExIDExLjk0NyAxMC44MzEgMTEuNTIyIDEwLjUzMiAxMS4yTDEwLjM5NyAxMS4wNjlMOCA4Ljk5MUw1LjYwNCAxMS4wNjlDNS4yMiAxMS40MDIgNSAxMS44ODQgNSAxMi4zOTJWMTMuNUgxMVYxMi4zOTJaTTExIDIuNUg1VjMuNjA4QzUgNC4xMTYgNS4yMiA0LjU5OCA1LjYwNCA0LjkzMUw4IDcuMDA4TDEwLjM5NyA0LjkzMUwxMC41MzIgNC44QzEwLjgzMSA0LjQ3OCAxMSA0LjA1MyAxMSAzLjYwOFYyLjVaTTEyLjUgMy42MDhDMTIuNSA0LjQ5MiAxMi4xNDEgNS4zMzUgMTEuNTA5IDUuOTQ1TDExLjM3OSA2LjA2NEw5LjE0NSA4TDExLjM3OSA5LjkzNkwxMS41MDkgMTAuMDU1QzEyLjE0MSAxMC42NjUgMTIuNSAxMS41MDggMTIuNSAxMi4zOTJWMTMuNUgxNFYxNUgyVjEzLjVIMy41VjEyLjM5MkMzLjUgMTEuNDQ5IDMuOTA5IDEwLjU1MyA0LjYyMSA5LjkzNkw2Ljg1NCA4TDQuNjIxIDYuMDY0QzMuOTA5IDUuNDQ3IDMuNSA0LjU1MSAzLjUgMy42MDhWMi41SDJWMUgxNFYyLjVIMTIuNVYzLjYwOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHourglassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHourglass';
}

export default RefIcon;
