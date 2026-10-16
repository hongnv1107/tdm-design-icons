// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBubbleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M11.266 9.007C11.959 9.077 12.5 9.663 12.5 10.375C12.5 11.134 11.884 11.75 11.125 11.75C10.413 11.75 9.827 11.209 9.757 10.516L9.75 10.375L9.757 10.234C9.827 9.541 10.413 9 11.125 9L11.266 9.007Z"/><path d="M5.75 6.5C6.717 6.5 7.5 7.284 7.5 8.25C7.5 9.217 6.717 10 5.75 10C4.784 10 4 9.217 4 8.25C4 7.284 4.784 6.5 5.75 6.5Z"/><path d="M10.5 1.5C11.881 1.5 13 2.619 13 4C13 5.381 11.881 6.5 10.5 6.5C9.119 6.5 8 5.381 8 4C8 2.619 9.119 1.5 10.5 1.5Z"/>
  </svg>
);

const aDSChartBubbleIconDefinition = svgToIconDefinition(
  aDSChartBubbleSvg,
  'ads-chart-bubble'
);

/**![ADSChartBubble](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNMTEuMjY2IDkuMDA3QzExLjk1OSA5LjA3NyAxMi41IDkuNjYzIDEyLjUgMTAuMzc1QzEyLjUgMTEuMTM0IDExLjg4NCAxMS43NSAxMS4xMjUgMTEuNzVDMTAuNDEzIDExLjc1IDkuODI3IDExLjIwOSA5Ljc1NyAxMC41MTZMOS43NSAxMC4zNzVMOS43NTcgMTAuMjM0QzkuODI3IDkuNTQxIDEwLjQxMyA5IDExLjEyNSA5TDExLjI2NiA5LjAwN1oiLz48cGF0aCBkPSJNNS43NSA2LjVDNi43MTcgNi41IDcuNSA3LjI4NCA3LjUgOC4yNUM3LjUgOS4yMTcgNi43MTcgMTAgNS43NSAxMEM0Ljc4NCAxMCA0IDkuMjE3IDQgOC4yNUM0IDcuMjg0IDQuNzg0IDYuNSA1Ljc1IDYuNVoiLz48cGF0aCBkPSJNMTAuNSAxLjVDMTEuODgxIDEuNSAxMyAyLjYxOSAxMyA0QzEzIDUuMzgxIDExLjg4MSA2LjUgMTAuNSA2LjVDOS4xMTkgNi41IDggNS4zODEgOCA0QzggMi42MTkgOS4xMTkgMS41IDEwLjUgMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBubbleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBubble';
}

export default RefIcon;
