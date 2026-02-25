// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const nICircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#338AF3" d="M12 0A12 12 0 0 0 1.191 6.782H22.81A12.001 12.001 0 0 0 12 0Zm0 24.001a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24.001Z"/>
    <path fill="#FFDA44" d="M12 8.348a3.652 3.652 0 1 0 0 7.304 3.652 3.652 0 0 0 0-7.304Zm0 5.739a2.087 2.087 0 1 1 0-4.174 2.087 2.087 0 0 1 0 4.174Z"/>
    <path fill="#0052B4" d="m13.807 12.522-1.808-.521-1.807.521-.602 1.044h4.82l-.603-1.044Z"/>
    <path fill="#338AF3" d="m12 9.391-1.205 2.087 1.204.523 1.206-.523L12 9.391Z"/>
    <path fill="#6DA544" d="M10.192 12.521h3.615l-.602-1.043h-2.41l-.603 1.043Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const nICircleIconDefinition = svgToIconDefinition(
  nICircleSvg,
  'nicircle'
);

/**![NICircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkxIDYuNzgySDIyLjgxQTEyLjAwMSAxMi4wMDEgMCAwIDAgMTIgMFptMCAyNC4wMDFhMTIgMTIgMCAwIDAgMTAuODEtNi43ODNIMS4xOUExMiAxMiAwIDAgMCAxMiAyNC4wMDFaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0iTTEyIDguMzQ4YTMuNjUyIDMuNjUyIDAgMSAwIDAgNy4zMDQgMy42NTIgMy42NTIgMCAwIDAgMC03LjMwNFptMCA1LjczOWEyLjA4NyAyLjA4NyAwIDEgMSAwLTQuMTc0IDIuMDg3IDIuMDg3IDAgMCAxIDAgNC4xNzRaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0ibTEzLjgwNyAxMi41MjItMS44MDgtLjUyMS0xLjgwNy41MjEtLjYwMiAxLjA0NGg0LjgybC0uNjAzLTEuMDQ0WiIvPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Im0xMiA5LjM5MS0xLjIwNSAyLjA4NyAxLjIwNC41MjMgMS4yMDYtLjUyM0wxMiA5LjM5MVoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMTAuMTkyIDEyLjUyMWgzLjYxNWwtLjYwMi0xLjA0M2gtMi40MWwtLjYwMyAxLjA0M1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={nICircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NICircleIcon';
}

export default RefIcon;
