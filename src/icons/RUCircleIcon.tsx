// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const rUCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#0052B4" d="M23.254 16.173c.482-1.3.746-2.705.746-4.173s-.264-2.874-.746-4.174H.747A11.978 11.978 0 0 0 0 12c0 1.468.264 2.873.747 4.173L12 17.217l11.254-1.044Z"/><path fill="#D80027" d="M12 24c5.16 0 9.558-3.257 11.254-7.827H.747C2.442 20.743 6.84 24 12 24Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const rUCircleIconDefinition = svgToIconDefinition(
  rUCircleSvg,
  'rucircle'
);

/**![RUCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0yMy4yNTQgMTYuMTczYy40ODItMS4zLjc0Ni0yLjcwNS43NDYtNC4xNzNzLS4yNjQtMi44NzQtLjc0Ni00LjE3NEguNzQ3QTExLjk3OCAxMS45NzggMCAwIDAgMCAxMmMwIDEuNDY4LjI2NCAyLjg3My43NDcgNC4xNzNMMTIgMTcuMjE3bDExLjI1NC0xLjA0NFoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTIgMjRjNS4xNiAwIDkuNTU4LTMuMjU3IDExLjI1NC03LjgyN0guNzQ3QzIuNDQyIDIwLjc0MyA2Ljg0IDI0IDEyIDI0WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={rUCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'RUCircleIcon';
}

export default RefIcon;
