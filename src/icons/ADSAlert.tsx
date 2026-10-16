// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlertSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 0V3H7.25V0H8.75ZM2.123 1.063L4.171 3.111L3.111 4.172L1.063 2.123L2.123 1.063ZM14.937 2.123L12.889 4.172L11.828 3.111L13.876 1.063L14.937 2.123ZM4.195 5.875C4.26 5.098 4.91 4.5 5.69 4.5H10.31C11.09 4.5 11.74 5.098 11.804 5.875L12.44 13.5H14V15H2V13.5H3.56L4.195 5.875ZM5.065 13.5H10.935L10.31 6L5.69 6L5.065 13.5Z"/>
  </svg>
);

const aDSAlertIconDefinition = svgToIconDefinition(
  aDSAlertSvg,
  'ads-alert'
);

/**![ADSAlert](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMFYzSDcuMjVWMEg4Ljc1Wk0yLjEyMyAxLjA2M0w0LjE3MSAzLjExMUwzLjExMSA0LjE3MkwxLjA2MyAyLjEyM0wyLjEyMyAxLjA2M1pNMTQuOTM3IDIuMTIzTDEyLjg4OSA0LjE3MkwxMS44MjggMy4xMTFMMTMuODc2IDEuMDYzTDE0LjkzNyAyLjEyM1pNNC4xOTUgNS44NzVDNC4yNiA1LjA5OCA0LjkxIDQuNSA1LjY5IDQuNUgxMC4zMUMxMS4wOSA0LjUgMTEuNzQgNS4wOTggMTEuODA0IDUuODc1TDEyLjQ0IDEzLjVIMTRWMTVIMlYxMy41SDMuNTZMNC4xOTUgNS44NzVaTTUuMDY1IDEzLjVIMTAuOTM1TDEwLjMxIDZMNS42OSA2TDUuMDY1IDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlertIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlert';
}

export default RefIcon;
