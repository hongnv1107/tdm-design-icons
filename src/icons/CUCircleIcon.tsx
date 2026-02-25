// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cUCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FF9811" d="M0 2.087v19.826V2.087Z"/>
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M12 0a11.982 11.982 0 0 0-9.601 4.8h19.2A11.98 11.98 0 0 0 12 0Zm0 24a11.98 11.98 0 0 0 9.6-4.8H2.399a11.982 11.982 0 0 0 9.6 4.8ZM0 12c0 .822.083 1.625.24 2.4h23.52a12.05 12.05 0 0 0 0-4.8H.24C.083 10.376 0 11.178 0 12Z"/>
    <path fill="#D80027" d="M3.515 3.515c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.515Z"/>
    <path fill="#F0F0F0" d="m4.856 8.87.777 2.39h2.515l-2.034 1.48.777 2.391-2.035-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514l.777-2.391Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cUCircleIconDefinition = svgToIconDefinition(
  cUCircleSvg,
  'cucircle'
);

/**![CUCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0wIDIuMDg3djE5LjgyNlYyLjA4N1oiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNMTIgMjRjNi42MjcgMCAxMi01LjM3MiAxMi0xMiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyUzAgNS4zNzMgMCAxMnM1LjM3MyAxMiAxMiAxMloiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMGExMS45ODIgMTEuOTgyIDAgMCAwLTkuNjAxIDQuOGgxOS4yQTExLjk4IDExLjk4IDAgMCAwIDEyIDBabTAgMjRhMTEuOTggMTEuOTggMCAwIDAgOS42LTQuOEgyLjM5OWExMS45ODIgMTEuOTgyIDAgMCAwIDkuNiA0LjhaTTAgMTJjMCAuODIyLjA4MyAxLjYyNS4yNCAyLjRoMjMuNTJhMTIuMDUgMTIuMDUgMCAwIDAgMC00LjhILjI0Qy4wODMgMTAuMzc2IDAgMTEuMTc4IDAgMTJaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTMuNTE1IDMuNTE1Yy00LjY4NyA0LjY4Ni00LjY4NyAxMi4yODQgMCAxNi45N0wxMiAxMiAzLjUxNSAzLjUxNVoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJtNC44NTYgOC44Ny43NzcgMi4zOWgyLjUxNWwtMi4wMzQgMS40OC43NzcgMi4zOTEtMi4wMzUtMS40NzgtMi4wMzQgMS40NzguNzc3LTIuMzkxLTIuMDM0LTEuNDc4aDIuNTE0bC43NzctMi4zOTFaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cUCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CUCircleIcon';
}

export default RefIcon;
