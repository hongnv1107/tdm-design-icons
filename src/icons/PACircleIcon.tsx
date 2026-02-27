// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#0052B4" d="M0 12c0 6.627 5.373 12 12 12V12H0Z"/><path fill="#D80027" d="M12 0c6.627 0 12 5.373 12 12H12V0Z"/><path fill="#0052B4" d="m7.144 4.175.777 2.391h2.514L8.401 8.044l.777 2.392-2.034-1.478-2.035 1.478.777-2.392-2.034-1.478h2.515l.777-2.391Z"/><path fill="#D80027" d="m16.857 13.565.777 2.391h2.515l-2.035 1.478.777 2.392-2.034-1.478-2.034 1.478.777-2.392-2.034-1.478h2.514l.777-2.391Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const pACircleIconDefinition = svgToIconDefinition(
  pACircleSvg,
  'pacircle'
);

/**![PACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJWMTJIMFoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTIgMGM2LjYyNyAwIDEyIDUuMzczIDEyIDEySDEyVjBaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0ibTcuMTQ0IDQuMTc1Ljc3NyAyLjM5MWgyLjUxNEw4LjQwMSA4LjA0NGwuNzc3IDIuMzkyLTIuMDM0LTEuNDc4LTIuMDM1IDEuNDc4Ljc3Ny0yLjM5Mi0yLjAzNC0xLjQ3OGgyLjUxNWwuNzc3LTIuMzkxWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im0xNi44NTcgMTMuNTY1Ljc3NyAyLjM5MWgyLjUxNWwtMi4wMzUgMS40NzguNzc3IDIuMzkyLTIuMDM0LTEuNDc4LTIuMDM0IDEuNDc4Ljc3Ny0yLjM5Mi0yLjAzNC0xLjQ3OGgyLjUxNGwuNzc3LTIuMzkxWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PACircleIcon';
}

export default RefIcon;
