// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataNumberSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 4H2.75C3.164 4 3.5 4.336 3.5 4.75V12H2V5.5H0.75V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H8.125C8.884 4 9.5 4.616 9.5 5.375V7.375C9.5 8.134 8.884 8.75 8.125 8.75H6.5V10.5H9.5V12H5.75C5.336 12 5 11.664 5 11.25V8.625C5 7.866 5.616 7.25 6.375 7.25H8V5.5H5V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4H14.125C14.884 4 15.5 4.616 15.5 5.375V10.625C15.5 11.384 14.884 12 14.125 12H11V10.5H14V8.75H11V7.25H14V5.5H11V4Z"/>
  </svg>
);

const aDSDataNumberIconDefinition = svgToIconDefinition(
  aDSDataNumberSvg,
  'ads-data-number'
);

/**![ADSDataNumber](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNzUgNEgyLjc1QzMuMTY0IDQgMy41IDQuMzM2IDMuNSA0Ljc1VjEySDJWNS41SDAuNzVWNFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgNEg4LjEyNUM4Ljg4NCA0IDkuNSA0LjYxNiA5LjUgNS4zNzVWNy4zNzVDOS41IDguMTM0IDguODg0IDguNzUgOC4xMjUgOC43NUg2LjVWMTAuNUg5LjVWMTJINS43NUM1LjMzNiAxMiA1IDExLjY2NCA1IDExLjI1VjguNjI1QzUgNy44NjYgNS42MTYgNy4yNSA2LjM3NSA3LjI1SDhWNS41SDVWNFoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExIDRIMTQuMTI1QzE0Ljg4NCA0IDE1LjUgNC42MTYgMTUuNSA1LjM3NVYxMC42MjVDMTUuNSAxMS4zODQgMTQuODg0IDEyIDE0LjEyNSAxMkgxMVYxMC41SDE0VjguNzVIMTFWNy4yNUgxNFY1LjVIMTFWNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataNumberIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataNumber';
}

export default RefIcon;
