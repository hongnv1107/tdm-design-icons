// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartTrendDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M15 6H13.5V7.939L9.78 4.22C9.487 3.927 9.013 3.927 8.72 4.22L7.25 5.689L5.03 3.47L3.97 4.53L6.72 7.28L6.776 7.332C7.071 7.572 7.506 7.555 7.78 7.28L9.25 5.811L12.44 9H10.5V10.5H14.25C14.664 10.5 15 10.164 15 9.75V6Z"/>
  </svg>
);

const aDSChartTrendDownIconDefinition = svgToIconDefinition(
  aDSChartTrendDownSvg,
  'ads-chart-trend-down'
);

/**![ADSChartTrendDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNMTUgNkgxMy41VjcuOTM5TDkuNzggNC4yMkM5LjQ4NyAzLjkyNyA5LjAxMyAzLjkyNyA4LjcyIDQuMjJMNy4yNSA1LjY4OUw1LjAzIDMuNDdMMy45NyA0LjUzTDYuNzIgNy4yOEw2Ljc3NiA3LjMzMkM3LjA3MSA3LjU3MiA3LjUwNiA3LjU1NSA3Ljc4IDcuMjhMOS4yNSA1LjgxMUwxMi40NCA5SDEwLjVWMTAuNUgxNC4yNUMxNC42NjQgMTAuNSAxNSAxMC4xNjQgMTUgOS43NVY2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartTrendDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartTrendDown';
}

export default RefIcon;
