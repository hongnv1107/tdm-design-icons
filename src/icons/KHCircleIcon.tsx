// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const kHCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M0 12c0 2.08.529 4.035 1.46 5.74L12 18.783l10.54-1.043A11.927 11.927 0 0 0 24 12c0-2.078-.529-4.033-1.46-5.738L12 5.218 1.46 6.262A11.946 11.946 0 0 0 0 12Z"/>
    <path fill="#0052B4" d="M1.46 6.262h21.08A11.998 11.998 0 0 0 12 0 11.997 11.997 0 0 0 1.46 6.262ZM12 24c4.548 0 8.506-2.53 10.54-6.26H1.46A11.997 11.997 0 0 0 12 24Z"/>
    <path fill="#F0F0F0" d="M16.174 14.347v-1.565h-1.043v-2.087l-1.044-1.043-1.043 1.043V8.608L12 7.565l-1.043 1.043v2.087L9.913 9.652 8.87 10.695v2.087H7.826v1.565H6.783v1.566h10.435v-1.566h-1.044Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const kHCircleIconDefinition = svgToIconDefinition(
  kHCircleSvg,
  'khcircle'
);

/**![KHCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0wIDEyYzAgMi4wOC41MjkgNC4wMzUgMS40NiA1Ljc0TDEyIDE4Ljc4M2wxMC41NC0xLjA0M0ExMS45MjcgMTEuOTI3IDAgMCAwIDI0IDEyYzAtMi4wNzgtLjUyOS00LjAzMy0xLjQ2LTUuNzM4TDEyIDUuMjE4IDEuNDYgNi4yNjJBMTEuOTQ2IDExLjk0NiAwIDAgMCAwIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xLjQ2IDYuMjYyaDIxLjA4QTExLjk5OCAxMS45OTggMCAwIDAgMTIgMCAxMS45OTcgMTEuOTk3IDAgMCAwIDEuNDYgNi4yNjJaTTEyIDI0YzQuNTQ4IDAgOC41MDYtMi41MyAxMC41NC02LjI2SDEuNDZBMTEuOTk3IDExLjk5NyAwIDAgMCAxMiAyNFoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNMTYuMTc0IDE0LjM0N3YtMS41NjVoLTEuMDQzdi0yLjA4N2wtMS4wNDQtMS4wNDMtMS4wNDMgMS4wNDNWOC42MDhMMTIgNy41NjVsLTEuMDQzIDEuMDQzdjIuMDg3TDkuOTEzIDkuNjUyIDguODcgMTAuNjk1djIuMDg3SDcuODI2djEuNTY1SDYuNzgzdjEuNTY2aDEwLjQzNXYtMS41NjZoLTEuMDQ0WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={kHCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'KHCircleIcon';
}

export default RefIcon;
