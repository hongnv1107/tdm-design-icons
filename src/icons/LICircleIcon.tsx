// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lICircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12c.522 0 12-1.566 12-1.566L24 12Z"/>
    <path fill="#0052B4" d="M0 12C0 5.371 5.372 0 12 0c6.627 0 12 5.372 12 12"/>
    <path fill="#FFDA44" d="M8.87 8.347a1.565 1.565 0 0 0-2.61-1.166v-.92h.522V5.216H6.26v-.522H5.218v.522h-.522V6.26h.522v.921A1.565 1.565 0 0 0 3.13 9.514v.92h5.217v-.92a1.56 1.56 0 0 0 .522-1.167Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const lICircleIconDefinition = svgToIconDefinition(
  lICircleSvg,
  'licircle'
);

/**![LICircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTJjLjUyMiAwIDEyLTEuNTY2IDEyLTEuNTY2TDI0IDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyQzAgNS4zNzEgNS4zNzIgMCAxMiAwYzYuNjI3IDAgMTIgNS4zNzIgMTIgMTIiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNOC44NyA4LjM0N2ExLjU2NSAxLjU2NSAwIDAgMC0yLjYxLTEuMTY2di0uOTJoLjUyMlY1LjIxNkg2LjI2di0uNTIySDUuMjE4di41MjJoLS41MjJWNi4yNmguNTIydi45MjFBMS41NjUgMS41NjUgMCAwIDAgMy4xMyA5LjUxNHYuOTJoNS4yMTd2LS45MmExLjU2IDEuNTYgMCAwIDAgLjUyMi0xLjE2N1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lICircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LICircleIcon';
}

export default RefIcon;
