// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLogOutSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5H8V1H3C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H8V13.5H3C2.724 13.5 2.5 13.276 2.5 13V3C2.5 2.724 2.724 2.5 3 2.5ZM14.78 7.47L11.28 3.97L10.22 5.03L12.439 7.25H6V8.75H12.439L10.22 10.97L11.28 12.03L14.78 8.53C14.921 8.39 15 8.199 15 8C15 7.801 14.921 7.61 14.78 7.47Z"/>
  </svg>
);

const aDSLogOutIconDefinition = svgToIconDefinition(
  aDSLogOutSvg,
  'ads-log-out'
);

/**![ADSLogOut](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi41SDhWMUgzQzEuODk1IDEgMSAxLjg5NSAxIDNWMTNDMSAxNC4xMDUgMS44OTUgMTUgMyAxNUg4VjEzLjVIM0MyLjcyNCAxMy41IDIuNSAxMy4yNzYgMi41IDEzVjNDMi41IDIuNzI0IDIuNzI0IDIuNSAzIDIuNVpNMTQuNzggNy40N0wxMS4yOCAzLjk3TDEwLjIyIDUuMDNMMTIuNDM5IDcuMjVINlY4Ljc1SDEyLjQzOUwxMC4yMiAxMC45N0wxMS4yOCAxMi4wM0wxNC43OCA4LjUzQzE0LjkyMSA4LjM5IDE1IDguMTk5IDE1IDhDMTUgNy44MDEgMTQuOTIxIDcuNjEgMTQuNzggNy40N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLogOutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLogOut';
}

export default RefIcon;
