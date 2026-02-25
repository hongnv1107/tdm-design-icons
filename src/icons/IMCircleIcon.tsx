// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const iMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#F0F0F0" d="m16.444 8.044-.849 3.027-2.545-.47-1.638-3.377-4.425 1.57-.349-.983-1.158-.143.873 2.459 3.045-.779.866 2.439-2.106 3.107 3.573 3.047-.677.794.455 1.074 1.693-1.985-2.197-2.248 1.68-1.969 3.743.27.852-4.618 1.026.19.703-.931-2.566-.474Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const iMCircleIconDefinition = svgToIconDefinition(
  iMCircleSvg,
  'imcircle'
);

/**![IMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Im0xNi40NDQgOC4wNDQtLjg0OSAzLjAyNy0yLjU0NS0uNDctMS42MzgtMy4zNzctNC40MjUgMS41Ny0uMzQ5LS45ODMtMS4xNTgtLjE0My44NzMgMi40NTkgMy4wNDUtLjc3OS44NjYgMi40MzktMi4xMDYgMy4xMDcgMy41NzMgMy4wNDctLjY3Ny43OTQuNDU1IDEuMDc0IDEuNjkzLTEuOTg1LTIuMTk3LTIuMjQ4IDEuNjgtMS45NjkgMy43NDMuMjcuODUyLTQuNjE4IDEuMDI2LjE5LjcwMy0uOTMxLTIuNTY2LS40NzRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={iMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IMCircleIcon';
}

export default RefIcon;
