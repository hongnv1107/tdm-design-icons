// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowUpRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4853 3.51472C20.204 3.23341 19.8224 3.07538 19.4246 3.07538L4.57538 3.07538C3.74695 3.07538 3.07538 3.74695 3.07538 4.57538C3.07538 5.40381 3.74695 6.07538 4.57538 6.07538L15.8033 6.07538L3.51472 18.364C2.92893 18.9497 2.92893 19.8995 3.51472 20.4853C4.1005 21.0711 5.05025 21.0711 5.63604 20.4853L17.9246 8.1967V19.4246C17.9246 20.253 18.5962 20.9246 19.4246 20.9246C20.253 20.9246 20.9246 20.253 20.9246 19.4246V4.57538C20.9246 4.17755 20.7666 3.79602 20.4853 3.51472Z"/>
  </svg>
);

const arrowUpRightFilledIconDefinition = svgToIconDefinition(
  arrowUpRightFilledSvg,
  'arrow-up-right-filled'
);

/**![ArrowUpRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQ4NTMgMy41MTQ3MkMyMC4yMDQgMy4yMzM0MSAxOS44MjI0IDMuMDc1MzggMTkuNDI0NiAzLjA3NTM4TDQuNTc1MzggMy4wNzUzOEMzLjc0Njk1IDMuMDc1MzggMy4wNzUzOCAzLjc0Njk1IDMuMDc1MzggNC41NzUzOEMzLjA3NTM4IDUuNDAzODEgMy43NDY5NSA2LjA3NTM4IDQuNTc1MzggNi4wNzUzOEwxNS44MDMzIDYuMDc1MzhMMy41MTQ3MiAxOC4zNjRDMi45Mjg5MyAxOC45NDk3IDIuOTI4OTMgMTkuODk5NSAzLjUxNDcyIDIwLjQ4NTNDNC4xMDA1IDIxLjA3MTEgNS4wNTAyNSAyMS4wNzExIDUuNjM2MDQgMjAuNDg1M0wxNy45MjQ2IDguMTk2N1YxOS40MjQ2QzE3LjkyNDYgMjAuMjUzIDE4LjU5NjIgMjAuOTI0NiAxOS40MjQ2IDIwLjkyNDZDMjAuMjUzIDIwLjkyNDYgMjAuOTI0NiAyMC4yNTMgMjAuOTI0NiAxOS40MjQ2VjQuNTc1MzhDMjAuOTI0NiA0LjE3NzU1IDIwLjc2NjYgMy43OTYwMiAyMC40ODUzIDMuNTE0NzJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowUpRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowUpRightFilled';
}

export default RefIcon;
