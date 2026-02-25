// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#6DA544" d="M23.254 16.174c.482-1.3.746-2.706.746-4.173 0-1.468-.264-2.874-.746-4.174L12 6.783.746 7.827A11.974 11.974 0 0 0 0 12c0 1.467.264 2.873.746 4.173L12 17.218l11.254-1.044Z"/>
    <path fill="#FFDA44" d="M23.254 7.827C21.558 3.257 17.16 0 12 0 6.84 0 2.442 3.257.746 7.827h22.508Z"/>
    <path fill="#D80027" d="M12 24c5.16 0 9.558-3.257 11.254-7.827H.746C2.442 20.743 6.84 23.999 12 23.999Z"/>
    <path fill="#F0F0F0" d="M20.23 10.153h-6.287l-1.942-5.979-1.943 5.979H3.772l5.085 3.695-1.942 5.979L12 16.174l5.085 3.653-1.942-5.98 5.085-3.694Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mMCircleIconDefinition = svgToIconDefinition(
  mMCircleSvg,
  'mmcircle'
);

/**![MMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0yMy4yNTQgMTYuMTc0Yy40ODItMS4zLjc0Ni0yLjcwNi43NDYtNC4xNzMgMC0xLjQ2OC0uMjY0LTIuODc0LS43NDYtNC4xNzRMMTIgNi43ODMuNzQ2IDcuODI3QTExLjk3NCAxMS45NzQgMCAwIDAgMCAxMmMwIDEuNDY3LjI2NCAyLjg3My43NDYgNC4xNzNMMTIgMTcuMjE4bDExLjI1NC0xLjA0NFoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNMjMuMjU0IDcuODI3QzIxLjU1OCAzLjI1NyAxNy4xNiAwIDEyIDAgNi44NCAwIDIuNDQyIDMuMjU3Ljc0NiA3LjgyN2gyMi41MDhaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTEyIDI0YzUuMTYgMCA5LjU1OC0zLjI1NyAxMS4yNTQtNy44MjdILjc0NkMyLjQ0MiAyMC43NDMgNi44NCAyMy45OTkgMTIgMjMuOTk5WiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0yMC4yMyAxMC4xNTNoLTYuMjg3bC0xLjk0Mi01Ljk3OS0xLjk0MyA1Ljk3OUgzLjc3Mmw1LjA4NSAzLjY5NS0xLjk0MiA1Ljk3OUwxMiAxNi4xNzRsNS4wODUgMy42NTMtMS45NDItNS45OCA1LjA4NS0zLjY5NFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MMCircleIcon';
}

export default RefIcon;
