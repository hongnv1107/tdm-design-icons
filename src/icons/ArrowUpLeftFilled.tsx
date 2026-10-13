// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51472 3.51472C3.79602 3.23341 4.17755 3.07538 4.57538 3.07538L19.4246 3.07538C20.253 3.07538 20.9246 3.74695 20.9246 4.57538C20.9246 5.40381 20.253 6.07538 19.4246 6.07538L8.1967 6.07538L20.4853 18.364C21.0711 18.9497 21.0711 19.8995 20.4853 20.4853C19.8995 21.0711 18.9497 21.0711 18.364 20.4853L6.07538 8.1967V19.4246C6.07538 20.253 5.40381 20.9246 4.57538 20.9246C3.74695 20.9246 3.07538 20.253 3.07538 19.4246V4.57538C3.07538 4.17755 3.23341 3.79602 3.51472 3.51472Z"/>
  </svg>
);

const arrowUpLeftFilledIconDefinition = svgToIconDefinition(
  arrowUpLeftFilledSvg,
  'arrow-up-left-filled'
);

/**![ArrowUpLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNTE0NzIgMy41MTQ3MkMzLjc5NjAyIDMuMjMzNDEgNC4xNzc1NSAzLjA3NTM4IDQuNTc1MzggMy4wNzUzOEwxOS40MjQ2IDMuMDc1MzhDMjAuMjUzIDMuMDc1MzggMjAuOTI0NiAzLjc0Njk1IDIwLjkyNDYgNC41NzUzOEMyMC45MjQ2IDUuNDAzODEgMjAuMjUzIDYuMDc1MzggMTkuNDI0NiA2LjA3NTM4TDguMTk2NyA2LjA3NTM4TDIwLjQ4NTMgMTguMzY0QzIxLjA3MTEgMTguOTQ5NyAyMS4wNzExIDE5Ljg5OTUgMjAuNDg1MyAyMC40ODUzQzE5Ljg5OTUgMjEuMDcxMSAxOC45NDk3IDIxLjA3MTEgMTguMzY0IDIwLjQ4NTNMNi4wNzUzOCA4LjE5NjdWMTkuNDI0NkM2LjA3NTM4IDIwLjI1MyA1LjQwMzgxIDIwLjkyNDYgNC41NzUzOCAyMC45MjQ2QzMuNzQ2OTUgMjAuOTI0NiAzLjA3NTM4IDIwLjI1MyAzLjA3NTM4IDE5LjQyNDZWNC41NzUzOEMzLjA3NTM4IDQuMTc3NTUgMy4yMzM0MSAzLjc5NjAyIDMuNTE0NzIgMy41MTQ3MloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpLeftFilled';
}

export default RefIcon;
