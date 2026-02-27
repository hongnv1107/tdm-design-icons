// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const lSCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M0 12c0 1.87.428 3.64 1.19 5.217L12 17.74l10.81-.522A11.952 11.952 0 0 0 24 12c0-1.87-.428-3.64-1.19-5.218L12 6.261l-10.81.521A11.952 11.952 0 0 0 0 12Z"/><path fill="#6DA544" d="M12 24a12 12 0 0 0 10.81-6.783H1.19A12.001 12.001 0 0 0 12 24Z"/><path fill="#0052B4" d="M12 0A12.004 12.004 0 0 0 1.19 6.781h21.62A12 12 0 0 0 12 0Z"/><path fill="#000" d="M12.783 11.74V8.87h-1.565v2.87l-1.89 1.89a3.128 3.128 0 0 0 5.346 0l-1.891-1.89Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const lSCircleIconDefinition = svgToIconDefinition(
  lSCircleSvg,
  'lscircle'
);

/**![LSCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0wIDEyYzAgMS44Ny40MjggMy42NCAxLjE5IDUuMjE3TDEyIDE3Ljc0bDEwLjgxLS41MjJBMTEuOTUyIDExLjk1MiAwIDAgMCAyNCAxMmMwLTEuODctLjQyOC0zLjY0LTEuMTktNS4yMThMMTIgNi4yNjFsLTEwLjgxLjUyMUExMS45NTIgMTEuOTUyIDAgMCAwIDAgMTJaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTEyIDI0YTEyIDEyIDAgMCAwIDEwLjgxLTYuNzgzSDEuMTlBMTIuMDAxIDEyLjAwMSAwIDAgMCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMEExMi4wMDQgMTIuMDA0IDAgMCAwIDEuMTkgNi43ODFoMjEuNjJBMTIgMTIgMCAwIDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjMDAwIiBkPSJNMTIuNzgzIDExLjc0VjguODdoLTEuNTY1djIuODdsLTEuODkgMS44OWEzLjEyOCAzLjEyOCAwIDAgMCA1LjM0NiAwbC0xLjg5MS0xLjg5WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={lSCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LSCircleIcon';
}

export default RefIcon;
