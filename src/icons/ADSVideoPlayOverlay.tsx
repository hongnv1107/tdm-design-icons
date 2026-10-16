// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPlayOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.112C2 1.592 3.63 0.627 4.963 1.359L13.865 6.247C15.249 7.006 15.249 8.994 13.865 9.753L4.963 14.641C3.63 15.373 2 14.408 2 12.888V3.112Z"/>
  </svg>
);

const aDSVideoPlayOverlayIconDefinition = svgToIconDefinition(
  aDSVideoPlayOverlaySvg,
  'ads-video-play-overlay'
);

/**![ADSVideoPlayOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAzLjExMkMyIDEuNTkyIDMuNjMgMC42MjcgNC45NjMgMS4zNTlMMTMuODY1IDYuMjQ3QzE1LjI0OSA3LjAwNiAxNS4yNDkgOC45OTQgMTMuODY1IDkuNzUzTDQuOTYzIDE0LjY0MUMzLjYzIDE1LjM3MyAyIDE0LjQwOCAyIDEyLjg4OFYzLjExMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPlayOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPlayOverlay';
}

export default RefIcon;
