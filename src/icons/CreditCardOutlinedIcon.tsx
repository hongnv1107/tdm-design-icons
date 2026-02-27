// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const creditCardOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 10.755H4V17.255C4 17.5936 4.27868 17.88 4.63672 17.88H19.3633C19.7213 17.88 20 17.5936 20 17.255V10.755ZM20 6.38501C20 6.04639 19.7213 5.76001 19.3633 5.76001H4.63672C4.27868 5.76001 4 6.04639 4 6.38501V8.76001H20V6.38501ZM22 17.255C22 18.7113 20.8127 19.88 19.3633 19.88H4.63672C3.18728 19.88 2 18.7113 2 17.255V6.505C2 5.0487 3.18728 3.88 4.63672 3.88H19.3633C20.8127 3.88 22 5.0487 22 6.505V17.255Z"/><path d="M6 14.88C6 14.3277 6.44772 13.88 7 13.88H10C10.5523 13.88 11 14.3277 11 14.88C11 15.4323 10.5523 15.88 10 15.88H7C6.44772 15.88 6 15.4323 6 14.88Z"/><path d="M13 14.88C13 14.3277 13.4477 13.88 14 13.88H15C15.5523 13.88 16 14.3277 16 14.88C16 15.4323 15.5523 15.88 15 15.88H14C13.4477 15.88 13 15.4323 13 14.88Z"/>
  </svg>
);

const creditCardOutlinedIconDefinition = svgToIconDefinition(
  creditCardOutlinedSvg,
  'credit-card-outlined'
);

/**![CreditCardOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAgMTAuNzU1SDRWMTcuMjU1QzQgMTcuNTkzNiA0LjI3ODY4IDE3Ljg4IDQuNjM2NzIgMTcuODhIMTkuMzYzM0MxOS43MjEzIDE3Ljg4IDIwIDE3LjU5MzYgMjAgMTcuMjU1VjEwLjc1NVpNMjAgNi4zODUwMUMyMCA2LjA0NjM5IDE5LjcyMTMgNS43NjAwMSAxOS4zNjMzIDUuNzYwMDFINC42MzY3MkM0LjI3ODY4IDUuNzYwMDEgNCA2LjA0NjM5IDQgNi4zODUwMVY4Ljc2MDAxSDIwVjYuMzg1MDFaTTIyIDE3LjI1NUMyMiAxOC43MTEzIDIwLjgxMjcgMTkuODggMTkuMzYzMyAxOS44OEg0LjYzNjcyQzMuMTg3MjggMTkuODggMiAxOC43MTEzIDIgMTcuMjU1VjYuNTA1QzIgNS4wNDg3IDMuMTg3MjggMy44OCA0LjYzNjcyIDMuODhIMTkuMzYzM0MyMC44MTI3IDMuODggMjIgNS4wNDg3IDIyIDYuNTA1VjE3LjI1NVoiLz48cGF0aCBkPSJNNiAxNC44OEM2IDE0LjMyNzcgNi40NDc3MiAxMy44OCA3IDEzLjg4SDEwQzEwLjU1MjMgMTMuODggMTEgMTQuMzI3NyAxMSAxNC44OEMxMSAxNS40MzIzIDEwLjU1MjMgMTUuODggMTAgMTUuODhIN0M2LjQ0NzcyIDE1Ljg4IDYgMTUuNDMyMyA2IDE0Ljg4WiIvPjxwYXRoIGQ9Ik0xMyAxNC44OEMxMyAxNC4zMjc3IDEzLjQ0NzcgMTMuODggMTQgMTMuODhIMTVDMTUuNTUyMyAxMy44OCAxNiAxNC4zMjc3IDE2IDE0Ljg4QzE2IDE1LjQzMjMgMTUuNTUyMyAxNS44OCAxNSAxNS44OEgxNEMxMy40NDc3IDE1Ljg4IDEzIDE1LjQzMjMgMTMgMTQuODhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={creditCardOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardOutlinedIcon';
}

export default RefIcon;
