// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCheckboxCheckedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1C1.895 1 1 1.895 1 3V13C1 14.105 1.895 15 3 15H13C14.105 15 15 14.105 15 13V3C15 1.895 14.105 1 13 1H3ZM12.326 5.48L11.174 4.52L6.75 9.828L4.826 7.52L3.674 8.48L6.174 11.48C6.316 11.651 6.527 11.75 6.75 11.75C6.973 11.75 7.184 11.651 7.326 11.48L12.326 5.48Z"/>
  </svg>
);

const aDSCheckboxCheckedIconDefinition = svgToIconDefinition(
  aDSCheckboxCheckedSvg,
  'ads-checkbox-checked'
);

/**![ADSCheckboxChecked](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMUMxLjg5NSAxIDEgMS44OTUgMSAzVjEzQzEgMTQuMTA1IDEuODk1IDE1IDMgMTVIMTNDMTQuMTA1IDE1IDE1IDE0LjEwNSAxNSAxM1YzQzE1IDEuODk1IDE0LjEwNSAxIDEzIDFIM1pNMTIuMzI2IDUuNDhMMTEuMTc0IDQuNTJMNi43NSA5LjgyOEw0LjgyNiA3LjUyTDMuNjc0IDguNDhMNi4xNzQgMTEuNDhDNi4zMTYgMTEuNjUxIDYuNTI3IDExLjc1IDYuNzUgMTEuNzVDNi45NzMgMTEuNzUgNy4xODQgMTEuNjUxIDcuMzI2IDExLjQ4TDEyLjMyNiA1LjQ4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCheckboxCheckedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCheckboxChecked';
}

export default RefIcon;
