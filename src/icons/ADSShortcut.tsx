// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShortcutSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 2.25L12.25 0H13.75L13.75 2.25H16V3.75H13.75L13.75 6H12.25L12.25 3.75H10V2.25H12.25ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V8.5H15V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.896 1.895 1 3 1H7.5V2.5H3Z"/>
  </svg>
);

const aDSShortcutIconDefinition = svgToIconDefinition(
  aDSShortcutSvg,
  'ads-shortcut'
);

/**![ADSShortcut](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIuMjUgMi4yNUwxMi4yNSAwSDEzLjc1TDEzLjc1IDIuMjVIMTZWMy43NUgxMy43NUwxMy43NSA2SDEyLjI1TDEyLjI1IDMuNzVIMTBWMi4yNUgxMi4yNVpNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWOC41SDE1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NiAxLjg5NSAxIDMgMUg3LjVWMi41SDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShortcutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShortcut';
}

export default RefIcon;
