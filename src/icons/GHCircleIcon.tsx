// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gHCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M0 12c0 1.467.264 2.873.746 4.173L12 16.695l11.254-.522c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 7.303.746 7.825A11.975 11.975 0 0 0 0 12Z"/>
    <path fill="#D80027" d="M12-.001C6.84-.001 2.442 3.256.746 7.825h22.508C21.558 3.255 17.159 0 12 0Z"/>
    <path fill="#496E2D" d="m23.254 16.173-22.508.001C2.442 20.744 6.84 24 12 24c5.16 0 9.558-3.257 11.254-7.827Z"/>
    <path fill="#000" d="m12 7.826 1.036 3.189h3.353l-2.713 1.97 1.036 3.189L12 14.204l-2.713 1.97 1.036-3.189-2.712-1.97h3.353L12 7.826Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gHCircleIconDefinition = svgToIconDefinition(
  gHCircleSvg,
  'ghcircle'
);

/**![GHCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0wIDEyYzAgMS40NjcuMjY0IDIuODczLjc0NiA0LjE3M0wxMiAxNi42OTVsMTEuMjU0LS41MjJjLjQ4Mi0xLjMuNzQ2LTIuNzA2Ljc0Ni00LjE3NCAwLTEuNDY4LS4yNjQtMi44NzQtLjc0Ni00LjE3NEwxMiA3LjMwMy43NDYgNy44MjVBMTEuOTc1IDExLjk3NSAwIDAgMCAwIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMi0uMDAxQzYuODQtLjAwMSAyLjQ0MiAzLjI1Ni43NDYgNy44MjVoMjIuNTA4QzIxLjU1OCAzLjI1NSAxNy4xNTkgMCAxMiAwWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Im0yMy4yNTQgMTYuMTczLTIyLjUwOC4wMDFDMi40NDIgMjAuNzQ0IDYuODQgMjQgMTIgMjRjNS4xNiAwIDkuNTU4LTMuMjU3IDExLjI1NC03LjgyN1oiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTIgNy44MjYgMS4wMzYgMy4xODloMy4zNTNsLTIuNzEzIDEuOTcgMS4wMzYgMy4xODlMMTIgMTQuMjA0bC0yLjcxMyAxLjk3IDEuMDM2LTMuMTg5LTIuNzEyLTEuOTdoMy4zNTNMMTIgNy44MjZaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gHCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GHCircleIcon';
}

export default RefIcon;
