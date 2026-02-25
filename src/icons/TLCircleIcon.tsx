// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M12 0C9.062 0 6.37 1.056 4.285 2.81L17.217 12 4.285 21.19A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z"/>
    <path fill="#000" d="M3.515 3.515c-4.687 4.687-4.687 12.285 0 16.971L12 12.001 3.515 3.515Z"/>
    <path fill="#F0F0F0" d="m3.327 9.251 1.826 1.729 2.208-1.203-1.079 2.27 1.826 1.73-2.493-.325-1.08 2.27-.461-2.471-2.494-.325 2.208-1.203-.461-2.472Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const tLCircleIconDefinition = svgToIconDefinition(
  tLCircleSvg,
  'tlcircle'
);

/**![TLCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAwQzkuMDYyIDAgNi4zNyAxLjA1NiA0LjI4NSAyLjgxTDE3LjIxNyAxMiA0LjI4NSAyMS4xOUExMS45NTIgMTEuOTUyIDAgMCAwIDEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMy41MTUgMy41MTVjLTQuNjg3IDQuNjg3LTQuNjg3IDEyLjI4NSAwIDE2Ljk3MUwxMiAxMi4wMDEgMy41MTUgMy41MTVaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0ibTMuMzI3IDkuMjUxIDEuODI2IDEuNzI5IDIuMjA4LTEuMjAzLTEuMDc5IDIuMjcgMS44MjYgMS43My0yLjQ5My0uMzI1LTEuMDggMi4yNy0uNDYxLTIuNDcxLTIuNDk0LS4zMjUgMi4yMDgtMS4yMDMtLjQ2MS0yLjQ3MloiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TLCircleIcon';
}

export default RefIcon;
