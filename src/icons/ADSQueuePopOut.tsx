// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSQueuePopOutSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C1.895 2.5 1 3.395 1 4.5L1 13C1 14.105 1.895 15 3 15H11.5C12.605 15 13.5 14.105 13.5 13V8H12V13C12 13.276 11.776 13.5 11.5 13.5H3C2.724 13.5 2.5 13.276 2.5 13L2.5 4.5C2.5 4.224 2.724 4 3 4L8 4V2.5L3 2.5Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 6V1.75C15 1.336 14.664 1 14.25 1L10 1V2.5L12.439 2.5L8.97 5.97L10.03 7.03L13.5 3.561V6H15ZM7.5 9L7.5 14.25H9V9C9 7.895 8.105 7 7 7H1.75L1.75 8.5H7C7.276 8.5 7.5 8.724 7.5 9Z"/>
  </svg>
);

const aDSQueuePopOutIconDefinition = svgToIconDefinition(
  aDSQueuePopOutSvg,
  'ads-queue-pop-out'
);

/**![ADSQueuePopOut](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAyLjVDMS44OTUgMi41IDEgMy4zOTUgMSA0LjVMMSAxM0MxIDE0LjEwNSAxLjg5NSAxNSAzIDE1SDExLjVDMTIuNjA1IDE1IDEzLjUgMTQuMTA1IDEzLjUgMTNWOEgxMlYxM0MxMiAxMy4yNzYgMTEuNzc2IDEzLjUgMTEuNSAxMy41SDNDMi43MjQgMTMuNSAyLjUgMTMuMjc2IDIuNSAxM0wyLjUgNC41QzIuNSA0LjIyNCAyLjcyNCA0IDMgNEw4IDRWMi41TDMgMi41WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgNlYxLjc1QzE1IDEuMzM2IDE0LjY2NCAxIDE0LjI1IDFMMTAgMVYyLjVMMTIuNDM5IDIuNUw4Ljk3IDUuOTdMMTAuMDMgNy4wM0wxMy41IDMuNTYxVjZIMTVaTTcuNSA5TDcuNSAxNC4yNUg5VjlDOSA3Ljg5NSA4LjEwNSA3IDcgN0gxLjc1TDEuNzUgOC41SDdDNy4yNzYgOC41IDcuNSA4LjcyNCA3LjUgOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSQueuePopOutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSQueuePopOut';
}

export default RefIcon;
