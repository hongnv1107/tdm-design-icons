// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSidebarExpandSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSSidebarExpand](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDIuNUMxNC4yNzYgMi41IDE0LjUgMi43MjQgMTQuNSAzVjEzQzE0LjUgMTMuMjc2IDE0LjI3NiAxMy41IDE0IDEzLjVIMTJWMi41SDE0Wk0xMC41IDIuNVYxMy41SDJDMS43MjQgMTMuNSAxLjUgMTMuMjc2IDEuNSAxM1YzQzEuNSAyLjcyNCAxLjcyNCAyLjUgMiAyLjVIMTAuNVpNMTYgM0MxNiAxLjg5NSAxNS4xMDUgMSAxNCAxSDJDMC44OTUgMSAwIDEuODk1IDAgM1YxM0MwIDE0LjEwNSAwLjg5NSAxNSAyIDE1SDE0QzE1LjEwNSAxNSAxNiAxNC4xMDUgMTYgMTNWM1pNOC4wMyA3LjQ3TDUuNTMgNC45N0w0LjQ3IDYuMDNMNi40MzkgOEw0LjQ3IDkuOTdMNS41MyAxMS4wM0w4LjAzIDguNTNDOC4zMjMgOC4yMzcgOC4zMjMgNy43NjMgOC4wMyA3LjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSidebarExpandIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSidebarExpand';
}

export default RefIcon;
