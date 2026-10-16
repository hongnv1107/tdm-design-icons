// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFeedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSFeed](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcgMi41QzYuNzI0IDIuNSA2LjUgMi43MjQgNi41IDNWMTIuMjVDNi41IDEyLjcgNi4zOTIgMTMuMTI1IDYuMiAxMy41SDEyLjI1QzEyLjk0IDEzLjUgMTMuNSAxMi45NCAxMy41IDEyLjI1VjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUg3Wk0zLjc1IDEzLjVDNC40NCAxMy41IDUgMTIuOTQgNSAxMi4yNVY3SDNDMi43MjQgNyAyLjUgNy4yMjQgMi41IDcuNVYxMi4yNUMyLjUgMTIuOTQgMy4wNiAxMy41IDMuNzUgMTMuNVpNNSA1LjVWM0M1IDEuODk1IDUuODk1IDEgNyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTIuMjVDMTUgMTMuNzY5IDEzLjc2OSAxNSAxMi4yNSAxNUgzLjc1QzIuMjMxIDE1IDEgMTMuNzY5IDEgMTIuMjVWNy41QzEgNi4zOTUgMS44OTUgNS41IDMgNS41SDVaTTEyIDUuNUg4VjRIMTJWNS41Wk0xMSA4LjVIOFY3SDExVjguNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFeedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFeed';
}

export default RefIcon;
