// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldDropdownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 3.5H0V2H14C15.105 2 16 2.895 16 4V12C16 13.105 15.105 14 14 14H0V12.5H14C14.276 12.5 14.5 12.276 14.5 12V4C14.5 3.724 14.276 3.5 14 3.5ZM9 8.189L7.03 6.22L5.97 7.28L8.47 9.78C8.61 9.921 8.801 10 9 10C9.199 10 9.39 9.921 9.53 9.78L12.03 7.28L10.97 6.22L9 8.189Z"/>
  </svg>
);

const aDSFieldDropdownIconDefinition = svgToIconDefinition(
  aDSFieldDropdownSvg,
  'ads-field-dropdown'
);

/**![ADSFieldDropdown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDMuNUgwVjJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDBWMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNVpNOSA4LjE4OUw3LjAzIDYuMjJMNS45NyA3LjI4TDguNDcgOS43OEM4LjYxIDkuOTIxIDguODAxIDEwIDkgMTBDOS4xOTkgMTAgOS4zOSA5LjkyMSA5LjUzIDkuNzhMMTIuMDMgNy4yOEwxMC45NyA2LjIyTDkgOC4xODlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldDropdownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldDropdown';
}

export default RefIcon;
