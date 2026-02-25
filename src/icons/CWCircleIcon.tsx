// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cWCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M12 24c3.938 0 7.432-1.896 9.62-4.825H2.38A11.982 11.982 0 0 0 12 24Zm12-12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 1.419.247 2.78.7 4.044h22.6c.453-1.264.7-2.625.7-4.044Z"/>
    <path fill="#F0F0F0" d="m8.214 7.696.647 1.993h2.096L9.26 10.92l.648 1.992-1.695-1.231-1.696 1.231.648-1.992L5.47 9.688h2.095l.648-1.993ZM4.615 5.61l.388 1.195h1.258l-1.017.74.388 1.195L4.615 8l-1.017.74.388-1.196-1.017-.739h1.258l.388-1.196Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cWCircleIconDefinition = svgToIconDefinition(
  cWCircleSvg,
  'cwcircle'
);

/**![CWCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAyNGMzLjkzOCAwIDcuNDMyLTEuODk2IDkuNjItNC44MjVIMi4zOEExMS45ODIgMTEuOTgyIDAgMCAwIDEyIDI0Wm0xMi0xMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyUzAgNS4zNzMgMCAxMmMwIDEuNDE5LjI0NyAyLjc4LjcgNC4wNDRoMjIuNmMuNDUzLTEuMjY0LjctMi42MjUuNy00LjA0NFoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJtOC4yMTQgNy42OTYuNjQ3IDEuOTkzaDIuMDk2TDkuMjYgMTAuOTJsLjY0OCAxLjk5Mi0xLjY5NS0xLjIzMS0xLjY5NiAxLjIzMS42NDgtMS45OTJMNS40NyA5LjY4OGgyLjA5NWwuNjQ4LTEuOTkzWk00LjYxNSA1LjYxbC4zODggMS4xOTVoMS4yNThsLTEuMDE3Ljc0LjM4OCAxLjE5NUw0LjYxNSA4bC0xLjAxNy43NC4zODgtMS4xOTYtMS4wMTctLjczOWgxLjI1OGwuMzg4LTEuMTk2WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cWCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CWCircleIcon';
}

export default RefIcon;
