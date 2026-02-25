// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#496E2D" d="M24 12a11.98 11.98 0 0 0-.746-4.173L12 7.305.746 7.827A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.173L12 16.696l11.254-.521c.482-1.3.746-2.707.746-4.174Z"/>
    <path fill="#D80027" d="M12 24c5.16 0 9.558-3.256 11.254-7.825H.746C2.442 20.744 6.84 24 12 24Z"/>
    <path fill="#F0F0F0" d="M.746 7.825h22.508C21.557 3.255 17.159 0 12 0 6.84 0 2.442 3.256.746 7.825Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const bGCircleIconDefinition = svgToIconDefinition(
  bGCircleSvg,
  'bgcircle'
);

/**![BGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0yNCAxMmExMS45OCAxMS45OCAwIDAgMC0uNzQ2LTQuMTczTDEyIDcuMzA1Ljc0NiA3LjgyN0ExMS45NzUgMTEuOTc1IDAgMCAwIDAgMTJjMCAxLjQ2OC4yNjQgMi44NzQuNzQ2IDQuMTczTDEyIDE2LjY5NmwxMS4yNTQtLjUyMWMuNDgyLTEuMy43NDYtMi43MDcuNzQ2LTQuMTc0WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM1LjE2IDAgOS41NTgtMy4yNTYgMTEuMjU0LTcuODI1SC43NDZDMi40NDIgMjAuNzQ0IDYuODQgMjQgMTIgMjRaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTS43NDYgNy44MjVoMjIuNTA4QzIxLjU1NyAzLjI1NSAxNy4xNTkgMCAxMiAwIDYuODQgMCAyLjQ0MiAzLjI1Ni43NDYgNy44MjVaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BGCircleIcon';
}

export default RefIcon;
