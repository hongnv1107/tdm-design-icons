// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartFunnelSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSChartFunnel](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNMTMuMjUgMi41QzEzLjY2NCAyLjUgMTQgMi44MzYgMTQgMy4yNVYzLjk2N0MxNCA0LjM2MyAxMy44MjkgNC43NCAxMy41MyA1LjAwMUwxMCA4LjA5VjEySDguNVY4LjA5TDQuOTcgNS4wMDFDNC42NzEgNC43NCA0LjUgNC4zNjMgNC41IDMuOTY3VjMuMjVDNC41IDIuODM2IDQuODM2IDIuNSA1LjI1IDIuNUgxMy4yNVpNOS4yNSA2Ljc1M0wxMi4zOTcgNEg2LjEwNEw5LjI1IDYuNzUzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartFunnelIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartFunnel';
}

export default RefIcon;
