// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const jOCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#000" d="M7.304 7.826h15.95C21.557 3.256 17.159 0 12 0a11.961 11.961 0 0 0-8.485 3.515l3.79 4.311Z"/>
    <path fill="#6DA544" d="M7.304 16.174h15.95C21.557 20.744 17.159 24 12 24a11.96 11.96 0 0 1-8.485-3.515l3.79-4.31Z"/>
    <path fill="#D80027" d="M3.515 3.514c-4.687 4.686-4.687 12.284 0 16.97L12 12 3.515 3.514Z"/>
    <path fill="#F0F0F0" d="m4.763 9.392.658 1.377 1.488-.344-.666 1.374 1.196.948-1.49.336.005 1.526-1.191-.955-1.191.955.004-1.526-1.489-.336 1.196-.948-.666-1.374 1.487.344.659-1.377Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const jOCircleIconDefinition = svgToIconDefinition(
  jOCircleSvg,
  'jocircle'
);

/**![JOCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik03LjMwNCA3LjgyNmgxNS45NUMyMS41NTcgMy4yNTYgMTcuMTU5IDAgMTIgMGExMS45NjEgMTEuOTYxIDAgMCAwLTguNDg1IDMuNTE1bDMuNzkgNC4zMTFaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTcuMzA0IDE2LjE3NGgxNS45NUMyMS41NTcgMjAuNzQ0IDE3LjE1OSAyNCAxMiAyNGExMS45NiAxMS45NiAwIDAgMS04LjQ4NS0zLjUxNWwzLjc5LTQuMzFaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTMuNTE1IDMuNTE0Yy00LjY4NyA0LjY4Ni00LjY4NyAxMi4yODQgMCAxNi45N0wxMiAxMiAzLjUxNSAzLjUxNFoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJtNC43NjMgOS4zOTIuNjU4IDEuMzc3IDEuNDg4LS4zNDQtLjY2NiAxLjM3NCAxLjE5Ni45NDgtMS40OS4zMzYuMDA1IDEuNTI2LTEuMTkxLS45NTUtMS4xOTEuOTU1LjAwNC0xLjUyNi0xLjQ4OS0uMzM2IDEuMTk2LS45NDgtLjY2Ni0xLjM3NCAxLjQ4Ny4zNDQuNjU5LTEuMzc3WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={jOCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'JOCircleIcon';
}

export default RefIcon;
