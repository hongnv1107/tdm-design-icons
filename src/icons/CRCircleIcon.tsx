// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cRCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#D80027" d="M23.254 7.826H.746A11.973 11.973 0 0 0 0 12c0 1.468.264 2.874.746 4.174h22.508c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174Z"/><path fill="#0052B4" d="M12.001 0a11.972 11.972 0 0 0-9.097 4.173h18.194A11.972 11.972 0 0 0 12 0Zm9.095 19.826H2.903A11.973 11.973 0 0 0 12 24c3.637 0 6.896-1.618 9.096-4.174Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const cRCircleIconDefinition = svgToIconDefinition(
  cRCircleSvg,
  'crcircle'
);

/**![CRCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yMy4yNTQgNy44MjZILjc0NkExMS45NzMgMTEuOTczIDAgMCAwIDAgMTJjMCAxLjQ2OC4yNjQgMi44NzQuNzQ2IDQuMTc0aDIyLjUwOGMuNDgyLTEuMy43NDYtMi43MDYuNzQ2LTQuMTc0IDAtMS40NjgtLjI2NC0yLjg3NC0uNzQ2LTQuMTc0WiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMi4wMDEgMGExMS45NzIgMTEuOTcyIDAgMCAwLTkuMDk3IDQuMTczaDE4LjE5NEExMS45NzIgMTEuOTcyIDAgMCAwIDEyIDBabTkuMDk1IDE5LjgyNkgyLjkwM0ExMS45NzMgMTEuOTczIDAgMCAwIDEyIDI0YzMuNjM3IDAgNi44OTYtMS42MTggOS4wOTYtNC4xNzRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cRCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CRCircleIcon';
}

export default RefIcon;
