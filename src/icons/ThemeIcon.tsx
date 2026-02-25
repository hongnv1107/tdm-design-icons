// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const themeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.5 12C20.5 7.02944 16.9706 3.5 12 3.5C7.02944 3.5 3.5 7.02944 3.5 12C3.5 16.9706 7.02944 20.5 12 20.5V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22V20.5C16.9706 20.5 20.5 16.9706 20.5 12Z" />
    <path d="M12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20V4Z" />
  </svg>
);

const themeIconDefinition = svgToIconDefinition(
  themeSvg,
  'theme'
);

/**![ThemeIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAxMkMyMC41IDcuMDI5NDQgMTYuOTcwNiAzLjUgMTIgMy41QzcuMDI5NDQgMy41IDMuNSA3LjAyOTQ0IDMuNSAxMkMzLjUgMTYuOTcwNiA3LjAyOTQ0IDIwLjUgMTIgMjAuNVYyMkM2LjQ3NzE1IDIyIDIgMTcuNTIyOCAyIDEyQzIgNi40NzcxNSA2LjQ3NzE1IDIgMTIgMkMxNy41MjI4IDIgMjIgNi40NzcxNSAyMiAxMkMyMiAxNy41MjI4IDE3LjUyMjggMjIgMTIgMjJWMjAuNUMxNi45NzA2IDIwLjUgMjAuNSAxNi45NzA2IDIwLjUgMTJaIi8+PHBhdGggZD0iTTEyIDRDMTYuNDE4MyA0IDIwIDcuNTgxNzIgMjAgMTJDMjAgMTYuNDE4MyAxNi40MTgzIDIwIDEyIDIwVjRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={themeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ThemeIcon';
}

export default RefIcon;
