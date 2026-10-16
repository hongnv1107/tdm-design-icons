// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.061 12H10.25V13.5H3.25C2.836 13.5 2.5 13.164 2.5 12.75V5.75H4V10.939L12.47 2.47L13.53 3.53L5.061 12Z"/>
  </svg>
);

const aDSArrowDownLeftIconDefinition = svgToIconDefinition(
  aDSArrowDownLeftSvg,
  'ads-arrow-down-left'
);

/**![ADSArrowDownLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMDYxIDEySDEwLjI1VjEzLjVIMy4yNUMyLjgzNiAxMy41IDIuNSAxMy4xNjQgMi41IDEyLjc1VjUuNzVINFYxMC45MzlMMTIuNDcgMi40N0wxMy41MyAzLjUzTDUuMDYxIDEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDownLeft';
}

export default RefIcon;
