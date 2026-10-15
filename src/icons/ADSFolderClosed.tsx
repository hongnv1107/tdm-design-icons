// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFolderClosedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V6H13.5V4.75C13.5 4.474 13.276 4.25 13 4.25H7.689L5.939 2.5H3ZM13.5 7.5H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V7.5ZM1 3C1 1.895 1.895 1 3 1H6.561L8.311 2.75H13C14.105 2.75 15 3.645 15 4.75V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3Z"/>
  </svg>
);

const aDSFolderClosedIconDefinition = svgToIconDefinition(
  aDSFolderClosedSvg,
  'ads-folder-closed'
);

/**![ADSFolderClosed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWNkgxMy41VjQuNzVDMTMuNSA0LjQ3NCAxMy4yNzYgNC4yNSAxMyA0LjI1SDcuNjg5TDUuOTM5IDIuNUgzWk0xMy41IDcuNUgyLjVWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjcuNVpNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFINi41NjFMOC4zMTEgMi43NUgxM0MxNC4xMDUgMi43NSAxNSAzLjY0NSAxNSA0Ljc1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFolderClosedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFolderClosed';
}

export default RefIcon;
