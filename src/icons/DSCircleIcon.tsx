// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M1.191 6.783A11.952 11.952 0 0 0 .001 12c0 1.87.427 3.64 1.19 5.217l10.81 1.044 10.809-1.044A11.953 11.953 0 0 0 24 12c0-1.87-.427-3.64-1.19-5.217L12 5.739 1.192 6.783Z"/><path fill="#000" d="M1.191 17.217A12 12 0 0 0 12 24a12 12 0 0 0 10.809-6.782H1.19Z"/><path fill="#D80027" d="M1.191 6.783H22.81A12 12 0 0 0 11.999 0 12 12 0 0 0 1.192 6.783Z"/><path fill="#496E2D" d="M3.515 3.514c-4.686 4.686-4.686 12.284 0 16.97L12.001 12 3.514 3.514Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const dSCircleIconDefinition = svgToIconDefinition(
  dSCircleSvg,
  'dscircle'
);

/**![DSCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xLjE5MSA2Ljc4M0ExMS45NTIgMTEuOTUyIDAgMCAwIC4wMDEgMTJjMCAxLjg3LjQyNyAzLjY0IDEuMTkgNS4yMTdsMTAuODEgMS4wNDQgMTAuODA5LTEuMDQ0QTExLjk1MyAxMS45NTMgMCAwIDAgMjQgMTJjMC0xLjg3LS40MjctMy42NC0xLjE5LTUuMjE3TDEyIDUuNzM5IDEuMTkyIDYuNzgzWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xLjE5MSAxNy4yMTdBMTIgMTIgMCAwIDAgMTIgMjRhMTIgMTIgMCAwIDAgMTAuODA5LTYuNzgySDEuMTlaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTEuMTkxIDYuNzgzSDIyLjgxQTEyIDEyIDAgMCAwIDExLjk5OSAwIDEyIDEyIDAgMCAwIDEuMTkyIDYuNzgzWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0zLjUxNSAzLjUxNGMtNC42ODYgNC42ODYtNC42ODYgMTIuMjg0IDAgMTYuOTdMMTIuMDAxIDEyIDMuNTE0IDMuNTE0WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DSCircleIcon';
}

export default RefIcon;
