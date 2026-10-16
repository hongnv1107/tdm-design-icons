// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDoubleRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.28 1.47L14.28 7.47C14.555 7.744 14.572 8.179 14.332 8.474L14.28 8.53L8.28 14.53L7.22 13.47L12.69 8L7.22 2.53L8.28 1.47Z"/><path d="M3.53 1.47L9.53 7.47C9.805 7.744 9.822 8.179 9.582 8.474L9.53 8.53L3.53 14.53L2.47 13.47L7.939 8L2.47 2.53L3.53 1.47Z"/>
  </svg>
);

const aDSChevronDoubleRightIconDefinition = svgToIconDefinition(
  aDSChevronDoubleRightSvg,
  'ads-chevron-double-right'
);

/**![ADSChevronDoubleRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04LjI4IDEuNDdMMTQuMjggNy40N0MxNC41NTUgNy43NDQgMTQuNTcyIDguMTc5IDE0LjMzMiA4LjQ3NEwxNC4yOCA4LjUzTDguMjggMTQuNTNMNy4yMiAxMy40N0wxMi42OSA4TDcuMjIgMi41M0w4LjI4IDEuNDdaIi8+PHBhdGggZD0iTTMuNTMgMS40N0w5LjUzIDcuNDdDOS44MDUgNy43NDQgOS44MjIgOC4xNzkgOS41ODIgOC40NzRMOS41MyA4LjUzTDMuNTMgMTQuNTNMMi40NyAxMy40N0w3LjkzOSA4TDIuNDcgMi41M0wzLjUzIDEuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDoubleRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDoubleRight';
}

export default RefIcon;
