// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const calendarFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 11V19C20 20.0042 19 21 18 21H6C5 21 4 20.0042 4 19V11H20Z"/><path d="M15 3C15.5523 3 16 3.44772 16 4V5H18C19 5 20 6 20 7V9H4V7C4 6 5 5 6 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H14V4C14 3.44772 14.4477 3 15 3Z"/>
  </svg>
);

const calendarFilledIconDefinition = svgToIconDefinition(
  calendarFilledSvg,
  'calendar-filled'
);

/**![CalendarFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgMTFWMTlDMjAgMjAuMDA0MiAxOSAyMSAxOCAyMUg2QzUgMjEgNCAyMC4wMDQyIDQgMTlWMTFIMjBaIi8+PHBhdGggZD0iTTE1IDNDMTUuNTUyMyAzIDE2IDMuNDQ3NzIgMTYgNFY1SDE4QzE5IDUgMjAgNiAyMCA3VjlINFY3QzQgNiA1IDUgNiA1SDhWNEM4IDMuNDQ3NzIgOC40NDc3MiAzIDkgM0M5LjU1MjI4IDMgMTAgMy40NDc3MiAxMCA0VjVIMTRWNEMxNCAzLjQ0NzcyIDE0LjQ0NzcgMyAxNSAzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarFilledIcon';
}

export default RefIcon;
