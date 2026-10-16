// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSortAscendingSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 12.5L1 12.5L1 14L15 14L15 12.5ZM13.25 8.75L13.25 3.561L14.97 5.28L16.03 4.22L13.03 1.22C12.89 1.079 12.699 1 12.5 1C12.301 1 12.11 1.079 11.97 1.22L8.97 4.22L10.03 5.28L11.75 3.561L11.75 8.75L13.25 8.75ZM8 7.25L1 7.25L1 8.75L8 8.75L8 7.25ZM6 2L1 2L1 3.5L6 3.5L6 2Z"/>
  </svg>
);

const aDSSortAscendingIconDefinition = svgToIconDefinition(
  aDSSortAscendingSvg,
  'ads-sort-ascending'
);

/**![ADSSortAscending](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMTIuNUwxIDEyLjVMMSAxNEwxNSAxNEwxNSAxMi41Wk0xMy4yNSA4Ljc1TDEzLjI1IDMuNTYxTDE0Ljk3IDUuMjhMMTYuMDMgNC4yMkwxMy4wMyAxLjIyQzEyLjg5IDEuMDc5IDEyLjY5OSAxIDEyLjUgMUMxMi4zMDEgMSAxMi4xMSAxLjA3OSAxMS45NyAxLjIyTDguOTcgNC4yMkwxMC4wMyA1LjI4TDExLjc1IDMuNTYxTDExLjc1IDguNzVMMTMuMjUgOC43NVpNOCA3LjI1TDEgNy4yNUwxIDguNzVMOCA4Ljc1TDggNy4yNVpNNiAyTDEgMkwxIDMuNUw2IDMuNUw2IDJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSortAscendingIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSortAscending';
}

export default RefIcon;
