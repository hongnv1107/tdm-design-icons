// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const fICircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M23.899 10.435H9.392V.285A11.897 11.897 0 0 0 6.26 1.46v8.976H.101a12.104 12.104 0 0 0 0 3.13h6.16v8.976c.97.53 2.022.928 3.13 1.174v-10.15H23.9a12.12 12.12 0 0 0 0-3.13Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const fICircleIconDefinition = svgToIconDefinition(
  fICircleSvg,
  'ficircle'
);

/**![FICircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0yMy44OTkgMTAuNDM1SDkuMzkyVi4yODVBMTEuODk3IDExLjg5NyAwIDAgMCA2LjI2IDEuNDZ2OC45NzZILjEwMWExMi4xMDQgMTIuMTA0IDAgMCAwIDAgMy4xM2g2LjE2djguOTc2Yy45Ny41MyAyLjAyMi45MjggMy4xMyAxLjE3NHYtMTAuMTVIMjMuOWExMi4xMiAxMi4xMiAwIDAgMCAwLTMuMTNaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={fICircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FICircleIcon';
}

export default RefIcon;
