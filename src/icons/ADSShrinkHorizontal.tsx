// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8.75H0V7.25H6.25V8.75ZM9.75 7.25H16V8.75H9.75V7.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.189 8L2.22 5.03L3.28 3.97L6.78 7.47C7.073 7.763 7.073 8.237 6.78 8.53L3.28 12.03L2.22 10.97L5.189 8ZM9.22 7.47L12.72 3.97L13.78 5.03L10.811 8L13.78 10.97L12.72 12.03L9.22 8.53C8.927 8.237 8.927 7.763 9.22 7.47Z"/>
  </svg>
);

const aDSShrinkHorizontalIconDefinition = svgToIconDefinition(
  aDSShrinkHorizontalSvg,
  'ads-shrink-horizontal'
);

/**![ADSShrinkHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNSA4Ljc1SDBWNy4yNUg2LjI1VjguNzVaTTkuNzUgNy4yNUgxNlY4Ljc1SDkuNzVWNy4yNVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMTg5IDhMMi4yMiA1LjAzTDMuMjggMy45N0w2Ljc4IDcuNDdDNy4wNzMgNy43NjMgNy4wNzMgOC4yMzcgNi43OCA4LjUzTDMuMjggMTIuMDNMMi4yMiAxMC45N0w1LjE4OSA4Wk05LjIyIDcuNDdMMTIuNzIgMy45N0wxMy43OCA1LjAzTDEwLjgxMSA4TDEzLjc4IDEwLjk3TDEyLjcyIDEyLjAzTDkuMjIgOC41M0M4LjkyNyA4LjIzNyA4LjkyNyA3Ljc2MyA5LjIyIDcuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkHorizontal';
}

export default RefIcon;
