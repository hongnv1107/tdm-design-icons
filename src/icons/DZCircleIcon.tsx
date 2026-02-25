// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const dZCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 0c6.628 0 12 5.373 12 12s-5.372 12-12 12c0-.522-1.565-12-1.565-12L12 0Z"/>
    <path fill="#496E2D" d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0"/>
    <path fill="#D80027" d="m14.578 9.699-.985 1.357L12 10.537l.986 1.356-.984 1.357 1.594-.52.986 1.356-.001-1.676 1.594-.519-1.595-.517-.001-1.676Z"/>
    <path fill="#D80027" d="M12.995 15.392a3.391 3.391 0 1 1 1.613-6.375 4.174 4.174 0 1 0 0 5.967c-.48.26-1.029.408-1.613.408Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const dZCircleIconDefinition = svgToIconDefinition(
  dZCircleSvg,
  'dzcircle'
);

/**![DZCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAwYzYuNjI4IDAgMTIgNS4zNzMgMTIgMTJzLTUuMzcyIDEyLTEyIDEyYzAtLjUyMi0xLjU2NS0xMi0xLjU2NS0xMkwxMiAwWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0xMiAyNEM1LjM3MyAyNCAwIDE4LjYyNyAwIDEyUzUuMzczIDAgMTIgMCIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im0xNC41NzggOS42OTktLjk4NSAxLjM1N0wxMiAxMC41MzdsLjk4NiAxLjM1Ni0uOTg0IDEuMzU3IDEuNTk0LS41Mi45ODYgMS4zNTYtLjAwMS0xLjY3NiAxLjU5NC0uNTE5LTEuNTk1LS41MTctLjAwMS0xLjY3NloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTIuOTk1IDE1LjM5MmEzLjM5MSAzLjM5MSAwIDEgMSAxLjYxMy02LjM3NSA0LjE3NCA0LjE3NCAwIDEgMCAwIDUuOTY3Yy0uNDguMjYtMS4wMjkuNDA4LTEuNjEzLjQwOFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={dZCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'DZCircleIcon';
}

export default RefIcon;
