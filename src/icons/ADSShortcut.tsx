// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShortcutSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShortcut](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEyLjI1IDIuMjVMMTIuMjUgMEgxMy43NUwxMy43NSAyLjI1SDE2VjMuNzVIMTMuNzVMMTMuNzUgNkgxMi4yNUwxMi4yNSAzLjc1SDEwVjIuMjVIMTIuMjVaTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjguNUgxNVYxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzQzEgMS44OTYgMS44OTUgMSAzIDFINy41VjIuNUgzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShortcutIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShortcut';
}

export default RefIcon;
