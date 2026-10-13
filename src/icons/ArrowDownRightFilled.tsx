// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const arrowDownRightFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4853 20.4853C20.204 20.7666 19.8224 20.9246 19.4246 20.9246L4.57538 20.9246C3.74695 20.9246 3.07538 20.253 3.07538 19.4246C3.07538 18.5962 3.74695 17.9246 4.57538 17.9246L15.8033 17.9246L3.51472 5.63604C2.92893 5.05025 2.92893 4.10051 3.51472 3.51472C4.1005 2.92893 5.05025 2.92893 5.63604 3.51472L17.9246 15.8033V4.57538C17.9246 3.74695 18.5962 3.07538 19.4246 3.07538C20.253 3.07538 20.9246 3.74695 20.9246 4.57538V19.4246C20.9246 19.8224 20.7666 20.204 20.4853 20.4853Z"/>
  </svg>
);

const arrowDownRightFilledIconDefinition = svgToIconDefinition(
  arrowDownRightFilledSvg,
  'arrow-down-right-filled'
);

/**![ArrowDownRightFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQ4NTMgMjAuNDg1M0MyMC4yMDQgMjAuNzY2NiAxOS44MjI0IDIwLjkyNDYgMTkuNDI0NiAyMC45MjQ2TDQuNTc1MzggMjAuOTI0NkMzLjc0Njk1IDIwLjkyNDYgMy4wNzUzOCAyMC4yNTMgMy4wNzUzOCAxOS40MjQ2QzMuMDc1MzggMTguNTk2MiAzLjc0Njk1IDE3LjkyNDYgNC41NzUzOCAxNy45MjQ2TDE1LjgwMzMgMTcuOTI0NkwzLjUxNDcyIDUuNjM2MDRDMi45Mjg5MyA1LjA1MDI1IDIuOTI4OTMgNC4xMDA1MSAzLjUxNDcyIDMuNTE0NzJDNC4xMDA1IDIuOTI4OTMgNS4wNTAyNSAyLjkyODkzIDUuNjM2MDQgMy41MTQ3MkwxNy45MjQ2IDE1LjgwMzNWNC41NzUzOEMxNy45MjQ2IDMuNzQ2OTUgMTguNTk2MiAzLjA3NTM4IDE5LjQyNDYgMy4wNzUzOEMyMC4yNTMgMy4wNzUzOCAyMC45MjQ2IDMuNzQ2OTUgMjAuOTI0NiA0LjU3NTM4VjE5LjQyNDZDMjAuOTI0NiAxOS44MjI0IDIwLjc2NjYgMjAuMjA0IDIwLjQ4NTMgMjAuNDg1M1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={arrowDownRightFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ArrowDownRightFilled';
}

export default RefIcon;
