// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSidebarExpandSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.5C14.276 2.5 14.5 2.724 14.5 3V13C14.5 13.276 14.276 13.5 14 13.5H12V2.5H14ZM10.5 2.5V13.5H2C1.724 13.5 1.5 13.276 1.5 13V3C1.5 2.724 1.724 2.5 2 2.5H10.5ZM16 3C16 1.895 15.105 1 14 1H2C0.895 1 0 1.895 0 3V13C0 14.105 0.895 15 2 15H14C15.105 15 16 14.105 16 13V3ZM8.03 7.47L5.53 4.97L4.47 6.03L6.439 8L4.47 9.97L5.53 11.03L8.03 8.53C8.323 8.237 8.323 7.763 8.03 7.47Z"/>
  </svg>
);

const aDSSidebarExpandIconDefinition = svgToIconDefinition(
  aDSSidebarExpandSvg,
  'ads-sidebar-expand'
);

/**![ADSSidebarExpand](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMi41QzE0LjI3NiAyLjUgMTQuNSAyLjcyNCAxNC41IDNWMTNDMTQuNSAxMy4yNzYgMTQuMjc2IDEzLjUgMTQgMTMuNUgxMlYyLjVIMTRaTTEwLjUgMi41VjEzLjVIMkMxLjcyNCAxMy41IDEuNSAxMy4yNzYgMS41IDEzVjNDMS41IDIuNzI0IDEuNzI0IDIuNSAyIDIuNUgxMC41Wk0xNiAzQzE2IDEuODk1IDE1LjEwNSAxIDE0IDFIMkMwLjg5NSAxIDAgMS44OTUgMCAzVjEzQzAgMTQuMTA1IDAuODk1IDE1IDIgMTVIMTRDMTUuMTA1IDE1IDE2IDE0LjEwNSAxNiAxM1YzWk04LjAzIDcuNDdMNS41MyA0Ljk3TDQuNDcgNi4wM0w2LjQzOSA4TDQuNDcgOS45N0w1LjUzIDExLjAzTDguMDMgOC41M0M4LjMyMyA4LjIzNyA4LjMyMyA3Ljc2MyA4LjAzIDcuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSidebarExpandIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSidebarExpand';
}

export default RefIcon;
