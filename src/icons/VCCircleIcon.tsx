// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const vCCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M17.74 1.46A11.946 11.946 0 0 0 12 0C9.921 0 7.966.53 6.26 1.46L5.218 12l1.044 10.541a11.95 11.95 0 0 0 5.74 1.46c2.078 0 4.033-.53 5.738-1.46l1.044-10.54L17.74 1.459Z"/>
    <path fill="#338AF3" d="M6.26 22.541V1.46A11.996 11.996 0 0 0 0 12c0 4.549 2.53 8.506 6.26 10.541Z"/>
    <path fill="#6DA544" d="M24 12c0-4.548-2.53-8.505-6.26-10.54v21.08A11.998 11.998 0 0 0 24 12.001ZM9.392 15.13 7.305 12l2.087-3.131 2.087 3.13-2.087 3.13Zm5.218 0L12.523 12l2.087-3.131 2.087 3.13-2.087 3.13ZM12 19.304l-2.086-3.13L12 13.042l2.087 3.13L12 19.303Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const vCCircleIconDefinition = svgToIconDefinition(
  vCCircleSvg,
  'vccircle'
);

/**![VCCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNy43NCAxLjQ2QTExLjk0NiAxMS45NDYgMCAwIDAgMTIgMEM5LjkyMSAwIDcuOTY2LjUzIDYuMjYgMS40Nkw1LjIxOCAxMmwxLjA0NCAxMC41NDFhMTEuOTUgMTEuOTUgMCAwIDAgNS43NCAxLjQ2YzIuMDc4IDAgNC4wMzMtLjUzIDUuNzM4LTEuNDZsMS4wNDQtMTAuNTRMMTcuNzQgMS40NTlaIi8+PHBhdGggZmlsbD0iIzMzOEFGMyIgZD0iTTYuMjYgMjIuNTQxVjEuNDZBMTEuOTk2IDExLjk5NiAwIDAgMCAwIDEyYzAgNC41NDkgMi41MyA4LjUwNiA2LjI2IDEwLjU0MVoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMjQgMTJjMC00LjU0OC0yLjUzLTguNTA1LTYuMjYtMTAuNTR2MjEuMDhBMTEuOTk4IDExLjk5OCAwIDAgMCAyNCAxMi4wMDFaTTkuMzkyIDE1LjEzIDcuMzA1IDEybDIuMDg3LTMuMTMxIDIuMDg3IDMuMTMtMi4wODcgMy4xM1ptNS4yMTggMEwxMi41MjMgMTJsMi4wODctMy4xMzEgMi4wODcgMy4xMy0yLjA4NyAzLjEzWk0xMiAxOS4zMDRsLTIuMDg2LTMuMTNMMTIgMTMuMDQybDIuMDg3IDMuMTNMMTIgMTkuMzAzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={vCCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'VCCircleIcon';
}

export default RefIcon;
