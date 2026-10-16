// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHomeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.646 0.727C7.411 0.022 8.589 0.022 9.354 0.727L14.354 5.327C14.766 5.705 15 6.239 15 6.798V13C15 14.105 14.105 15 13 15H9.75C9.336 15 9 14.664 9 14.25V9.5H7V14.25C7 14.664 6.664 15 6.25 15H3C1.895 15 1 14.105 1 13V6.798C1 6.239 1.234 5.705 1.646 5.327L6.646 0.727ZM8.339 1.831C8.147 1.654 7.853 1.654 7.661 1.831L2.661 6.431C2.559 6.525 2.5 6.659 2.5 6.798V13C2.5 13.276 2.724 13.5 3 13.5H5.5V8.75C5.5 8.336 5.836 8 6.25 8H9.75C10.164 8 10.5 8.336 10.5 8.75V13.5H13C13.276 13.5 13.5 13.276 13.5 13V6.798C13.5 6.659 13.441 6.525 13.339 6.431L8.339 1.831Z"/>
  </svg>
);

const aDSHomeIconDefinition = svgToIconDefinition(
  aDSHomeSvg,
  'ads-home'
);

/**![ADSHome](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi42NDYgMC43MjdDNy40MTEgMC4wMjIgOC41ODkgMC4wMjIgOS4zNTQgMC43MjdMMTQuMzU0IDUuMzI3QzE0Ljc2NiA1LjcwNSAxNSA2LjIzOSAxNSA2Ljc5OFYxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDkuNzVDOS4zMzYgMTUgOSAxNC42NjQgOSAxNC4yNVY5LjVIN1YxNC4yNUM3IDE0LjY2NCA2LjY2NCAxNSA2LjI1IDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1Y2Ljc5OEMxIDYuMjM5IDEuMjM0IDUuNzA1IDEuNjQ2IDUuMzI3TDYuNjQ2IDAuNzI3Wk04LjMzOSAxLjgzMUM4LjE0NyAxLjY1NCA3Ljg1MyAxLjY1NCA3LjY2MSAxLjgzMUwyLjY2MSA2LjQzMUMyLjU1OSA2LjUyNSAyLjUgNi42NTkgMi41IDYuNzk4VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVINS41VjguNzVDNS41IDguMzM2IDUuODM2IDggNi4yNSA4SDkuNzVDMTAuMTY0IDggMTAuNSA4LjMzNiAxMC41IDguNzVWMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjYuNzk4QzEzLjUgNi42NTkgMTMuNDQxIDYuNTI1IDEzLjMzOSA2LjQzMUw4LjMzOSAxLjgzMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHomeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHome';
}

export default RefIcon;
