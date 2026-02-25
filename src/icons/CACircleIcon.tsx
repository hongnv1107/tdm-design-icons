// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#D80027" d="M24 12.001a12 12 0 0 0-6.782-10.81v21.62A12 12 0 0 0 24.001 12ZM0 12c0 4.758 2.77 8.869 6.783 10.81V1.19A12 12 0 0 0 0 12Zm14.088 1.566 2.086-1.043L15.131 12v-1.043L13.044 12l1.043-2.087h-1.043l-1.043-1.565-1.044 1.565H9.914L10.957 12 8.87 10.957V12l-1.043.522 2.087 1.043-.522 1.044h2.087v1.565h1.043V14.61h2.087l-.521-1.044Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cACircleIconDefinition = svgToIconDefinition(
  cACircleSvg,
  'cacircle'
);

/**![CACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMi4wMDFhMTIgMTIgMCAwIDAtNi43ODItMTAuODF2MjEuNjJBMTIgMTIgMCAwIDAgMjQuMDAxIDEyWk0wIDEyYzAgNC43NTggMi43NyA4Ljg2OSA2Ljc4MyAxMC44MVYxLjE5QTEyIDEyIDAgMCAwIDAgMTJabTE0LjA4OCAxLjU2NiAyLjA4Ni0xLjA0M0wxNS4xMzEgMTJ2LTEuMDQzTDEzLjA0NCAxMmwxLjA0My0yLjA4N2gtMS4wNDNsLTEuMDQzLTEuNTY1LTEuMDQ0IDEuNTY1SDkuOTE0TDEwLjk1NyAxMiA4Ljg3IDEwLjk1N1YxMmwtMS4wNDMuNTIyIDIuMDg3IDEuMDQzLS41MjIgMS4wNDRoMi4wODd2MS41NjVoMS4wNDNWMTQuNjFoMi4wODdsLS41MjEtMS4wNDRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CACircleIcon';
}

export default RefIcon;
