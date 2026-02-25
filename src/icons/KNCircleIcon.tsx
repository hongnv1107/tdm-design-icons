// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const kNCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#000" d="M3.515 20.485c.503.503 1.04.953 1.604 1.348L21.833 5.119a12.057 12.057 0 0 0-2.951-2.952L2.168 18.881c.395.564.844 1.1 1.347 1.604Z"/>
    <path fill="#6DA544" d="M3.514 3.515C-.27 7.3-.998 12.986 1.333 17.502L17.502 1.333C12.986-.997 7.3-.27 3.514 3.515Z"/>
    <path fill="#D80027" d="M20.485 20.485c3.786-3.786 4.513-9.472 2.182-13.988l-16.17 16.17c4.517 2.33 10.203 1.603 13.988-2.182Z"/>
    <path fill="#F0F0F0" d="m7.63 14.158 1.12.57.889-.889-.197 1.242 1.12.571-1.241.197-.197 1.241-.57-1.12-1.242.197.889-.89-.571-1.12Zm6.526-6.528 1.12.571.89-.889-.197 1.242 1.12.57-1.242.198-.197 1.241-.57-1.12-1.242.197.889-.89-.57-1.12Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const kNCircleIconDefinition = svgToIconDefinition(
  kNCircleSvg,
  'kncircle'
);

/**![KNCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0zLjUxNSAyMC40ODVjLjUwMy41MDMgMS4wNC45NTMgMS42MDQgMS4zNDhMMjEuODMzIDUuMTE5YTEyLjA1NyAxMi4wNTcgMCAwIDAtMi45NTEtMi45NTJMMi4xNjggMTguODgxYy4zOTUuNTY0Ljg0NCAxLjEgMS4zNDcgMS42MDRaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTMuNTE0IDMuNTE1Qy0uMjcgNy4zLS45OTggMTIuOTg2IDEuMzMzIDE3LjUwMkwxNy41MDIgMS4zMzNDMTIuOTg2LS45OTcgNy4zLS4yNyAzLjUxNCAzLjUxNVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMjAuNDg1IDIwLjQ4NWMzLjc4Ni0zLjc4NiA0LjUxMy05LjQ3MiAyLjE4Mi0xMy45ODhsLTE2LjE3IDE2LjE3YzQuNTE3IDIuMzMgMTAuMjAzIDEuNjAzIDEzLjk4OC0yLjE4MloiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJtNy42MyAxNC4xNTggMS4xMi41Ny44ODktLjg4OS0uMTk3IDEuMjQyIDEuMTIuNTcxLTEuMjQxLjE5Ny0uMTk3IDEuMjQxLS41Ny0xLjEyLTEuMjQyLjE5Ny44ODktLjg5LS41NzEtMS4xMlptNi41MjYtNi41MjggMS4xMi41NzEuODktLjg4OS0uMTk3IDEuMjQyIDEuMTIuNTctMS4yNDIuMTk4LS4xOTcgMS4yNDEtLjU3LTEuMTItMS4yNDIuMTk3Ljg4OS0uODktLjU3LTEuMTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={kNCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'KNCircleIcon';
}

export default RefIcon;
