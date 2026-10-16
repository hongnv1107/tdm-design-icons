// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSImageScaledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V6H1V3C1 1.895 1.895 1 3 1H6V2.5H3ZM13 2.5H10V1H13C14.105 1 15 1.895 15 3V6H13.5V3C13.5 2.724 13.276 2.5 13 2.5ZM1 9.375C1 8.616 1.616 8 2.375 8H6.625C7.384 8 8 8.616 8 9.375V13.625C8 14.384 7.384 15 6.625 15H2.375C1.616 15 1 14.384 1 13.625V9.375ZM2.5 9.5V13.5H6.5V9.5H2.5ZM15 10V13C15 14.105 14.105 15 13 15H10V13.5H13C13.276 13.5 13.5 13.276 13.5 13V10H15Z"/>
  </svg>
);

const aDSImageScaledIconDefinition = svgToIconDefinition(
  aDSImageScaledSvg,
  'ads-image-scaled'
);

/**![ADSImageScaled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y2SDFWM0MxIDEuODk1IDEuODk1IDEgMyAxSDZWMi41SDNaTTEzIDIuNUgxMFYxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWNkgxMy41VjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNVpNMSA5LjM3NUMxIDguNjE2IDEuNjE2IDggMi4zNzUgOEg2LjYyNUM3LjM4NCA4IDggOC42MTYgOCA5LjM3NVYxMy42MjVDOCAxNC4zODQgNy4zODQgMTUgNi42MjUgMTVIMi4zNzVDMS42MTYgMTUgMSAxNC4zODQgMSAxMy42MjVWOS4zNzVaTTIuNSA5LjVWMTMuNUg2LjVWOS41SDIuNVpNMTUgMTBWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgxMFYxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWMTBIMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSImageScaledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSImageScaled';
}

export default RefIcon;
