// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSContentWidthWideSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.5L4 2.5L4 1L12 1L12 2.5ZM1.5 5.5L1.5 10.5L14.5 10.5L14.5 5.5L1.5 5.5ZM1.375 4L14.625 4C15.384 4 16 4.616 16 5.375L16 10.625C16 11.384 15.384 12 14.625 12L1.375 12C0.616 12 0 11.384 0 10.625L0 5.375C0 4.616 0.616 4 1.375 4ZM12 15L4 15L4 13.5L12 13.5L12 15Z"/>
  </svg>
);

const aDSContentWidthWideIconDefinition = svgToIconDefinition(
  aDSContentWidthWideSvg,
  'ads-content-width-wide'
);

/**![ADSContentWidthWide](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTIgMi41TDQgMi41TDQgMUwxMiAxTDEyIDIuNVpNMS41IDUuNUwxLjUgMTAuNUwxNC41IDEwLjVMMTQuNSA1LjVMMS41IDUuNVpNMS4zNzUgNEwxNC42MjUgNEMxNS4zODQgNCAxNiA0LjYxNiAxNiA1LjM3NUwxNiAxMC42MjVDMTYgMTEuMzg0IDE1LjM4NCAxMiAxNC42MjUgMTJMMS4zNzUgMTJDMC42MTYgMTIgMCAxMS4zODQgMCAxMC42MjVMMCA1LjM3NUMwIDQuNjE2IDAuNjE2IDQgMS4zNzUgNFpNMTIgMTVMNCAxNUw0IDEzLjVMMTIgMTMuNUwxMiAxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSContentWidthWideIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSContentWidthWide';
}

export default RefIcon;
