// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const eSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M0 12c0 1.467.264 2.873.746 4.173L12 17.217l11.254-1.044c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.782.746 7.825A11.974 11.974 0 0 0 0 12Z"/>
    <path fill="#D80027" d="M23.255 7.826C21.56 3.256 17.161 0 12.002 0 6.841 0 2.443 3.256.748 7.826h22.507ZM.746 16.173C2.442 20.743 6.841 24 12.001 24c5.16 0 9.557-3.257 11.253-7.827H.746Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const eSCircleIconDefinition = svgToIconDefinition(
  eSCircleSvg,
  'escircle'
);

/**![ESCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0wIDEyYzAgMS40NjcuMjY0IDIuODczLjc0NiA0LjE3M0wxMiAxNy4yMTdsMTEuMjU0LTEuMDQ0Yy40ODItMS4zLjc0Ni0yLjcwNi43NDYtNC4xNzQgMC0xLjQ2OC0uMjY0LTIuODc0LS43NDYtNC4xNzRMMTIgNi43ODIuNzQ2IDcuODI1QTExLjk3NCAxMS45NzQgMCAwIDAgMCAxMloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjMuMjU1IDcuODI2QzIxLjU2IDMuMjU2IDE3LjE2MSAwIDEyLjAwMiAwIDYuODQxIDAgMi40NDMgMy4yNTYuNzQ4IDcuODI2aDIyLjUwN1pNLjc0NiAxNi4xNzNDMi40NDIgMjAuNzQzIDYuODQxIDI0IDEyLjAwMSAyNGM1LjE2IDAgOS41NTctMy4yNTcgMTEuMjUzLTcuODI3SC43NDZaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={eSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ESCircleIcon';
}

export default RefIcon;
