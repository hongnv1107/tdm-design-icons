// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartAreaSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M14 3V4.5H11L7.2 7.35C7.07 7.447 6.912 7.5 6.75 7.5H3.5V6H6.5L10.3 3.15C10.43 3.053 10.588 3 10.75 3H14Z"/><path d="M13.25 7C13.664 7 14 7.336 14 7.75V11.75C14 12.164 13.664 12.5 13.25 12.5H4.25C3.836 12.5 3.5 12.164 3.5 11.75V10.25C3.5 9.836 3.836 9.5 4.25 9.5H7.035L10.853 7.114L10.945 7.064C11.041 7.022 11.145 7 11.25 7H13.25Z"/>
  </svg>
);

const aDSChartAreaIconDefinition = svgToIconDefinition(
  aDSChartAreaSvg,
  'ads-chart-area'
);

/**![ADSChartArea](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik0xNCAzVjQuNUgxMUw3LjIgNy4zNUM3LjA3IDcuNDQ3IDYuOTEyIDcuNSA2Ljc1IDcuNUgzLjVWNkg2LjVMMTAuMyAzLjE1QzEwLjQzIDMuMDUzIDEwLjU4OCAzIDEwLjc1IDNIMTRaIi8+PHBhdGggZD0iTTEzLjI1IDdDMTMuNjY0IDcgMTQgNy4zMzYgMTQgNy43NVYxMS43NUMxNCAxMi4xNjQgMTMuNjY0IDEyLjUgMTMuMjUgMTIuNUg0LjI1QzMuODM2IDEyLjUgMy41IDEyLjE2NCAzLjUgMTEuNzVWMTAuMjVDMy41IDkuODM2IDMuODM2IDkuNSA0LjI1IDkuNUg3LjAzNUwxMC44NTMgNy4xMTRMMTAuOTQ1IDcuMDY0QzExLjA0MSA3LjAyMiAxMS4xNDUgNyAxMS4yNSA3SDEzLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartAreaIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartArea';
}

export default RefIcon;
