// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#D80027" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12s12 0 12 0h12Z"/><path fill="#0052B4" d="M0 12C0 5.373 5.373 0 12 0v12H0Z"/><path fill="#F0F0F0" d="m7.143 4.173.777 2.392h2.514L8.4 8.043l.777 2.391-2.034-1.478-2.034 1.478.777-2.391L3.85 6.565h2.515l.777-2.392Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const cLCircleIconDefinition = svgToIconDefinition(
  cLCircleSvg,
  'clcircle'
);

/**![CLCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTJzMTIgMCAxMiAwaDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNzMgMCAxMiAwdjEySDBaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0ibTcuMTQzIDQuMTczLjc3NyAyLjM5MmgyLjUxNEw4LjQgOC4wNDNsLjc3NyAyLjM5MS0yLjAzNC0xLjQ3OC0yLjAzNCAxLjQ3OC43NzctMi4zOTFMMy44NSA2LjU2NWgyLjUxNWwuNzc3LTIuMzkyWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CLCircleIcon';
}

export default RefIcon;
