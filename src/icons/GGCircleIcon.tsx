// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.118 12.118 0 0 0 0 3.13h10.333v10.333a12.121 12.121 0 0 0 3.13 0V13.565h10.333a12.121 12.121 0 0 0 0-3.13Z"/>
    <path fill="#FFDA44" d="m15.392 12.522.782.522v-2.087l-.782.521h-2.87v-2.87l.522-.782h-2.087l.522.783v2.87h-2.87l-.783-.522v2.087l.783-.522h2.87v2.87l-.522.782h2.087l-.522-.782v-2.87h2.87Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gGCircleIconDefinition = svgToIconDefinition(
  gGCircleSvg,
  'ggcircle'
);

/**![GGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yMy44OTggMTAuNDM1SDEzLjU2NVYuMTAyYTEyLjEyIDEyLjEyIDAgMCAwLTMuMTMgMHYxMC4zMzNILjEwMmExMi4xMTggMTIuMTE4IDAgMCAwIDAgMy4xM2gxMC4zMzN2MTAuMzMzYTEyLjEyMSAxMi4xMjEgMCAwIDAgMy4xMyAwVjEzLjU2NWgxMC4zMzNhMTIuMTIxIDEyLjEyMSAwIDAgMCAwLTMuMTNaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTE1LjM5MiAxMi41MjIuNzgyLjUyMnYtMi4wODdsLS43ODIuNTIxaC0yLjg3di0yLjg3bC41MjItLjc4MmgtMi4wODdsLjUyMi43ODN2Mi44N2gtMi44N2wtLjc4My0uNTIydjIuMDg3bC43ODMtLjUyMmgyLjg3djIuODdsLS41MjIuNzgyaDIuMDg3bC0uNTIyLS43ODJ2LTIuODdoMi44N1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GGCircleIcon';
}

export default RefIcon;
