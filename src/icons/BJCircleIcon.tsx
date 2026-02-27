// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bJCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="m7.826 10.957 1.044 12.63A12.01 12.01 0 0 0 12 24c6.628 0 12-5.372 12-12L7.826 10.957Z"/><path fill="#FFDA44" d="M7.826 12 8.87.414A12.013 12.013 0 0 1 12 0c6.628 0 12 5.373 12 12H7.826Z"/><path fill="#6DA544" d="M0 12c0 5.544 3.76 10.21 8.87 11.587V.414C3.76 1.79 0 6.455 0 12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const bJCircleIconDefinition = svgToIconDefinition(
  bJCircleSvg,
  'bjcircle'
);

/**![BJCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Im03LjgyNiAxMC45NTcgMS4wNDQgMTIuNjNBMTIuMDEgMTIuMDEgMCAwIDAgMTIgMjRjNi42MjggMCAxMi01LjM3MiAxMi0xMkw3LjgyNiAxMC45NTdaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0iTTcuODI2IDEyIDguODcuNDE0QTEyLjAxMyAxMi4wMTMgMCAwIDEgMTIgMGM2LjYyOCAwIDEyIDUuMzczIDEyIDEySDcuODI2WiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0wIDEyYzAgNS41NDQgMy43NiAxMC4yMSA4Ljg3IDExLjU4N1YuNDE0QzMuNzYgMS43OSAwIDYuNDU1IDAgMTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bJCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BJCircleIcon';
}

export default RefIcon;
