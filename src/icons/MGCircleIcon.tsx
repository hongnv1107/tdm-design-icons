// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const mGCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#6DA544" d="M7.826 12v11.253c1.3.482 2.706.747 4.174.747 6.627 0 12-5.373 12-12S7.826 12 7.826 12Z"/><path fill="#D80027" d="M12 0a11.96 11.96 0 0 0-4.174.747v11.252L24 12c0-6.627-5.373-12-12-12Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const mGCircleIconDefinition = svgToIconDefinition(
  mGCircleSvg,
  'mgcircle'
);

/**![MGCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik03LjgyNiAxMnYxMS4yNTNjMS4zLjQ4MiAyLjcwNi43NDcgNC4xNzQuNzQ3IDYuNjI3IDAgMTItNS4zNzMgMTItMTJTNy44MjYgMTIgNy44MjYgMTJaIi8+PHBhdGggZmlsbD0iI0Q4MDAyNyIgZD0iTTEyIDBhMTEuOTYgMTEuOTYgMCAwIDAtNC4xNzQuNzQ3djExLjI1MkwyNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyWiIvPjwvZz48ZGVmcz48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={mGCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MGCircleIcon';
}

export default RefIcon;
