// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M16.174.746A11.975 11.975 0 0 0 12 0c-1.468 0-2.874.264-4.174.746L6.783 12l1.043 11.253c1.3.482 2.706.747 4.174.747 1.468 0 2.874-.265 4.174-.747L17.218 12 16.174.746Z"/>
    <path fill="#D80027" d="M24 12c0-5.16-3.257-9.558-7.827-11.253v22.507C20.743 21.558 24 17.16 24 12Z"/>
    <path fill="#6DA544" d="M0 12c0 5.16 3.257 9.558 7.826 11.253V.746C3.256 2.44 0 6.84 0 11.999Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mLCircleIconDefinition = svgToIconDefinition(
  mLCircleSvg,
  'mlcircle'
);

/**![MLCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNi4xNzQuNzQ2QTExLjk3NSAxMS45NzUgMCAwIDAgMTIgMGMtMS40NjggMC0yLjg3NC4yNjQtNC4xNzQuNzQ2TDYuNzgzIDEybDEuMDQzIDExLjI1M2MxLjMuNDgyIDIuNzA2Ljc0NyA0LjE3NC43NDcgMS40NjggMCAyLjg3NC0uMjY1IDQuMTc0LS43NDdMMTcuMjE4IDEyIDE2LjE3NC43NDZaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTI0IDEyYzAtNS4xNi0zLjI1Ny05LjU1OC03LjgyNy0xMS4yNTN2MjIuNTA3QzIwLjc0MyAyMS41NTggMjQgMTcuMTYgMjQgMTJaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTAgMTJjMCA1LjE2IDMuMjU3IDkuNTU4IDcuODI2IDExLjI1M1YuNzQ2QzMuMjU2IDIuNDQgMCA2Ljg0IDAgMTEuOTk5WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MLCircleIcon';
}

export default RefIcon;
