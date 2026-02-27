// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const calendarOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z"/>
  </svg>
);

const calendarOutlinedIconDefinition = svgToIconDefinition(
  calendarOutlinedSvg,
  'calendar-outlined'
);

/**![CalendarOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDNDMTUuNTUyMyAzIDE2IDMuNDQ3NzIgMTYgNFY1SDE4QzE5IDUgMjAgNiAyMCA3VjE5QzIwIDIwLjEwNDYgMTkuMTA0NiAyMSAxOCAyMUg2QzQuODk1NDMgMjEgNCAyMC4xMDQ2IDQgMTlWN0M0IDYgNSA1IDYgNUg4VjRDOCAzLjQ0NzcyIDguNDQ3NzIgMyA5IDNDOS41NTIyOCAzIDEwIDMuNDQ3NzIgMTAgNFY1SDE0VjRDMTQgMy40NDc3MiAxNC40NDc3IDMgMTUgM1pNNiAxOUgxOFY5SDZWMTlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarOutlinedIcon';
}

export default RefIcon;
