// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M.746 16.175C2.442 20.745 6.84 24 12 24c5.16 0 9.558-3.257 11.253-7.826L12 15.132.746 16.175Z"/>
    <path fill="#000" d="M12 0C6.84 0 2.442 3.258.746 7.828L12 8.87l11.253-1.043C21.558 3.257 17.16 0 12 0Z"/>
    <path fill="#D80027" d="M.746 7.826A11.974 11.974 0 0 0 0 12c0 1.467.264 2.874.746 4.174h22.508c.482-1.3.746-2.707.746-4.174 0-1.468-.264-2.874-.746-4.174H.746Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const dECircleIconDefinition = svgToIconDefinition(
  dECircleSvg,
  'decircle'
);

/**![DECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0uNzQ2IDE2LjE3NUMyLjQ0MiAyMC43NDUgNi44NCAyNCAxMiAyNGM1LjE2IDAgOS41NTgtMy4yNTcgMTEuMjUzLTcuODI2TDEyIDE1LjEzMi43NDYgMTYuMTc1WiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiAwQzYuODQgMCAyLjQ0MiAzLjI1OC43NDYgNy44MjhMMTIgOC44N2wxMS4yNTMtMS4wNDNDMjEuNTU4IDMuMjU3IDE3LjE2IDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNLjc0NiA3LjgyNkExMS45NzQgMTEuOTc0IDAgMCAwIDAgMTJjMCAxLjQ2Ny4yNjQgMi44NzQuNzQ2IDQuMTc0aDIyLjUwOGMuNDgyLTEuMy43NDYtMi43MDcuNzQ2LTQuMTc0IDAtMS40NjgtLjI2NC0yLjg3NC0uNzQ2LTQuMTc0SC43NDZaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DECircleIcon';
}

export default RefIcon;
