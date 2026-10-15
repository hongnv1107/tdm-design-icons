// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSwapSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22 1.22L0.22 4.22L1.28 5.28L3 3.561L3 11.875C3 13.325 4.175 14.5 5.625 14.5H7.5V13H5.625C5.004 13 4.5 12.496 4.5 11.875L4.5 3.561L6.22 5.28L7.28 4.22L4.28 1.22C3.987 0.927 3.513 0.927 3.22 1.22ZM8.5 3L10.375 3C10.996 3 11.5 3.504 11.5 4.125V12.439L9.78 10.72L8.72 11.78L11.72 14.78C12.013 15.073 12.488 15.073 12.78 14.78L15.78 11.78L14.72 10.72L13 12.439V4.125C13 2.675 11.825 1.5 10.375 1.5L8.5 1.5V3Z"/>
  </svg>
);

const aDSSwapIconDefinition = svgToIconDefinition(
  aDSSwapSvg,
  'ads-swap'
);

/**![ADSSwap](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjIgMS4yMkwwLjIyIDQuMjJMMS4yOCA1LjI4TDMgMy41NjFMMyAxMS44NzVDMyAxMy4zMjUgNC4xNzUgMTQuNSA1LjYyNSAxNC41SDcuNVYxM0g1LjYyNUM1LjAwNCAxMyA0LjUgMTIuNDk2IDQuNSAxMS44NzVMNC41IDMuNTYxTDYuMjIgNS4yOEw3LjI4IDQuMjJMNC4yOCAxLjIyQzMuOTg3IDAuOTI3IDMuNTEzIDAuOTI3IDMuMjIgMS4yMlpNOC41IDNMMTAuMzc1IDNDMTAuOTk2IDMgMTEuNSAzLjUwNCAxMS41IDQuMTI1VjEyLjQzOUw5Ljc4IDEwLjcyTDguNzIgMTEuNzhMMTEuNzIgMTQuNzhDMTIuMDEzIDE1LjA3MyAxMi40ODggMTUuMDczIDEyLjc4IDE0Ljc4TDE1Ljc4IDExLjc4TDE0LjcyIDEwLjcyTDEzIDEyLjQzOVY0LjEyNUMxMyAyLjY3NSAxMS44MjUgMS41IDEwLjM3NSAxLjVMOC41IDEuNVYzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSwapIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSwap';
}

export default RefIcon;
