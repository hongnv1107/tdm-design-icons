// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTimelineSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSTimeline](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExIDIuNUwxIDIuNUwxIDFMMTEgMUwxMSAyLjVaTTE1IDYuNjY3TDUgNi42NjdMNSA1LjE2N0wxNSA1LjE2N0wxNSA2LjY2N1pNMTEgMTAuODM0TDEgMTAuODM0TDEgOS4zMzRMMTEgOS4zMzRMMTEgMTAuODM0Wk0xNSAxNUw1IDE1TDUgMTMuNUwxNSAxMy41TDE1IDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTimelineIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTimeline';
}

export default RefIcon;
