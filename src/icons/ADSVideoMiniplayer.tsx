// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoMiniplayerSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4ZM2 3.5C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5H2ZM6.75 7.5C6.75 7.086 7.086 6.75 7.5 6.75H12.25C12.664 6.75 13 7.086 13 7.5V10.25C13 10.664 12.664 11 12.25 11H7.5C7.086 11 6.75 10.664 6.75 10.25V7.5Z"/>
  </svg>
);

const aDSVideoMiniplayerIconDefinition = svgToIconDefinition(
  aDSVideoMiniplayerSvg,
  'ads-video-miniplayer'
);

/**![ADSVideoMiniplayer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNEMwIDIuODk1IDAuODk1IDIgMiAySDE0QzE1LjEwNSAyIDE2IDIuODk1IDE2IDRWMTJDMTYgMTMuMTA1IDE1LjEwNSAxNCAxNCAxNEgyQzAuODk1IDE0IDAgMTMuMTA1IDAgMTJWNFpNMiAzLjVDMS43MjQgMy41IDEuNSAzLjcyNCAxLjUgNFYxMkMxLjUgMTIuMjc2IDEuNzI0IDEyLjUgMiAxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNEMxNC41IDMuNzI0IDE0LjI3NiAzLjUgMTQgMy41SDJaTTYuNzUgNy41QzYuNzUgNy4wODYgNy4wODYgNi43NSA3LjUgNi43NUgxMi4yNUMxMi42NjQgNi43NSAxMyA3LjA4NiAxMyA3LjVWMTAuMjVDMTMgMTAuNjY0IDEyLjY2NCAxMSAxMi4yNSAxMUg3LjVDNy4wODYgMTEgNi43NSAxMC42NjQgNi43NSAxMC4yNVY3LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoMiniplayerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoMiniplayer';
}

export default RefIcon;
