// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cDCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="m6.505 22.67 8.816-7.35 7.35-8.816a12.053 12.053 0 0 0-5.169-5.172L8.68 8.679 1.333 17.5a12.052 12.052 0 0 0 5.172 5.169Z"/>
    <path fill="#D80027" d="M20.485 20.485c3.786-3.786 4.513-9.472 2.182-13.988l-16.17 16.17c4.517 2.33 10.203 1.604 13.988-2.182Z"/>
    <path fill="#6DA544" d="M3.514 3.514C-.27 7.3-.998 12.984 1.334 17.5L17.502 1.33C12.986-.998 7.3-.271 3.514 3.515Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cDCircleIconDefinition = svgToIconDefinition(
  cDCircleSvg,
  'cdcircle'
);

/**![CDCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Im02LjUwNSAyMi42NyA4LjgxNi03LjM1IDcuMzUtOC44MTZhMTIuMDUzIDEyLjA1MyAwIDAgMC01LjE2OS01LjE3Mkw4LjY4IDguNjc5IDEuMzMzIDE3LjVhMTIuMDUyIDEyLjA1MiAwIDAgMCA1LjE3MiA1LjE2OVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjAuNDg1IDIwLjQ4NWMzLjc4Ni0zLjc4NiA0LjUxMy05LjQ3MiAyLjE4Mi0xMy45ODhsLTE2LjE3IDE2LjE3YzQuNTE3IDIuMzMgMTAuMjAzIDEuNjA0IDEzLjk4OC0yLjE4MloiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMy41MTQgMy41MTRDLS4yNyA3LjMtLjk5OCAxMi45ODQgMS4zMzQgMTcuNUwxNy41MDIgMS4zM0MxMi45ODYtLjk5OCA3LjMtLjI3MSAzLjUxNCAzLjUxNVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cDCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CDCircleIcon';
}

export default RefIcon;
