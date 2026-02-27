// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M16.174.747A11.975 11.975 0 0 0 12 0a11.96 11.96 0 0 0-4.174.747L6.782 12l1.044 11.254c1.3.482 2.706.746 4.174.746 1.467 0 2.874-.264 4.174-.746L17.217 12 16.174.747Z"/><path fill="#D80027" d="M24 12c0-5.16-3.257-9.558-7.826-11.253v22.507C20.744 21.558 24 17.159 24 11.999Z"/><path fill="#000" d="M0 12c0 5.16 3.256 9.558 7.826 11.254V.747C3.256 2.442 0 6.84 0 12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const bECircleIconDefinition = svgToIconDefinition(
  bECircleSvg,
  'becircle'
);

/**![BECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNi4xNzQuNzQ3QTExLjk3NSAxMS45NzUgMCAwIDAgMTIgMGExMS45NiAxMS45NiAwIDAgMC00LjE3NC43NDdMNi43ODIgMTJsMS4wNDQgMTEuMjU0YzEuMy40ODIgMi43MDYuNzQ2IDQuMTc0Ljc0NiAxLjQ2NyAwIDIuODc0LS4yNjQgNC4xNzQtLjc0NkwxNy4yMTcgMTIgMTYuMTc0Ljc0N1oiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjQgMTJjMC01LjE2LTMuMjU3LTkuNTU4LTcuODI2LTExLjI1M3YyMi41MDdDMjAuNzQ0IDIxLjU1OCAyNCAxNy4xNTkgMjQgMTEuOTk5WiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDEyYzAgNS4xNiAzLjI1NiA5LjU1OCA3LjgyNiAxMS4yNTRWLjc0N0MzLjI1NiAyLjQ0MiAwIDYuODQgMCAxMloiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BECircleIcon';
}

export default RefIcon;
