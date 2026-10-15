// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPowerPlugSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H2.75C2.336 4 2 4.336 2 4.75V8.65C2 9.561 2.382 10.43 3.054 11.046L5 12.83V14C5 15.105 5.895 16 7 16H9C10.105 16 11 15.105 11 14V12.83L12.946 11.046C13.618 10.43 14 9.561 14 8.65V4.75C14 4.336 13.664 4 13.25 4H11V0H9.5V4H6.5V0H5V4ZM3.5 5.5V8.65C3.5 9.141 3.706 9.609 4.067 9.94L6.257 11.947C6.412 12.089 6.5 12.29 6.5 12.5V14C6.5 14.276 6.724 14.5 7 14.5H9C9.276 14.5 9.5 14.276 9.5 14V12.5C9.5 12.29 9.588 12.089 9.743 11.947L11.933 9.94C12.294 9.609 12.5 9.141 12.5 8.65V5.5H3.5Z"/>
  </svg>
);

const aDSPowerPlugIconDefinition = svgToIconDefinition(
  aDSPowerPlugSvg,
  'ads-power-plug'
);

/**![ADSPowerPlug](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgNEgyLjc1QzIuMzM2IDQgMiA0LjMzNiAyIDQuNzVWOC42NUMyIDkuNTYxIDIuMzgyIDEwLjQzIDMuMDU0IDExLjA0Nkw1IDEyLjgzVjE0QzUgMTUuMTA1IDUuODk1IDE2IDcgMTZIOUMxMC4xMDUgMTYgMTEgMTUuMTA1IDExIDE0VjEyLjgzTDEyLjk0NiAxMS4wNDZDMTMuNjE4IDEwLjQzIDE0IDkuNTYxIDE0IDguNjVWNC43NUMxNCA0LjMzNiAxMy42NjQgNCAxMy4yNSA0SDExVjBIOS41VjRINi41VjBINVY0Wk0zLjUgNS41VjguNjVDMy41IDkuMTQxIDMuNzA2IDkuNjA5IDQuMDY3IDkuOTRMNi4yNTcgMTEuOTQ3QzYuNDEyIDEyLjA4OSA2LjUgMTIuMjkgNi41IDEyLjVWMTRDNi41IDE0LjI3NiA2LjcyNCAxNC41IDcgMTQuNUg5QzkuMjc2IDE0LjUgOS41IDE0LjI3NiA5LjUgMTRWMTIuNUM5LjUgMTIuMjkgOS41ODggMTIuMDg5IDkuNzQzIDExLjk0N0wxMS45MzMgOS45NEMxMi4yOTQgOS42MDkgMTIuNSA5LjE0MSAxMi41IDguNjVWNS41SDMuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPowerPlugIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPowerPlug';
}

export default RefIcon;
