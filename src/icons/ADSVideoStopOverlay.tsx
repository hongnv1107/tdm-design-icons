// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoStopOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3Z"/><path d="M2.5 3C2.5 2.724 2.724 2.5 3 2.5H13C13.276 2.5 13.5 2.724 13.5 3V13C13.5 13.276 13.276 13.5 13 13.5H3C2.724 13.5 2.5 13.276 2.5 13V3Z"/>
  </svg>
);

const aDSVideoStopOverlayIconDefinition = svgToIconDefinition(
  aDSVideoStopOverlaySvg,
  'ads-video-stop-overlay'
);

/**![ADSVideoStopOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAzQzEgMS44OTUgMS44OTUgMSAzIDFIMTNDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1YxM0MxNSAxNC4xMDUgMTQuMTA1IDE1IDEzIDE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1YzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM1oiLz48cGF0aCBkPSJNMi41IDNDMi41IDIuNzI0IDIuNzI0IDIuNSAzIDIuNUgxM0MxMy4yNzYgMi41IDEzLjUgMi43MjQgMTMuNSAzVjEzQzEzLjUgMTMuMjc2IDEzLjI3NiAxMy41IDEzIDEzLjVIM0MyLjcyNCAxMy41IDIuNSAxMy4yNzYgMi41IDEzVjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoStopOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoStopOverlay';
}

export default RefIcon;
