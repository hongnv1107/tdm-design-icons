// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.64499 0.502103C6.31446 -0.167368 7.39988 -0.167368 8.06935 0.502103L18.3551 10.7878C19.0245 11.4573 19.0245 12.5427 18.3551 13.2122L8.06935 23.4979C7.39988 24.1674 6.31446 24.1674 5.64499 23.4979C4.97552 22.8284 4.97552 21.743 5.64499 21.0735L14.7185 12L5.64499 2.92647C4.97552 2.257 4.97552 1.17157 5.64499 0.502103Z"/>
  </svg>
);

const chevronRightFilledIconDefinition = svgToIconDefinition(
  chevronRightFilledSvg,
  'chevron-right-filled'
);

/**![ChevronRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNjQ0OTkgMC41MDIxMDNDNi4zMTQ0NiAtMC4xNjczNjggNy4zOTk4OCAtMC4xNjczNjggOC4wNjkzNSAwLjUwMjEwM0wxOC4zNTUxIDEwLjc4NzhDMTkuMDI0NSAxMS40NTczIDE5LjAyNDUgMTIuNTQyNyAxOC4zNTUxIDEzLjIxMjJMOC4wNjkzNSAyMy40OTc5QzcuMzk5ODggMjQuMTY3NCA2LjMxNDQ2IDI0LjE2NzQgNS42NDQ5OSAyMy40OTc5QzQuOTc1NTIgMjIuODI4NCA0Ljk3NTUyIDIxLjc0MyA1LjY0NDk5IDIxLjA3MzVMMTQuNzE4NSAxMkw1LjY0NDk5IDIuOTI2NDdDNC45NzU1MiAyLjI1NyA0Ljk3NTUyIDEuMTcxNTcgNS42NDQ5OSAwLjUwMjEwM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronRightFilled';
}

export default RefIcon;
