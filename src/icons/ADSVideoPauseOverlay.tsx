// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPauseOverlaySvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSVideoPauseOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgM0MyIDEuODk1IDIuODk1IDEgNCAxSDVDNi4xMDUgMSA3IDEuODk1IDcgM1YxM0M3IDE0LjEwNSA2LjEwNSAxNSA1IDE1SDRDMi44OTUgMTUgMiAxNC4xMDUgMiAxM1YzWk05IDNDOSAxLjg5NSA5Ljg5NSAxIDExIDFIMTJDMTMuMTA1IDEgMTQgMS44OTUgMTQgM1YxM0MxNCAxNC4xMDUgMTMuMTA1IDE1IDEyIDE1SDExQzkuODk1IDE1IDkgMTQuMTA1IDkgMTNWM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPauseOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPauseOverlay';
}

export default RefIcon;
