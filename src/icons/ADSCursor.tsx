// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCursorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.827 2.827L6.914 13.23L8.186 9.096C8.32 8.66 8.66 8.32 9.096 8.186L13.23 6.914L2.827 2.827ZM1.326 3.109C0.887 1.991 1.991 0.887 3.109 1.326L14.111 5.648C15.322 6.124 15.256 7.86 14.012 8.242L9.6 9.6L8.242 14.012C7.86 15.256 6.124 15.322 5.648 14.111L1.326 3.109Z"/>
  </svg>
);

const aDSCursorIconDefinition = svgToIconDefinition(
  aDSCursorSvg,
  'ads-cursor'
);

/**![ADSCursor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuODI3IDIuODI3TDYuOTE0IDEzLjIzTDguMTg2IDkuMDk2QzguMzIgOC42NiA4LjY2IDguMzIgOS4wOTYgOC4xODZMMTMuMjMgNi45MTRMMi44MjcgMi44MjdaTTEuMzI2IDMuMTA5QzAuODg3IDEuOTkxIDEuOTkxIDAuODg3IDMuMTA5IDEuMzI2TDE0LjExMSA1LjY0OEMxNS4zMjIgNi4xMjQgMTUuMjU2IDcuODYgMTQuMDEyIDguMjQyTDkuNiA5LjZMOC4yNDIgMTQuMDEyQzcuODYgMTUuMjU2IDYuMTI0IDE1LjMyMiA1LjY0OCAxNC4xMTFMMS4zMjYgMy4xMDlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCursorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCursor';
}

export default RefIcon;
