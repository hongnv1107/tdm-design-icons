// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableCellClearSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5H2ZM0 4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4ZM6.939 8L5.22 6.28L6.28 5.22L8 6.939L9.72 5.22L10.78 6.28L9.061 8L10.78 9.72L9.72 10.78L8 9.061L6.28 10.78L5.22 9.72L6.939 8Z"/>
  </svg>
);

const aDSTableCellClearIconDefinition = svgToIconDefinition(
  aDSTableCellClearSvg,
  'ads-table-cell-clear'
);

/**![ADSTableCellClear](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMy41QzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUgyWk0wIDRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxNEMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyVjRaTTYuOTM5IDhMNS4yMiA2LjI4TDYuMjggNS4yMkw4IDYuOTM5TDkuNzIgNS4yMkwxMC43OCA2LjI4TDkuMDYxIDhMMTAuNzggOS43Mkw5LjcyIDEwLjc4TDggOS4wNjFMNi4yOCAxMC43OEw1LjIyIDkuNzJMNi45MzkgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableCellClearIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableCellClear';
}

export default RefIcon;
