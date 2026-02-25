// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sYCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M12 0C6.84 0 2.442 3.256.746 7.825h22.507C21.558 3.255 17.16 0 12 0Z"/>
    <path fill="#000" d="M12 24c5.16 0 9.558-3.256 11.253-7.826H.746C2.442 20.744 6.84 24 12 24Z"/>
    <path fill="#6DA544" d="m7.17 9.13.648 1.993h2.095l-1.695 1.232.647 1.992-1.695-1.231-1.695 1.232.647-1.993-1.695-1.232h2.096L7.17 9.13Zm9.66 0 .648 1.993h2.095l-1.695 1.232.647 1.992-1.695-1.231-1.695 1.232.647-1.993-1.695-1.232h2.096l.647-1.993Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const sYCircleIconDefinition = svgToIconDefinition(
  sYCircleSvg,
  'sycircle'
);

/**![SYCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAwQzYuODQgMCAyLjQ0MiAzLjI1Ni43NDYgNy44MjVoMjIuNTA3QzIxLjU1OCAzLjI1NSAxNy4xNiAwIDEyIDBaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDI0YzUuMTYgMCA5LjU1OC0zLjI1NiAxMS4yNTMtNy44MjZILjc0NkMyLjQ0MiAyMC43NDQgNi44NCAyNCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJtNy4xNyA5LjEzLjY0OCAxLjk5M2gyLjA5NWwtMS42OTUgMS4yMzIuNjQ3IDEuOTkyLTEuNjk1LTEuMjMxLTEuNjk1IDEuMjMyLjY0Ny0xLjk5My0xLjY5NS0xLjIzMmgyLjA5Nkw3LjE3IDkuMTNabTkuNjYgMCAuNjQ4IDEuOTkzaDIuMDk1bC0xLjY5NSAxLjIzMi42NDcgMS45OTItMS42OTUtMS4yMzEtMS42OTUgMS4yMzIuNjQ3LTEuOTkzLTEuNjk1LTEuMjMyaDIuMDk2bC42NDctMS45OTNaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sYCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SYCircleIcon';
}

export default RefIcon;
