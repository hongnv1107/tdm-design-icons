// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPauseSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 1.895 2.895 1 4 1H5C6.105 1 7 1.895 7 3V13C7 14.105 6.105 15 5 15H4C2.895 15 2 14.105 2 13V3ZM4 2.5C3.724 2.5 3.5 2.724 3.5 3V13C3.5 13.276 3.724 13.5 4 13.5H5C5.276 13.5 5.5 13.276 5.5 13V3C5.5 2.724 5.276 2.5 5 2.5H4ZM9 3C9 1.895 9.895 1 11 1H12C13.105 1 14 1.895 14 3V13C14 14.105 13.105 15 12 15H11C9.895 15 9 14.105 9 13V3ZM11 2.5C10.724 2.5 10.5 2.724 10.5 3V13C10.5 13.276 10.724 13.5 11 13.5H12C12.276 13.5 12.5 13.276 12.5 13V3C12.5 2.724 12.276 2.5 12 2.5H11Z"/>
  </svg>
);

const aDSVideoPauseIconDefinition = svgToIconDefinition(
  aDSVideoPauseSvg,
  'ads-video-pause'
);

/**![ADSVideoPause](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzQzIgMS44OTUgMi44OTUgMSA0IDFINUM2LjEwNSAxIDcgMS44OTUgNyAzVjEzQzcgMTQuMTA1IDYuMTA1IDE1IDUgMTVINEMyLjg5NSAxNSAyIDE0LjEwNSAyIDEzVjNaTTQgMi41QzMuNzI0IDIuNSAzLjUgMi43MjQgMy41IDNWMTNDMy41IDEzLjI3NiAzLjcyNCAxMy41IDQgMTMuNUg1QzUuMjc2IDEzLjUgNS41IDEzLjI3NiA1LjUgMTNWM0M1LjUgMi43MjQgNS4yNzYgMi41IDUgMi41SDRaTTkgM0M5IDEuODk1IDkuODk1IDEgMTEgMUgxMkMxMy4xMDUgMSAxNCAxLjg5NSAxNCAzVjEzQzE0IDE0LjEwNSAxMy4xMDUgMTUgMTIgMTVIMTFDOS44OTUgMTUgOSAxNC4xMDUgOSAxM1YzWk0xMSAyLjVDMTAuNzI0IDIuNSAxMC41IDIuNzI0IDEwLjUgM1YxM0MxMC41IDEzLjI3NiAxMC43MjQgMTMuNSAxMSAxMy41SDEyQzEyLjI3NiAxMy41IDEyLjUgMTMuMjc2IDEyLjUgMTNWM0MxMi41IDIuNzI0IDEyLjI3NiAyLjUgMTIgMi41SDExWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPauseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPause';
}

export default RefIcon;
