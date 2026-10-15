// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHomeSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 0.727C7.411 0.022 8.589 0.022 9.354 0.727L14.354 5.327C14.766 5.705 15 6.239 15 6.798V13C15 14.105 14.105 15 13 15H9.75C9.336 15 9 14.664 9 14.25V9.5H7V14.25C7 14.664 6.664 15 6.25 15H3C1.895 15 1 14.105 1 13V6.798C1 6.239 1.234 5.705 1.646 5.327L6.646 0.727ZM8.339 1.831C8.147 1.654 7.853 1.654 7.661 1.831L2.661 6.431C2.559 6.525 2.5 6.659 2.5 6.798V13C2.5 13.276 2.724 13.5 3 13.5H5.5V8.75C5.5 8.336 5.836 8 6.25 8H9.75C10.164 8 10.5 8.336 10.5 8.75V13.5H13C13.276 13.5 13.5 13.276 13.5 13V6.798C13.5 6.659 13.441 6.525 13.339 6.431L8.339 1.831Z"/>
  </svg>
);

const aDSHomeIconDefinition = svgToIconDefinition(
  aDSHomeSvg,
  'ads-home'
);

/**![ADSHome](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNjQ2IDAuNzI3QzcuNDExIDAuMDIyIDguNTg5IDAuMDIyIDkuMzU0IDAuNzI3TDE0LjM1NCA1LjMyN0MxNC43NjYgNS43MDUgMTUgNi4yMzkgMTUgNi43OThWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUg5Ljc1QzkuMzM2IDE1IDkgMTQuNjY0IDkgMTQuMjVWOS41SDdWMTQuMjVDNyAxNC42NjQgNi42NjQgMTUgNi4yNSAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWNi43OThDMSA2LjIzOSAxLjIzNCA1LjcwNSAxLjY0NiA1LjMyN0w2LjY0NiAwLjcyN1pNOC4zMzkgMS44MzFDOC4xNDcgMS42NTQgNy44NTMgMS42NTQgNy42NjEgMS44MzFMMi42NjEgNi40MzFDMi41NTkgNi41MjUgMi41IDYuNjU5IDIuNSA2Ljc5OFYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDUuNVY4Ljc1QzUuNSA4LjMzNiA1LjgzNiA4IDYuMjUgOEg5Ljc1QzEwLjE2NCA4IDEwLjUgOC4zMzYgMTAuNSA4Ljc1VjEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1Y2Ljc5OEMxMy41IDYuNjU5IDEzLjQ0MSA2LjUyNSAxMy4zMzkgNi40MzFMOC4zMzkgMS44MzFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHomeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHome';
}

export default RefIcon;
