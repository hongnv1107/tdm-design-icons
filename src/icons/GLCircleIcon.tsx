// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.522 0-12 1.565-12 1.565L0 12Z"/>
    <path fill="#D80027" d="M24 12c0 6.627-5.372 12-12 12-6.627 0-12-5.373-12-12"/>
    <path fill="#F0F0F0" d="M8.348 17.74a5.74 5.74 0 1 0 0-11.479 5.74 5.74 0 0 0 0 11.479Z"/>
    <path fill="#D80027" d="M2.608 12a5.74 5.74 0 0 1 11.479 0"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gLCircleIconDefinition = svgToIconDefinition(
  gLCircleSvg,
  'glcircle'
);

/**![GLCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNzMgMCAxMiAwczEyIDUuMzczIDEyIDEyYy0uNTIyIDAtMTIgMS41NjUtMTIgMS41NjVMMCAxMloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjQgMTJjMCA2LjYyNy01LjM3MiAxMi0xMiAxMi02LjYyNyAwLTEyLTUuMzczLTEyLTEyIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTguMzQ4IDE3Ljc0YTUuNzQgNS43NCAwIDEgMCAwLTExLjQ3OSA1Ljc0IDUuNzQgMCAwIDAgMCAxMS40NzlaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTIuNjA4IDEyYTUuNzQgNS43NCAwIDAgMSAxMS40NzkgMCIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GLCircleIcon';
}

export default RefIcon;
