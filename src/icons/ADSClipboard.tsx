// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSClipboardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.563 1.5C4.785 0.637 5.568 0 6.5 0H9.5C10.432 0 11.215 0.637 11.437 1.5H12.5C13.605 1.5 14.5 2.395 14.5 3.5V14C14.5 15.105 13.605 16 12.5 16H3.5C2.395 16 1.5 15.105 1.5 14V3.5C1.5 2.395 2.395 1.5 3.5 1.5H4.563ZM4.5 3H3.5C3.224 3 3 3.224 3 3.5V14C3 14.276 3.224 14.5 3.5 14.5H12.5C12.776 14.5 13 14.276 13 14V3.5C13 3.224 12.776 3 12.5 3H11.5V4.25C11.5 4.664 11.164 5 10.75 5H5.25C4.836 5 4.5 4.664 4.5 4.25V3ZM6.5 1.5C6.224 1.5 6 1.724 6 2V3.5H10V2C10 1.724 9.776 1.5 9.5 1.5H6.5Z"/>
  </svg>
);

const aDSClipboardIconDefinition = svgToIconDefinition(
  aDSClipboardSvg,
  'ads-clipboard'
);

/**![ADSClipboard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuNTYzIDEuNUM0Ljc4NSAwLjYzNyA1LjU2OCAwIDYuNSAwSDkuNUMxMC40MzIgMCAxMS4yMTUgMC42MzcgMTEuNDM3IDEuNUgxMi41QzEzLjYwNSAxLjUgMTQuNSAyLjM5NSAxNC41IDMuNVYxNEMxNC41IDE1LjEwNSAxMy42MDUgMTYgMTIuNSAxNkgzLjVDMi4zOTUgMTYgMS41IDE1LjEwNSAxLjUgMTRWMy41QzEuNSAyLjM5NSAyLjM5NSAxLjUgMy41IDEuNUg0LjU2M1pNNC41IDNIMy41QzMuMjI0IDMgMyAzLjIyNCAzIDMuNVYxNEMzIDE0LjI3NiAzLjIyNCAxNC41IDMuNSAxNC41SDEyLjVDMTIuNzc2IDE0LjUgMTMgMTQuMjc2IDEzIDE0VjMuNUMxMyAzLjIyNCAxMi43NzYgMyAxMi41IDNIMTEuNVY0LjI1QzExLjUgNC42NjQgMTEuMTY0IDUgMTAuNzUgNUg1LjI1QzQuODM2IDUgNC41IDQuNjY0IDQuNSA0LjI1VjNaTTYuNSAxLjVDNi4yMjQgMS41IDYgMS43MjQgNiAyVjMuNUgxMFYyQzEwIDEuNzI0IDkuNzc2IDEuNSA5LjUgMS41SDYuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSClipboardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSClipboard';
}

export default RefIcon;
