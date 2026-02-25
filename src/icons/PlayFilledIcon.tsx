// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.04167 3.41132L20.0417 10.4746C20.6528 10.8759 20.9722 11.4244 21 12.12C20.9722 12.8424 20.6528 13.3908 20.0417 13.7654L8.04167 20.8287C7.375 21.2032 6.70833 21.2166 6.04167 20.8688C5.375 20.4942 5.02778 19.9324 5 19.1832V5.05674C5.02778 4.30761 5.375 3.74576 6.04167 3.37119C6.70833 3.02338 7.375 3.03676 8.04167 3.41132Z" />
  </svg>
);

const playFilledIconDefinition = svgToIconDefinition(
  playFilledSvg,
  'play-filled'
);

/**![PlayFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC4wNDE2NyAzLjQxMTMyTDIwLjA0MTcgMTAuNDc0NkMyMC42NTI4IDEwLjg3NTkgMjAuOTcyMiAxMS40MjQ0IDIxIDEyLjEyQzIwLjk3MjIgMTIuODQyNCAyMC42NTI4IDEzLjM5MDggMjAuMDQxNyAxMy43NjU0TDguMDQxNjcgMjAuODI4N0M3LjM3NSAyMS4yMDMyIDYuNzA4MzMgMjEuMjE2NiA2LjA0MTY3IDIwLjg2ODhDNS4zNzUgMjAuNDk0MiA1LjAyNzc4IDE5LjkzMjQgNSAxOS4xODMyVjUuMDU2NzRDNS4wMjc3OCA0LjMwNzYxIDUuMzc1IDMuNzQ1NzYgNi4wNDE2NyAzLjM3MTE5QzYuNzA4MzMgMy4wMjMzOCA3LjM3NSAzLjAzNjc2IDguMDQxNjcgMy40MTEzMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayFilledIcon';
}

export default RefIcon;
