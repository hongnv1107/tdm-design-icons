// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTicketSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSTicket](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjc1QzAgMi4zMzYgMC4zMzYgMiAwLjc1IDJIMTUuMjVDMTUuNjY0IDIgMTYgMi4zMzYgMTYgMi43NVY2LjI1QzE2IDYuNjY0IDE1LjY2NCA3IDE1LjI1IDdIMTVDMTQuNDQ4IDcgMTQgNy40NDggMTQgOEMxNCA4LjU1MiAxNC40NDggOSAxNSA5SDE1LjI1QzE1LjY2NCA5IDE2IDkuMzM2IDE2IDkuNzVWMTMuMjVDMTYgMTMuNjY0IDE1LjY2NCAxNCAxNS4yNSAxNEgwLjc1QzAuMzM2IDE0IDAgMTMuNjY0IDAgMTMuMjVWOS43NUMwIDkuMzM2IDAuMzM2IDkgMC43NSA5SDFDMS41NTIgOSAyIDguNTUyIDIgOEMyIDcuNDQ4IDEuNTUyIDcgMSA3SDAuNzVDMC4zMzYgNyAwIDYuNjY0IDAgNi4yNVYyLjc1Wk0xLjUgMy41VjUuNTVDMi42NDEgNS43ODIgMy41IDYuNzkxIDMuNSA4QzMuNSA5LjIwOSAyLjY0MSAxMC4yMTggMS41IDEwLjQ1VjEyLjVIMTQuNVYxMC40NUMxMy4zNTkgMTAuMjE4IDEyLjUgOS4yMDkgMTIuNSA4QzEyLjUgNi43OTEgMTMuMzU5IDUuNzgyIDE0LjUgNS41NVYzLjVIMS41Wk05IDZWNC41SDEwLjVWNkg5Wk0xMC41IDguNzVIOVY3LjI1SDEwLjVWOC43NVpNOSAxMS41VjEwSDEwLjVWMTEuNUg5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTicketIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTicket';
}

export default RefIcon;
