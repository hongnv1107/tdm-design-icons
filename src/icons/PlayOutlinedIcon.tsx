// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 19.1832L19 12.12L7 5.05674V19.1832ZM6.04167 3.37119C6.70833 3.02338 7.375 3.03676 8.04167 3.41132L20.0417 10.4746C20.6528 10.8491 20.9722 11.3976 21 12.12C20.9722 12.8424 20.6528 13.3908 20.0417 13.7654L8.04167 20.8287C7.375 21.2032 6.70833 21.2166 6.04167 20.8688C5.375 20.4942 5.02778 19.9324 5 19.1832V5.05674C5.02778 4.30761 5.375 3.74576 6.04167 3.37119Z" />
  </svg>
);

const playOutlinedIconDefinition = svgToIconDefinition(
  playOutlinedSvg,
  'play-outlined'
);

/**![PlayOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNyAxOS4xODMyTDE5IDEyLjEyTDcgNS4wNTY3NFYxOS4xODMyWk02LjA0MTY3IDMuMzcxMTlDNi43MDgzMyAzLjAyMzM4IDcuMzc1IDMuMDM2NzYgOC4wNDE2NyAzLjQxMTMyTDIwLjA0MTcgMTAuNDc0NkMyMC42NTI4IDEwLjg0OTEgMjAuOTcyMiAxMS4zOTc2IDIxIDEyLjEyQzIwLjk3MjIgMTIuODQyNCAyMC42NTI4IDEzLjM5MDggMjAuMDQxNyAxMy43NjU0TDguMDQxNjcgMjAuODI4N0M3LjM3NSAyMS4yMDMyIDYuNzA4MzMgMjEuMjE2NiA2LjA0MTY3IDIwLjg2ODhDNS4zNzUgMjAuNDk0MiA1LjAyNzc4IDE5LjkzMjQgNSAxOS4xODMyVjUuMDU2NzRDNS4wMjc3OCA0LjMwNzYxIDUuMzc1IDMuNzQ1NzYgNi4wNDE2NyAzLjM3MTE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayOutlinedIcon';
}

export default RefIcon;
