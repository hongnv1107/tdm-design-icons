// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const eECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#000" d="M0 12c0 1.467.264 2.873.746 4.173L12 16.695l11.253-.522c.482-1.3.747-2.706.747-4.173 0-1.468-.265-2.874-.747-4.174L12 7.304.746 7.826A11.975 11.975 0 0 0 0 11.999Z"/><path fill="#0052B4" d="M12 0C6.84 0 2.44 3.256.745 7.826h22.507C21.558 3.256 17.16 0 12 0Z"/><path fill="#F0F0F0" d="M23.253 16.173H.746C2.44 20.743 6.84 24 11.999 24c5.16 0 9.559-3.257 11.254-7.827Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const eECircleIconDefinition = svgToIconDefinition(
  eECircleSvg,
  'eecircle'
);

/**![EECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0wIDEyYzAgMS40NjcuMjY0IDIuODczLjc0NiA0LjE3M0wxMiAxNi42OTVsMTEuMjUzLS41MjJjLjQ4Mi0xLjMuNzQ3LTIuNzA2Ljc0Ny00LjE3MyAwLTEuNDY4LS4yNjUtMi44NzQtLjc0Ny00LjE3NEwxMiA3LjMwNC43NDYgNy44MjZBMTEuOTc1IDExLjk3NSAwIDAgMCAwIDExLjk5OVoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTIgMEM2Ljg0IDAgMi40NCAzLjI1Ni43NDUgNy44MjZoMjIuNTA3QzIxLjU1OCAzLjI1NiAxNy4xNiAwIDEyIDBaIi8+PHBhdGggZmlsbD0iI0YwRjBGMCIgZD0iTTIzLjI1MyAxNi4xNzNILjc0NkMyLjQ0IDIwLjc0MyA2Ljg0IDI0IDExLjk5OSAyNGM1LjE2IDAgOS41NTktMy4yNTcgMTEuMjU0LTcuODI3WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={eECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EECircleIcon';
}

export default RefIcon;
