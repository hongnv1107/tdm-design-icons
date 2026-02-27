// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const iECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#FF9811" d="M24 12c0-5.16-3.257-9.56-7.826-11.255v22.507C20.744 21.557 24 17.159 24 11.999Z"/><path fill="#6DA544" d="M0 12c0 5.16 3.256 9.558 7.826 11.253V.746C3.256 2.442 0 6.84 0 12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const iECircleIconDefinition = svgToIconDefinition(
  iECircleSvg,
  'iecircle'
);

/**![IECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGRjk4MTEiIGQ9Ik0yNCAxMmMwLTUuMTYtMy4yNTctOS41Ni03LjgyNi0xMS4yNTV2MjIuNTA3QzIwLjc0NCAyMS41NTcgMjQgMTcuMTU5IDI0IDExLjk5OVoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMCAxMmMwIDUuMTYgMy4yNTYgOS41NTggNy44MjYgMTEuMjUzVi43NDZDMy4yNTYgMi40NDIgMCA2Ljg0IDAgMTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={iECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'IECircleIcon';
}

export default RefIcon;
