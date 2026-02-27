// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const menuGridOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 19V21H5V19H9ZM19 19V21H15V19H19ZM19 15H15V21C13.8954 21 13 20.1046 13 19V15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21V15ZM9 15H5V21C3.89543 21 3 20.1046 3 19V15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21V15ZM9 9V11H5V9H9ZM19 9V11H15V9H19ZM19 5H15V11C13.8954 11 13 10.1046 13 9V5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11V5ZM9 5H5V11C3.89543 11 3 10.1046 3 9V5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11V5Z"/>
  </svg>
);

const menuGridOutlinedIconDefinition = svgToIconDefinition(
  menuGridOutlinedSvg,
  'menu-grid-outlined'
);

/**![MenuGridOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOSAxOVYyMUg1VjE5SDlaTTE5IDE5VjIxSDE1VjE5SDE5Wk0xOSAxNUgxNVYyMUMxMy44OTU0IDIxIDEzIDIwLjEwNDYgMTMgMTlWMTVDMTMgMTMuODk1NCAxMy44OTU0IDEzIDE1IDEzSDE5QzIwLjEwNDYgMTMgMjEgMTMuODk1NCAyMSAxNVYxOUMyMSAyMC4xMDQ2IDIwLjEwNDYgMjEgMTkgMjFWMTVaTTkgMTVINVYyMUMzLjg5NTQzIDIxIDMgMjAuMTA0NiAzIDE5VjE1QzMgMTMuODk1NCAzLjg5NTQzIDEzIDUgMTNIOUMxMC4xMDQ2IDEzIDExIDEzLjg5NTQgMTEgMTVWMTlDMTEgMjAuMTA0NiAxMC4xMDQ2IDIxIDkgMjFWMTVaTTkgOVYxMUg1VjlIOVpNMTkgOVYxMUgxNVY5SDE5Wk0xOSA1SDE1VjExQzEzLjg5NTQgMTEgMTMgMTAuMTA0NiAxMyA5VjVDMTMgMy44OTU0MyAxMy44OTU0IDMgMTUgM0gxOUMyMC4xMDQ2IDMgMjEgMy44OTU0MyAyMSA1VjlDMjEgMTAuMTA0NiAyMC4xMDQ2IDExIDE5IDExVjVaTTkgNUg1VjExQzMuODk1NDMgMTEgMyAxMC4xMDQ2IDMgOVY1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDlDMTAuMTA0NiAzIDExIDMuODk1NDMgMTEgNVY5QzExIDEwLjEwNDYgMTAuMTA0NiAxMSA5IDExVjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={menuGridOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuGridOutlinedIcon';
}

export default RefIcon;
