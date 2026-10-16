// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDeviceMobileSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2C2.5 0.895 3.395 0 4.5 0H11.5C12.605 0 13.5 0.895 13.5 2V14C13.5 15.105 12.605 16 11.5 16H4.5C3.395 16 2.5 15.105 2.5 14V2ZM4.5 1.5C4.224 1.5 4 1.724 4 2V14C4 14.276 4.224 14.5 4.5 14.5H11.5C11.776 14.5 12 14.276 12 14V2C12 1.724 11.776 1.5 11.5 1.5H4.5ZM10 13H6V11.5H10V13Z"/>
  </svg>
);

const aDSDeviceMobileIconDefinition = svgToIconDefinition(
  aDSDeviceMobileSvg,
  'ads-device-mobile'
);

/**![ADSDeviceMobile](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNSAyQzIuNSAwLjg5NSAzLjM5NSAwIDQuNSAwSDExLjVDMTIuNjA1IDAgMTMuNSAwLjg5NSAxMy41IDJWMTRDMTMuNSAxNS4xMDUgMTIuNjA1IDE2IDExLjUgMTZINC41QzMuMzk1IDE2IDIuNSAxNS4xMDUgMi41IDE0VjJaTTQuNSAxLjVDNC4yMjQgMS41IDQgMS43MjQgNCAyVjE0QzQgMTQuMjc2IDQuMjI0IDE0LjUgNC41IDE0LjVIMTEuNUMxMS43NzYgMTQuNSAxMiAxNC4yNzYgMTIgMTRWMkMxMiAxLjcyNCAxMS43NzYgMS41IDExLjUgMS41SDQuNVpNMTAgMTNINlYxMS41SDEwVjEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDeviceMobileIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDeviceMobile';
}

export default RefIcon;
