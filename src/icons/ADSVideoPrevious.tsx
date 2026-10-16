// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoPreviousSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1L3 15H4.5V8.708C4.647 9.044 4.904 9.341 5.271 9.539L11.418 12.862C12.584 13.493 14 12.648 14 11.323V4.677C14 3.352 12.584 2.508 11.418 3.138L5.271 6.461C4.904 6.659 4.647 6.956 4.5 7.292V1H3ZM12.131 4.457C12.298 4.367 12.5 4.488 12.5 4.677V11.323C12.5 11.512 12.298 11.633 12.131 11.543L5.984 8.22C5.809 8.125 5.809 7.875 5.984 7.78L12.131 4.457Z"/>
  </svg>
);

const aDSVideoPreviousIconDefinition = svgToIconDefinition(
  aDSVideoPreviousSvg,
  'ads-video-previous'
);

/**![ADSVideoPrevious](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAxTDMgMTVINC41VjguNzA4QzQuNjQ3IDkuMDQ0IDQuOTA0IDkuMzQxIDUuMjcxIDkuNTM5TDExLjQxOCAxMi44NjJDMTIuNTg0IDEzLjQ5MyAxNCAxMi42NDggMTQgMTEuMzIzVjQuNjc3QzE0IDMuMzUyIDEyLjU4NCAyLjUwOCAxMS40MTggMy4xMzhMNS4yNzEgNi40NjFDNC45MDQgNi42NTkgNC42NDcgNi45NTYgNC41IDcuMjkyVjFIM1pNMTIuMTMxIDQuNDU3QzEyLjI5OCA0LjM2NyAxMi41IDQuNDg4IDEyLjUgNC42NzdWMTEuMzIzQzEyLjUgMTEuNTEyIDEyLjI5OCAxMS42MzMgMTIuMTMxIDExLjU0M0w1Ljk4NCA4LjIyQzUuODA5IDguMTI1IDUuODA5IDcuODc1IDUuOTg0IDcuNzhMMTIuMTMxIDQuNDU3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoPreviousIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoPrevious';
}

export default RefIcon;
