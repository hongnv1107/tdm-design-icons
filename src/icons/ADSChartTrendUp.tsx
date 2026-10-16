// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartTrendUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M15 7.5H13.5V5.561L9.78 9.28C9.487 9.573 9.013 9.573 8.72 9.28L7.25 7.811L5.03 10.03L3.97 8.97L6.72 6.22L6.776 6.168C7.071 5.928 7.506 5.945 7.78 6.22L9.25 7.689L12.44 4.5H10.5V3H14.25C14.664 3 15 3.336 15 3.75V7.5Z"/>
  </svg>
);

const aDSChartTrendUpIconDefinition = svgToIconDefinition(
  aDSChartTrendUpSvg,
  'ads-chart-trend-up'
);

/**![ADSChartTrendUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik0xNSA3LjVIMTMuNVY1LjU2MUw5Ljc4IDkuMjhDOS40ODcgOS41NzMgOS4wMTMgOS41NzMgOC43MiA5LjI4TDcuMjUgNy44MTFMNS4wMyAxMC4wM0wzLjk3IDguOTdMNi43MiA2LjIyTDYuNzc2IDYuMTY4QzcuMDcxIDUuOTI4IDcuNTA2IDUuOTQ1IDcuNzggNi4yMkw5LjI1IDcuNjg5TDEyLjQ0IDQuNUgxMC41VjNIMTQuMjVDMTQuNjY0IDMgMTUgMy4zMzYgMTUgMy43NVY3LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartTrendUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartTrendUp';
}

export default RefIcon;
