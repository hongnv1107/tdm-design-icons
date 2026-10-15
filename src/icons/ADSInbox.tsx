// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSInboxSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V8H5.5C5.914 8 6.25 8.336 6.25 8.75C6.25 9.717 7.034 10.5 8 10.5C8.967 10.5 9.75 9.717 9.75 8.75C9.75 8.336 10.086 8 10.5 8H13.5V3C13.5 2.724 13.276 2.5 13 2.5H3ZM13.5 9.5H11.163C10.825 10.933 9.537 12 8 12C6.463 12 5.176 10.933 4.837 9.5H2.5V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V9.5ZM12 6H4V4.5H12V6Z"/>
  </svg>
);

const aDSInboxIconDefinition = svgToIconDefinition(
  aDSInboxSvg,
  'ads-inbox'
);

/**![ADSInbox](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y4SDUuNUM1LjkxNCA4IDYuMjUgOC4zMzYgNi4yNSA4Ljc1QzYuMjUgOS43MTcgNy4wMzQgMTAuNSA4IDEwLjVDOC45NjcgMTAuNSA5Ljc1IDkuNzE3IDkuNzUgOC43NUM5Ljc1IDguMzM2IDEwLjA4NiA4IDEwLjUgOEgxMy41VjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgzWk0xMy41IDkuNUgxMS4xNjNDMTAuODI1IDEwLjkzMyA5LjUzNyAxMiA4IDEyQzYuNDYzIDEyIDUuMTc2IDEwLjkzMyA0LjgzNyA5LjVIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1Y5LjVaTTEyIDZINFY0LjVIMTJWNloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSInboxIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSInbox';
}

export default RefIcon;
