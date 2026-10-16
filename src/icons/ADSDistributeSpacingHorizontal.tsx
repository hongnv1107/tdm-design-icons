// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDistributeSpacingHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12L7.25 4H8.75L8.75 12H7.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 15L1 1L2.5 1L2.5 15H1Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 15L13.5 1L15 1L15 15H13.5Z"/>
  </svg>
);

const aDSDistributeSpacingHorizontalIconDefinition = svgToIconDefinition(
  aDSDistributeSpacingHorizontalSvg,
  'ads-distribute-spacing-horizontal'
);

/**![ADSDistributeSpacingHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yNSAxMkw3LjI1IDRIOC43NUw4Ljc1IDEySDcuMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDE1TDEgMUwyLjUgMUwyLjUgMTVIMVoiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgMTVMMTMuNSAxTDE1IDFMMTUgMTVIMTMuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDistributeSpacingHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDistributeSpacingHorizontal';
}

export default RefIcon;
