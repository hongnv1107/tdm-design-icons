// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const eGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M12 0C6.84 0 2.442 3.256.747 7.826h22.507C21.558 3.256 17.16 0 12 0Z"/>
    <path fill="#000" d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.747C2.442 20.744 6.84 24 12 24Z"/>
    <path fill="#FF9811" d="M16.174 10.696h-3.13a1.043 1.043 0 0 0-2.088 0h-3.13c0 .576.502 1.043 1.078 1.043H8.87c0 .576.468 1.044 1.044 1.044 0 .576.467 1.043 1.043 1.043h2.087c.577 0 1.044-.467 1.044-1.043.576 0 1.043-.468 1.043-1.044h-.034c.576 0 1.078-.467 1.078-1.043Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const eGCircleIconDefinition = svgToIconDefinition(
  eGCircleSvg,
  'egcircle'
);

/**![EGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAwQzYuODQgMCAyLjQ0MiAzLjI1Ni43NDcgNy44MjZoMjIuNTA3QzIxLjU1OCAzLjI1NiAxNy4xNiAwIDEyIDBaIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTEyIDI0YzUuMTYgMCA5LjU1OC0zLjI1NiAxMS4yNTQtNy44MjZILjc0N0MyLjQ0MiAyMC43NDQgNi44NCAyNCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMTYuMTc0IDEwLjY5NmgtMy4xM2ExLjA0MyAxLjA0MyAwIDAgMC0yLjA4OCAwaC0zLjEzYzAgLjU3Ni41MDIgMS4wNDMgMS4wNzggMS4wNDNIOC44N2MwIC41NzYuNDY4IDEuMDQ0IDEuMDQ0IDEuMDQ0IDAgLjU3Ni40NjcgMS4wNDMgMS4wNDMgMS4wNDNoMi4wODdjLjU3NyAwIDEuMDQ0LS40NjcgMS4wNDQtMS4wNDMuNTc2IDAgMS4wNDMtLjQ2OCAxLjA0My0xLjA0NGgtLjAzNGMuNTc2IDAgMS4wNzgtLjQ2NyAxLjA3OC0xLjA0M1oiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={eGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EGCircleIcon';
}

export default RefIcon;
