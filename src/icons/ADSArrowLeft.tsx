// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.22 7.47L6.22 2.47L7.28 3.53L3.561 7.25L15 7.25V8.75L3.561 8.75L7.28 12.47L6.22 13.53L1.22 8.53C0.927 8.237 0.927 7.763 1.22 7.47Z"/>
  </svg>
);

const aDSArrowLeftIconDefinition = svgToIconDefinition(
  aDSArrowLeftSvg,
  'ads-arrow-left'
);

/**![ADSArrowLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4yMiA3LjQ3TDYuMjIgMi40N0w3LjI4IDMuNTNMMy41NjEgNy4yNUwxNSA3LjI1VjguNzVMMy41NjEgOC43NUw3LjI4IDEyLjQ3TDYuMjIgMTMuNTNMMS4yMiA4LjUzQzAuOTI3IDguMjM3IDAuOTI3IDcuNzYzIDEuMjIgNy40N1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowLeft';
}

export default RefIcon;
