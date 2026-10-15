// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFullscreenExitSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 12L11.5 15L10 15L10 12C10 10.895 10.895 10 12 10L15 10L15 11.5L12 11.5C11.724 11.5 11.5 11.724 11.5 12ZM4.5 15L4.5 12C4.5 11.724 4.276 11.5 4 11.5L1 11.5L1 10L4 10C5.105 10 6 10.895 6 12L6 15L4.5 15ZM12 4.5L15 4.5L15 6L12 6C10.895 6 10 5.105 10 4L10 1L11.5 1L11.5 4C11.5 4.276 11.724 4.5 12 4.5ZM4 4.5C4.276 4.5 4.5 4.276 4.5 4L4.5 1L6 1L6 4C6 5.105 5.105 6 4 6L1 6L1 4.5L4 4.5Z"/>
  </svg>
);

const aDSFullscreenExitIconDefinition = svgToIconDefinition(
  aDSFullscreenExitSvg,
  'ads-fullscreen-exit'
);

/**![ADSFullscreenExit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjUgMTJMMTEuNSAxNUwxMCAxNUwxMCAxMkMxMCAxMC44OTUgMTAuODk1IDEwIDEyIDEwTDE1IDEwTDE1IDExLjVMMTIgMTEuNUMxMS43MjQgMTEuNSAxMS41IDExLjcyNCAxMS41IDEyWk00LjUgMTVMNC41IDEyQzQuNSAxMS43MjQgNC4yNzYgMTEuNSA0IDExLjVMMSAxMS41TDEgMTBMNCAxMEM1LjEwNSAxMCA2IDEwLjg5NSA2IDEyTDYgMTVMNC41IDE1Wk0xMiA0LjVMMTUgNC41TDE1IDZMMTIgNkMxMC44OTUgNiAxMCA1LjEwNSAxMCA0TDEwIDFMMTEuNSAxTDExLjUgNEMxMS41IDQuMjc2IDExLjcyNCA0LjUgMTIgNC41Wk00IDQuNUM0LjI3NiA0LjUgNC41IDQuMjc2IDQuNSA0TDQuNSAxTDYgMUw2IDRDNiA1LjEwNSA1LjEwNSA2IDQgNkwxIDZMMSA0LjVMNCA0LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFullscreenExitIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFullscreenExit';
}

export default RefIcon;
