// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const rOCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M16.174.745A11.976 11.976 0 0 0 12 0c-1.468 0-2.874.264-4.174.746L6.783 12l1.043 11.254c1.3.482 2.706.746 4.174.746 1.468 0 2.874-.264 4.174-.746L17.217 12 16.174.745Z"/><path fill="#D80027" d="M24 12c0-5.16-3.256-9.56-7.826-11.255v22.508C20.744 21.557 24 17.159 24 12Z"/><path fill="#0052B4" d="M0 12c0 5.16 3.257 9.557 7.826 11.253V.745C3.256 2.441 0 6.84 0 12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const rOCircleIconDefinition = svgToIconDefinition(
  rOCircleSvg,
  'rocircle'
);

/**![ROCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNi4xNzQuNzQ1QTExLjk3NiAxMS45NzYgMCAwIDAgMTIgMGMtMS40NjggMC0yLjg3NC4yNjQtNC4xNzQuNzQ2TDYuNzgzIDEybDEuMDQzIDExLjI1NGMxLjMuNDgyIDIuNzA2Ljc0NiA0LjE3NC43NDYgMS40NjggMCAyLjg3NC0uMjY0IDQuMTc0LS43NDZMMTcuMjE3IDEyIDE2LjE3NC43NDVaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTI0IDEyYzAtNS4xNi0zLjI1Ni05LjU2LTcuODI2LTExLjI1NXYyMi41MDhDMjAuNzQ0IDIxLjU1NyAyNCAxNy4xNTkgMjQgMTJaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTAgMTJjMCA1LjE2IDMuMjU3IDkuNTU3IDcuODI2IDExLjI1M1YuNzQ1QzMuMjU2IDIuNDQxIDAgNi44NCAwIDEyWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={rOCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ROCircleIcon';
}

export default RefIcon;
