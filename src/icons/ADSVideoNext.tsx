// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoNextSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 1L13 15H11.5V8.708C11.353 9.044 11.096 9.341 10.729 9.539L4.582 12.862C3.416 13.493 2 12.648 2 11.323V4.677C2 3.352 3.416 2.508 4.582 3.138L10.729 6.461C11.096 6.659 11.353 6.956 11.5 7.292V1H13ZM3.869 4.457C3.702 4.367 3.5 4.488 3.5 4.677V11.323C3.5 11.512 3.702 11.633 3.869 11.543L10.016 8.22C10.191 8.125 10.191 7.875 10.016 7.78L3.869 4.457Z"/>
  </svg>
);

const aDSVideoNextIconDefinition = svgToIconDefinition(
  aDSVideoNextSvg,
  'ads-video-next'
);

/**![ADSVideoNext](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMUwxMyAxNUgxMS41VjguNzA4QzExLjM1MyA5LjA0NCAxMS4wOTYgOS4zNDEgMTAuNzI5IDkuNTM5TDQuNTgyIDEyLjg2MkMzLjQxNiAxMy40OTMgMiAxMi42NDggMiAxMS4zMjNWNC42NzdDMiAzLjM1MiAzLjQxNiAyLjUwOCA0LjU4MiAzLjEzOEwxMC43MjkgNi40NjFDMTEuMDk2IDYuNjU5IDExLjM1MyA2Ljk1NiAxMS41IDcuMjkyVjFIMTNaTTMuODY5IDQuNDU3QzMuNzAyIDQuMzY3IDMuNSA0LjQ4OCAzLjUgNC42NzdWMTEuMzIzQzMuNSAxMS41MTIgMy43MDIgMTEuNjMzIDMuODY5IDExLjU0M0wxMC4wMTYgOC4yMkMxMC4xOTEgOC4xMjUgMTAuMTkxIDcuODc1IDEwLjAxNiA3Ljc4TDMuODY5IDQuNDU3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoNextIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoNext';
}

export default RefIcon;
