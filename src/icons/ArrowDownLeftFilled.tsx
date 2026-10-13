// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownLeftFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.51472 20.4853C3.79602 20.7666 4.17755 20.9246 4.57538 20.9246L19.4246 20.9246C20.253 20.9246 20.9246 20.253 20.9246 19.4246C20.9246 18.5962 20.253 17.9246 19.4246 17.9246L8.1967 17.9246L20.4853 5.63604C21.0711 5.05025 21.0711 4.10051 20.4853 3.51472C19.8995 2.92893 18.9497 2.92893 18.364 3.51472L6.07538 15.8033V4.57538C6.07538 3.74695 5.40381 3.07538 4.57538 3.07538C3.74695 3.07538 3.07538 3.74695 3.07538 4.57538V19.4246C3.07538 19.8224 3.23341 20.204 3.51472 20.4853Z"/>
  </svg>
);

const arrowDownLeftFilledIconDefinition = svgToIconDefinition(
  arrowDownLeftFilledSvg,
  'arrow-down-left-filled'
);

/**![ArrowDownLeftFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNTE0NzIgMjAuNDg1M0MzLjc5NjAyIDIwLjc2NjYgNC4xNzc1NSAyMC45MjQ2IDQuNTc1MzggMjAuOTI0NkwxOS40MjQ2IDIwLjkyNDZDMjAuMjUzIDIwLjkyNDYgMjAuOTI0NiAyMC4yNTMgMjAuOTI0NiAxOS40MjQ2QzIwLjkyNDYgMTguNTk2MiAyMC4yNTMgMTcuOTI0NiAxOS40MjQ2IDE3LjkyNDZMOC4xOTY3IDE3LjkyNDZMMjAuNDg1MyA1LjYzNjA0QzIxLjA3MTEgNS4wNTAyNSAyMS4wNzExIDQuMTAwNTEgMjAuNDg1MyAzLjUxNDcyQzE5Ljg5OTUgMi45Mjg5MyAxOC45NDk3IDIuOTI4OTMgMTguMzY0IDMuNTE0NzJMNi4wNzUzOCAxNS44MDMzVjQuNTc1MzhDNi4wNzUzOCAzLjc0Njk1IDUuNDAzODEgMy4wNzUzOCA0LjU3NTM4IDMuMDc1MzhDMy43NDY5NSAzLjA3NTM4IDMuMDc1MzggMy43NDY5NSAzLjA3NTM4IDQuNTc1MzhWMTkuNDI0NkMzLjA3NTM4IDE5LjgyMjQgMy4yMzM0MSAyMC4yMDQgMy41MTQ3MiAyMC40ODUzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownLeftFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownLeftFilled';
}

export default RefIcon;
