// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const userOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16 14C18.7614 14 21 16.2386 21 19V20C21 20.5523 20.5523 21 20 21C19.4477 21 19 20.5523 19 20V19C19 17.3431 17.6569 16 16 16H8C6.34315 16 5 17.3431 5 19V20L4.99512 20.1025C4.94379 20.6067 4.51768 21 4 21C3.48232 21 3.05621 20.6067 3.00488 20.1025L3 20V19C3 16.2386 5.23858 14 8 14H16Z" /> <path fillRule="evenodd" clipRule="evenodd" d="M12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3ZM12 5C10.3431 5 9 6.34315 9 8C9 9.65685 10.3431 11 12 11C13.6569 11 15 9.65685 15 8C15 6.34315 13.6569 5 12 5Z" />
  </svg>
);

const userOutlinedIconDefinition = svgToIconDefinition(
  userOutlinedSvg,
  'user-outlined'
);

/**![UserOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYgMTRDMTguNzYxNCAxNCAyMSAxNi4yMzg2IDIxIDE5VjIwQzIxIDIwLjU1MjMgMjAuNTUyMyAyMSAyMCAyMUMxOS40NDc3IDIxIDE5IDIwLjU1MjMgMTkgMjBWMTlDMTkgMTcuMzQzMSAxNy42NTY5IDE2IDE2IDE2SDhDNi4zNDMxNSAxNiA1IDE3LjM0MzEgNSAxOVYyMEw0Ljk5NTEyIDIwLjEwMjVDNC45NDM3OSAyMC42MDY3IDQuNTE3NjggMjEgNCAyMUMzLjQ4MjMyIDIxIDMuMDU2MjEgMjAuNjA2NyAzLjAwNDg4IDIwLjEwMjVMMyAyMFYxOUMzIDE2LjIzODYgNS4yMzg1OCAxNCA4IDE0SDE2WiIvPjxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTEyIDNDMTQuNzYxNCAzIDE3IDUuMjM4NTggMTcgOEMxNyAxMC43NjE0IDE0Ljc2MTQgMTMgMTIgMTNDOS4yMzg1OCAxMyA3IDEwLjc2MTQgNyA4QzcgNS4yMzg1OCA5LjIzODU4IDMgMTIgM1pNMTIgNUMxMC4zNDMxIDUgOSA2LjM0MzE1IDkgOEM5IDkuNjU2ODUgMTAuMzQzMSAxMSAxMiAxMUMxMy42NTY5IDExIDE1IDkuNjU2ODUgMTUgOEMxNSA2LjM0MzE1IDEzLjY1NjkgNSAxMiA1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={userOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'UserOutlinedIcon';
}

export default RefIcon;
