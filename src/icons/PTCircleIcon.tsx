// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pTCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#6DA544" d="M0 12c0 5.16 3.256 9.559 7.826 11.254l1.043-11.253L7.826.747C3.256 2.443 0 6.841 0 12.001Z"/>
    <path fill="#D80027" d="M24 12c0-6.627-5.373-12-12-12-1.468 0-2.874.265-4.174.747v22.507c1.3.483 2.706.746 4.174.746 6.627 0 12-5.373 12-12Z"/>
    <path fill="#FFDA44" d="M7.826 16.174a4.174 4.174 0 1 0 0-8.347 4.174 4.174 0 0 0 0 8.347Z"/>
    <path fill="#D80027" d="M5.478 9.913v2.608a2.348 2.348 0 1 0 4.695 0V9.913H5.478Z"/>
    <path fill="#F0F0F0" d="M7.826 13.304a.784.784 0 0 1-.782-.783v-1.043h1.565v1.043a.784.784 0 0 1-.783.783Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const pTCircleIconDefinition = svgToIconDefinition(
  pTCircleSvg,
  'ptcircle'
);

/**![PTCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0wIDEyYzAgNS4xNiAzLjI1NiA5LjU1OSA3LjgyNiAxMS4yNTRsMS4wNDMtMTEuMjUzTDcuODI2Ljc0N0MzLjI1NiAyLjQ0MyAwIDYuODQxIDAgMTIuMDAxWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyLTEuNDY4IDAtMi44NzQuMjY1LTQuMTc0Ljc0N3YyMi41MDdjMS4zLjQ4MyAyLjcwNi43NDYgNC4xNzQuNzQ2IDYuNjI3IDAgMTItNS4zNzMgMTItMTJaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0iTTcuODI2IDE2LjE3NGE0LjE3NCA0LjE3NCAwIDEgMCAwLTguMzQ3IDQuMTc0IDQuMTc0IDAgMCAwIDAgOC4zNDdaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTUuNDc4IDkuOTEzdjIuNjA4YTIuMzQ4IDIuMzQ4IDAgMSAwIDQuNjk1IDBWOS45MTNINS40NzhaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTcuODI2IDEzLjMwNGEuNzg0Ljc4NCAwIDAgMS0uNzgyLS43ODN2LTEuMDQzaDEuNTY1djEuMDQzYS43ODQuNzg0IDAgMCAxLS43ODMuNzgzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pTCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PTCircleIcon';
}

export default RefIcon;
