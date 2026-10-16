// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartFunnelSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M13.25 2.5C13.664 2.5 14 2.836 14 3.25V3.967C14 4.363 13.829 4.74 13.53 5.001L10 8.09V12H8.5V8.09L4.97 5.001C4.671 4.74 4.5 4.363 4.5 3.967V3.25C4.5 2.836 4.836 2.5 5.25 2.5H13.25ZM9.25 6.753L12.397 4H6.104L9.25 6.753Z"/>
  </svg>
);

const aDSChartFunnelIconDefinition = svgToIconDefinition(
  aDSChartFunnelSvg,
  'ads-chart-funnel'
);

/**![ADSChartFunnel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik0xMy4yNSAyLjVDMTMuNjY0IDIuNSAxNCAyLjgzNiAxNCAzLjI1VjMuOTY3QzE0IDQuMzYzIDEzLjgyOSA0Ljc0IDEzLjUzIDUuMDAxTDEwIDguMDlWMTJIOC41VjguMDlMNC45NyA1LjAwMUM0LjY3MSA0Ljc0IDQuNSA0LjM2MyA0LjUgMy45NjdWMy4yNUM0LjUgMi44MzYgNC44MzYgMi41IDUuMjUgMi41SDEzLjI1Wk05LjI1IDYuNzUzTDEyLjM5NyA0SDYuMTA0TDkuMjUgNi43NTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartFunnelIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartFunnel';
}

export default RefIcon;
