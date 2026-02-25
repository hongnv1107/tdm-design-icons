// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M17.218 1.19A11.952 11.952 0 0 0 12 0c-1.87 0-3.64.428-5.217 1.19L5.739 12l1.044 10.81A11.953 11.953 0 0 0 12 24c1.87 0 3.64-.428 5.218-1.19L18.26 12 17.218 1.19Z"/>
    <path fill="#496E2D" d="m12 7.826 1.036 3.189h3.353l-2.712 1.97 1.036 3.189L12 14.204l-2.712 1.97 1.036-3.189-2.712-1.97h3.352L12 7.825ZM6.783 1.19A12 12 0 0 0 0 12c0 4.757 2.769 8.869 6.783 10.81V1.19Z"/>
    <path fill="#D80027" d="M17.218 1.19v21.62A12 12 0 0 0 24 12c0-4.757-2.769-8.868-6.782-10.81Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const sNCircleIconDefinition = svgToIconDefinition(
  sNCircleSvg,
  'sncircle'
);

/**![SNCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNy4yMTggMS4xOUExMS45NTIgMTEuOTUyIDAgMCAwIDEyIDBjLTEuODcgMC0zLjY0LjQyOC01LjIxNyAxLjE5TDUuNzM5IDEybDEuMDQ0IDEwLjgxQTExLjk1MyAxMS45NTMgMCAwIDAgMTIgMjRjMS44NyAwIDMuNjQtLjQyOCA1LjIxOC0xLjE5TDE4LjI2IDEyIDE3LjIxOCAxLjE5WiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Im0xMiA3LjgyNiAxLjAzNiAzLjE4OWgzLjM1M2wtMi43MTIgMS45NyAxLjAzNiAzLjE4OUwxMiAxNC4yMDRsLTIuNzEyIDEuOTcgMS4wMzYtMy4xODktMi43MTItMS45N2gzLjM1MkwxMiA3LjgyNVpNNi43ODMgMS4xOUExMiAxMiAwIDAgMCAwIDEyYzAgNC43NTcgMi43NjkgOC44NjkgNi43ODMgMTAuODFWMS4xOVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTcuMjE4IDEuMTl2MjEuNjJBMTIgMTIgMCAwIDAgMjQgMTJjMC00Ljc1Ny0yLjc2OS04Ljg2OC02Ljc4Mi0xMC44MVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SNCircleIcon';
}

export default RefIcon;
