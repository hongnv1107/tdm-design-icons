// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bBCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M17.217 1.19A11.952 11.952 0 0 0 12 0c-1.87 0-3.64.428-5.218 1.19L5.74 12l1.043 10.81A11.953 11.953 0 0 0 12 24c1.87 0 3.64-.428 5.217-1.19L18.261 12 17.217 1.19Z"/>
    <path fill="#0052B4" d="M6.782 1.19A12 12 0 0 0 0 12a12 12 0 0 0 6.782 10.81V1.19Zm10.435 0v21.62A12 12 0 0 0 24 12c0-4.757-2.769-8.868-6.783-10.81Z"/>
    <path fill="#000" d="m15.652 7.303-.7-.35c-.042.085-.956 1.945-1.105 4.785h-1.064V7.303L12 6.26l-.783 1.043v4.435h-1.064c-.15-2.84-1.063-4.7-1.105-4.785l-1.4.7c.01.02.96 1.956.96 4.868v.782h2.61v4.435h1.565v-4.435h2.608v-.782c0-1.506.26-2.747.48-3.524.238-.846.48-1.34.482-1.345l-.7-.349Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const bBCircleIconDefinition = svgToIconDefinition(
  bBCircleSvg,
  'bbcircle'
);

/**![BBCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNy4yMTcgMS4xOUExMS45NTIgMTEuOTUyIDAgMCAwIDEyIDBjLTEuODcgMC0zLjY0LjQyOC01LjIxOCAxLjE5TDUuNzQgMTJsMS4wNDMgMTAuODFBMTEuOTUzIDExLjk1MyAwIDAgMCAxMiAyNGMxLjg3IDAgMy42NC0uNDI4IDUuMjE3LTEuMTlMMTguMjYxIDEyIDE3LjIxNyAxLjE5WiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik02Ljc4MiAxLjE5QTEyIDEyIDAgMCAwIDAgMTJhMTIgMTIgMCAwIDAgNi43ODIgMTAuODFWMS4xOVptMTAuNDM1IDB2MjEuNjJBMTIgMTIgMCAwIDAgMjQgMTJjMC00Ljc1Ny0yLjc2OS04Ljg2OC02Ljc4My0xMC44MVoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJtMTUuNjUyIDcuMzAzLS43LS4zNWMtLjA0Mi4wODUtLjk1NiAxLjk0NS0xLjEwNSA0Ljc4NWgtMS4wNjRWNy4zMDNMMTIgNi4yNmwtLjc4MyAxLjA0M3Y0LjQzNWgtMS4wNjRjLS4xNS0yLjg0LTEuMDYzLTQuNy0xLjEwNS00Ljc4NWwtMS40LjdjLjAxLjAyLjk2IDEuOTU2Ljk2IDQuODY4di43ODJoMi42MXY0LjQzNWgxLjU2NXYtNC40MzVoMi42MDh2LS43ODJjMC0xLjUwNi4yNi0yLjc0Ny40OC0zLjUyNC4yMzgtLjg0Ni40OC0xLjM0LjQ4Mi0xLjM0NWwtLjctLjM0OVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bBCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BBCircleIcon';
}

export default RefIcon;
