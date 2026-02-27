// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sECircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#FFDA44" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#0052B4" d="M9.39 10.435h14.508C23.13 4.547 18.097 0 12 0c-.896 0-1.77.1-2.61.285v10.15Zm-3.13 0V1.459a12.007 12.007 0 0 0-6.159 8.976h6.16Zm0 3.131H.102a12.007 12.007 0 0 0 6.16 8.975v-8.975Zm3.13 0v10.15c.84.185 1.714.284 2.61.284 6.097 0 11.13-4.547 11.898-10.434H9.39Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const sECircleIconDefinition = svgToIconDefinition(
  sECircleSvg,
  'secircle'
);

/**![SECircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGRkRBNDQiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik05LjM5IDEwLjQzNWgxNC41MDhDMjMuMTMgNC41NDcgMTguMDk3IDAgMTIgMGMtLjg5NiAwLTEuNzcuMS0yLjYxLjI4NXYxMC4xNVptLTMuMTMgMFYxLjQ1OWExMi4wMDcgMTIuMDA3IDAgMCAwLTYuMTU5IDguOTc2aDYuMTZabTAgMy4xMzFILjEwMmExMi4wMDcgMTIuMDA3IDAgMCAwIDYuMTYgOC45NzV2LTguOTc1Wm0zLjEzIDB2MTAuMTVjLjg0LjE4NSAxLjcxNC4yODQgMi42MS4yODQgNi4wOTcgMCAxMS4xMy00LjU0NyAxMS44OTgtMTAuNDM0SDkuMzlaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sECircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SECircleIcon';
}

export default RefIcon;
