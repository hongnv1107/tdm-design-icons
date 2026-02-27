// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#FFDA44" d="M19.092 9.848h-5.418L12 4.695l-1.674 5.153H4.91l4.383 3.184-1.675 5.152L12 15l4.383 3.185-1.674-5.153 4.383-3.184Zm-8.574 2.785.566-1.742h1.832l.566 1.742L12 13.71l-1.482-1.077Zm2.06-2.785h-1.154L12 8.072l.577 1.776Zm1.792 2.14-.357-1.097h1.867l-1.51 1.098Zm-4.383-1.097-.356 1.098-1.51-1.098h1.866Zm-.385 4.562.577-1.776.934.678-1.51 1.098Zm3.286-1.098.934-.678.576 1.776-1.51-1.098Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const mACircleIconDefinition = svgToIconDefinition(
  mACircleSvg,
  'macircle'
);

/**![MACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xOS4wOTIgOS44NDhoLTUuNDE4TDEyIDQuNjk1bC0xLjY3NCA1LjE1M0g0LjkxbDQuMzgzIDMuMTg0LTEuNjc1IDUuMTUyTDEyIDE1bDQuMzgzIDMuMTg1LTEuNjc0LTUuMTUzIDQuMzgzLTMuMTg0Wm0tOC41NzQgMi43ODUuNTY2LTEuNzQyaDEuODMybC41NjYgMS43NDJMMTIgMTMuNzFsLTEuNDgyLTEuMDc3Wm0yLjA2LTIuNzg1aC0xLjE1NEwxMiA4LjA3MmwuNTc3IDEuNzc2Wm0xLjc5MiAyLjE0LS4zNTctMS4wOTdoMS44NjdsLTEuNTEgMS4wOThabS00LjM4My0xLjA5Ny0uMzU2IDEuMDk4LTEuNTEtMS4wOThoMS44NjZabS0uMzg1IDQuNTYyLjU3Ny0xLjc3Ni45MzQuNjc4LTEuNTEgMS4wOThabTMuMjg2LTEuMDk4LjkzNC0uNjc4LjU3NiAxLjc3Ni0xLjUxLTEuMDk4WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MACircleIcon';
}

export default RefIcon;
