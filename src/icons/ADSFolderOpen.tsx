// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFolderOpenSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.5C1.724 2.5 1.5 2.724 1.5 3V12.473L3.148 6.98C3.322 6.398 3.858 6 4.465 6H12.5L12.5 4.75C12.5 4.474 12.276 4.25 12 4.25H6.689L4.939 2.5H2ZM14 6H14.66C15.581 6 16.242 6.888 15.977 7.77L14.236 13.575C13.982 14.421 13.203 15 12.32 15H1.75C0.784 15 0 14.217 0 13.25V3C0 1.895 0.895 1 2 1H5.561L7.311 2.75H12C13.105 2.75 14 3.645 14 4.75L14 6ZM2.758 13.5H12.32C12.541 13.5 12.735 13.355 12.799 13.144L14.492 7.5H4.558L2.758 13.5Z"/>
  </svg>
);

const aDSFolderOpenIconDefinition = svgToIconDefinition(
  aDSFolderOpenSvg,
  'ads-folder-open'
);

/**![ADSFolderOpen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMi41QzEuNzI0IDIuNSAxLjUgMi43MjQgMS41IDNWMTIuNDczTDMuMTQ4IDYuOThDMy4zMjIgNi4zOTggMy44NTggNiA0LjQ2NSA2SDEyLjVMMTIuNSA0Ljc1QzEyLjUgNC40NzQgMTIuMjc2IDQuMjUgMTIgNC4yNUg2LjY4OUw0LjkzOSAyLjVIMlpNMTQgNkgxNC42NkMxNS41ODEgNiAxNi4yNDIgNi44ODggMTUuOTc3IDcuNzdMMTQuMjM2IDEzLjU3NUMxMy45ODIgMTQuNDIxIDEzLjIwMyAxNSAxMi4zMiAxNUgxLjc1QzAuNzg0IDE1IDAgMTQuMjE3IDAgMTMuMjVWM0MwIDEuODk1IDAuODk1IDEgMiAxSDUuNTYxTDcuMzExIDIuNzVIMTJDMTMuMTA1IDIuNzUgMTQgMy42NDUgMTQgNC43NUwxNCA2Wk0yLjc1OCAxMy41SDEyLjMyQzEyLjU0MSAxMy41IDEyLjczNSAxMy4zNTUgMTIuNzk5IDEzLjE0NEwxNC40OTIgNy41SDQuNTU4TDIuNzU4IDEzLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFolderOpenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFolderOpen';
}

export default RefIcon;
