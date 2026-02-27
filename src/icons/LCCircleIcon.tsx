// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lCCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#338AF3" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#F3F3F3" d="M7.565 16.174h8.87L12 5.739 7.565 16.174Z"/><path fill="#333" d="M9.107 15.13 12 8.55l2.894 6.581H9.107Z"/><path fill="#FFDA44" d="M7.565 16.174h8.87L12 12l-4.435 4.173Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const lCCircleIconDefinition = svgToIconDefinition(
  lCCircleSvg,
  'lccircle'
);

/**![LCCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGM0YzRjMiIGQ9Ik03LjU2NSAxNi4xNzRoOC44N0wxMiA1LjczOSA3LjU2NSAxNi4xNzRaIi8+PHBhdGggZmlsbD0iIzMzMyIgZD0iTTkuMTA3IDE1LjEzIDEyIDguNTVsMi44OTQgNi41ODFIOS4xMDdaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0iTTcuNTY1IDE2LjE3NGg4Ljg3TDEyIDEybC00LjQzNSA0LjE3M1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lCCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LCCircleIcon';
}

export default RefIcon;
