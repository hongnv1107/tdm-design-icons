// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCartSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.152 0.5C2.842 0.5 3.417 1.008 3.514 1.677L3.526 1.813L3.558 2.5H14.25C14.471 2.5 14.68 2.597 14.822 2.766C14.965 2.934 15.026 3.156 14.99 3.373L14.251 7.807C14.04 9.072 12.945 10 11.662 10H3.898L3.945 11.023C3.957 11.29 4.177 11.5 4.444 11.5H13V13H4.444C3.375 13 2.495 12.159 2.446 11.091L2.034 2H0V0.5H2.152ZM3.831 8.5H11.662C12.212 8.5 12.681 8.102 12.772 7.56L13.364 4H3.626L3.831 8.5Z"/><path d="M3.5 14C4.052 14 4.5 14.448 4.5 15C4.5 15.552 4.052 16 3.5 16C2.948 16 2.5 15.552 2.5 15C2.5 14.448 2.948 14 3.5 14Z"/><path d="M11 14C11.552 14 12 14.448 12 15C12 15.552 11.552 16 11 16C10.448 16 10 15.552 10 15C10 14.448 10.448 14 11 14Z"/>
  </svg>
);

const aDSCartIconDefinition = svgToIconDefinition(
  aDSCartSvg,
  'ads-cart'
);

/**![ADSCart](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi4xNTIgMC41QzIuODQyIDAuNSAzLjQxNyAxLjAwOCAzLjUxNCAxLjY3N0wzLjUyNiAxLjgxM0wzLjU1OCAyLjVIMTQuMjVDMTQuNDcxIDIuNSAxNC42OCAyLjU5NyAxNC44MjIgMi43NjZDMTQuOTY1IDIuOTM0IDE1LjAyNiAzLjE1NiAxNC45OSAzLjM3M0wxNC4yNTEgNy44MDdDMTQuMDQgOS4wNzIgMTIuOTQ1IDEwIDExLjY2MiAxMEgzLjg5OEwzLjk0NSAxMS4wMjNDMy45NTcgMTEuMjkgNC4xNzcgMTEuNSA0LjQ0NCAxMS41SDEzVjEzSDQuNDQ0QzMuMzc1IDEzIDIuNDk1IDEyLjE1OSAyLjQ0NiAxMS4wOTFMMi4wMzQgMkgwVjAuNUgyLjE1MlpNMy44MzEgOC41SDExLjY2MkMxMi4yMTIgOC41IDEyLjY4MSA4LjEwMiAxMi43NzIgNy41NkwxMy4zNjQgNEgzLjYyNkwzLjgzMSA4LjVaIi8+PHBhdGggZD0iTTMuNSAxNEM0LjA1MiAxNCA0LjUgMTQuNDQ4IDQuNSAxNUM0LjUgMTUuNTUyIDQuMDUyIDE2IDMuNSAxNkMyLjk0OCAxNiAyLjUgMTUuNTUyIDIuNSAxNUMyLjUgMTQuNDQ4IDIuOTQ4IDE0IDMuNSAxNFoiLz48cGF0aCBkPSJNMTEgMTRDMTEuNTUyIDE0IDEyIDE0LjQ0OCAxMiAxNUMxMiAxNS41NTIgMTEuNTUyIDE2IDExIDE2QzEwLjQ0OCAxNiAxMCAxNS41NTIgMTAgMTVDMTAgMTQuNDQ4IDEwLjQ0OCAxNCAxMSAxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCartIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCart';
}

export default RefIcon;
