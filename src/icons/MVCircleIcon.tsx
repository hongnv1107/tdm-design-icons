// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mVCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#6DA544" d="M19.826 6.261H4.174v11.478h15.652V6.261Z"/><path fill="#F0F0F0" d="M13.932 15.391a3.391 3.391 0 1 1 1.614-6.375 4.174 4.174 0 1 0 0 5.967 3.38 3.38 0 0 1-1.614.408Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const mVCircleIconDefinition = svgToIconDefinition(
  mVCircleSvg,
  'mvcircle'
);

/**![MVCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xOS44MjYgNi4yNjFINC4xNzR2MTEuNDc4aDE1LjY1MlY2LjI2MVoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNMTMuOTMyIDE1LjM5MWEzLjM5MSAzLjM5MSAwIDEgMSAxLjYxNC02LjM3NSA0LjE3NCA0LjE3NCAwIDEgMCAwIDUuOTY3IDMuMzggMy4zOCAwIDAgMS0xLjYxNC40MDhaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mVCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MVCircleIcon';
}

export default RefIcon;
