// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTimelineSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2.5L1 2.5L1 1L11 1L11 2.5ZM15 6.667L5 6.667L5 5.167L15 5.167L15 6.667ZM11 10.834L1 10.834L1 9.334L11 9.334L11 10.834ZM15 15L5 15L5 13.5L15 13.5L15 15Z"/>
  </svg>
);

const aDSTimelineIconDefinition = svgToIconDefinition(
  aDSTimelineSvg,
  'ads-timeline'
);

/**![ADSTimeline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEgMi41TDEgMi41TDEgMUwxMSAxTDExIDIuNVpNMTUgNi42NjdMNSA2LjY2N0w1IDUuMTY3TDE1IDUuMTY3TDE1IDYuNjY3Wk0xMSAxMC44MzRMMSAxMC44MzRMMSA5LjMzNEwxMSA5LjMzNEwxMSAxMC44MzRaTTE1IDE1TDUgMTVMNSAxMy41TDE1IDEzLjVMMTUgMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTimelineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTimeline';
}

export default RefIcon;
