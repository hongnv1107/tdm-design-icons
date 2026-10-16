// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSidebarCollapseSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.5C1.724 2.5 1.5 2.724 1.5 3V13C1.5 13.276 1.724 13.5 2 13.5H4V2.5H2ZM5.5 2.5V13.5H14C14.276 13.5 14.5 13.276 14.5 13V3C14.5 2.724 14.276 2.5 14 2.5H5.5ZM0 3C0 1.895 0.895 1 2 1H14C15.105 1 16 1.895 16 3V13C16 14.105 15.105 15 14 15H2C0.895 15 0 14.105 0 13V3ZM7.97 7.47L10.47 4.97L11.53 6.03L9.561 8L11.53 9.97L10.47 11.03L7.97 8.53C7.677 8.237 7.677 7.763 7.97 7.47Z"/>
  </svg>
);

const aDSSidebarCollapseIconDefinition = svgToIconDefinition(
  aDSSidebarCollapseSvg,
  'ads-sidebar-collapse'
);

/**![ADSSidebarCollapse](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjVDMS43MjQgMi41IDEuNSAyLjcyNCAxLjUgM1YxM0MxLjUgMTMuMjc2IDEuNzI0IDEzLjUgMiAxMy41SDRWMi41SDJaTTUuNSAyLjVWMTMuNUgxNEMxNC4yNzYgMTMuNSAxNC41IDEzLjI3NiAxNC41IDEzVjNDMTQuNSAyLjcyNCAxNC4yNzYgMi41IDE0IDIuNUg1LjVaTTAgM0MwIDEuODk1IDAuODk1IDEgMiAxSDE0QzE1LjEwNSAxIDE2IDEuODk1IDE2IDNWMTNDMTYgMTQuMTA1IDE1LjEwNSAxNSAxNCAxNUgyQzAuODk1IDE1IDAgMTQuMTA1IDAgMTNWM1pNNy45NyA3LjQ3TDEwLjQ3IDQuOTdMMTEuNTMgNi4wM0w5LjU2MSA4TDExLjUzIDkuOTdMMTAuNDcgMTEuMDNMNy45NyA4LjUzQzcuNjc3IDguMjM3IDcuNjc3IDcuNzYzIDcuOTcgNy40N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSidebarCollapseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSidebarCollapse';
}

export default RefIcon;
