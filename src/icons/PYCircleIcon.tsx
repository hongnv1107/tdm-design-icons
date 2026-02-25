// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pYCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M12 0A12 12 0 0 0 1.191 6.783H22.81A12.001 12.001 0 0 0 12 0Z"/>
    <path fill="#0052B4" d="M12 24a12 12 0 0 0 10.81-6.782H1.19A12 12 0 0 0 12 24Z"/>
    <path fill="#6DA544" d="m14.951 8.527-1.107 1.106a2.609 2.609 0 1 1-3.69 0L9.05 8.527a4.174 4.174 0 1 0 5.903 0Z"/>
    <path fill="#FFDA44" d="m12 9.913.388 1.195h1.258l-1.018.74.389 1.195L12 12.304l-1.017.739.388-1.196-1.017-.739h1.257L12 9.913Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const pYCircleIconDefinition = svgToIconDefinition(
  pYCircleSvg,
  'pycircle'
);

/**![PYCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkxIDYuNzgzSDIyLjgxQTEyLjAwMSAxMi4wMDEgMCAwIDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMjRhMTIgMTIgMCAwIDAgMTAuODEtNi43ODJIMS4xOUExMiAxMiAwIDAgMCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJtMTQuOTUxIDguNTI3LTEuMTA3IDEuMTA2YTIuNjA5IDIuNjA5IDAgMSAxLTMuNjkgMEw5LjA1IDguNTI3YTQuMTc0IDQuMTc0IDAgMSAwIDUuOTAzIDBaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTEyIDkuOTEzLjM4OCAxLjE5NWgxLjI1OGwtMS4wMTguNzQuMzg5IDEuMTk1TDEyIDEyLjMwNGwtMS4wMTcuNzM5LjM4OC0xLjE5Ni0xLjAxNy0uNzM5aDEuMjU3TDEyIDkuOTEzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pYCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PYCircleIcon';
}

export default RefIcon;
