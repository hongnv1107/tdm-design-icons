// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTakeoutContainerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.313 1.449C4.432 1.176 4.702 1 5 1H11C11.298 1 11.568 1.176 11.687 1.449L13.191 4.888L15.084 3.626L15.916 4.874L13.954 6.182L12.995 14.338C12.95 14.715 12.63 15 12.25 15H3.75C3.37 15 3.05 14.715 3.005 14.338L2.046 6.182L0.084 4.874L0.916 3.626L2.809 4.888L4.313 1.449ZM3.593 6.5L4.417 13.5H11.583L12.407 6.5H3.593ZM11.603 5L10.51 2.5H5.491L4.397 5H11.603Z"/>
  </svg>
);

const aDSTakeoutContainerIconDefinition = svgToIconDefinition(
  aDSTakeoutContainerSvg,
  'ads-takeout-container'
);

/**![ADSTakeoutContainer](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4zMTMgMS40NDlDNC40MzIgMS4xNzYgNC43MDIgMSA1IDFIMTFDMTEuMjk4IDEgMTEuNTY4IDEuMTc2IDExLjY4NyAxLjQ0OUwxMy4xOTEgNC44ODhMMTUuMDg0IDMuNjI2TDE1LjkxNiA0Ljg3NEwxMy45NTQgNi4xODJMMTIuOTk1IDE0LjMzOEMxMi45NSAxNC43MTUgMTIuNjMgMTUgMTIuMjUgMTVIMy43NUMzLjM3IDE1IDMuMDUgMTQuNzE1IDMuMDA1IDE0LjMzOEwyLjA0NiA2LjE4MkwwLjA4NCA0Ljg3NEwwLjkxNiAzLjYyNkwyLjgwOSA0Ljg4OEw0LjMxMyAxLjQ0OVpNMy41OTMgNi41TDQuNDE3IDEzLjVIMTEuNTgzTDEyLjQwNyA2LjVIMy41OTNaTTExLjYwMyA1TDEwLjUxIDIuNUg1LjQ5MUw0LjM5NyA1SDExLjYwM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTakeoutContainerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTakeoutContainer';
}

export default RefIcon;
