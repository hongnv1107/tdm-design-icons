// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const fRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M24 12c0-5.16-3.257-9.558-7.826-11.254v22.508C20.744 21.558 24 17.16 24 12Z"/>
    <path fill="#0052B4" d="M0 12c0 5.16 3.257 9.559 7.827 11.254V.747C3.257 2.443 0 6.84 0 12Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const fRCircleIconDefinition = svgToIconDefinition(
  fRCircleSvg,
  'frcircle'
);

/**![FRCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwLTUuMTYtMy4yNTctOS41NTgtNy44MjYtMTEuMjU0djIyLjUwOEMyMC43NDQgMjEuNTU4IDI0IDE3LjE2IDI0IDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyYzAgNS4xNiAzLjI1NyA5LjU1OSA3LjgyNyAxMS4yNTRWLjc0N0MzLjI1NyAyLjQ0MyAwIDYuODQgMCAxMloiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={fRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FRCircleIcon';
}

export default RefIcon;
