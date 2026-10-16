// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.47 12.47L12.22 2.72L13.28 3.78L3.53 13.53L2.47 12.47Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 4H5.75V2.5H12.75C13.164 2.5 13.5 2.836 13.5 3.25V10.25H12V4Z"/>
  </svg>
);

const aDSArrowUpRightIconDefinition = svgToIconDefinition(
  aDSArrowUpRightSvg,
  'ads-arrow-up-right'
);

/**![ADSArrowUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNDcgMTIuNDdMMTIuMjIgMi43MkwxMy4yOCAzLjc4TDMuNTMgMTMuNTNMMi40NyAxMi40N1oiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDRINS43NVYyLjVIMTIuNzVDMTMuMTY0IDIuNSAxMy41IDIuODM2IDEzLjUgMy4yNVYxMC4yNUgxMlY0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUpRight';
}

export default RefIcon;
