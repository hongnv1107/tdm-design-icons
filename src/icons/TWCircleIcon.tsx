// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const tWCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#D80027" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12L12 0c6.627 0 12 5.373 12 12Z"/>
    <path fill="#0052B4" d="M12 12V0C5.373 0 0 5.373 0 12h12Z"/>
    <path fill="#F0F0F0" d="m10.435 7.023-1.466.69.78 1.419-1.59-.305-.202 1.608-1.109-1.182-1.108 1.182-.202-1.608-1.591.305.78-1.42-1.465-.689 1.465-.69-.78-1.419 1.591.305.202-1.608 1.108 1.183L7.957 3.61l.201 1.608 1.592-.305-.78 1.42 1.465.689Z"/>
    <path fill="#0052B4" d="M6.849 9.257a2.234 2.234 0 1 0 0-4.468 2.234 2.234 0 0 0 0 4.468Z"/>
    <path fill="#F0F0F0" d="M6.848 8.214a1.19 1.19 0 1 1 1.19-1.19c0 .656-.534 1.19-1.19 1.19Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const tWCircleIconDefinition = svgToIconDefinition(
  tWCircleSvg,
  'twcircle'
);

/**![TWCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNEODAwMjciIGQ9Ik0yNCAxMmMwIDYuNjI3LTUuMzczIDEyLTEyIDEyUzAgMTguNjI3IDAgMTJMMTIgMGM2LjYyNyAwIDEyIDUuMzczIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiMwMDUyQjQiIGQ9Ik0xMiAxMlYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Im0xMC40MzUgNy4wMjMtMS40NjYuNjkuNzggMS40MTktMS41OS0uMzA1LS4yMDIgMS42MDgtMS4xMDktMS4xODItMS4xMDggMS4xODItLjIwMi0xLjYwOC0xLjU5MS4zMDUuNzgtMS40Mi0xLjQ2NS0uNjg5IDEuNDY1LS42OS0uNzgtMS40MTkgMS41OTEuMzA1LjIwMi0xLjYwOCAxLjEwOCAxLjE4M0w3Ljk1NyAzLjYxbC4yMDEgMS42MDggMS41OTItLjMwNS0uNzggMS40MiAxLjQ2NS42ODlaIi8+PHBhdGggZmlsbD0iIzAwNTJCNCIgZD0iTTYuODQ5IDkuMjU3YTIuMjM0IDIuMjM0IDAgMSAwIDAtNC40NjggMi4yMzQgMi4yMzQgMCAwIDAgMCA0LjQ2OFoiLz48cGF0aCBmaWxsPSIjRjBGMEYwIiBkPSJNNi44NDggOC4yMTRhMS4xOSAxLjE5IDAgMSAxIDEuMTktMS4xOWMwIC42NTYtLjUzNCAxLjE5LTEuMTkgMS4xOVoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={tWCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TWCircleIcon';
}

export default RefIcon;
