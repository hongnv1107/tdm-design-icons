// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pKCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#F0F0F0" d="M0 12c0 4.549 2.53 8.506 6.261 10.541V1.46A11.997 11.997 0 0 0 0 12Z"/><path fill="#496E2D" d="M12 0C9.921 0 7.966.53 6.261 1.46v21.08C7.966 23.471 9.921 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Z"/><path fill="#F0F0F0" d="M17.13 13.986a3.391 3.391 0 1 1-2.425-6.112 4.174 4.174 0 1 0 3.495 4.837 3.376 3.376 0 0 1-1.07 1.275Zm-.064-6.159.855.922 1.141-.529-.612 1.098.855.922-1.234-.243-.612 1.098-.15-1.248-1.234-.243 1.141-.528-.15-1.249Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const pKCircleIconDefinition = svgToIconDefinition(
  pKCircleSvg,
  'pkcircle'
);

/**![PKCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0wIDEyYzAgNC41NDkgMi41MyA4LjUwNiA2LjI2MSAxMC41NDFWMS40NkExMS45OTcgMTEuOTk3IDAgMCAwIDAgMTJaIi8+PHBhdGggZmlsbD0iIzQ5NkUyRCIgZD0iTTEyIDBDOS45MjEgMCA3Ljk2Ni41MyA2LjI2MSAxLjQ2djIxLjA4QzcuOTY2IDIzLjQ3MSA5LjkyMSAyNCAxMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDBaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTE3LjEzIDEzLjk4NmEzLjM5MSAzLjM5MSAwIDEgMS0yLjQyNS02LjExMiA0LjE3NCA0LjE3NCAwIDEgMCAzLjQ5NSA0LjgzNyAzLjM3NiAzLjM3NiAwIDAgMS0xLjA3IDEuMjc1Wm0tLjA2NC02LjE1OS44NTUuOTIyIDEuMTQxLS41MjktLjYxMiAxLjA5OC44NTUuOTIyLTEuMjM0LS4yNDMtLjYxMiAxLjA5OC0uMTUtMS4yNDgtMS4yMzQtLjI0MyAxLjE0MS0uNTI4LS4xNS0xLjI0OVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pKCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PKCircleIcon';
}

export default RefIcon;
