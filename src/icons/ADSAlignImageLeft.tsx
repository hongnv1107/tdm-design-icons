// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignImageLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 2.5L1 2.5L1 1L15 1V2.5ZM2.5 6.5V9.5H5.5V6.5H2.5ZM2.375 5H5.625C6.384 5 7 5.616 7 6.375L7 9.625C7 10.384 6.384 11 5.625 11H2.375C1.616 11 1 10.384 1 9.625L1 6.375C1 5.616 1.616 5 2.375 5ZM15 15L1 15L1 13.5L15 13.5V15Z"/>
  </svg>
);

const aDSAlignImageLeftIconDefinition = svgToIconDefinition(
  aDSAlignImageLeftSvg,
  'ads-align-image-left'
);

/**![ADSAlignImageLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTUgMi41TDEgMi41TDEgMUwxNSAxVjIuNVpNMi41IDYuNVY5LjVINS41VjYuNUgyLjVaTTIuMzc1IDVINS42MjVDNi4zODQgNSA3IDUuNjE2IDcgNi4zNzVMNyA5LjYyNUM3IDEwLjM4NCA2LjM4NCAxMSA1LjYyNSAxMUgyLjM3NUMxLjYxNiAxMSAxIDEwLjM4NCAxIDkuNjI1TDEgNi4zNzVDMSA1LjYxNiAxLjYxNiA1IDIuMzc1IDVaTTE1IDE1TDEgMTVMMSAxMy41TDE1IDEzLjVWMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignImageLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignImageLeft';
}

export default RefIcon;
