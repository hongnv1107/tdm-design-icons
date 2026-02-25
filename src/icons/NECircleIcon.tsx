// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const nECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M1.19 6.782A11.952 11.952 0 0 0 0 12c0 1.87.427 3.64 1.19 5.218L12 18.26l10.809-1.043A11.953 11.953 0 0 0 23.999 12c0-1.87-.427-3.64-1.19-5.218L11.999 5.74 1.19 6.782Z"/>
    <path fill="#6DA544" d="M1.19 17.218A12 12 0 0 0 12 24.001a12 12 0 0 0 10.808-6.783H1.191Z"/>
    <path fill="#FF9811" d="M1.19 6.782h21.62A12 12 0 0 0 11.999 0 12 12 0 0 0 1.19 6.782ZM12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const nECircleIconDefinition = svgToIconDefinition(
  nECircleSvg,
  'necircle'
);

/**![NECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xLjE5IDYuNzgyQTExLjk1MiAxMS45NTIgMCAwIDAgMCAxMmMwIDEuODcuNDI3IDMuNjQgMS4xOSA1LjIxOEwxMiAxOC4yNmwxMC44MDktMS4wNDNBMTEuOTUzIDExLjk1MyAwIDAgMCAyMy45OTkgMTJjMC0xLjg3LS40MjctMy42NC0xLjE5LTUuMjE4TDExLjk5OSA1Ljc0IDEuMTkgNi43ODJaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTEuMTkgMTcuMjE4QTEyIDEyIDAgMCAwIDEyIDI0LjAwMWExMiAxMiAwIDAgMCAxMC44MDgtNi43ODNIMS4xOTFaIi8+PHBhdGggZmlsbD0iI0ZGOTgxMSIgZD0iTTEuMTkgNi43ODJoMjEuNjJBMTIgMTIgMCAwIDAgMTEuOTk5IDAgMTIgMTIgMCAwIDAgMS4xOSA2Ljc4MlpNMTIgMTYuMTc0YTQuMTc0IDQuMTc0IDAgMSAwIDAtOC4zNDggNC4xNzQgNC4xNzQgMCAwIDAgMCA4LjM0OFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={nECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NECircleIcon';
}

export default RefIcon;
