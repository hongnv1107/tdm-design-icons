// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSOfficeBuildingSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C2 0.895 2.895 0 4 0H12C13.105 0 14 0.895 14 2V14.5H15V16H1V14.5H2V2ZM3.5 14.5H5.5V10.75C5.5 10.336 5.836 10 6.25 10H9.75C10.164 10 10.5 10.336 10.5 10.75V14.5H12.5V2C12.5 1.724 12.276 1.5 12 1.5H4C3.724 1.5 3.5 1.724 3.5 2V14.5ZM9 14.5V11.5H7V14.5H9ZM7 4.5H5V3H7V4.5ZM11 4.5H9V3H11V4.5ZM5 6H7V7.5H5V6ZM9 6H11V7.5H9V6Z"/>
  </svg>
);

const aDSOfficeBuildingIconDefinition = svgToIconDefinition(
  aDSOfficeBuildingSvg,
  'ads-office-building'
);

/**![ADSOfficeBuilding](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMkMyIDAuODk1IDIuODk1IDAgNCAwSDEyQzEzLjEwNSAwIDE0IDAuODk1IDE0IDJWMTQuNUgxNVYxNkgxVjE0LjVIMlYyWk0zLjUgMTQuNUg1LjVWMTAuNzVDNS41IDEwLjMzNiA1LjgzNiAxMCA2LjI1IDEwSDkuNzVDMTAuMTY0IDEwIDEwLjUgMTAuMzM2IDEwLjUgMTAuNzVWMTQuNUgxMi41VjJDMTIuNSAxLjcyNCAxMi4yNzYgMS41IDEyIDEuNUg0QzMuNzI0IDEuNSAzLjUgMS43MjQgMy41IDJWMTQuNVpNOSAxNC41VjExLjVIN1YxNC41SDlaTTcgNC41SDVWM0g3VjQuNVpNMTEgNC41SDlWM0gxMVY0LjVaTTUgNkg3VjcuNUg1VjZaTTkgNkgxMVY3LjVIOVY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSOfficeBuildingIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSOfficeBuilding';
}

export default RefIcon;
