// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const calendarCheckOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.3037 11.2822C14.7002 10.8978 15.3333 10.9074 15.7178 11.3037C16.1022 11.7002 16.0926 12.3333 15.6963 12.7178L11.5713 16.7178C11.1834 17.0939 10.5666 17.0939 10.1787 16.7178L8.30371 14.8994L8.23438 14.8252C7.9077 14.4374 7.92167 13.8572 8.28223 13.4854C8.64269 13.1139 9.22157 13.0823 9.61914 13.3965L9.69629 13.4639L10.875 14.6064L14.3037 11.2822Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3ZM6 19H18V9H6V19Z"/>
  </svg>
);

const calendarCheckOutlinedIconDefinition = svgToIconDefinition(
  calendarCheckOutlinedSvg,
  'calendar-check-outlined'
);

/**![CalendarCheckOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuMzAzNyAxMS4yODIyQzE0LjcwMDIgMTAuODk3OCAxNS4zMzMzIDEwLjkwNzQgMTUuNzE3OCAxMS4zMDM3QzE2LjEwMjIgMTEuNzAwMiAxNi4wOTI2IDEyLjMzMzMgMTUuNjk2MyAxMi43MTc4TDExLjU3MTMgMTYuNzE3OEMxMS4xODM0IDE3LjA5MzkgMTAuNTY2NiAxNy4wOTM5IDEwLjE3ODcgMTYuNzE3OEw4LjMwMzcxIDE0Ljg5OTRMOC4yMzQzOCAxNC44MjUyQzcuOTA3NyAxNC40Mzc0IDcuOTIxNjcgMTMuODU3MiA4LjI4MjIzIDEzLjQ4NTRDOC42NDI2OSAxMy4xMTM5IDkuMjIxNTcgMTMuMDgyMyA5LjYxOTE0IDEzLjM5NjVMOS42OTYyOSAxMy40NjM5TDEwLjg3NSAxNC42MDY0TDE0LjMwMzcgMTEuMjgyMloiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDNDMTUuNTUyMyAzIDE2IDMuNDQ3NzIgMTYgNFY1SDE4QzE5IDUgMjAgNiAyMCA3VjE5QzIwIDIwLjEwNDYgMTkuMTA0NiAyMSAxOCAyMUg2QzQuODk1NDMgMjEgNCAyMC4xMDQ2IDQgMTlWN0M0IDYgNSA1IDYgNUg4VjRDOCAzLjQ0NzcyIDguNDQ3NzIgMyA5IDNDOS41NTIyOCAzIDEwIDMuNDQ3NzIgMTAgNFY1SDE0VjRDMTQgMy40NDc3MiAxNC40NDc3IDMgMTUgM1pNNiAxOUgxOFY5SDZWMTlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarCheckOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarCheckOutlinedIcon';
}

export default RefIcon;
