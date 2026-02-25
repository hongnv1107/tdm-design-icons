// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#0052B4" d="M12 24c1.468 0 2.874-.263 4.174-.746l.521-11.253L16.174.747A11.975 11.975 0 0 0 12 .001c-1.468 0-2.874.264-4.174.746l-.522 11.254.522 11.253c1.3.483 2.706.747 4.174.747Z"/>
    <path fill="#A2001D" d="M0 12c0 5.16 3.256 9.559 7.826 11.254V.747C3.256 2.443 0 6.84 0 12ZM16.174.747v22.507C20.744 21.56 24 17.16 24 12c0-5.16-3.257-9.557-7.826-11.253Z"/>
    <path fill="#FFDA44" d="M6.783 11.999H5.739v4.174h1.044v-4.174Zm-4.174 0H1.565v4.174H2.61v-4.174Zm1.565 2.609a1.043 1.043 0 1 0 0-2.086 1.043 1.043 0 0 0 0 2.086Zm0-4.174a.522.522 0 1 0 0-1.044.522.522 0 0 0 0 1.044Zm1.043 4.695H3.13v1.043h2.087V15.13Zm0-4.174H3.13V12h2.087v-1.044ZM4.175 6.26l.37 1.137H5.74l-.968.703.37 1.137-.967-.703-.968.703.37-1.137-.968-.703h1.196l.37-1.137Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mNCircleIconDefinition = svgToIconDefinition(
  mNCircleSvg,
  'mncircle'
);

/**![MNCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAyNGMxLjQ2OCAwIDIuODc0LS4yNjMgNC4xNzQtLjc0NmwuNTIxLTExLjI1M0wxNi4xNzQuNzQ3QTExLjk3NSAxMS45NzUgMCAwIDAgMTIgLjAwMWMtMS40NjggMC0yLjg3NC4yNjQtNC4xNzQuNzQ2bC0uNTIyIDExLjI1NC41MjIgMTEuMjUzYzEuMy40ODMgMi43MDYuNzQ3IDQuMTc0Ljc0N1oiLz48cGF0aCBmaWxsPSIjQTIwMDFEIiBkPSJNMCAxMmMwIDUuMTYgMy4yNTYgOS41NTkgNy44MjYgMTEuMjU0Vi43NDdDMy4yNTYgMi40NDMgMCA2Ljg0IDAgMTJaTTE2LjE3NC43NDd2MjIuNTA3QzIwLjc0NCAyMS41NiAyNCAxNy4xNiAyNCAxMmMwLTUuMTYtMy4yNTctOS41NTctNy44MjYtMTEuMjUzWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik02Ljc4MyAxMS45OTlINS43Mzl2NC4xNzRoMS4wNDR2LTQuMTc0Wm0tNC4xNzQgMEgxLjU2NXY0LjE3NEgyLjYxdi00LjE3NFptMS41NjUgMi42MDlhMS4wNDMgMS4wNDMgMCAxIDAgMC0yLjA4NiAxLjA0MyAxLjA0MyAwIDAgMCAwIDIuMDg2Wm0wLTQuMTc0YS41MjIuNTIyIDAgMSAwIDAtMS4wNDQuNTIyLjUyMiAwIDAgMCAwIDEuMDQ0Wm0xLjA0MyA0LjY5NUgzLjEzdjEuMDQzaDIuMDg3VjE1LjEzWm0wLTQuMTc0SDMuMTNWMTJoMi4wODd2LTEuMDQ0Wk00LjE3NSA2LjI2bC4zNyAxLjEzN0g1Ljc0bC0uOTY4LjcwMy4zNyAxLjEzNy0uOTY3LS43MDMtLjk2OC43MDMuMzctMS4xMzctLjk2OC0uNzAzaDEuMTk2bC4zNy0xLjEzN1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MNCircleIcon';
}

export default RefIcon;
