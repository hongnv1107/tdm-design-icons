// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVolumeMutedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.233 1.434C8.125 0.672 9.5 1.307 9.5 2.48V13.521C9.5 14.694 8.125 15.328 7.233 14.567L4.364 12.12C4.273 12.043 4.158 12 4.039 12H2C0.895 12 0 11.105 0 10V6C0 4.896 0.895 4 2 4H4.039C4.158 4 4.273 3.958 4.364 3.881L7.233 1.434ZM8 2.751L5.337 5.022C4.975 5.331 4.515 5.5 4.039 5.5H2C1.724 5.5 1.5 5.724 1.5 6V10C1.5 10.276 1.724 10.5 2 10.5H4.039C4.515 10.5 4.975 10.67 5.337 10.979L8 13.25V2.751ZM14.311 8L15.78 6.53L14.72 5.47L13.25 6.939L11.78 5.47L10.72 6.53L12.189 8L10.72 9.47L11.78 10.531L13.25 9.061L14.72 10.531L15.78 9.47L14.311 8Z"/>
  </svg>
);

const aDSVolumeMutedIconDefinition = svgToIconDefinition(
  aDSVolumeMutedSvg,
  'ads-volume-muted'
);

/**![ADSVolumeMuted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjMzIDEuNDM0QzguMTI1IDAuNjcyIDkuNSAxLjMwNyA5LjUgMi40OFYxMy41MjFDOS41IDE0LjY5NCA4LjEyNSAxNS4zMjggNy4yMzMgMTQuNTY3TDQuMzY0IDEyLjEyQzQuMjczIDEyLjA0MyA0LjE1OCAxMiA0LjAzOSAxMkgyQzAuODk1IDEyIDAgMTEuMTA1IDAgMTBWNkMwIDQuODk2IDAuODk1IDQgMiA0SDQuMDM5QzQuMTU4IDQgNC4yNzMgMy45NTggNC4zNjQgMy44ODFMNy4yMzMgMS40MzRaTTggMi43NTFMNS4zMzcgNS4wMjJDNC45NzUgNS4zMzEgNC41MTUgNS41IDQuMDM5IDUuNUgyQzEuNzI0IDUuNSAxLjUgNS43MjQgMS41IDZWMTBDMS41IDEwLjI3NiAxLjcyNCAxMC41IDIgMTAuNUg0LjAzOUM0LjUxNSAxMC41IDQuOTc1IDEwLjY3IDUuMzM3IDEwLjk3OUw4IDEzLjI1VjIuNzUxWk0xNC4zMTEgOEwxNS43OCA2LjUzTDE0LjcyIDUuNDdMMTMuMjUgNi45MzlMMTEuNzggNS40N0wxMC43MiA2LjUzTDEyLjE4OSA4TDEwLjcyIDkuNDdMMTEuNzggMTAuNTMxTDEzLjI1IDkuMDYxTDE0LjcyIDEwLjUzMUwxNS43OCA5LjQ3TDE0LjMxMSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVolumeMutedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVolumeMuted';
}

export default RefIcon;
