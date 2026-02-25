// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const cYCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#FCFCFC" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#6DA544" d="M18.782 10.434h-1.565a5.217 5.217 0 1 1-10.434 0H5.217a6.785 6.785 0 0 0 4.931 6.527 1.736 1.736 0 0 0 .181 1.895l1.706-1.367 1.705 1.367c.45-.562.495-1.317.172-1.913a6.785 6.785 0 0 0 4.87-6.509Z"/>
    <path fill="#FFDA44" d="M7.826 9.913s0 2.608 2.609 2.608l.522.522H12s.522-1.565 1.565-1.565c0 0 0-1.043 1.044-1.043h1.565s-.522-2.087 2.087-3.653l-1.043-.521s-3.653 2.608-6.261 2.087V9.39H9.913l-.522-.522-1.565 1.044Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const cYCircleIconDefinition = svgToIconDefinition(
  cYCircleSvg,
  'cycircle'
);

/**![CYCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGQ0ZDRkMiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM2REE1NDQiIGQ9Ik0xOC43ODIgMTAuNDM0aC0xLjU2NWE1LjIxNyA1LjIxNyAwIDEgMS0xMC40MzQgMEg1LjIxN2E2Ljc4NSA2Ljc4NSAwIDAgMCA0LjkzMSA2LjUyNyAxLjczNiAxLjczNiAwIDAgMCAuMTgxIDEuODk1bDEuNzA2LTEuMzY3IDEuNzA1IDEuMzY3Yy40NS0uNTYyLjQ5NS0xLjMxNy4xNzItMS45MTNhNi43ODUgNi43ODUgMCAwIDAgNC44Ny02LjUwOVoiLz48cGF0aCBmaWxsPSIjRkZEQTQ0IiBkPSJNNy44MjYgOS45MTNzMCAyLjYwOCAyLjYwOSAyLjYwOGwuNTIyLjUyMkgxMnMuNTIyLTEuNTY1IDEuNTY1LTEuNTY1YzAgMCAwLTEuMDQzIDEuMDQ0LTEuMDQzaDEuNTY1cy0uNTIyLTIuMDg3IDIuMDg3LTMuNjUzbC0xLjA0My0uNTIxcy0zLjY1MyAyLjYwOC02LjI2MSAyLjA4N1Y5LjM5SDkuOTEzbC0uNTIyLS41MjItMS41NjUgMS4wNDRaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={cYCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CYCircleIcon';
}

export default RefIcon;
