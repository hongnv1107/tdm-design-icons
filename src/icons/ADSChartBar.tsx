// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBarSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M5.25 8.5L5.327 8.504C5.705 8.543 6 8.862 6 9.25V11.75C6 12.164 5.664 12.5 5.25 12.5H4.25C3.836 12.5 3.5 12.164 3.5 11.75V9.25C3.5 8.836 3.836 8.5 4.25 8.5H5.25ZM9.25 5C9.664 5 10 5.336 10 5.75V11.75C10 12.164 9.664 12.5 9.25 12.5H8.25C7.836 12.5 7.5 12.164 7.5 11.75V5.75C7.5 5.336 7.836 5 8.25 5H9.25ZM13.25 2C13.664 2 14 2.336 14 2.75V11.75C14 12.164 13.664 12.5 13.25 12.5H12.25C11.836 12.5 11.5 12.164 11.5 11.75V2.75C11.5 2.336 11.836 2 12.25 2H13.25Z"/>
  </svg>
);

const aDSChartBarIconDefinition = svgToIconDefinition(
  aDSChartBarSvg,
  'ads-chart-bar'
);

/**![ADSChartBar](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNNS4yNSA4LjVMNS4zMjcgOC41MDRDNS43MDUgOC41NDMgNiA4Ljg2MiA2IDkuMjVWMTEuNzVDNiAxMi4xNjQgNS42NjQgMTIuNSA1LjI1IDEyLjVINC4yNUMzLjgzNiAxMi41IDMuNSAxMi4xNjQgMy41IDExLjc1VjkuMjVDMy41IDguODM2IDMuODM2IDguNSA0LjI1IDguNUg1LjI1Wk05LjI1IDVDOS42NjQgNSAxMCA1LjMzNiAxMCA1Ljc1VjExLjc1QzEwIDEyLjE2NCA5LjY2NCAxMi41IDkuMjUgMTIuNUg4LjI1QzcuODM2IDEyLjUgNy41IDEyLjE2NCA3LjUgMTEuNzVWNS43NUM3LjUgNS4zMzYgNy44MzYgNSA4LjI1IDVIOS4yNVpNMTMuMjUgMkMxMy42NjQgMiAxNCAyLjMzNiAxNCAyLjc1VjExLjc1QzE0IDEyLjE2NCAxMy42NjQgMTIuNSAxMy4yNSAxMi41SDEyLjI1QzExLjgzNiAxMi41IDExLjUgMTIuMTY0IDExLjUgMTEuNzVWMi43NUMxMS41IDIuMzM2IDExLjgzNiAyIDEyLjI1IDJIMTMuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBarIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBar';
}

export default RefIcon;
