// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartAreaSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSChartArea](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNMTQgM1Y0LjVIMTFMNy4yIDcuMzVDNy4wNyA3LjQ0NyA2LjkxMiA3LjUgNi43NSA3LjVIMy41VjZINi41TDEwLjMgMy4xNUMxMC40MyAzLjA1MyAxMC41ODggMyAxMC43NSAzSDE0WiIvPjxwYXRoIGQ9Ik0xMy4yNSA3QzEzLjY2NCA3IDE0IDcuMzM2IDE0IDcuNzVWMTEuNzVDMTQgMTIuMTY0IDEzLjY2NCAxMi41IDEzLjI1IDEyLjVINC4yNUMzLjgzNiAxMi41IDMuNSAxMi4xNjQgMy41IDExLjc1VjEwLjI1QzMuNSA5LjgzNiAzLjgzNiA5LjUgNC4yNSA5LjVINy4wMzVMMTAuODUzIDcuMTE0TDEwLjk0NSA3LjA2NEMxMS4wNDEgNy4wMjIgMTEuMTQ1IDcgMTEuMjUgN0gxMy4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartAreaIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartArea';
}

export default RefIcon;
