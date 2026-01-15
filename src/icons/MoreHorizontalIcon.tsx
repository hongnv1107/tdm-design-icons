// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const moreHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14ZM12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14ZM5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14Z" />
  </svg>
);

const moreHorizontalIconDefinition = svgToIconDefinition(
  moreHorizontalSvg,
  'more-horizontal'
);

/**![MoreHorizontalIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgMTRDMTcuODk1NCAxNCAxNyAxMy4xMDQ2IDE3IDEyQzE3IDEwLjg5NTQgMTcuODk1NCAxMCAxOSAxMEMyMC4xMDQ2IDEwIDIxIDEwLjg5NTQgMjEgMTJDMjEgMTMuMTA0NiAyMC4xMDQ2IDE0IDE5IDE0Wk0xMiAxNEMxMC44OTU0IDE0IDEwIDEzLjEwNDYgMTAgMTJDMTAgMTAuODk1NCAxMC44OTU0IDEwIDEyIDEwQzEzLjEwNDYgMTAgMTQgMTAuODk1NCAxNCAxMkMxNCAxMy4xMDQ2IDEzLjEwNDYgMTQgMTIgMTRaTTUgMTRDMy44OTU0MyAxNCAzIDEzLjEwNDYgMyAxMkMzIDEwLjg5NTQgMy44OTU0MyAxMCA1IDEwQzYuMTA0NTcgMTAgNyAxMC44OTU0IDcgMTJDNyAxMy4xMDQ2IDYuMTA0NTcgMTQgNSAxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={moreHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MoreHorizontalIcon';
}

export default RefIcon;
