// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHourglassSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSHourglass](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMSAxMi4zOTJDMTEgMTEuOTQ3IDEwLjgzMSAxMS41MjIgMTAuNTMyIDExLjJMMTAuMzk3IDExLjA2OUw4IDguOTkxTDUuNjA0IDExLjA2OUM1LjIyIDExLjQwMiA1IDExLjg4NCA1IDEyLjM5MlYxMy41SDExVjEyLjM5MlpNMTEgMi41SDVWMy42MDhDNSA0LjExNiA1LjIyIDQuNTk4IDUuNjA0IDQuOTMxTDggNy4wMDhMMTAuMzk3IDQuOTMxTDEwLjUzMiA0LjhDMTAuODMxIDQuNDc4IDExIDQuMDUzIDExIDMuNjA4VjIuNVpNMTIuNSAzLjYwOEMxMi41IDQuNDkyIDEyLjE0MSA1LjMzNSAxMS41MDkgNS45NDVMMTEuMzc5IDYuMDY0TDkuMTQ1IDhMMTEuMzc5IDkuOTM2TDExLjUwOSAxMC4wNTVDMTIuMTQxIDEwLjY2NSAxMi41IDExLjUwOCAxMi41IDEyLjM5MlYxMy41SDE0VjE1SDJWMTMuNUgzLjVWMTIuMzkyQzMuNSAxMS40NDkgMy45MDkgMTAuNTUzIDQuNjIxIDkuOTM2TDYuODU0IDhMNC42MjEgNi4wNjRDMy45MDkgNS40NDcgMy41IDQuNTUxIDMuNSAzLjYwOFYyLjVIMlYxSDE0VjIuNUgxMi41VjMuNjA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHourglassIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHourglass';
}

export default RefIcon;
