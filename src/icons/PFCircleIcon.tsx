// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const pFCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M1.46 6.262h21.08A11.998 11.998 0 0 0 12 0 11.998 11.998 0 0 0 1.46 6.262ZM12 24c4.549 0 8.505-2.53 10.54-6.261H1.46A11.998 11.998 0 0 0 12 24Z"/>
    <path fill="#FFDA44" d="M16.174 12c0 2.305-1.869 3.652-4.174 3.652-2.305 0-4.174-1.347-4.174-3.652a4.174 4.174 0 1 1 8.348 0Z"/>
    <path fill="#0052B4" d="M16.174 12a4.174 4.174 0 1 1-8.348 0"/>
    <path fill="#D80027" d="M10.435 10.956H9.392v2.087h1.043v-2.087Zm4.174 0h-1.044v2.087h1.044v-2.087ZM12.522 9.39h-1.043v3.653h1.043V9.391Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const pFCircleIconDefinition = svgToIconDefinition(
  pFCircleSvg,
  'pfcircle'
);

/**![PFCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xLjQ2IDYuMjYyaDIxLjA4QTExLjk5OCAxMS45OTggMCAwIDAgMTIgMCAxMS45OTggMTEuOTk4IDAgMCAwIDEuNDYgNi4yNjJaTTEyIDI0YzQuNTQ5IDAgOC41MDUtMi41MyAxMC41NC02LjI2MUgxLjQ2QTExLjk5OCAxMS45OTggMCAwIDAgMTIgMjRaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0iTTE2LjE3NCAxMmMwIDIuMzA1LTEuODY5IDMuNjUyLTQuMTc0IDMuNjUyLTIuMzA1IDAtNC4xNzQtMS4zNDctNC4xNzQtMy42NTJhNC4xNzQgNC4xNzQgMCAxIDEgOC4zNDggMFoiLz48cGF0aCBmaWxsPSIjMDA1MkI0IiBkPSJNMTYuMTc0IDEyYTQuMTc0IDQuMTc0IDAgMSAxLTguMzQ4IDAiLz48cGF0aCBmaWxsPSIjRDgwMDI3IiBkPSJNMTAuNDM1IDEwLjk1Nkg5LjM5MnYyLjA4N2gxLjA0M3YtMi4wODdabTQuMTc0IDBoLTEuMDQ0djIuMDg3aDEuMDQ0di0yLjA4N1pNMTIuNTIyIDkuMzloLTEuMDQzdjMuNjUzaDEuMDQzVjkuMzkxWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={pFCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PFCircleIcon';
}

export default RefIcon;
