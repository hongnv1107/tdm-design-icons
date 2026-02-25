// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aTCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M23.254 16.173c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.782.748 7.825A11.974 11.974 0 0 0 0 12c0 1.468.265 2.874.747 4.174L12 17.217l11.253-1.044Z"/>
    <path fill="#D80027" d="M12 24c5.16 0 9.559-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24Zm0-24C6.84 0 2.442 3.256.747 7.825h22.507C21.56 3.255 17.16 0 12 0Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const aTCircleIconDefinition = svgToIconDefinition(
  aTCircleSvg,
  'atcircle'
);

/**![ATCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0yMy4yNTQgMTYuMTczYy40ODItMS4zLjc0Ni0yLjcwNi43NDYtNC4xNzQgMC0xLjQ2OC0uMjY0LTIuODc0LS43NDYtNC4xNzRMMTIgNi43ODIuNzQ4IDcuODI1QTExLjk3NCAxMS45NzQgMCAwIDAgMCAxMmMwIDEuNDY4LjI2NSAyLjg3NC43NDcgNC4xNzRMMTIgMTcuMjE3bDExLjI1My0xLjA0NFoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTIgMjRjNS4xNiAwIDkuNTU5LTMuMjU3IDExLjI1NC03LjgyN0guNzQ3QzIuNDQyIDIwLjc0MyA2Ljg0IDI0IDEyIDI0Wm0wLTI0QzYuODQgMCAyLjQ0MiAzLjI1Ni43NDcgNy44MjVoMjIuNTA3QzIxLjU2IDMuMjU1IDE3LjE2IDAgMTIgMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aTCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ATCircleIcon';
}

export default RefIcon;
