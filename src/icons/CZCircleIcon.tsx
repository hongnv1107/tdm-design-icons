// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cZCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M10.957 12s-7.435 8.486-7.442 8.485A11.962 11.962 0 0 0 12 24c6.627 0 12-5.373 12-12H10.957Z"/>
    <path fill="#0052B4" d="M3.515 3.515c-4.686 4.686-4.686 12.283 0 16.97L12.001 12 3.514 3.515Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cZCircleIconDefinition = svgToIconDefinition(
  cZCircleSvg,
  'czcircle'
);

/**![CZCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMC45NTcgMTJzLTcuNDM1IDguNDg2LTcuNDQyIDguNDg1QTExLjk2MiAxMS45NjIgMCAwIDAgMTIgMjRjNi42MjcgMCAxMi01LjM3MyAxMi0xMkgxMC45NTdaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTMuNTE1IDMuNTE1Yy00LjY4NiA0LjY4Ni00LjY4NiAxMi4yODMgMCAxNi45N0wxMi4wMDEgMTIgMy41MTQgMy41MTVaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cZCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CZCircleIcon';
}

export default RefIcon;
