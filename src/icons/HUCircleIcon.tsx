// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const hUCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M.746 7.825A11.975 11.975 0 0 0 0 12c0 1.468.264 2.874.746 4.174L12 17.217l11.253-1.044c.482-1.3.747-2.706.747-4.174 0-1.468-.265-2.874-.747-4.174L12 6.782.746 7.825Z"/>
    <path fill="#D80027" d="M12-.001C6.84-.001 2.441 3.256.746 7.825h22.507C21.558 3.255 17.16 0 12 0Z"/>
    <path fill="#6DA544" d="M12 24c5.16 0 9.558-3.257 11.253-7.827H.746C2.44 20.743 6.84 23.999 12 23.999Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const hUCircleIconDefinition = svgToIconDefinition(
  hUCircleSvg,
  'hucircle'
);

/**![HUCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0uNzQ2IDcuODI1QTExLjk3NSAxMS45NzUgMCAwIDAgMCAxMmMwIDEuNDY4LjI2NCAyLjg3NC43NDYgNC4xNzRMMTIgMTcuMjE3bDExLjI1My0xLjA0NGMuNDgyLTEuMy43NDctMi43MDYuNzQ3LTQuMTc0IDAtMS40NjgtLjI2NS0yLjg3NC0uNzQ3LTQuMTc0TDEyIDYuNzgyLjc0NiA3LjgyNVoiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTItLjAwMUM2Ljg0LS4wMDEgMi40NDEgMy4yNTYuNzQ2IDcuODI1aDIyLjUwN0MyMS41NTggMy4yNTUgMTcuMTYgMCAxMiAwWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xMiAyNGM1LjE2IDAgOS41NTgtMy4yNTcgMTEuMjUzLTcuODI3SC43NDZDMi40NCAyMC43NDMgNi44NCAyMy45OTkgMTIgMjMuOTk5WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={hUCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HUCircleIcon';
}

export default RefIcon;
