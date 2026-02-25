// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const gACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FFDA44" d="M23.253 16.175c.482-1.3.747-2.706.747-4.174 0-1.468-.265-2.874-.747-4.174L12 6.784.746 7.827A11.974 11.974 0 0 0 0 12.001c0 1.468.264 2.874.746 4.174L12 17.218l11.253-1.043Z"/>
    <path fill="#0052B4" d="M12 24c5.16 0 9.558-3.257 11.254-7.826H.747C2.442 20.744 6.84 24 12 24Z"/>
    <path fill="#6DA544" d="M12 0C6.84 0 2.441 3.259.746 7.828h22.507C21.558 3.257 17.16.001 12 .001Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const gACircleIconDefinition = svgToIconDefinition(
  gACircleSvg,
  'gacircle'
);

/**![GACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0yMy4yNTMgMTYuMTc1Yy40ODItMS4zLjc0Ny0yLjcwNi43NDctNC4xNzQgMC0xLjQ2OC0uMjY1LTIuODc0LS43NDctNC4xNzRMMTIgNi43ODQuNzQ2IDcuODI3QTExLjk3NCAxMS45NzQgMCAwIDAgMCAxMi4wMDFjMCAxLjQ2OC4yNjQgMi44NzQuNzQ2IDQuMTc0TDEyIDE3LjIxOGwxMS4yNTMtMS4wNDNaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTEyIDI0YzUuMTYgMCA5LjU1OC0zLjI1NyAxMS4yNTQtNy44MjZILjc0N0MyLjQ0MiAyMC43NDQgNi44NCAyNCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjNkRBNTQ0IiBkPSJNMTIgMEM2Ljg0IDAgMi40NDEgMy4yNTkuNzQ2IDcuODI4aDIyLjUwN0MyMS41NTggMy4yNTcgMTcuMTYuMDAxIDEyIC4wMDFaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={gACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'GACircleIcon';
}

export default RefIcon;
