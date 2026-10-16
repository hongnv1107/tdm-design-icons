// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBoxPlotSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M7 2V4.5H7.75C8.164 4.5 8.5 4.836 8.5 5.25V9.25C8.5 9.664 8.164 10 7.75 10H7V12H5.5V10H4.75C4.336 10 4 9.664 4 9.25V5.25C4 4.836 4.336 4.5 4.75 4.5H5.5V2H7ZM5.5 8.5H7V6H5.5V8.5Z"/><path d="M13 1V3H13.75L13.827 3.004C14.205 3.043 14.5 3.362 14.5 3.75V8.25C14.5 8.664 14.164 9 13.75 9H13V12H11.5V9H10.75C10.336 9 10 8.664 10 8.25V3.75C10 3.336 10.336 3 10.75 3H11.5V1H13ZM11.5 7.5H13V4.5H11.5V7.5Z"/>
  </svg>
);

const aDSChartBoxPlotIconDefinition = svgToIconDefinition(
  aDSChartBoxPlotSvg,
  'ads-chart-box-plot'
);

/**![ADSChartBoxPlot](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik03IDJWNC41SDcuNzVDOC4xNjQgNC41IDguNSA0LjgzNiA4LjUgNS4yNVY5LjI1QzguNSA5LjY2NCA4LjE2NCAxMCA3Ljc1IDEwSDdWMTJINS41VjEwSDQuNzVDNC4zMzYgMTAgNCA5LjY2NCA0IDkuMjVWNS4yNUM0IDQuODM2IDQuMzM2IDQuNSA0Ljc1IDQuNUg1LjVWMkg3Wk01LjUgOC41SDdWNkg1LjVWOC41WiIvPjxwYXRoIGQ9Ik0xMyAxVjNIMTMuNzVMMTMuODI3IDMuMDA0QzE0LjIwNSAzLjA0MyAxNC41IDMuMzYyIDE0LjUgMy43NVY4LjI1QzE0LjUgOC42NjQgMTQuMTY0IDkgMTMuNzUgOUgxM1YxMkgxMS41VjlIMTAuNzVDMTAuMzM2IDkgMTAgOC42NjQgMTAgOC4yNVYzLjc1QzEwIDMuMzM2IDEwLjMzNiAzIDEwLjc1IDNIMTEuNVYxSDEzWk0xMS41IDcuNUgxM1Y0LjVIMTEuNVY3LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBoxPlotIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBoxPlot';
}

export default RefIcon;
