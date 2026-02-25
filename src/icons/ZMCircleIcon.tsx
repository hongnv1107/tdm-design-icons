// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const zMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#496E2D" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M16.695 12H12v12c1.403 0 2.748-.242 4-.684l.695-11.317Z"/>
    <path fill="#FF9811" d="M20 20.943A11.97 11.97 0 0 0 24 12h-4.695L20 20.942Z"/>
    <path fill="#000" d="M16 12v11.316a11.995 11.995 0 0 0 4-2.373v-8.944h-4Z"/>
    <path fill="#FF9811" d="M22.174 7.827h-3.13a1.044 1.044 0 0 0-2.087 0h-3.13c0 .576.501 1.043 1.077 1.043h-.034c0 .577.467 1.044 1.043 1.044 0 .576.467 1.043 1.044 1.043h2.087c.576 0 1.043-.467 1.043-1.043.576 0 1.044-.467 1.044-1.044h-.035c.576 0 1.078-.467 1.078-1.043Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const zMCircleIconDefinition = svgToIconDefinition(
  zMCircleSvg,
  'zmcircle'
);

/**![ZMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xNi42OTUgMTJIMTJ2MTJjMS40MDMgMCAyLjc0OC0uMjQyIDQtLjY4NGwuNjk1LTExLjMxN1oiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMjAgMjAuOTQzQTExLjk3IDExLjk3IDAgMCAwIDI0IDEyaC00LjY5NUwyMCAyMC45NDJaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTE2IDEydjExLjMxNmExMS45OTUgMTEuOTk1IDAgMCAwIDQtMi4zNzN2LTguOTQ0aC00WiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0yMi4xNzQgNy44MjdoLTMuMTNhMS4wNDQgMS4wNDQgMCAwIDAtMi4wODcgMGgtMy4xM2MwIC41NzYuNTAxIDEuMDQzIDEuMDc3IDEuMDQzaC0uMDM0YzAgLjU3Ny40NjcgMS4wNDQgMS4wNDMgMS4wNDQgMCAuNTc2LjQ2NyAxLjA0MyAxLjA0NCAxLjA0M2gyLjA4N2MuNTc2IDAgMS4wNDMtLjQ2NyAxLjA0My0xLjA0My41NzYgMCAxLjA0NC0uNDY3IDEuMDQ0LTEuMDQ0aC0uMDM1Yy41NzYgMCAxLjA3OC0uNDY3IDEuMDc4LTEuMDQzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={zMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ZMCircleIcon';
}

export default RefIcon;
