// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#0052B4" d="M0 12c0 .821.083 1.624.24 2.4l11.76.73 11.76-.73a12.049 12.049 0 0 0 0-4.8L12 8.868l-11.76.73C.083 10.375 0 11.177 0 12Z"/>
    <path fill="#F0F0F0" d="M23.76 14.4H.24C1.352 19.876 6.194 24 12 24c5.805 0 10.648-4.123 11.76-9.6Z"/>
    <path fill="#000" d="M.24 9.6h23.52C22.648 4.121 17.805 0 12 0 6.194 0 1.352 4.122.24 9.6Z"/>
    <path fill="#FFDA44" d="M17.218 9.6H6.783l2.132-1.003-1.136-2.065 2.315.443.294-2.339L12 6.356l1.613-1.72.293 2.339 2.315-.443-1.135 2.065 2.132 1.002Z"/>
    <path fill="#A2001D" d="M0 12c0 6.628 5.373 12 12 12L2.4 4.8A11.947 11.947 0 0 0 0 12Zm12 12c6.627 0 12-5.373 12-12 0-2.702-.893-5.195-2.4-7.2L12 24Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const aGCircleIconDefinition = svgToIconDefinition(
  aGCircleSvg,
  'agcircle'
);

/**![AGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyYzAgLjgyMS4wODMgMS42MjQuMjQgMi40bDExLjc2LjczIDExLjc2LS43M2ExMi4wNDkgMTIuMDQ5IDAgMCAwIDAtNC44TDEyIDguODY4bC0xMS43Ni43M0MuMDgzIDEwLjM3NSAwIDExLjE3NyAwIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0yMy43NiAxNC40SC4yNEMxLjM1MiAxOS44NzYgNi4xOTQgMjQgMTIgMjRjNS44MDUgMCAxMC42NDgtNC4xMjMgMTEuNzYtOS42WiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0uMjQgOS42aDIzLjUyQzIyLjY0OCA0LjEyMSAxNy44MDUgMCAxMiAwIDYuMTk0IDAgMS4zNTIgNC4xMjIuMjQgOS42WiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNy4yMTggOS42SDYuNzgzbDIuMTMyLTEuMDAzLTEuMTM2LTIuMDY1IDIuMzE1LjQ0My4yOTQtMi4zMzlMMTIgNi4zNTZsMS42MTMtMS43Mi4yOTMgMi4zMzkgMi4zMTUtLjQ0My0xLjEzNSAyLjA2NSAyLjEzMiAxLjAwMloiLz48cGF0aCBmaWxsPSIjQTIwMDFEIiBkPSJNMCAxMmMwIDYuNjI4IDUuMzczIDEyIDEyIDEyTDIuNCA0LjhBMTEuOTQ3IDExLjk0NyAwIDAgMCAwIDEyWm0xMiAxMmM2LjYyNyAwIDEyLTUuMzczIDEyLTEyIDAtMi43MDItLjg5My01LjE5NS0yLjQtNy4yTDEyIDI0WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AGCircleIcon';
}

export default RefIcon;
