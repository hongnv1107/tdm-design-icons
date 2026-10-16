// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLinkBrokenSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1V4H4.5V1H6ZM8.22 2.22C9.755 0.684 12.245 0.684 13.78 2.22C15.316 3.755 15.316 6.245 13.78 7.78L13.03 8.53L11.97 7.47L12.72 6.72C13.669 5.77 13.669 4.23 12.72 3.28C11.77 2.331 10.23 2.331 9.28 3.28L8.53 4.03L7.47 2.97L8.22 2.22ZM1 4.5H4V6H1V4.5ZM2.22 8.22L2.97 7.47L4.03 8.53L3.28 9.28C2.331 10.23 2.331 11.77 3.28 12.72C4.23 13.669 5.77 13.669 6.72 12.72L7.47 11.97L8.53 13.03L7.78 13.78C6.245 15.316 3.755 15.316 2.22 13.78C0.684 12.245 0.684 9.755 2.22 8.22ZM15 11.5H12V10H15V11.5ZM10 15V12H11.5V15H10Z"/>
  </svg>
);

const aDSLinkBrokenIconDefinition = svgToIconDefinition(
  aDSLinkBrokenSvg,
  'ads-link-broken'
);

/**![ADSLinkBroken](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMVY0SDQuNVYxSDZaTTguMjIgMi4yMkM5Ljc1NSAwLjY4NCAxMi4yNDUgMC42ODQgMTMuNzggMi4yMkMxNS4zMTYgMy43NTUgMTUuMzE2IDYuMjQ1IDEzLjc4IDcuNzhMMTMuMDMgOC41M0wxMS45NyA3LjQ3TDEyLjcyIDYuNzJDMTMuNjY5IDUuNzcgMTMuNjY5IDQuMjMgMTIuNzIgMy4yOEMxMS43NyAyLjMzMSAxMC4yMyAyLjMzMSA5LjI4IDMuMjhMOC41MyA0LjAzTDcuNDcgMi45N0w4LjIyIDIuMjJaTTEgNC41SDRWNkgxVjQuNVpNMi4yMiA4LjIyTDIuOTcgNy40N0w0LjAzIDguNTNMMy4yOCA5LjI4QzIuMzMxIDEwLjIzIDIuMzMxIDExLjc3IDMuMjggMTIuNzJDNC4yMyAxMy42NjkgNS43NyAxMy42NjkgNi43MiAxMi43Mkw3LjQ3IDExLjk3TDguNTMgMTMuMDNMNy43OCAxMy43OEM2LjI0NSAxNS4zMTYgMy43NTUgMTUuMzE2IDIuMjIgMTMuNzhDMC42ODQgMTIuMjQ1IDAuNjg0IDkuNzU1IDIuMjIgOC4yMlpNMTUgMTEuNUgxMlYxMEgxNVYxMS41Wk0xMCAxNVYxMkgxMS41VjE1SDEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLinkBrokenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLinkBroken';
}

export default RefIcon;
