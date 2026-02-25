// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#0052B4" d="M24 12c0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.974 11.974 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 16.696l11.254-.522c.482-1.3.746-2.706.746-4.174Z"/>
    <path fill="#FF9811" d="M12 24c5.16 0 9.558-3.256 11.254-7.826H.746C2.442 20.744 6.84 24 12 24Z"/>
    <path fill="#D80027" d="M.746 7.826h22.508C21.558 3.256 17.159 0 12 0 6.84 0 2.442 3.256.746 7.826Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const aMCircleIconDefinition = svgToIconDefinition(
  aMCircleSvg,
  'amcircle'
);

/**![AMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0yNCAxMmMwLTEuNDY4LS4yNjQtMi44NzQtLjc0Ni00LjE3NEwxMiA3LjMwNC43NDYgNy44MjZBMTEuOTc0IDExLjk3NCAwIDAgMCAwIDEyYzAgMS40NjguMjY0IDIuODc0Ljc0NiA0LjE3NEwxMiAxNi42OTZsMTEuMjU0LS41MjJjLjQ4Mi0xLjMuNzQ2LTIuNzA2Ljc0Ni00LjE3NFoiLz48cGF0aCBmaWxsPSIjRkY5ODExIiBkPSJNMTIgMjRjNS4xNiAwIDkuNTU4LTMuMjU2IDExLjI1NC03LjgyNkguNzQ2QzIuNDQyIDIwLjc0NCA2Ljg0IDI0IDEyIDI0WiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0uNzQ2IDcuODI2aDIyLjUwOEMyMS41NTggMy4yNTYgMTcuMTU5IDAgMTIgMCA2Ljg0IDAgMi40NDIgMy4yNTYuNzQ2IDcuODI2WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'AMCircleIcon';
}

export default RefIcon;
