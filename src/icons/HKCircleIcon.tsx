// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const hKCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#F0F0F0" d="M13.24 9.078c-.274 1.134-.758.918-.996 1.907a2.609 2.609 0 0 1 1.22-5.073c-.476 1.978.02 2.151-.225 3.166Zm-3.636.84c.995.61.64 1.004 1.507 1.535a2.609 2.609 0 1 1-4.448-2.727c1.734 1.064 2.052.646 2.941 1.192Zm-.324 3.717c.887-.757 1.152-.298 1.926-.958a2.609 2.609 0 0 1-3.968 3.387c1.547-1.32 1.248-1.752 2.042-2.429Zm3.435 1.456c-.446-1.077.073-1.187-.316-2.127a2.609 2.609 0 0 1 1.995 4.82c-.778-1.88-1.28-1.728-1.679-2.692Zm2.447-2.817c-1.163.091-1.107-.436-2.121-.357a2.609 2.609 0 0 1 5.201-.408c-2.029.16-2.04.684-3.08.765Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const hKCircleIconDefinition = svgToIconDefinition(
  hKCircleSvg,
  'hkcircle'
);

/**![HKCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMy4yNCA5LjA3OGMtLjI3NCAxLjEzNC0uNzU4LjkxOC0uOTk2IDEuOTA3YTIuNjA5IDIuNjA5IDAgMCAxIDEuMjItNS4wNzNjLS40NzYgMS45NzguMDIgMi4xNTEtLjIyNSAzLjE2NlptLTMuNjM2Ljg0Yy45OTUuNjEuNjQgMS4wMDQgMS41MDcgMS41MzVhMi42MDkgMi42MDkgMCAxIDEtNC40NDgtMi43MjdjMS43MzQgMS4wNjQgMi4wNTIuNjQ2IDIuOTQxIDEuMTkyWm0tLjMyNCAzLjcxN2MuODg3LS43NTcgMS4xNTItLjI5OCAxLjkyNi0uOTU4YTIuNjA5IDIuNjA5IDAgMCAxLTMuOTY4IDMuMzg3YzEuNTQ3LTEuMzIgMS4yNDgtMS43NTIgMi4wNDItMi40MjlabTMuNDM1IDEuNDU2Yy0uNDQ2LTEuMDc3LjA3My0xLjE4Ny0uMzE2LTIuMTI3YTIuNjA5IDIuNjA5IDAgMCAxIDEuOTk1IDQuODJjLS43NzgtMS44OC0xLjI4LTEuNzI4LTEuNjc5LTIuNjkyWm0yLjQ0Ny0yLjgxN2MtMS4xNjMuMDkxLTEuMTA3LS40MzYtMi4xMjEtLjM1N2EyLjYwOSAyLjYwOSAwIDAgMSA1LjIwMS0uNDA4Yy0yLjAyOS4xNi0yLjA0LjY4NC0zLjA4Ljc2NVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={hKCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HKCircleIcon';
}

export default RefIcon;
