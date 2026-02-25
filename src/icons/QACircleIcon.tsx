// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const qACircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
    <path fill="#F0F0F0" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/>
    <path fill="#751A46" d="M24 12c0-6.627-5.373-12-12-12-2.348 0-4.537.675-6.387 1.84l2.63 1.117-3.547 1.508 3.547 1.507L4.696 7.48l3.547 1.508-3.547 1.507L8.243 12l-3.547 1.507 3.547 1.507-3.547 1.507 3.547 1.508-3.547 1.507 3.547 1.507-2.629 1.117A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12Z"/>
    </g>
    <defs>
    <clipPath id="a">
    <path fill="#fff" d="M0 0h24v24H0z"/>
    </clipPath>
    </defs>
  </svg>
);

const qACircleIconDefinition = svgToIconDefinition(
  qACircleSvg,
  'qacircle'
);

/**![QACircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiM3NTFBNDYiIGQ9Ik0yNCAxMmMwLTYuNjI3LTUuMzczLTEyLTEyLTEyLTIuMzQ4IDAtNC41MzcuNjc1LTYuMzg3IDEuODRsMi42MyAxLjExNy0zLjU0NyAxLjUwOCAzLjU0NyAxLjUwN0w0LjY5NiA3LjQ4bDMuNTQ3IDEuNTA4LTMuNTQ3IDEuNTA3TDguMjQzIDEybC0zLjU0NyAxLjUwNyAzLjU0NyAxLjUwNy0zLjU0NyAxLjUwNyAzLjU0NyAxLjUwOC0zLjU0NyAxLjUwNyAzLjU0NyAxLjUwNy0yLjYyOSAxLjExN0ExMS45NDUgMTEuOTQ1IDAgMCAwIDEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJaIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTAgMGgyNHYyNEgweiIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={qACircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'QACircleIcon';
}

export default RefIcon;
