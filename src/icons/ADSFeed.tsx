// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFeedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2.5C6.724 2.5 6.5 2.724 6.5 3V12.25C6.5 12.7 6.392 13.125 6.2 13.5H12.25C12.94 13.5 13.5 12.94 13.5 12.25V3C13.5 2.724 13.276 2.5 13 2.5H7ZM3.75 13.5C4.44 13.5 5 12.94 5 12.25V7H3C2.724 7 2.5 7.224 2.5 7.5V12.25C2.5 12.94 3.06 13.5 3.75 13.5ZM5 5.5V3C5 1.895 5.895 1 7 1H13C14.105 1 15 1.895 15 3V12.25C15 13.769 13.769 15 12.25 15H3.75C2.231 15 1 13.769 1 12.25V7.5C1 6.395 1.895 5.5 3 5.5H5ZM12 5.5H8V4H12V5.5ZM11 8.5H8V7H11V8.5Z"/>
  </svg>
);

const aDSFeedIconDefinition = svgToIconDefinition(
  aDSFeedSvg,
  'ads-feed'
);

/**![ADSFeed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyAyLjVDNi43MjQgMi41IDYuNSAyLjcyNCA2LjUgM1YxMi4yNUM2LjUgMTIuNyA2LjM5MiAxMy4xMjUgNi4yIDEzLjVIMTIuMjVDMTIuOTQgMTMuNSAxMy41IDEyLjk0IDEzLjUgMTIuMjVWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDdaTTMuNzUgMTMuNUM0LjQ0IDEzLjUgNSAxMi45NCA1IDEyLjI1VjdIM0MyLjcyNCA3IDIuNSA3LjIyNCAyLjUgNy41VjEyLjI1QzIuNSAxMi45NCAzLjA2IDEzLjUgMy43NSAxMy41Wk01IDUuNVYzQzUgMS44OTUgNS44OTUgMSA3IDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxMi4yNUMxNSAxMy43NjkgMTMuNzY5IDE1IDEyLjI1IDE1SDMuNzVDMi4yMzEgMTUgMSAxMy43NjkgMSAxMi4yNVY3LjVDMSA2LjM5NSAxLjg5NSA1LjUgMyA1LjVINVpNMTIgNS41SDhWNEgxMlY1LjVaTTExIDguNUg4VjdIMTFWOC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFeedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFeed';
}

export default RefIcon;
