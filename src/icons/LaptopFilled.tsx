// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const laptopFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.8 3.60001H19.2C19.875 3.62501 20.4375 3.86251 20.8875 4.31251C21.3375 4.76251 21.575 5.32501 21.6 6.00001V15.6H19.2V6.00001H4.8V15.6H2.4V6.00001C2.425 5.32501 2.6625 4.76251 3.1125 4.31251C3.5625 3.86251 4.125 3.62501 4.8 3.60001ZM0.7125 16.8H23.2875C23.7125 16.85 23.95 17.0875 24 17.5125C23.975 18.3375 23.7 19.025 23.175 19.575C22.625 20.1 21.9375 20.375 21.1125 20.4H2.8875C2.0625 20.375 1.3875 20.1 0.8625 19.575C0.3125 19.025 0.025 18.3375 0 17.5125C0.05 17.0875 0.2875 16.85 0.7125 16.8Z"/>
  </svg>
);

const laptopFilledIconDefinition = svgToIconDefinition(
  laptopFilledSvg,
  'laptop-filled'
);

/**![LaptopFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNC44IDMuNjAwMDFIMTkuMkMxOS44NzUgMy42MjUwMSAyMC40Mzc1IDMuODYyNTEgMjAuODg3NSA0LjMxMjUxQzIxLjMzNzUgNC43NjI1MSAyMS41NzUgNS4zMjUwMSAyMS42IDYuMDAwMDFWMTUuNkgxOS4yVjYuMDAwMDFINC44VjE1LjZIMi40VjYuMDAwMDFDMi40MjUgNS4zMjUwMSAyLjY2MjUgNC43NjI1MSAzLjExMjUgNC4zMTI1MUMzLjU2MjUgMy44NjI1MSA0LjEyNSAzLjYyNTAxIDQuOCAzLjYwMDAxWk0wLjcxMjUgMTYuOEgyMy4yODc1QzIzLjcxMjUgMTYuODUgMjMuOTUgMTcuMDg3NSAyNCAxNy41MTI1QzIzLjk3NSAxOC4zMzc1IDIzLjcgMTkuMDI1IDIzLjE3NSAxOS41NzVDMjIuNjI1IDIwLjEgMjEuOTM3NSAyMC4zNzUgMjEuMTEyNSAyMC40SDIuODg3NUMyLjA2MjUgMjAuMzc1IDEuMzg3NSAyMC4xIDAuODYyNSAxOS41NzVDMC4zMTI1IDE5LjAyNSAwLjAyNSAxOC4zMzc1IDAgMTcuNTEyNUMwLjA1IDE3LjA4NzUgMC4yODc1IDE2Ljg1IDAuNzEyNSAxNi44WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={laptopFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LaptopFilled';
}

export default RefIcon;
