// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextIndentRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1L15 2.5ZM2.03 4.72L4.78 7.47C4.921 7.61 5 7.801 5 8C5 8.199 4.921 8.39 4.78 8.53L2.03 11.28L0.97 10.22L3.189 8L0.97 5.78L2.03 4.72ZM15 6.667L8 6.667L8 5.167L15 5.167L15 6.667ZM15 10.833L8 10.833L8 9.333L15 9.333L15 10.833ZM15 13.5L15 15L1 15L1 13.5L15 13.5Z"/>
  </svg>
);

const aDSTextIndentRightIconDefinition = svgToIconDefinition(
  aDSTextIndentRightSvg,
  'ads-text-indent-right'
);

/**![ADSTextIndentRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxTDE1IDIuNVpNMi4wMyA0LjcyTDQuNzggNy40N0M0LjkyMSA3LjYxIDUgNy44MDEgNSA4QzUgOC4xOTkgNC45MjEgOC4zOSA0Ljc4IDguNTNMMi4wMyAxMS4yOEwwLjk3IDEwLjIyTDMuMTg5IDhMMC45NyA1Ljc4TDIuMDMgNC43MlpNMTUgNi42NjdMOCA2LjY2N0w4IDUuMTY3TDE1IDUuMTY3TDE1IDYuNjY3Wk0xNSAxMC44MzNMOCAxMC44MzNMOCA5LjMzM0wxNSA5LjMzM0wxNSAxMC44MzNaTTE1IDEzLjVMMTUgMTVMMSAxNUwxIDEzLjVMMTUgMTMuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextIndentRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextIndentRight';
}

export default RefIcon;
