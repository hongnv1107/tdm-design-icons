// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tDCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M12 0c-1.467 0-2.874.263-4.173.746l-.522 11.253.521 11.254c1.3.482 2.707.747 4.174.747 1.468 0 2.874-.265 4.174-.747L16.696 12 16.174.746A11.975 11.975 0 0 0 12-.001Z"/><path fill="#D80027" d="M24 12c0-5.16-3.256-9.559-7.826-11.254v22.507C20.744 21.558 24 17.16 24 12Z"/><path fill="#0052B4" d="M7.826 23.253V.747C3.256 2.442 0 6.84 0 12s3.257 9.558 7.826 11.253Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const tDCircleIconDefinition = svgToIconDefinition(
  tDCircleSvg,
  'tdcircle'
);

/**![TDCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAwYy0xLjQ2NyAwLTIuODc0LjI2My00LjE3My43NDZsLS41MjIgMTEuMjUzLjUyMSAxMS4yNTRjMS4zLjQ4MiAyLjcwNy43NDcgNC4xNzQuNzQ3IDEuNDY4IDAgMi44NzQtLjI2NSA0LjE3NC0uNzQ3TDE2LjY5NiAxMiAxNi4xNzQuNzQ2QTExLjk3NSAxMS45NzUgMCAwIDAgMTItLjAwMVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjQgMTJjMC01LjE2LTMuMjU2LTkuNTU5LTcuODI2LTExLjI1NHYyMi41MDdDMjAuNzQ0IDIxLjU1OCAyNCAxNy4xNiAyNCAxMloiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNNy44MjYgMjMuMjUzVi43NDdDMy4yNTYgMi40NDIgMCA2Ljg0IDAgMTJzMy4yNTcgOS41NTggNy44MjYgMTEuMjUzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tDCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TDCircleIcon';
}

export default RefIcon;
