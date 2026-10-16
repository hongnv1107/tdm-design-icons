// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSNotificationMutedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 9.818L11.5 8.318V5C11.5 3.067 9.933 1.5 8 1.5C7.08 1.5 6.243 1.855 5.618 2.436L4.557 1.375C5.453 0.523 6.666 0 8 0C10.762 0 13 2.239 13 5V9.818Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.182L4.5 7.682V8.636C4.5 8.851 4.44 9.062 4.326 9.244L2.603 12H8.818L10.945 14.127C10.427 15.234 9.303 16 8 16C6.463 16 5.176 14.933 4.837 13.5H2.378C1.298 13.5 0.639 12.312 1.212 11.396L3 8.535V6.182ZM6.418 13.5C6.699 14.091 7.302 14.5 8 14.5C8.698 14.5 9.301 14.091 9.582 13.5H6.418Z"/><path d="M0.47 1.53L14.47 15.53L15.53 14.47L1.53 0.47L0.47 1.53Z"/>
  </svg>
);

const aDSNotificationMutedIconDefinition = svgToIconDefinition(
  aDSNotificationMutedSvg,
  'ads-notification-muted'
);

/**![ADSNotificationMuted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgOS44MThMMTEuNSA4LjMxOFY1QzExLjUgMy4wNjcgOS45MzMgMS41IDggMS41QzcuMDggMS41IDYuMjQzIDEuODU1IDUuNjE4IDIuNDM2TDQuNTU3IDEuMzc1QzUuNDUzIDAuNTIzIDYuNjY2IDAgOCAwQzEwLjc2MiAwIDEzIDIuMjM5IDEzIDVWOS44MThaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDYuMTgyTDQuNSA3LjY4MlY4LjYzNkM0LjUgOC44NTEgNC40NCA5LjA2MiA0LjMyNiA5LjI0NEwyLjYwMyAxMkg4LjgxOEwxMC45NDUgMTQuMTI3QzEwLjQyNyAxNS4yMzQgOS4zMDMgMTYgOCAxNkM2LjQ2MyAxNiA1LjE3NiAxNC45MzMgNC44MzcgMTMuNUgyLjM3OEMxLjI5OCAxMy41IDAuNjM5IDEyLjMxMiAxLjIxMiAxMS4zOTZMMyA4LjUzNVY2LjE4MlpNNi40MTggMTMuNUM2LjY5OSAxNC4wOTEgNy4zMDIgMTQuNSA4IDE0LjVDOC42OTggMTQuNSA5LjMwMSAxNC4wOTEgOS41ODIgMTMuNUg2LjQxOFoiLz48cGF0aCBkPSJNMC40NyAxLjUzTDE0LjQ3IDE1LjUzTDE1LjUzIDE0LjQ3TDEuNTMgMC40N0wwLjQ3IDEuNTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSNotificationMutedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSNotificationMuted';
}

export default RefIcon;
