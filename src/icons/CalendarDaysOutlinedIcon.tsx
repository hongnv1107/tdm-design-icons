// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const calendarDaysOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z"/><path d="M9 11H11V13H9V11Z"/><path d="M13 11H15V13H13V11Z"/><path d="M9 15H11V17H9V15Z"/><path d="M13 15H15V17H13V15Z"/>
  </svg>
);

const calendarDaysOutlinedIconDefinition = svgToIconDefinition(
  calendarDaysOutlinedSvg,
  'calendar-days-outlined'
);

/**![CalendarDaysOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDNDMTUuNTUyMyAzIDE2IDMuNDQ3NzIgMTYgNFY1SDE4QzE5IDUgMjAgNiAyMCA3VjE5QzIwIDIwLjEwNDYgMTkuMTA0NiAyMSAxOCAyMUg2QzQuODk1NDMgMjEgNCAyMC4xMDQ2IDQgMTlWN0M0IDYgNSA1IDYgNUg4VjRDOCAzLjQ0NzcyIDguNDQ3NzIgMyA5IDNDOS41NTIyOCAzIDEwIDMuNDQ3NzIgMTAgNFY1SDE0VjRDMTQgMy40NDc3MiAxNC40NDc3IDMgMTUgM1pNNiAxOUgxOFY5SDZWMTlaIi8+PHBhdGggZD0iTTkgMTFIMTFWMTNIOVYxMVoiLz48cGF0aCBkPSJNMTMgMTFIMTVWMTNIMTNWMTFaIi8+PHBhdGggZD0iTTkgMTVIMTFWMTdIOVYxNVoiLz48cGF0aCBkPSJNMTMgMTVIMTVWMTdIMTNWMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarDaysOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarDaysOutlinedIcon';
}

export default RefIcon;
