// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGrowHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.22 7.47L3.72 3.97L4.78 5.03L2.561 7.25H7V8.75H2.561L4.78 10.97L3.72 12.03L0.22 8.53C-0.073 8.237 -0.073 7.763 0.22 7.47ZM13.439 7.25L11.22 5.03L12.28 3.97L15.78 7.47C16.073 7.763 16.073 8.237 15.78 8.53L12.28 12.03L11.22 10.97L13.439 8.75H9V7.25H13.439Z"/>
  </svg>
);

const aDSGrowHorizontalIconDefinition = svgToIconDefinition(
  aDSGrowHorizontalSvg,
  'ads-grow-horizontal'
);

/**![ADSGrowHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC4yMiA3LjQ3TDMuNzIgMy45N0w0Ljc4IDUuMDNMMi41NjEgNy4yNUg3VjguNzVIMi41NjFMNC43OCAxMC45N0wzLjcyIDEyLjAzTDAuMjIgOC41M0MtMC4wNzMgOC4yMzcgLTAuMDczIDcuNzYzIDAuMjIgNy40N1pNMTMuNDM5IDcuMjVMMTEuMjIgNS4wM0wxMi4yOCAzLjk3TDE1Ljc4IDcuNDdDMTYuMDczIDcuNzYzIDE2LjA3MyA4LjIzNyAxNS43OCA4LjUzTDEyLjI4IDEyLjAzTDExLjIyIDEwLjk3TDEzLjQzOSA4Ljc1SDlWNy4yNUgxMy40MzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGrowHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrowHorizontal';
}

export default RefIcon;
