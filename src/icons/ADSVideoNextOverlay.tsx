// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoNextOverlaySvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1L13 15H11.5V8.708C11.353 9.044 11.096 9.341 10.729 9.539L4.582 12.862C3.416 13.493 2 12.648 2 11.323V4.677C2 3.352 3.416 2.508 4.582 3.138L10.729 6.461C11.096 6.659 11.353 6.956 11.5 7.292V1H13Z"/>
  </svg>
);

const aDSVideoNextOverlayIconDefinition = svgToIconDefinition(
  aDSVideoNextOverlaySvg,
  'ads-video-next-overlay'
);

/**![ADSVideoNextOverlay](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMUwxMyAxNUgxMS41VjguNzA4QzExLjM1MyA5LjA0NCAxMS4wOTYgOS4zNDEgMTAuNzI5IDkuNTM5TDQuNTgyIDEyLjg2MkMzLjQxNiAxMy40OTMgMiAxMi42NDggMiAxMS4zMjNWNC42NzdDMiAzLjM1MiAzLjQxNiAyLjUwOCA0LjU4MiAzLjEzOEwxMC43MjkgNi40NjFDMTEuMDk2IDYuNjU5IDExLjM1MyA2Ljk1NiAxMS41IDcuMjkyVjFIMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoNextOverlayIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoNextOverlay';
}

export default RefIcon;
