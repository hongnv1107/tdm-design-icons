// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTicketSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.75C0 2.336 0.336 2 0.75 2H15.25C15.664 2 16 2.336 16 2.75V6.25C16 6.664 15.664 7 15.25 7H15C14.448 7 14 7.448 14 8C14 8.552 14.448 9 15 9H15.25C15.664 9 16 9.336 16 9.75V13.25C16 13.664 15.664 14 15.25 14H0.75C0.336 14 0 13.664 0 13.25V9.75C0 9.336 0.336 9 0.75 9H1C1.552 9 2 8.552 2 8C2 7.448 1.552 7 1 7H0.75C0.336 7 0 6.664 0 6.25V2.75ZM1.5 3.5V5.55C2.641 5.782 3.5 6.791 3.5 8C3.5 9.209 2.641 10.218 1.5 10.45V12.5H14.5V10.45C13.359 10.218 12.5 9.209 12.5 8C12.5 6.791 13.359 5.782 14.5 5.55V3.5H1.5ZM9 6V4.5H10.5V6H9ZM10.5 8.75H9V7.25H10.5V8.75ZM9 11.5V10H10.5V11.5H9Z"/>
  </svg>
);

const aDSTicketIconDefinition = svgToIconDefinition(
  aDSTicketSvg,
  'ads-ticket'
);

/**![ADSTicket](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMi43NUMwIDIuMzM2IDAuMzM2IDIgMC43NSAySDE1LjI1QzE1LjY2NCAyIDE2IDIuMzM2IDE2IDIuNzVWNi4yNUMxNiA2LjY2NCAxNS42NjQgNyAxNS4yNSA3SDE1QzE0LjQ0OCA3IDE0IDcuNDQ4IDE0IDhDMTQgOC41NTIgMTQuNDQ4IDkgMTUgOUgxNS4yNUMxNS42NjQgOSAxNiA5LjMzNiAxNiA5Ljc1VjEzLjI1QzE2IDEzLjY2NCAxNS42NjQgMTQgMTUuMjUgMTRIMC43NUMwLjMzNiAxNCAwIDEzLjY2NCAwIDEzLjI1VjkuNzVDMCA5LjMzNiAwLjMzNiA5IDAuNzUgOUgxQzEuNTUyIDkgMiA4LjU1MiAyIDhDMiA3LjQ0OCAxLjU1MiA3IDEgN0gwLjc1QzAuMzM2IDcgMCA2LjY2NCAwIDYuMjVWMi43NVpNMS41IDMuNVY1LjU1QzIuNjQxIDUuNzgyIDMuNSA2Ljc5MSAzLjUgOEMzLjUgOS4yMDkgMi42NDEgMTAuMjE4IDEuNSAxMC40NVYxMi41SDE0LjVWMTAuNDVDMTMuMzU5IDEwLjIxOCAxMi41IDkuMjA5IDEyLjUgOEMxMi41IDYuNzkxIDEzLjM1OSA1Ljc4MiAxNC41IDUuNTVWMy41SDEuNVpNOSA2VjQuNUgxMC41VjZIOVpNMTAuNSA4Ljc1SDlWNy4yNUgxMC41VjguNzVaTTkgMTEuNVYxMEgxMC41VjExLjVIOVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTicketIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTicket';
}

export default RefIcon;
