// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const iNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#FF9811" d="M12 0A12 12 0 0 0 1.19 6.782h21.62A12 12 0 0 0 12 0Z"/>
    <path fill="#6DA544" d="M12 24c4.758 0 8.868-2.769 10.81-6.783H1.19A12 12 0 0 0 12 24Z"/>
    <path fill="#0052B4" d="M12 16.173a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"/>
    <path fill="#F0F0F0" d="M12 14.608a2.609 2.609 0 1 0 0-5.217 2.609 2.609 0 0 0 0 5.217Z"/>
    <path fill="#0052B4" d="m12 8.78.805 1.826 1.983-.216L13.61 12l1.178 1.61-1.983-.216L12 15.219l-.805-1.825-1.983.216L10.391 12l-1.179-1.61 1.983.216L12 8.781Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const iNCircleIconDefinition = svgToIconDefinition(
  iNCircleSvg,
  'incircle'
);

/**![INCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkgNi43ODJoMjEuNjJBMTIgMTIgMCAwIDAgMTIgMFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMTIgMjRjNC43NTggMCA4Ljg2OC0yLjc2OSAxMC44MS02Ljc4M0gxLjE5QTEyIDEyIDAgMCAwIDEyIDI0WiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAxNi4xNzNhNC4xNzQgNC4xNzQgMCAxIDAgMC04LjM0OCA0LjE3NCA0LjE3NCAwIDAgMCAwIDguMzQ4WiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAxNC42MDhhMi42MDkgMi42MDkgMCAxIDAgMC01LjIxNyAyLjYwOSAyLjYwOSAwIDAgMCAwIDUuMjE3WiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Im0xMiA4Ljc4LjgwNSAxLjgyNiAxLjk4My0uMjE2TDEzLjYxIDEybDEuMTc4IDEuNjEtMS45ODMtLjIxNkwxMiAxNS4yMTlsLS44MDUtMS44MjUtMS45ODMuMjE2TDEwLjM5MSAxMmwtMS4xNzktMS42MSAxLjk4My4yMTZMMTIgOC43ODFaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={iNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'INCircleIcon';
}

export default RefIcon;
