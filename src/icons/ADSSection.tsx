// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSectionSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5H1V1H9V2.5ZM1 6C1 4.895 1.895 4 3 4H13C14.105 4 15 4.895 15 6V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V6ZM3 5.5C2.724 5.5 2.5 5.724 2.5 6V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V6C13.5 5.724 13.276 5.5 13 5.5H3Z"/>
  </svg>
);

const aDSSectionIconDefinition = svgToIconDefinition(
  aDSSectionSvg,
  'ads-section'
);

/**![ADSSection](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOSAyLjVIMVYxSDlWMi41Wk0xIDZDMSA0Ljg5NSAxLjg5NSA0IDMgNEgxM0MxNC4xMDUgNCAxNSA0Ljg5NSAxNSA2VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjZaTTMgNS41QzIuNzI0IDUuNSAyLjUgNS43MjQgMi41IDZWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjZDMTMuNSA1LjcyNCAxMy4yNzYgNS41IDEzIDUuNUgzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSectionIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSection';
}

export default RefIcon;
