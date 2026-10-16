// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPreviousOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1L3 15H4.5V8.708C4.647 9.044 4.904 9.341 5.271 9.539L11.418 12.862C12.584 13.493 14 12.648 14 11.323V4.677C14 3.352 12.584 2.508 11.418 3.138L5.271 6.461C4.904 6.659 4.647 6.956 4.5 7.292V1H3Z"/>
  </svg>
);

const aDSVideoPreviousOverlayIconDefinition = svgToIconDefinition(
  aDSVideoPreviousOverlaySvg,
  'ads-video-previous-overlay'
);

/**![ADSVideoPreviousOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAxTDMgMTVINC41VjguNzA4QzQuNjQ3IDkuMDQ0IDQuOTA0IDkuMzQxIDUuMjcxIDkuNTM5TDExLjQxOCAxMi44NjJDMTIuNTg0IDEzLjQ5MyAxNCAxMi42NDggMTQgMTEuMzIzVjQuNjc3QzE0IDMuMzUyIDEyLjU4NCAyLjUwOCAxMS40MTggMy4xMzhMNS4yNzEgNi40NjFDNC45MDQgNi42NTkgNC42NDcgNi45NTYgNC41IDcuMjkyVjFIM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPreviousOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPreviousOverlay';
}

export default RefIcon;
