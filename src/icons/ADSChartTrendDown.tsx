// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartTrendDownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSChartTrendDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik0xNSA2SDEzLjVWNy45MzlMOS43OCA0LjIyQzkuNDg3IDMuOTI3IDkuMDEzIDMuOTI3IDguNzIgNC4yMkw3LjI1IDUuNjg5TDUuMDMgMy40N0wzLjk3IDQuNTNMNi43MiA3LjI4TDYuNzc2IDcuMzMyQzcuMDcxIDcuNTcyIDcuNTA2IDcuNTU1IDcuNzggNy4yOEw5LjI1IDUuODExTDEyLjQ0IDlIMTAuNVYxMC41SDE0LjI1QzE0LjY2NCAxMC41IDE1IDEwLjE2NCAxNSA5Ljc1VjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartTrendDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartTrendDown';
}

export default RefIcon;
