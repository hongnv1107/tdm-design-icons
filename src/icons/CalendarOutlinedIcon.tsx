// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const calendarOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z" />
  </svg>
);

const calendarOutlinedIconDefinition = svgToIconDefinition(
  calendarOutlinedSvg,
  'calendar-outlined'
);

/**![CalendarOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsUnVsZT0iZXZlbm9kZCIgY2xpcFJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSAzQzE1LjU1MjMgMyAxNiAzLjQ0NzcyIDE2IDRWNUgxOEMxOSA1IDIwIDYgMjAgN1YxOUMyMCAyMC4xMDQ2IDE5LjEwNDYgMjEgMTggMjFINkM0Ljg5NTQzIDIxIDQgMjAuMTA0NiA0IDE5VjdDNCA2IDUgNSA2IDVIOFY0QzggMy40NDc3MiA4LjQ0NzcyIDMgOSAzQzkuNTUyMjggMyAxMCAzLjQ0NzcyIDEwIDRWNUgxNFY0QzE0IDMuNDQ3NzIgMTQuNDQ3NyAzIDE1IDNaTTYgMTlIMThWOUg2VjE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={calendarOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarOutlinedIcon';
}

export default RefIcon;
