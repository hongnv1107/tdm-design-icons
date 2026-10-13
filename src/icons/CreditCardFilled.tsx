// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const creditCardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 19.2C24 20.5255 22.9255 21.6 21.6 21.6H2.4C1.07452 21.6 -1.15877e-07 20.5255 0 19.2V10.8H24V19.2ZM3.6 16.8C2.93731 16.8 2.40008 17.3374 2.4 18C2.4 18.6628 2.93726 19.2 3.6 19.2H8.4C9.06274 19.2 9.6 18.6628 9.6 18C9.59992 17.3374 9.06269 16.8 8.4 16.8H3.6ZM13.2 16.8C12.5373 16.8 12.0001 17.3374 12 18C12 18.6628 12.5373 19.2 13.2 19.2H15.6C16.2627 19.2 16.8 18.6628 16.8 18C16.7999 17.3374 16.2627 16.8 15.6 16.8H13.2ZM21.6 2.40002C22.9254 2.40002 23.9999 3.47461 24 4.80002V8.40002H0V4.80002C7.90854e-05 3.47461 1.07457 2.40002 2.4 2.40002H21.6Z"/>
  </svg>
);

const creditCardFilledIconDefinition = svgToIconDefinition(
  creditCardFilledSvg,
  'credit-card-filled'
);

/**![CreditCardFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjQgMTkuMkMyNCAyMC41MjU1IDIyLjkyNTUgMjEuNiAyMS42IDIxLjZIMi40QzEuMDc0NTIgMjEuNiAtMS4xNTg3N2UtMDcgMjAuNTI1NSAwIDE5LjJWMTAuOEgyNFYxOS4yWk0zLjYgMTYuOEMyLjkzNzMxIDE2LjggMi40MDAwOCAxNy4zMzc0IDIuNCAxOEMyLjQgMTguNjYyOCAyLjkzNzI2IDE5LjIgMy42IDE5LjJIOC40QzkuMDYyNzQgMTkuMiA5LjYgMTguNjYyOCA5LjYgMThDOS41OTk5MiAxNy4zMzc0IDkuMDYyNjkgMTYuOCA4LjQgMTYuOEgzLjZaTTEzLjIgMTYuOEMxMi41MzczIDE2LjggMTIuMDAwMSAxNy4zMzc0IDEyIDE4QzEyIDE4LjY2MjggMTIuNTM3MyAxOS4yIDEzLjIgMTkuMkgxNS42QzE2LjI2MjcgMTkuMiAxNi44IDE4LjY2MjggMTYuOCAxOEMxNi43OTk5IDE3LjMzNzQgMTYuMjYyNyAxNi44IDE1LjYgMTYuOEgxMy4yWk0yMS42IDIuNDAwMDJDMjIuOTI1NCAyLjQwMDAyIDIzLjk5OTkgMy40NzQ2MSAyNCA0LjgwMDAyVjguNDAwMDJIMFY0LjgwMDAyQzcuOTA4NTRlLTA1IDMuNDc0NjEgMS4wNzQ1NyAyLjQwMDAyIDIuNCAyLjQwMDAySDIxLjZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={creditCardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CreditCardFilled';
}

export default RefIcon;
