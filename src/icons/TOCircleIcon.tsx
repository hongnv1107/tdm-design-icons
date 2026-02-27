// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tOCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#D80027" d="M7.826 6.261V4.696H6.261v1.565H4.696v1.566H6.26v1.565h1.565V7.827H9.39V6.26H7.826Z"/><path fill="#D80027" d="M12 0v12H0c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const tOCircleIconDefinition = svgToIconDefinition(
  tOCircleSvg,
  'tocircle'
);

/**![TOCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik03LjgyNiA2LjI2MVY0LjY5Nkg2LjI2MXYxLjU2NUg0LjY5NnYxLjU2Nkg2LjI2djEuNTY1aDEuNTY1VjcuODI3SDkuMzlWNi4yNkg3LjgyNloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTIgMHYxMkgwYzAgNi42MjcgNS4zNzMgMTIgMTIgMTJzMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tOCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TOCircleIcon';
}

export default RefIcon;
