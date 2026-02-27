// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const menuGridFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5Z"/><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V9C21 10.1046 20.1046 11 19 11H15C13.8954 11 13 10.1046 13 9V5Z"/><path d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15Z"/><path d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15Z"/>
  </svg>
);

const menuGridFilledIconDefinition = svgToIconDefinition(
  menuGridFilledSvg,
  'menu-grid-filled'
);

/**![MenuGridFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyA1QzMgMy44OTU0MyAzLjg5NTQzIDMgNSAzSDlDMTAuMTA0NiAzIDExIDMuODk1NDMgMTEgNVY5QzExIDEwLjEwNDYgMTAuMTA0NiAxMSA5IDExSDVDMy44OTU0MyAxMSAzIDEwLjEwNDYgMyA5VjVaIi8+PHBhdGggZD0iTTEzIDVDMTMgMy44OTU0MyAxMy44OTU0IDMgMTUgM0gxOUMyMC4xMDQ2IDMgMjEgMy44OTU0MyAyMSA1VjlDMjEgMTAuMTA0NiAyMC4xMDQ2IDExIDE5IDExSDE1QzEzLjg5NTQgMTEgMTMgMTAuMTA0NiAxMyA5VjVaIi8+PHBhdGggZD0iTTMgMTVDMyAxMy44OTU0IDMuODk1NDMgMTMgNSAxM0g5QzEwLjEwNDYgMTMgMTEgMTMuODk1NCAxMSAxNVYxOUMxMSAyMC4xMDQ2IDEwLjEwNDYgMjEgOSAyMUg1QzMuODk1NDMgMjEgMyAyMC4xMDQ2IDMgMTlWMTVaIi8+PHBhdGggZD0iTTEzIDE1QzEzIDEzLjg5NTQgMTMuODk1NCAxMyAxNSAxM0gxOUMyMC4xMDQ2IDEzIDIxIDEzLjg5NTQgMjEgMTVWMTlDMjEgMjAuMTA0NiAyMC4xMDQ2IDIxIDE5IDIxSDE1QzEzLjg5NTQgMjEgMTMgMjAuMTA0NiAxMyAxOVYxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={menuGridFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MenuGridFilledIcon';
}

export default RefIcon;
