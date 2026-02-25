// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sVCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#0052B4" d="M12 0A12 12 0 0 0 1.19 6.782h21.62A12 12 0 0 0 12 0Zm0 23.999a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12 24Z"/>
    <path fill="#FFDA44" d="M9.59 12.523 12 8.349l2.41 4.174H9.59Z"/>
    <path fill="#6DA544" d="M15.13 13.9 12 15.465 8.87 13.9v-2.087h6.26V13.9Z"/>
    <path fill="#FFDA44" d="m14.952 8.527-1.107 1.107a2.609 2.609 0 1 1-3.69 0L9.05 8.527a4.174 4.174 0 1 0 5.903 0Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const sVCircleIconDefinition = svgToIconDefinition(
  sVCircleSvg,
  'svcircle'
);

/**![SVCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkgNi43ODJoMjEuNjJBMTIgMTIgMCAwIDAgMTIgMFptMCAyMy45OTlhMTIgMTIgMCAwIDAgMTAuODEtNi43ODNIMS4xOUExMiAxMiAwIDAgMCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNOS41OSAxMi41MjMgMTIgOC4zNDlsMi40MSA0LjE3NEg5LjU5WiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xNS4xMyAxMy45IDEyIDE1LjQ2NSA4Ljg3IDEzLjl2LTIuMDg3aDYuMjZWMTMuOVoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJtMTQuOTUyIDguNTI3LTEuMTA3IDEuMTA3YTIuNjA5IDIuNjA5IDAgMSAxLTMuNjkgMEw5LjA1IDguNTI3YTQuMTc0IDQuMTc0IDAgMSAwIDUuOTAzIDBaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sVCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SVCircleIcon';
}

export default RefIcon;
