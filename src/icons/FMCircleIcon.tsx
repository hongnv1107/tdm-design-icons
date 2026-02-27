// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const fMCircleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)"><path fill="#338AF3" d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"/><path fill="#F0F0F0" d="m12 5.217.518 1.595h1.677l-1.357.985.518 1.594L12 8.406l-1.356.985.518-1.594-1.356-.985h1.676L12 5.217ZM5.217 12l1.595-.518V9.805l.985 1.357 1.594-.519L8.406 12l.985 1.356-1.594-.518-.985 1.356v-1.676L5.217 12ZM12 18.783l-.518-1.594H9.806l1.356-.986-.518-1.594 1.356.985 1.357-.985-.519 1.594 1.357.986h-1.677L12 18.783ZM18.783 12l-1.594.518v1.676l-.986-1.356-1.594.518.985-1.357-.985-1.356 1.594.518.986-1.356v1.677l1.594.518Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs>
  </svg>
);

const fMCircleIconDefinition = svgToIconDefinition(
  fMCircleSvg,
  'fmcircle'
);

/**![FMCircleIcon](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9IiMzMzhBRjMiIGQ9Ik0xMiAyNGM2LjYyNyAwIDEyLTUuMzczIDEyLTEyUzE4LjYyNyAwIDEyIDAgMCA1LjM3MyAwIDEyczUuMzczIDEyIDEyIDEyWiIvPjxwYXRoIGZpbGw9IiNGMEYwRjAiIGQ9Im0xMiA1LjIxNy41MTggMS41OTVoMS42NzdsLTEuMzU3Ljk4NS41MTggMS41OTRMMTIgOC40MDZsLTEuMzU2Ljk4NS41MTgtMS41OTQtMS4zNTYtLjk4NWgxLjY3NkwxMiA1LjIxN1pNNS4yMTcgMTJsMS41OTUtLjUxOFY5LjgwNWwuOTg1IDEuMzU3IDEuNTk0LS41MTlMOC40MDYgMTJsLjk4NSAxLjM1Ni0xLjU5NC0uNTE4LS45ODUgMS4zNTZ2LTEuNjc2TDUuMjE3IDEyWk0xMiAxOC43ODNsLS41MTgtMS41OTRIOS44MDZsMS4zNTYtLjk4Ni0uNTE4LTEuNTk0IDEuMzU2Ljk4NSAxLjM1Ny0uOTg1LS41MTkgMS41OTQgMS4zNTcuOTg2aC0xLjY3N0wxMiAxOC43ODNaTTE4Ljc4MyAxMmwtMS41OTQuNTE4djEuNjc2bC0uOTg2LTEuMzU2LTEuNTk0LjUxOC45ODUtMS4zNTctLjk4NS0xLjM1NiAxLjU5NC41MTguOTg2LTEuMzU2djEuNjc3bDEuNTk0LjUxOFoiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={fMCircleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'FMCircleIcon';
}

export default RefIcon;
