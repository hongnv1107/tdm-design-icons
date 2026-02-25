// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M16.174.746A11.974 11.974 0 0 0 12 0c-1.467 0-2.874.264-4.173.746L7.304 12l.521 11.254c1.3.482 2.707.746 4.174.746a11.96 11.96 0 0 0 4.174-.747L16.696 12 16.174.746Z"/>
    <path fill="#D80027" d="M0 12c0 5.16 3.257 9.558 7.826 11.254V.746C3.256 2.442 0 6.841 0 12Z"/>
    <path fill="#6DA544" d="M24 12c0-5.16-3.256-9.558-7.826-11.254v22.507C20.744 21.558 24 17.16 24 12Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gNCircleIconDefinition = svgToIconDefinition(
  gNCircleSvg,
  'gncircle'
);

/**![GNCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xNi4xNzQuNzQ2QTExLjk3NCAxMS45NzQgMCAwIDAgMTIgMGMtMS40NjcgMC0yLjg3NC4yNjQtNC4xNzMuNzQ2TDcuMzA0IDEybC41MjEgMTEuMjU0YzEuMy40ODIgMi43MDcuNzQ2IDQuMTc0Ljc0NmExMS45NiAxMS45NiAwIDAgMCA0LjE3NC0uNzQ3TDE2LjY5NiAxMiAxNi4xNzQuNzQ2WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0wIDEyYzAgNS4xNiAzLjI1NyA5LjU1OCA3LjgyNiAxMS4yNTRWLjc0NkMzLjI1NiAyLjQ0MiAwIDYuODQxIDAgMTJaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTI0IDEyYzAtNS4xNi0zLjI1Ni05LjU1OC03LjgyNi0xMS4yNTR2MjIuNTA3QzIwLjc0NCAyMS41NTggMjQgMTcuMTYgMjQgMTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GNCircleIcon';
}

export default RefIcon;
