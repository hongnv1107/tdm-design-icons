// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#F0F0F0" d="m11.509 9.805.984 1.357 1.595-.517L13.102 12l.984 1.357-1.594-.519-.986 1.356.001-1.677L9.913 12l1.595-.518V9.806Z"/>
    <path fill="#F0F0F0" d="M8.822 15.39a3.391 3.391 0 1 1 1.613-6.374 4.174 4.174 0 1 0 0 5.967c-.48.26-1.03.407-1.613.407Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const tRCircleIconDefinition = svgToIconDefinition(
  tRCircleSvg,
  'trcircle'
);

/**![TRCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Im0xMS41MDkgOS44MDUuOTg0IDEuMzU3IDEuNTk1LS41MTdMMTMuMTAyIDEybC45ODQgMS4zNTctMS41OTQtLjUxOS0uOTg2IDEuMzU2LjAwMS0xLjY3N0w5LjkxMyAxMmwxLjU5NS0uNTE4VjkuODA2WiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik04LjgyMiAxNS4zOWEzLjM5MSAzLjM5MSAwIDEgMSAxLjYxMy02LjM3NCA0LjE3NCA0LjE3NCAwIDEgMCAwIDUuOTY3Yy0uNDguMjYtMS4wMy40MDctMS42MTMuNDA3WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TRCircleIcon';
}

export default RefIcon;
