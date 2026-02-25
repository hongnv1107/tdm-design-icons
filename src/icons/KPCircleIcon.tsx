// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const kPCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M12 0a11.972 11.972 0 0 0-9.097 4.174h18.194A11.972 11.972 0 0 0 12 0Zm9.096 19.827H2.903A11.973 11.973 0 0 0 12 24a11.97 11.97 0 0 0 9.096-4.173Z"/>
    <path fill="#D80027" d="M22.239 5.739H1.76A11.945 11.945 0 0 0 0 12c0 2.294.644 4.438 1.761 6.26H22.24A11.942 11.942 0 0 0 24 12c0-2.294-.644-4.439-1.761-6.261Z"/>
    <path fill="#F0F0F0" d="M7.383 16.618a4.617 4.617 0 1 0 0-9.235 4.617 4.617 0 0 0 0 9.235Z"/>
    <path fill="#D80027" d="m7.383 7.383 1.035 3.189h3.358l-2.717 1.97 1.044 3.199-2.72-1.98-2.717 1.976 1.04-3.194-2.715-1.971h3.355l1.037-3.189Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const kPCircleIconDefinition = svgToIconDefinition(
  kPCircleSvg,
  'kpcircle'
);

/**![KPCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAwYTExLjk3MiAxMS45NzIgMCAwIDAtOS4wOTcgNC4xNzRoMTguMTk0QTExLjk3MiAxMS45NzIgMCAwIDAgMTIgMFptOS4wOTYgMTkuODI3SDIuOTAzQTExLjk3MyAxMS45NzMgMCAwIDAgMTIgMjRhMTEuOTcgMTEuOTcgMCAwIDAgOS4wOTYtNC4xNzNaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTIyLjIzOSA1LjczOUgxLjc2QTExLjk0NSAxMS45NDUgMCAwIDAgMCAxMmMwIDIuMjk0LjY0NCA0LjQzOCAxLjc2MSA2LjI2SDIyLjI0QTExLjk0MiAxMS45NDIgMCAwIDAgMjQgMTJjMC0yLjI5NC0uNjQ0LTQuNDM5LTEuNzYxLTYuMjYxWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik03LjM4MyAxNi42MThhNC42MTcgNC42MTcgMCAxIDAgMC05LjIzNSA0LjYxNyA0LjYxNyAwIDAgMCAwIDkuMjM1WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im03LjM4MyA3LjM4MyAxLjAzNSAzLjE4OWgzLjM1OGwtMi43MTcgMS45NyAxLjA0NCAzLjE5OS0yLjcyLTEuOTgtMi43MTcgMS45NzYgMS4wNC0zLjE5NC0yLjcxNS0xLjk3MWgzLjM1NWwxLjAzNy0zLjE4OVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={kPCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'KPCircleIcon';
}

export default RefIcon;
