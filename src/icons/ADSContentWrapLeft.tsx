// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSContentWrapLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1L15 2.5ZM2.5 6.5L2.5 9.5L5.5 9.5L5.5 6.5L2.5 6.5ZM2.375 5L5.625 5C6.384 5 7 5.616 7 6.375L7 9.625C7 10.384 6.384 11 5.625 11L2.375 11C1.616 11 1 10.384 1 9.625L1 6.375C1 5.616 1.616 5 2.375 5ZM15 6.667L9 6.667L9 5.167L15 5.167L15 6.667ZM15 10.833L9 10.833L9 9.333L15 9.333L15 10.833ZM15 15L1 15L1 13.5L15 13.5L15 15Z"/>
  </svg>
);

const aDSContentWrapLeftIconDefinition = svgToIconDefinition(
  aDSContentWrapLeftSvg,
  'ads-content-wrap-left'
);

/**![ADSContentWrapLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDIuNUwxIDIuNUwxIDFMMTUgMUwxNSAyLjVaTTIuNSA2LjVMMi41IDkuNUw1LjUgOS41TDUuNSA2LjVMMi41IDYuNVpNMi4zNzUgNUw1LjYyNSA1QzYuMzg0IDUgNyA1LjYxNiA3IDYuMzc1TDcgOS42MjVDNyAxMC4zODQgNi4zODQgMTEgNS42MjUgMTFMMi4zNzUgMTFDMS42MTYgMTEgMSAxMC4zODQgMSA5LjYyNUwxIDYuMzc1QzEgNS42MTYgMS42MTYgNSAyLjM3NSA1Wk0xNSA2LjY2N0w5IDYuNjY3TDkgNS4xNjdMMTUgNS4xNjdMMTUgNi42NjdaTTE1IDEwLjgzM0w5IDEwLjgzM0w5IDkuMzMzTDE1IDkuMzMzTDE1IDEwLjgzM1pNMTUgMTVMMSAxNUwxIDEzLjVMMTUgMTMuNUwxNSAxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSContentWrapLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSContentWrapLeft';
}

export default RefIcon;
