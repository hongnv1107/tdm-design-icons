// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#A2001D" d="M23.253 7.827H.746A11.971 11.971 0 0 0 0 12c0 1.468.264 2.875.746 4.175h22.507c.483-1.3.747-2.707.747-4.175a11.97 11.97 0 0 0-.747-4.173Z"/>
    <path fill="#6DA544" d="M12.035 24.001c4.11 0 7.737-2.067 9.9-5.217h-19.8a11.986 11.986 0 0 0 9.9 5.217ZM12.034 0c4.11 0 7.737 2.067 9.9 5.218h-19.8A11.986 11.986 0 0 1 12.034 0Z"/>
    <path fill="#FFDA44" d="m12 7.827 1.036 3.188h3.352l-2.712 1.971 1.036 3.189L12 14.204l-2.713 1.97 1.036-3.188-2.712-1.97h3.353L12 7.825Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const sRCircleIconDefinition = svgToIconDefinition(
  sRCircleSvg,
  'srcircle'
);

/**![SRCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNBMjAwMUQiIGQ9Ik0yMy4yNTMgNy44MjdILjc0NkExMS45NzEgMTEuOTcxIDAgMCAwIDAgMTJjMCAxLjQ2OC4yNjQgMi44NzUuNzQ2IDQuMTc1aDIyLjUwN2MuNDgzLTEuMy43NDctMi43MDcuNzQ3LTQuMTc1YTExLjk3IDExLjk3IDAgMCAwLS43NDctNC4xNzNaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTEyLjAzNSAyNC4wMDFjNC4xMSAwIDcuNzM3LTIuMDY3IDkuOS01LjIxN2gtMTkuOGExMS45ODYgMTEuOTg2IDAgMCAwIDkuOSA1LjIxN1pNMTIuMDM0IDBjNC4xMSAwIDcuNzM3IDIuMDY3IDkuOSA1LjIxOGgtMTkuOEExMS45ODYgMTEuOTg2IDAgMCAxIDEyLjAzNCAwWiIvPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Im0xMiA3LjgyNyAxLjAzNiAzLjE4OGgzLjM1MmwtMi43MTIgMS45NzEgMS4wMzYgMy4xODlMMTIgMTQuMjA0bC0yLjcxMyAxLjk3IDEuMDM2LTMuMTg4LTIuNzEyLTEuOTdoMy4zNTNMMTIgNy44MjVaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SRCircleIcon';
}

export default RefIcon;
