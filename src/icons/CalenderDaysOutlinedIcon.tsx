// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const calenderDaysOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z" /> <path d="M9 11H11V13H9V11Z" /> <path d="M13 11H15V13H13V11Z" /> <path d="M9 15H11V17H9V15Z" /> <path d="M13 15H15V17H13V15Z" />
  </svg>
);

const calenderDaysOutlinedIconDefinition = svgToIconDefinition(
  calenderDaysOutlinedSvg,
  'calender-days-outlined'
);

/**![CalenderDaysOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAzQzE1LjU1MjMgMyAxNiAzLjQ0NzcyIDE2IDRWNUgxOEMxOSA1IDIwIDYgMjAgN1YxOUMyMCAyMC4xMDQ2IDE5LjEwNDYgMjEgMTggMjFINkM0Ljg5NTQzIDIxIDQgMjAuMTA0NiA0IDE5VjdDNCA2IDUgNSA2IDVIOFY0QzggMy40NDc3MiA4LjQ0NzcyIDMgOSAzQzkuNTUyMjggMyAxMCAzLjQ0NzcyIDEwIDRWNUgxNFY0QzE0IDMuNDQ3NzIgMTQuNDQ3NyAzIDE1IDNaTTYgMTlIMThWOUg2VjE5WiIvPjxwYXRoIGQ9Ik05IDExSDExVjEzSDlWMTFaIi8+PHBhdGggZD0iTTEzIDExSDE1VjEzSDEzVjExWiIvPjxwYXRoIGQ9Ik05IDE1SDExVjE3SDlWMTVaIi8+PHBhdGggZD0iTTEzIDE1SDE1VjE3SDEzVjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={calenderDaysOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalenderDaysOutlinedIcon';
}

export default RefIcon;
