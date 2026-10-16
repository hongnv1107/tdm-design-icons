// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVolumeLowSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.233 1.434C8.125 0.672 9.5 1.307 9.5 2.48V13.521C9.5 14.694 8.125 15.328 7.233 14.567L4.364 12.12C4.273 12.043 4.158 12 4.039 12H2C0.895 12 0 11.105 0 10V6C0 4.896 0.895 4 2 4H4.039C4.158 4 4.273 3.958 4.364 3.881L7.233 1.434ZM8 2.751L5.337 5.022C4.975 5.331 4.515 5.5 4.039 5.5H2C1.724 5.5 1.5 5.724 1.5 6V10C1.5 10.276 1.724 10.5 2 10.5H4.039C4.515 10.5 4.975 10.67 5.337 10.979L8 13.25V2.751ZM10.97 9.47C11.781 8.658 11.781 7.342 10.97 6.53L12.03 5.47C13.428 6.867 13.428 9.133 12.03 10.531L10.97 9.47Z"/>
  </svg>
);

const aDSVolumeLowIconDefinition = svgToIconDefinition(
  aDSVolumeLowSvg,
  'ads-volume-low'
);

/**![ADSVolumeLow](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yMzMgMS40MzRDOC4xMjUgMC42NzIgOS41IDEuMzA3IDkuNSAyLjQ4VjEzLjUyMUM5LjUgMTQuNjk0IDguMTI1IDE1LjMyOCA3LjIzMyAxNC41NjdMNC4zNjQgMTIuMTJDNC4yNzMgMTIuMDQzIDQuMTU4IDEyIDQuMDM5IDEySDJDMC44OTUgMTIgMCAxMS4xMDUgMCAxMFY2QzAgNC44OTYgMC44OTUgNCAyIDRINC4wMzlDNC4xNTggNCA0LjI3MyAzLjk1OCA0LjM2NCAzLjg4MUw3LjIzMyAxLjQzNFpNOCAyLjc1MUw1LjMzNyA1LjAyMkM0Ljk3NSA1LjMzMSA0LjUxNSA1LjUgNC4wMzkgNS41SDJDMS43MjQgNS41IDEuNSA1LjcyNCAxLjUgNlYxMEMxLjUgMTAuMjc2IDEuNzI0IDEwLjUgMiAxMC41SDQuMDM5QzQuNTE1IDEwLjUgNC45NzUgMTAuNjcgNS4zMzcgMTAuOTc5TDggMTMuMjVWMi43NTFaTTEwLjk3IDkuNDdDMTEuNzgxIDguNjU4IDExLjc4MSA3LjM0MiAxMC45NyA2LjUzTDEyLjAzIDUuNDdDMTMuNDI4IDYuODY3IDEzLjQyOCA5LjEzMyAxMi4wMyAxMC41MzFMMTAuOTcgOS40N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVolumeLowIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVolumeLow';
}

export default RefIcon;
