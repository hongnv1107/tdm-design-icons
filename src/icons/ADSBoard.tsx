// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBoardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H4.833V3.5H2ZM6.333 3.5V12.5H9.667V3.5H6.333ZM11.167 3.5V12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5H11.167ZM0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12L0 4Z"/>
  </svg>
);

const aDSBoardIconDefinition = svgToIconDefinition(
  aDSBoardSvg,
  'ads-board'
);

/**![ADSBoard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMy41QzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUg0LjgzM1YzLjVIMlpNNi4zMzMgMy41VjEyLjVIOS42NjdWMy41SDYuMzMzWk0xMS4xNjcgMy41VjEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlY0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMTEuMTY3Wk0wIDRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxNEMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyTDAgNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBoardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoard';
}

export default RefIcon;
