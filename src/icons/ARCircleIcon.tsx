// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#338AF3" d="M12 0A12 12 0 0 0 1.19 6.782h21.62A12 12 0 0 0 12 0Zm0 23.999a12 12 0 0 0 10.81-6.783H1.19A12 12 0 0 0 12.001 24Z"/>
    <path fill="#FFDA44" d="m15.586 12-1.465.69.78 1.419-1.591-.305-.202 1.608L12 14.23l-1.109 1.182-.201-1.608-1.592.305.78-1.42L8.414 12l1.466-.69-.78-1.419 1.59.305.202-1.608L12 9.771l1.108-1.183.202 1.608 1.591-.305-.78 1.42 1.465.69Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const aRCircleIconDefinition = svgToIconDefinition(
  aRCircleSvg,
  'arcircle'
);

/**![ARCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMiAwQTEyIDEyIDAgMCAwIDEuMTkgNi43ODJoMjEuNjJBMTIgMTIgMCAwIDAgMTIgMFptMCAyMy45OTlhMTIgMTIgMCAwIDAgMTAuODEtNi43ODNIMS4xOUExMiAxMiAwIDAgMCAxMi4wMDEgMjRaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTE1LjU4NiAxMi0xLjQ2NS42OS43OCAxLjQxOS0xLjU5MS0uMzA1LS4yMDIgMS42MDhMMTIgMTQuMjNsLTEuMTA5IDEuMTgyLS4yMDEtMS42MDgtMS41OTIuMzA1Ljc4LTEuNDJMOC40MTQgMTJsMS40NjYtLjY5LS43OC0xLjQxOSAxLjU5LjMwNS4yMDItMS42MDhMMTIgOS43NzFsMS4xMDgtMS4xODMuMjAyIDEuNjA4IDEuNTkxLS4zMDUtLjc4IDEuNDIgMS40NjUuNjlaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ARCircleIcon';
}

export default RefIcon;
