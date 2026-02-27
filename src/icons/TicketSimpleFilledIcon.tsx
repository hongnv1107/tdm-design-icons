// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const ticketSimpleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 8C3.02083 7.4375 3.21875 6.96875 3.59375 6.59375C3.96875 6.21875 4.4375 6.02083 5 6H19C19.5625 6.02083 20.0312 6.21875 20.4062 6.59375C20.7812 6.96875 20.9792 7.4375 21 8V10C20.9583 10.2917 20.7917 10.4896 20.5 10.5938C19.875 10.8229 19.5417 11.2917 19.5 12C19.5417 12.7083 19.875 13.1771 20.5 13.4062C20.7917 13.5104 20.9583 13.7083 21 14V16C20.9792 16.5625 20.7812 17.0312 20.4062 17.4062C20.0312 17.7812 19.5625 17.9792 19 18H5C4.4375 17.9792 3.96875 17.7812 3.59375 17.4062C3.21875 17.0312 3.02083 16.5625 3 16V14C3.04167 13.7083 3.20833 13.5104 3.5 13.4062C4.125 13.1771 4.45833 12.7083 4.5 12C4.45833 11.2917 4.125 10.8229 3.5 10.5938C3.20833 10.4896 3.04167 10.2917 3 10V8Z"/>
  </svg>
);

const ticketSimpleFilledIconDefinition = svgToIconDefinition(
  ticketSimpleFilledSvg,
  'ticket-simple-filled'
);

/**![TicketSimpleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyA4QzMuMDIwODMgNy40Mzc1IDMuMjE4NzUgNi45Njg3NSAzLjU5Mzc1IDYuNTkzNzVDMy45Njg3NSA2LjIxODc1IDQuNDM3NSA2LjAyMDgzIDUgNkgxOUMxOS41NjI1IDYuMDIwODMgMjAuMDMxMiA2LjIxODc1IDIwLjQwNjIgNi41OTM3NUMyMC43ODEyIDYuOTY4NzUgMjAuOTc5MiA3LjQzNzUgMjEgOFYxMEMyMC45NTgzIDEwLjI5MTcgMjAuNzkxNyAxMC40ODk2IDIwLjUgMTAuNTkzOEMxOS44NzUgMTAuODIyOSAxOS41NDE3IDExLjI5MTcgMTkuNSAxMkMxOS41NDE3IDEyLjcwODMgMTkuODc1IDEzLjE3NzEgMjAuNSAxMy40MDYyQzIwLjc5MTcgMTMuNTEwNCAyMC45NTgzIDEzLjcwODMgMjEgMTRWMTZDMjAuOTc5MiAxNi41NjI1IDIwLjc4MTIgMTcuMDMxMiAyMC40MDYyIDE3LjQwNjJDMjAuMDMxMiAxNy43ODEyIDE5LjU2MjUgMTcuOTc5MiAxOSAxOEg1QzQuNDM3NSAxNy45NzkyIDMuOTY4NzUgMTcuNzgxMiAzLjU5Mzc1IDE3LjQwNjJDMy4yMTg3NSAxNy4wMzEyIDMuMDIwODMgMTYuNTYyNSAzIDE2VjE0QzMuMDQxNjcgMTMuNzA4MyAzLjIwODMzIDEzLjUxMDQgMy41IDEzLjQwNjJDNC4xMjUgMTMuMTc3MSA0LjQ1ODMzIDEyLjcwODMgNC41IDEyQzQuNDU4MzMgMTEuMjkxNyA0LjEyNSAxMC44MjI5IDMuNSAxMC41OTM4QzMuMjA4MzMgMTAuNDg5NiAzLjA0MTY3IDEwLjI5MTcgMyAxMFY4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={ticketSimpleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TicketSimpleFilledIcon';
}

export default RefIcon;
