// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M17.218 1.191A11.952 11.952 0 0 0 12 .001c-1.87 0-3.64.427-5.217 1.19l-1.044 10.81L6.783 22.81A11.952 11.952 0 0 0 12 24c1.87 0 3.64-.427 5.218-1.19L18.26 12 17.218 1.191Z"/>
    <path fill="#FFDA44" d="m12 7.825 1.036 3.189h3.353l-2.712 1.97 1.036 3.19L12 14.202l-2.712 1.97 1.036-3.188-2.712-1.971h3.352L12 7.825Z"/>
    <path fill="#496E2D" d="M6.783 1.191A12 12 0 0 0 0 12.001 12 12 0 0 0 6.783 22.81V1.19Z"/>
    <path fill="#FFDA44" d="M17.218 1.191V22.81A12 12 0 0 0 24 12c0-4.757-2.769-8.868-6.782-10.809Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cMCircleIconDefinition = svgToIconDefinition(
  cMCircleSvg,
  'cmcircle'
);

/**![CMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xNy4yMTggMS4xOTFBMTEuOTUyIDExLjk1MiAwIDAgMCAxMiAuMDAxYy0xLjg3IDAtMy42NC40MjctNS4yMTcgMS4xOWwtMS4wNDQgMTAuODFMNi43ODMgMjIuODFBMTEuOTUyIDExLjk1MiAwIDAgMCAxMiAyNGMxLjg3IDAgMy42NC0uNDI3IDUuMjE4LTEuMTlMMTguMjYgMTIgMTcuMjE4IDEuMTkxWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Im0xMiA3LjgyNSAxLjAzNiAzLjE4OWgzLjM1M2wtMi43MTIgMS45NyAxLjAzNiAzLjE5TDEyIDE0LjIwMmwtMi43MTIgMS45NyAxLjAzNi0zLjE4OC0yLjcxMi0xLjk3MWgzLjM1MkwxMiA3LjgyNVoiLz48cGF0aCBmaWxsPSIjNDk2RTJEIiBkPSJNNi43ODMgMS4xOTFBMTIgMTIgMCAwIDAgMCAxMi4wMDEgMTIgMTIgMCAwIDAgNi43ODMgMjIuODFWMS4xOVoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNMTcuMjE4IDEuMTkxVjIyLjgxQTEyIDEyIDAgMCAwIDI0IDEyYzAtNC43NTctMi43NjktOC44NjgtNi43ODItMTAuODA5WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CMCircleIcon';
}

export default RefIcon;
