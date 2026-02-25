// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mYCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M11.478 12H24a12.01 12.01 0 0 0-.413-3.13H11.478V12Zm0-6.261h10.76a12.062 12.062 0 0 0-2.768-3.13h-7.992v3.13ZM12 24c2.824 0 5.42-.976 7.47-2.608H4.53A11.948 11.948 0 0 0 12 24ZM1.761 18.26H22.24a11.926 11.926 0 0 0 1.348-3.13H.414c.3 1.116.758 2.168 1.347 3.13Z"/>
    <path fill="#0052B4" d="M12 12V0C5.373 0 0 5.373 0 12h12Z"/>
    <path fill="#FFDA44" d="M7.98 10.27a2.967 2.967 0 1 1 1.412-5.577 3.652 3.652 0 1 0 0 5.221c-.42.228-.9.357-1.412.357Z"/>
    <path fill="#FFDA44" d="m8.817 5.217.526 1.102 1.19-.275L10 7.143l.957.759-1.191.268.003 1.221-.952-.764-.953.764.003-1.22-1.191-.27.957-.758L7.1 6.044l1.19.275.527-1.102Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mYCircleIconDefinition = svgToIconDefinition(
  mYCircleSvg,
  'mycircle'
);

/**![MYCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMS40NzggMTJIMjRhMTIuMDEgMTIuMDEgMCAwIDAtLjQxMy0zLjEzSDExLjQ3OFYxMlptMC02LjI2MWgxMC43NmExMi4wNjIgMTIuMDYyIDAgMCAwLTIuNzY4LTMuMTNoLTcuOTkydjMuMTNaTTEyIDI0YzIuODI0IDAgNS40Mi0uOTc2IDcuNDctMi42MDhINC41M0ExMS45NDggMTEuOTQ4IDAgMCAwIDEyIDI0Wk0xLjc2MSAxOC4yNkgyMi4yNGExMS45MjYgMTEuOTI2IDAgMCAwIDEuMzQ4LTMuMTNILjQxNGMuMyAxLjExNi43NTggMi4xNjggMS4zNDcgMy4xM1oiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMTJWMEM1LjM3MyAwIDAgNS4zNzMgMCAxMmgxMloiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNNy45OCAxMC4yN2EyLjk2NyAyLjk2NyAwIDEgMSAxLjQxMi01LjU3NyAzLjY1MiAzLjY1MiAwIDEgMCAwIDUuMjIxYy0uNDIuMjI4LS45LjM1Ny0xLjQxMi4zNTdaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTguODE3IDUuMjE3LjUyNiAxLjEwMiAxLjE5LS4yNzVMMTAgNy4xNDNsLjk1Ny43NTktMS4xOTEuMjY4LjAwMyAxLjIyMS0uOTUyLS43NjQtLjk1My43NjQuMDAzLTEuMjItMS4xOTEtLjI3Ljk1Ny0uNzU4TDcuMSA2LjA0NGwxLjE5LjI3NS41MjctMS4xMDJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mYCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MYCircleIcon';
}

export default RefIcon;
