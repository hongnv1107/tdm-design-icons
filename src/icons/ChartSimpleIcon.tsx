// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const chartSimpleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17 9C17 8.44771 17.4477 8 18 8C18.5523 8 19 8.44771 19 9L19 21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21L17 9ZM11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21L11 3ZM5 13C5 12.4477 5.44771 12 6 12C6.55228 12 7 12.4477 7 13L7 21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21L5 13Z" />
  </svg>
);

const chartSimpleIconDefinition = svgToIconDefinition(
  chartSimpleSvg,
  'chart-simple'
);

/**![ChartSimpleIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcgOUMxNyA4LjQ0NzcxIDE3LjQ0NzcgOCAxOCA4QzE4LjU1MjMgOCAxOSA4LjQ0NzcxIDE5IDlMMTkgMjFDMTkgMjEuNTUyMyAxOC41NTIzIDIyIDE4IDIyQzE3LjQ0NzcgMjIgMTcgMjEuNTUyMyAxNyAyMUwxNyA5Wk0xMSAzQzExIDIuNDQ3NzIgMTEuNDQ3NyAyIDEyIDJDMTIuNTUyMyAyIDEzIDIuNDQ3NzIgMTMgM0wxMyAyMUMxMyAyMS41NTIzIDEyLjU1MjMgMjIgMTIgMjJDMTEuNDQ3NyAyMiAxMSAyMS41NTIzIDExIDIxTDExIDNaTTUgMTNDNSAxMi40NDc3IDUuNDQ3NzEgMTIgNiAxMkM2LjU1MjI4IDEyIDcgMTIuNDQ3NyA3IDEzTDcgMjFDNyAyMS41NTIzIDYuNTUyMjggMjIgNiAyMkM1LjQ0NzcyIDIyIDUgMjEuNTUyMyA1IDIxTDUgMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={chartSimpleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChartSimpleIcon';
}

export default RefIcon;
