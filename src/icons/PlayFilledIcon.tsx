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
    <path d="M8.04167 3.29133L20.0417 10.3546C20.6528 10.7559 20.9722 11.3044 21 12C20.9722 12.7224 20.6528 13.2708 20.0417 13.6454L8.04167 20.7087C7.375 21.0832 6.70833 21.0966 6.04167 20.7488C5.375 20.3742 5.02778 19.8124 5 19.0633V4.93675C5.02778 4.18761 5.375 3.62576 6.04167 3.2512C6.70833 2.90339 7.375 2.91676 8.04167 3.29133Z"/>
  </svg>
);

const playFilledIconDefinition = svgToIconDefinition(
  playFilledSvg,
  'play-filled'
);

/**![PlayFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4wNDE2NyAzLjI5MTMzTDIwLjA0MTcgMTAuMzU0NkMyMC42NTI4IDEwLjc1NTkgMjAuOTcyMiAxMS4zMDQ0IDIxIDEyQzIwLjk3MjIgMTIuNzIyNCAyMC42NTI4IDEzLjI3MDggMjAuMDQxNyAxMy42NDU0TDguMDQxNjcgMjAuNzA4N0M3LjM3NSAyMS4wODMyIDYuNzA4MzMgMjEuMDk2NiA2LjA0MTY3IDIwLjc0ODhDNS4zNzUgMjAuMzc0MiA1LjAyNzc4IDE5LjgxMjQgNSAxOS4wNjMzVjQuOTM2NzVDNS4wMjc3OCA0LjE4NzYxIDUuMzc1IDMuNjI1NzYgNi4wNDE2NyAzLjI1MTJDNi43MDgzMyAyLjkwMzM5IDcuMzc1IDIuOTE2NzYgOC4wNDE2NyAzLjI5MTMzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayFilledIcon';
}

export default RefIcon;
