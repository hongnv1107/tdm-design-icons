// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTabSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28 3.47L11.28 7.47C11.573 7.763 11.573 8.237 11.28 8.53L7.28 12.53L6.22 11.47L8.939 8.75H1V7.25H8.939L6.22 4.53L7.28 3.47ZM15 3.5V12.5H13.5V3.5H15Z"/>
  </svg>
);

const aDSTabIconDefinition = svgToIconDefinition(
  aDSTabSvg,
  'ads-tab'
);

/**![ADSTab](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yOCAzLjQ3TDExLjI4IDcuNDdDMTEuNTczIDcuNzYzIDExLjU3MyA4LjIzNyAxMS4yOCA4LjUzTDcuMjggMTIuNTNMNi4yMiAxMS40N0w4LjkzOSA4Ljc1SDFWNy4yNUg4LjkzOUw2LjIyIDQuNTNMNy4yOCAzLjQ3Wk0xNSAzLjVWMTIuNUgxMy41VjMuNUgxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTabIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTab';
}

export default RefIcon;
