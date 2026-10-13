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
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 0C16.7365 0 17.3335 0.596954 17.3335 1.33333V2.66667H20.0002C21.3335 2.66667 22.6668 4 22.6668 5.33333V21.3333C22.6668 22.8061 21.4729 24 20.0002 24H4.00016C2.5274 24 1.3335 22.8061 1.3335 21.3333V5.33333C1.3335 4 2.66683 2.66667 4.00016 2.66667H6.66683V1.33333C6.66683 0.596954 7.26378 0 8.00016 0C8.73654 0 9.3335 0.596954 9.3335 1.33333V2.66667H14.6668V1.33333C14.6668 0.596954 15.2638 0 16.0002 0ZM4.00016 21.3333H20.0002V8H4.00016V21.3333Z"/>
  </svg>
);

const calendarOutlinedIconDefinition = svgToIconDefinition(
  calendarOutlinedSvg,
  'calendar-outlined'
);

/**![CalendarOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2LjAwMDIgMEMxNi43MzY1IDAgMTcuMzMzNSAwLjU5Njk1NCAxNy4zMzM1IDEuMzMzMzNWMi42NjY2N0gyMC4wMDAyQzIxLjMzMzUgMi42NjY2NyAyMi42NjY4IDQgMjIuNjY2OCA1LjMzMzMzVjIxLjMzMzNDMjIuNjY2OCAyMi44MDYxIDIxLjQ3MjkgMjQgMjAuMDAwMiAyNEg0LjAwMDE2QzIuNTI3NCAyNCAxLjMzMzUgMjIuODA2MSAxLjMzMzUgMjEuMzMzM1Y1LjMzMzMzQzEuMzMzNSA0IDIuNjY2ODMgMi42NjY2NyA0LjAwMDE2IDIuNjY2NjdINi42NjY4M1YxLjMzMzMzQzYuNjY2ODMgMC41OTY5NTQgNy4yNjM3OCAwIDguMDAwMTYgMEM4LjczNjU0IDAgOS4zMzM1IDAuNTk2OTU0IDkuMzMzNSAxLjMzMzMzVjIuNjY2NjdIMTQuNjY2OFYxLjMzMzMzQzE0LjY2NjggMC41OTY5NTQgMTUuMjYzOCAwIDE2LjAwMDIgMFpNNC4wMDAxNiAyMS4zMzMzSDIwLjAwMDJWOEg0LjAwMDE2VjIxLjMzMzNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={calendarOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CalendarOutlined';
}

export default RefIcon;
