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
    <path d="M22.6668 10.6667V21.3333C22.6668 22.6722 21.3335 24 20.0002 24H4.00016C2.66683 24 1.3335 22.6722 1.3335 21.3333V10.6667H22.6668Z"/><path d="M16.0002 0C16.7365 0 17.3335 0.596954 17.3335 1.33333V2.66667H20.0002C21.3335 2.66667 22.6668 4 22.6668 5.33333V8H1.3335V5.33333C1.3335 4 2.66683 2.66667 4.00016 2.66667H6.66683V1.33333C6.66683 0.596954 7.26378 0 8.00016 0C8.73654 0 9.3335 0.596954 9.3335 1.33333V2.66667H14.6668V1.33333C14.6668 0.596954 15.2638 0 16.0002 0Z"/>
  </svg>
);

const calendarFilledIconDefinition = svgToIconDefinition(
  calendarFilledSvg,
  'calendar-filled'
);

/**![CalendarFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjIuNjY2OCAxMC42NjY3VjIxLjMzMzNDMjIuNjY2OCAyMi42NzIyIDIxLjMzMzUgMjQgMjAuMDAwMiAyNEg0LjAwMDE2QzIuNjY2ODMgMjQgMS4zMzM1IDIyLjY3MjIgMS4zMzM1IDIxLjMzMzNWMTAuNjY2N0gyMi42NjY4WiIvPjxwYXRoIGQ9Ik0xNi4wMDAyIDBDMTYuNzM2NSAwIDE3LjMzMzUgMC41OTY5NTQgMTcuMzMzNSAxLjMzMzMzVjIuNjY2NjdIMjAuMDAwMkMyMS4zMzM1IDIuNjY2NjcgMjIuNjY2OCA0IDIyLjY2NjggNS4zMzMzM1Y4SDEuMzMzNVY1LjMzMzMzQzEuMzMzNSA0IDIuNjY2ODMgMi42NjY2NyA0LjAwMDE2IDIuNjY2NjdINi42NjY4M1YxLjMzMzMzQzYuNjY2ODMgMC41OTY5NTQgNy4yNjM3OCAwIDguMDAwMTYgMEM4LjczNjU0IDAgOS4zMzM1IDAuNTk2OTU0IDkuMzMzNSAxLjMzMzMzVjIuNjY2NjdIMTQuNjY2OFYxLjMzMzMzQzE0LjY2NjggMC41OTY5NTQgMTUuMjYzOCAwIDE2LjAwMDIgMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarFilled';
}

export default RefIcon;
