// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#F0F0F0" d="M12 17.739A5.74 5.74 0 1 0 12 6.26a5.74 5.74 0 0 0 0 11.479Z"/><path fill="#D80027" d="m12.707 9.805.984 1.357 1.595-.517L14.3 12l.984 1.357-1.594-.519-.986 1.356v-1.677L11.112 12l1.594-.518.002-1.676Z"/><path fill="#D80027" d="M13.304 15.39a3.391 3.391 0 1 1 1.613-6.374 4.174 4.174 0 1 0 0 5.967c-.48.26-1.029.407-1.613.407Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const tNCircleIconDefinition = svgToIconDefinition(
  tNCircleSvg,
  'tncircle'
);

/**![TNCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAxNy43MzlBNS43NCA1Ljc0IDAgMSAwIDEyIDYuMjZhNS43NCA1Ljc0IDAgMCAwIDAgMTEuNDc5WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im0xMi43MDcgOS44MDUuOTg0IDEuMzU3IDEuNTk1LS41MTdMMTQuMyAxMmwuOTg0IDEuMzU3LTEuNTk0LS41MTktLjk4NiAxLjM1NnYtMS42NzdMMTEuMTEyIDEybDEuNTk0LS41MTguMDAyLTEuNjc2WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMy4zMDQgMTUuMzlhMy4zOTEgMy4zOTEgMCAxIDEgMS42MTMtNi4zNzQgNC4xNzQgNC4xNzQgMCAxIDAgMCA1Ljk2N2MtLjQ4LjI2LTEuMDI5LjQwNy0xLjYxMy40MDdaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TNCircleIcon';
}

export default RefIcon;
