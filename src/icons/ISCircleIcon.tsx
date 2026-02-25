// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const iSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M.413 15.13a12.01 12.01 0 0 0 4.283 6.39v-6.39H.413Zm10.543 8.824c.344.03.692.046 1.044.046 5.544 0 10.21-3.76 11.586-8.87h-12.63v8.824ZM23.586 8.87C22.21 3.76 17.544 0 12 0c-.352 0-.7.016-1.044.045V8.87h12.63ZM4.696 2.48A12.01 12.01 0 0 0 .413 8.87h4.283V2.48Z"/>
    <path fill="#D80027" d="M23.898 10.435H9.391V.285C8.282.533 7.231.93 6.261 1.46v8.976H.1a12.098 12.098 0 0 0 0 3.13h6.16v8.976c.97.53 2.021.928 3.13 1.174v-10.15h14.507a12.126 12.126 0 0 0 0-3.13Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const iSCircleIconDefinition = svgToIconDefinition(
  iSCircleSvg,
  'iscircle'
);

/**![ISCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0uNDEzIDE1LjEzYTEyLjAxIDEyLjAxIDAgMCAwIDQuMjgzIDYuMzl2LTYuMzlILjQxM1ptMTAuNTQzIDguODI0Yy4zNDQuMDMuNjkyLjA0NiAxLjA0NC4wNDYgNS41NDQgMCAxMC4yMS0zLjc2IDExLjU4Ni04Ljg3aC0xMi42M3Y4LjgyNFpNMjMuNTg2IDguODdDMjIuMjEgMy43NiAxNy41NDQgMCAxMiAwYy0uMzUyIDAtLjcuMDE2LTEuMDQ0LjA0NVY4Ljg3aDEyLjYzWk00LjY5NiAyLjQ4QTEyLjAxIDEyLjAxIDAgMCAwIC40MTMgOC44N2g0LjI4M1YyLjQ4WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yMy44OTggMTAuNDM1SDkuMzkxVi4yODVDOC4yODIuNTMzIDcuMjMxLjkzIDYuMjYxIDEuNDZ2OC45NzZILjFhMTIuMDk4IDEyLjA5OCAwIDAgMCAwIDMuMTNoNi4xNnY4Ljk3NmMuOTcuNTMgMi4wMjEuOTI4IDMuMTMgMS4xNzR2LTEwLjE1aDE0LjUwN2ExMi4xMjYgMTIuMTI2IDAgMCAwIDAtMy4xM1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={iSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ISCircleIcon';
}

export default RefIcon;
