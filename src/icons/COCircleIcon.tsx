// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cOCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12l-12 1.043L0 12Z"/><path fill="#D80027" d="M1.606 18C3.68 21.587 7.558 24 12 24s8.32-2.413 10.394-6L12 17.218 1.606 18Z"/><path fill="#0052B4" d="M22.394 18A11.947 11.947 0 0 0 24 12H0c0 2.186.585 4.235 1.606 6h20.788Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const cOCircleIconDefinition = svgToIconDefinition(
  cOCircleSvg,
  'cocircle'
);

/**![COCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0wIDEyQzAgNS4zNzMgNS4zNzMgMCAxMiAwczEyIDUuMzczIDEyIDEybC0xMiAxLjA0M0wwIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xLjYwNiAxOEMzLjY4IDIxLjU4NyA3LjU1OCAyNCAxMiAyNHM4LjMyLTIuNDEzIDEwLjM5NC02TDEyIDE3LjIxOCAxLjYwNiAxOFoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMjIuMzk0IDE4QTExLjk0NyAxMS45NDcgMCAwIDAgMjQgMTJIMGMwIDIuMTg2LjU4NSA0LjIzNSAxLjYwNiA2aDIwLjc4OFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cOCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'COCircleIcon';
}

export default RefIcon;
