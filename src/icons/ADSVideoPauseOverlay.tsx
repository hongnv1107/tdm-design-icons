// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPauseOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C2 1.895 2.895 1 4 1H5C6.105 1 7 1.895 7 3V13C7 14.105 6.105 15 5 15H4C2.895 15 2 14.105 2 13V3ZM9 3C9 1.895 9.895 1 11 1H12C13.105 1 14 1.895 14 3V13C14 14.105 13.105 15 12 15H11C9.895 15 9 14.105 9 13V3Z"/>
  </svg>
);

const aDSVideoPauseOverlayIconDefinition = svgToIconDefinition(
  aDSVideoPauseOverlaySvg,
  'ads-video-pause-overlay'
);

/**![ADSVideoPauseOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzQzIgMS44OTUgMi44OTUgMSA0IDFINUM2LjEwNSAxIDcgMS44OTUgNyAzVjEzQzcgMTQuMTA1IDYuMTA1IDE1IDUgMTVINEMyLjg5NSAxNSAyIDE0LjEwNSAyIDEzVjNaTTkgM0M5IDEuODk1IDkuODk1IDEgMTEgMUgxMkMxMy4xMDUgMSAxNCAxLjg5NSAxNCAzVjEzQzE0IDE0LjEwNSAxMy4xMDUgMTUgMTIgMTVIMTFDOS44OTUgMTUgOSAxNC4xMDUgOSAxM1YzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPauseOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPauseOverlay';
}

export default RefIcon;
