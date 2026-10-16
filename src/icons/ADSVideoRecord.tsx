// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoRecordSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSVideoRecord](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4wODQgOC4wNjhDMS4wODQgNC4yMDIgNC4yMTggMS4wNjggOC4wODQgMS4wNjhDMTEuOTUgMS4wNjggMTUuMDg0IDQuMjAyIDE1LjA4NCA4LjA2OEMxNS4wODQgMTEuOTM0IDExLjk1IDE1LjA2OCA4LjA4NCAxNS4wNjhDNC4yMTggMTUuMDY4IDEuMDg0IDExLjkzNCAxLjA4NCA4LjA2OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoRecordIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoRecord';
}

export default RefIcon;
