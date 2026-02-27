// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const jECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#D80027" d="m21.52 19.307-7.306-7.306 7.306-7.307a12.115 12.115 0 0 0-2.213-2.214L12 9.787 4.694 2.48A12.114 12.114 0 0 0 2.48 4.694L9.787 12 2.48 19.307a12.122 12.122 0 0 0 2.214 2.214L12 14.214l7.307 7.307a12.11 12.11 0 0 0 2.213-2.214Z"/><path fill="#FFDA44" d="M9.913 3.653 12 4.175l2.086-.522V1.879l-.834.417L12 1.044l-1.253 1.252-.834-.417v1.774Z"/><path fill="#D80027" d="M9.913 3.653v1.304C9.913 6.555 12 7.044 12 7.044s2.086-.49 2.086-2.087V3.653H9.913Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const jECircleIconDefinition = svgToIconDefinition(
  jECircleSvg,
  'jecircle'
);

/**![JECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im0yMS41MiAxOS4zMDctNy4zMDYtNy4zMDYgNy4zMDYtNy4zMDdhMTIuMTE1IDEyLjExNSAwIDAgMC0yLjIxMy0yLjIxNEwxMiA5Ljc4NyA0LjY5NCAyLjQ4QTEyLjExNCAxMi4xMTQgMCAwIDAgMi40OCA0LjY5NEw5Ljc4NyAxMiAyLjQ4IDE5LjMwN2ExMi4xMjIgMTIuMTIyIDAgMCAwIDIuMjE0IDIuMjE0TDEyIDE0LjIxNGw3LjMwNyA3LjMwN2ExMi4xMSAxMi4xMSAwIDAgMCAyLjIxMy0yLjIxNFoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNOS45MTMgMy42NTMgMTIgNC4xNzVsMi4wODYtLjUyMlYxLjg3OWwtLjgzNC40MTdMMTIgMS4wNDRsLTEuMjUzIDEuMjUyLS44MzQtLjQxN3YxLjc3NFoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNOS45MTMgMy42NTN2MS4zMDRDOS45MTMgNi41NTUgMTIgNy4wNDQgMTIgNy4wNDRzMi4wODYtLjQ5IDIuMDg2LTIuMDg3VjMuNjUzSDkuOTEzWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={jECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'JECircleIcon';
}

export default RefIcon;
