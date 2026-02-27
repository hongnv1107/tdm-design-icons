// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bFCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12c-.522 0-12 1.565-12 1.565L0 12Z"/><path fill="#6DA544" d="M24 12c0 6.627-5.373 12-12 12S0 18.628 0 12"/><path fill="#FFDA44" d="m12 7.825.906 2.79h2.934l-2.373 1.725.906 2.79L12 13.405 9.627 15.13l.906-2.79-2.373-1.725h2.934L12 7.825Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const bFCircleIconDefinition = svgToIconDefinition(
  bFCircleSvg,
  'bfcircle'
);

/**![BFCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNzMgMCAxMiAwczEyIDUuMzczIDEyIDEyYy0uNTIyIDAtMTIgMS41NjUtMTIgMS41NjVMMCAxMloiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMjQgMTJjMCA2LjYyNy01LjM3MyAxMi0xMiAxMlMwIDE4LjYyOCAwIDEyIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTEyIDcuODI1LjkwNiAyLjc5aDIuOTM0bC0yLjM3MyAxLjcyNS45MDYgMi43OUwxMiAxMy40MDUgOS42MjcgMTUuMTNsLjkwNi0yLjc5LTIuMzczLTEuNzI1aDIuOTM0TDEyIDcuODI1WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bFCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BFCircleIcon';
}

export default RefIcon;
