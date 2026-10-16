// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoRecordSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.084 8.068C1.084 4.202 4.218 1.068 8.084 1.068C11.95 1.068 15.084 4.202 15.084 8.068C15.084 11.934 11.95 15.068 8.084 15.068C4.218 15.068 1.084 11.934 1.084 8.068Z"/>
  </svg>
);

const aDSVideoRecordIconDefinition = svgToIconDefinition(
  aDSVideoRecordSvg,
  'ads-video-record'
);

/**![ADSVideoRecord](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuMDg0IDguMDY4QzEuMDg0IDQuMjAyIDQuMjE4IDEuMDY4IDguMDg0IDEuMDY4QzExLjk1IDEuMDY4IDE1LjA4NCA0LjIwMiAxNS4wODQgOC4wNjhDMTUuMDg0IDExLjkzNCAxMS45NSAxNS4wNjggOC4wODQgMTUuMDY4QzQuMjE4IDE1LjA2OCAxLjA4NCAxMS45MzQgMS4wODQgOC4wNjhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoRecordIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoRecord';
}

export default RefIcon;
