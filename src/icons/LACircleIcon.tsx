// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M22.81 6.782A12 12 0 0 0 12-.001 12 12 0 0 0 1.19 6.782L12 7.825l10.81-1.043ZM1.19 17.216A12 12 0 0 0 12 24a12 12 0 0 0 10.809-6.783l-10.81-1.043L1.19 17.216Z"/>
    <path fill="#0052B4" d="M22.81 6.782H1.19A11.952 11.952 0 0 0 0 11.999c0 1.87.427 3.64 1.19 5.217h21.62A11.95 11.95 0 0 0 23.999 12c0-1.87-.427-3.64-1.19-5.217Z"/>
    <path fill="#F0F0F0" d="M12 16.173a4.173 4.173 0 1 0 0-8.347 4.173 4.173 0 0 0 0 8.347Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const lACircleIconDefinition = svgToIconDefinition(
  lACircleSvg,
  'lacircle'
);

/**![LACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yMi44MSA2Ljc4MkExMiAxMiAwIDAgMCAxMi0uMDAxIDEyIDEyIDAgMCAwIDEuMTkgNi43ODJMMTIgNy44MjVsMTAuODEtMS4wNDNaTTEuMTkgMTcuMjE2QTEyIDEyIDAgMCAwIDEyIDI0YTEyIDEyIDAgMCAwIDEwLjgwOS02Ljc4M2wtMTAuODEtMS4wNDNMMS4xOSAxNy4yMTZaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTIyLjgxIDYuNzgySDEuMTlBMTEuOTUyIDExLjk1MiAwIDAgMCAwIDExLjk5OWMwIDEuODcuNDI3IDMuNjQgMS4xOSA1LjIxN2gyMS42MkExMS45NSAxMS45NSAwIDAgMCAyMy45OTkgMTJjMC0xLjg3LS40MjctMy42NC0xLjE5LTUuMjE3WiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAxNi4xNzNhNC4xNzMgNC4xNzMgMCAxIDAgMC04LjM0NyA0LjE3MyA0LjE3MyAwIDAgMCAwIDguMzQ3WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LACircleIcon';
}

export default RefIcon;
