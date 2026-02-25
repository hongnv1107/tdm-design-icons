// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dJCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#338AF3" d="M10.956 13.044s-7.435-9.53-7.442-9.529A11.962 11.962 0 0 1 12 .001c6.627 0 12 5.372 12 12l-13.044 1.043Z"/>
    <path fill="#6DA544" d="M10.956 12s-7.435 8.486-7.442 8.485A11.962 11.962 0 0 0 12 23.999c6.627 0 12-5.372 12-12H10.956Z"/>
    <path fill="#F0F0F0" d="M3.514 3.515c-4.686 4.687-4.686 12.283 0 16.97L12 12 3.513 3.515Z"/>
    <path fill="#D80027" d="m4.856 8.87.777 2.39h2.515l-2.035 1.48.777 2.391-2.034-1.478-2.034 1.478.777-2.391-2.034-1.478h2.514l.777-2.392Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const dJCircleIconDefinition = svgToIconDefinition(
  dJCircleSvg,
  'djcircle'
);

/**![DJCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMC45NTYgMTMuMDQ0cy03LjQzNS05LjUzLTcuNDQyLTkuNTI5QTExLjk2MiAxMS45NjIgMCAwIDEgMTIgLjAwMWM2LjYyNyAwIDEyIDUuMzcyIDEyIDEybC0xMy4wNDQgMS4wNDNaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTEwLjk1NiAxMnMtNy40MzUgOC40ODYtNy40NDIgOC40ODVBMTEuOTYyIDExLjk2MiAwIDAgMCAxMiAyMy45OTljNi42MjcgMCAxMi01LjM3MiAxMi0xMkgxMC45NTZaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTMuNTE0IDMuNTE1Yy00LjY4NiA0LjY4Ny00LjY4NiAxMi4yODMgMCAxNi45N0wxMiAxMiAzLjUxMyAzLjUxNVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJtNC44NTYgOC44Ny43NzcgMi4zOWgyLjUxNWwtMi4wMzUgMS40OC43NzcgMi4zOTEtMi4wMzQtMS40NzgtMi4wMzQgMS40NzguNzc3LTIuMzkxLTIuMDM0LTEuNDc4aDIuNTE0bC43NzctMi4zOTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dJCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DJCircleIcon';
}

export default RefIcon;
