// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dKCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M9.392 10.435h14.507C23.132 4.547 18.097 0 12 0c-.896 0-1.768.1-2.608.285v10.15Zm-3.131.001V1.46a12.008 12.008 0 0 0-6.159 8.976h6.16Zm0 3.13H.101a12.007 12.007 0 0 0 6.16 8.975v-8.976Zm3.131 0v10.15c.84.185 1.712.284 2.608.284 6.097 0 11.132-4.547 11.899-10.434H9.392Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const dKCircleIconDefinition = svgToIconDefinition(
  dKCircleSvg,
  'dkcircle'
);

/**![DKCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik05LjM5MiAxMC40MzVoMTQuNTA3QzIzLjEzMiA0LjU0NyAxOC4wOTcgMCAxMiAwYy0uODk2IDAtMS43NjguMS0yLjYwOC4yODV2MTAuMTVabS0zLjEzMS4wMDFWMS40NmExMi4wMDggMTIuMDA4IDAgMCAwLTYuMTU5IDguOTc2aDYuMTZabTAgMy4xM0guMTAxYTEyLjAwNyAxMi4wMDcgMCAwIDAgNi4xNiA4Ljk3NXYtOC45NzZabTMuMTMxIDB2MTAuMTVjLjg0LjE4NSAxLjcxMi4yODQgMi42MDguMjg0IDYuMDk3IDAgMTEuMTMyLTQuNTQ3IDExLjg5OS0xMC40MzRIOS4zOTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dKCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DKCircleIcon';
}

export default RefIcon;
