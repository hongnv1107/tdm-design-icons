// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mWCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M0 12c0 1.468.264 2.874.746 4.174L12 16.695l11.254-.521c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 12Z"/><path fill="#000" d="M12 0C6.84 0 2.442 3.256.746 7.826h22.508C21.558 3.256 17.159 0 12 0Z"/><path fill="#496E2D" d="M23.253 16.175H.746C2.442 20.745 6.84 24 12 24c5.16 0 9.558-3.257 11.253-7.826Z"/><path fill="#D80027" d="m15.586 5.74-1.465-.69.78-1.419-1.591.305-.202-1.608L12 3.51l-1.11-1.182-.201 1.608-1.592-.305.78 1.42-1.465.689h7.173Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const mWCircleIconDefinition = svgToIconDefinition(
  mWCircleSvg,
  'mwcircle'
);

/**![MWCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0wIDEyYzAgMS40NjguMjY0IDIuODc0Ljc0NiA0LjE3NEwxMiAxNi42OTVsMTEuMjU0LS41MjFjLjQ4Mi0xLjMuNzQ2LTIuNzA2Ljc0Ni00LjE3NCAwLTEuNDY4LS4yNjQtMi44NzQtLjc0Ni00LjE3NEwxMiA3LjMwNC43NDYgNy44MjZBMTEuOTc1IDExLjk3NSAwIDAgMCAwIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xMiAwQzYuODQgMCAyLjQ0MiAzLjI1Ni43NDYgNy44MjZoMjIuNTA4QzIxLjU1OCAzLjI1NiAxNy4xNTkgMCAxMiAwWiIvPjxwYXRoIGZpbGw9IiM0OTZFMkQiIGQ9Ik0yMy4yNTMgMTYuMTc1SC43NDZDMi40NDIgMjAuNzQ1IDYuODQgMjQgMTIgMjRjNS4xNiAwIDkuNTU4LTMuMjU3IDExLjI1My03LjgyNloiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJtMTUuNTg2IDUuNzQtMS40NjUtLjY5Ljc4LTEuNDE5LTEuNTkxLjMwNS0uMjAyLTEuNjA4TDEyIDMuNTFsLTEuMTEtMS4xODItLjIwMSAxLjYwOC0xLjU5Mi0uMzA1Ljc4IDEuNDItMS40NjUuNjg5aDcuMTczWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mWCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MWCircleIcon';
}

export default RefIcon;
