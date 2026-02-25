// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M23.254 16.174c.482-1.3.746-2.706.746-4.174 0-1.467-.264-2.874-.746-4.173L12 6.783.746 7.827A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.218l11.254-1.044Z"/>
    <path fill="#338AF3" d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24.001 12 24.001Z"/>
    <path fill="#6DA544" d="M12 0C6.84 0 2.442 3.257.746 7.827h22.508C21.558 3.257 17.16 0 12 0Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const sLCircleIconDefinition = svgToIconDefinition(
  sLCircleSvg,
  'slcircle'
);

/**![SLCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0yMy4yNTQgMTYuMTc0Yy40ODItMS4zLjc0Ni0yLjcwNi43NDYtNC4xNzQgMC0xLjQ2Ny0uMjY0LTIuODc0LS43NDYtNC4xNzNMMTIgNi43ODMuNzQ2IDcuODI3QTExLjk3MyAxMS45NzMgMCAwIDAgMCAxMmMwIDEuNDY4LjI2NCAyLjg3NC43NDYgNC4xNzRMMTIgMTcuMjE4bDExLjI1NC0xLjA0NFoiLz48cGF0aCBmaWxsPSIjMzM4QUYzIiBkPSJNMTIgMjRjNS4xNiAwIDkuNTU4LTMuMjU2IDExLjI1NC03LjgyNkguNzQ2QzIuNDQyIDIwLjc0NCA2Ljg0IDI0LjAwMSAxMiAyNC4wMDFaIi8+PHBhdGggZmlsbD0iIzZEQTU0NCIgZD0iTTEyIDBDNi44NCAwIDIuNDQyIDMuMjU3Ljc0NiA3LjgyN2gyMi41MDhDMjEuNTU4IDMuMjU3IDE3LjE2IDAgMTIgMFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SLCircleIcon';
}

export default RefIcon;
