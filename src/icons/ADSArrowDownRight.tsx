// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.939 12H5.75V13.5H12.75C13.164 13.5 13.5 13.164 13.5 12.75V5.75H12V10.939L3.53 2.47L2.47 3.53L10.939 12Z"/>
  </svg>
);

const aDSArrowDownRightIconDefinition = svgToIconDefinition(
  aDSArrowDownRightSvg,
  'ads-arrow-down-right'
);

/**![ADSArrowDownRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjkzOSAxMkg1Ljc1VjEzLjVIMTIuNzVDMTMuMTY0IDEzLjUgMTMuNSAxMy4xNjQgMTMuNSAxMi43NVY1Ljc1SDEyVjEwLjkzOUwzLjUzIDIuNDdMMi40NyAzLjUzTDEwLjkzOSAxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDownRight';
}

export default RefIcon;
