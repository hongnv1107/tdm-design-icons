// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aLCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#000" d="M18.782 8.907h-4.346A1.565 1.565 0 1 0 12 6.961a1.564 1.564 0 0 0-2.87.866c0 .42.165.8.434 1.08H5.217c0 1.153 1.004 2.087 2.157 2.087h-.07c0 1.153.935 2.087 2.087 2.087 0 .374.099.724.27 1.027l-1.73 1.73 1.327 1.329 1.884-1.884c.074.027.15.049.23.063l-1.14 2.57L12 19.827l1.767-1.91-1.139-2.57c.08-.014.156-.036.23-.063l1.883 1.884 1.329-1.328-1.732-1.732c.172-.302.27-.652.27-1.026a2.087 2.087 0 0 0 2.087-2.087h-.069c1.152 0 2.156-.934 2.156-2.087Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const aLCircleIconDefinition = svgToIconDefinition(
  aLCircleSvg,
  'alcircle'
);

/**![ALCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik0xOC43ODIgOC45MDdoLTQuMzQ2QTEuNTY1IDEuNTY1IDAgMSAwIDEyIDYuOTYxYTEuNTY0IDEuNTY0IDAgMCAwLTIuODcuODY2YzAgLjQyLjE2NS44LjQzNCAxLjA4SDUuMjE3YzAgMS4xNTMgMS4wMDQgMi4wODcgMi4xNTcgMi4wODdoLS4wN2MwIDEuMTUzLjkzNSAyLjA4NyAyLjA4NyAyLjA4NyAwIC4zNzQuMDk5LjcyNC4yNyAxLjAyN2wtMS43MyAxLjczIDEuMzI3IDEuMzI5IDEuODg0LTEuODg0Yy4wNzQuMDI3LjE1LjA0OS4yMy4wNjNsLTEuMTQgMi41N0wxMiAxOS44MjdsMS43NjctMS45MS0xLjEzOS0yLjU3Yy4wOC0uMDE0LjE1Ni0uMDM2LjIzLS4wNjNsMS44ODMgMS44ODQgMS4zMjktMS4zMjgtMS43MzItMS43MzJjLjE3Mi0uMzAyLjI3LS42NTIuMjctMS4wMjZhMi4wODcgMi4wODcgMCAwIDAgMi4wODctMi4wODdoLS4wNjljMS4xNTIgMCAyLjE1Ni0uOTM0IDIuMTU2LTIuMDg3WiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aLCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ALCircleIcon';
}

export default RefIcon;
