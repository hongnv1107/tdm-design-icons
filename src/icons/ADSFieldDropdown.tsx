// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldDropdownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSFieldDropdown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQgMy41SDBWMkgxNEMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMFYxMi41SDE0QzE0LjI3NiAxMi41IDE0LjUgMTIuMjc2IDE0LjUgMTJWNEMxNC41IDMuNzI0IDE0LjI3NiAzLjUgMTQgMy41Wk05IDguMTg5TDcuMDMgNi4yMkw1Ljk3IDcuMjhMOC40NyA5Ljc4QzguNjEgOS45MjEgOC44MDEgMTAgOSAxMEM5LjE5OSAxMCA5LjM5IDkuOTIxIDkuNTMgOS43OEwxMi4wMyA3LjI4TDEwLjk3IDYuMjJMOSA4LjE4OVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldDropdownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldDropdown';
}

export default RefIcon;
