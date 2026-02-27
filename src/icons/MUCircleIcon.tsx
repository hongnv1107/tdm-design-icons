// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mUCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#D80027" d="M1.458 6.26 12 7.304 22.54 6.26A11.997 11.997 0 0 0 12 0C7.45 0 3.493 2.53 1.457 6.26Z"/><path fill="#FFDA44" d="m1.459 17.738 10.54 1.044 10.541-1.044C23.47 16.034 24 14.078 24 12l-12-1.043L0 12c0 2.08.528 4.035 1.459 5.74Z"/><path fill="#0052B4" d="M1.458 6.26A11.946 11.946 0 0 0 0 12h24c0-2.08-.53-4.035-1.46-5.74H1.458Z"/><path fill="#6DA544" d="M12 24c4.548 0 8.505-2.531 10.54-6.262H1.46A11.997 11.997 0 0 0 11.999 24Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const mUCircleIconDefinition = svgToIconDefinition(
  mUCircleSvg,
  'mucircle'
);

/**![MUCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0xLjQ1OCA2LjI2IDEyIDcuMzA0IDIyLjU0IDYuMjZBMTEuOTk3IDExLjk5NyAwIDAgMCAxMiAwQzcuNDUgMCAzLjQ5MyAyLjUzIDEuNDU3IDYuMjZaIi8+PHBhdGggZmlsbD0iI0ZGREE0NCIgZD0ibTEuNDU5IDE3LjczOCAxMC41NCAxLjA0NCAxMC41NDEtMS4wNDRDMjMuNDcgMTYuMDM0IDI0IDE0LjA3OCAyNCAxMmwtMTItMS4wNDNMMCAxMmMwIDIuMDguNTI4IDQuMDM1IDEuNDU5IDUuNzRaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTEuNDU4IDYuMjZBMTEuOTQ2IDExLjk0NiAwIDAgMCAwIDEyaDI0YzAtMi4wOC0uNTMtNC4wMzUtMS40Ni01Ljc0SDEuNDU4WiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xMiAyNGM0LjU0OCAwIDguNTA1LTIuNTMxIDEwLjU0LTYuMjYySDEuNDZBMTEuOTk3IDExLjk5NyAwIDAgMCAxMS45OTkgMjRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mUCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MUCircleIcon';
}

export default RefIcon;
