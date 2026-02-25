// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mXCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M24 12c0-4.758-2.769-8.869-6.783-10.81v21.62A12 12 0 0 0 24 12Z"/>
    <path fill="#6DA544" d="M0 12a12 12 0 0 0 6.783 10.809V1.19A12.001 12.001 0 0 0 0 12Zm8.87 0a3.13 3.13 0 0 0 6.26 0v-1.044H8.87v1.043Z"/>
    <path fill="#FF9811" d="M16.174 9.913h-3.131a1.044 1.044 0 0 0-2.087 0h-3.13c0 .577.502 1.044 1.078 1.044h-.035c0 .576.467 1.043 1.044 1.043 0 .577.467 1.044 1.043 1.044h2.087c.576 0 1.043-.467 1.043-1.044.577 0 1.044-.467 1.044-1.043h-.035c.577 0 1.079-.467 1.079-1.044Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const mXCircleIconDefinition = svgToIconDefinition(
  mXCircleSvg,
  'mxcircle'
);

/**![MXCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwLTQuNzU4LTIuNzY5LTguODY5LTYuNzgzLTEwLjgxdjIxLjYyQTEyIDEyIDAgMCAwIDI0IDEyWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0wIDEyYTEyIDEyIDAgMCAwIDYuNzgzIDEwLjgwOVYxLjE5QTEyLjAwMSAxMi4wMDEgMCAwIDAgMCAxMlptOC44NyAwYTMuMTMgMy4xMyAwIDAgMCA2LjI2IDB2LTEuMDQ0SDguODd2MS4wNDNaIi8+PHBhdGggZmlsbD0iI0ZGOTgxMSIgZD0iTTE2LjE3NCA5LjkxM2gtMy4xMzFhMS4wNDQgMS4wNDQgMCAwIDAtMi4wODcgMGgtMy4xM2MwIC41NzcuNTAyIDEuMDQ0IDEuMDc4IDEuMDQ0aC0uMDM1YzAgLjU3Ni40NjcgMS4wNDMgMS4wNDQgMS4wNDMgMCAuNTc3LjQ2NyAxLjA0NCAxLjA0MyAxLjA0NGgyLjA4N2MuNTc2IDAgMS4wNDMtLjQ2NyAxLjA0My0xLjA0NC41NzcgMCAxLjA0NC0uNDY3IDEuMDQ0LTEuMDQzaC0uMDM1Yy41NzcgMCAxLjA3OS0uNDY3IDEuMDc5LTEuMDQ0WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mXCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MXCircleIcon';
}

export default RefIcon;
