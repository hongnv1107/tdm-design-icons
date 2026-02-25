// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#496E2D" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#FFDA44" d="M12 13.864a4.175 4.175 0 0 1-4.077-3.28 4.174 4.174 0 1 0 8.154 0A4.175 4.175 0 0 1 12 13.864Z"/>
    <path fill="#FFDA44" d="m12 8.348.388 1.196h1.258l-1.018.739.389 1.195L12 10.74l-1.017.74.388-1.196-1.017-.74h1.257L12 8.349Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mRCircleIconDefinition = svgToIconDefinition(
  mRCircleSvg,
  'mrcircle'
);

/**![MRCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAxMy44NjRhNC4xNzUgNC4xNzUgMCAwIDEtNC4wNzctMy4yOCA0LjE3NCA0LjE3NCAwIDEgMCA4LjE1NCAwQTQuMTc1IDQuMTc1IDAgMCAxIDEyIDEzLjg2NFoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJtMTIgOC4zNDguMzg4IDEuMTk2aDEuMjU4bC0xLjAxOC43MzkuMzg5IDEuMTk1TDEyIDEwLjc0bC0xLjAxNy43NC4zODgtMS4xOTYtMS4wMTctLjc0aDEuMjU3TDEyIDguMzQ5WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MRCircleIcon';
}

export default RefIcon;
