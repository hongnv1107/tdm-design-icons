// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lTCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#6DA544" d="M23.254 16.174c.482-1.3.746-2.706.746-4.174a11.98 11.98 0 0 0-.746-4.173L12 6.783.748 7.827A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.747 4.174L12 17.218l11.253-1.044Z"/><path fill="#FFDA44" d="M23.254 7.827C21.56 3.257 17.16 0 12 0 6.84 0 2.442 3.257.747 7.827h22.507Z"/><path fill="#D80027" d="M12 24c5.16 0 9.559-3.256 11.254-7.826H.747C2.442 20.744 6.84 24.001 12 24.001Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const lTCircleIconDefinition = svgToIconDefinition(
  lTCircleSvg,
  'ltcircle'
);

/**![LTCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0yMy4yNTQgMTYuMTc0Yy40ODItMS4zLjc0Ni0yLjcwNi43NDYtNC4xNzRhMTEuOTggMTEuOTggMCAwIDAtLjc0Ni00LjE3M0wxMiA2Ljc4My43NDggNy44MjdBMTEuOTczIDExLjk3MyAwIDAgMCAwIDEyYzAgMS40NjguMjY0IDIuODc0Ljc0NyA0LjE3NEwxMiAxNy4yMThsMTEuMjUzLTEuMDQ0WiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0yMy4yNTQgNy44MjdDMjEuNTYgMy4yNTcgMTcuMTYgMCAxMiAwIDYuODQgMCAyLjQ0MiAzLjI1Ny43NDcgNy44MjdoMjIuNTA3WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM1LjE2IDAgOS41NTktMy4yNTYgMTEuMjU0LTcuODI2SC43NDdDMi40NDIgMjAuNzQ0IDYuODQgMjQuMDAxIDEyIDI0LjAwMVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lTCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LTCircleIcon';
}

export default RefIcon;
