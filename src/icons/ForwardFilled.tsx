// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const forwardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.48438 20.6719C1.98438 21.0469 1.4375 21.1094 0.84375 20.8594C0.3125 20.5781 0.03125 20.125 0 19.5V4.49998C0.03125 3.87498 0.3125 3.42185 0.84375 3.1406C1.4375 2.8906 1.98438 2.9531 2.48438 3.3281L10.5 10.0312V13.9687L2.48438 20.6719ZM12 4.49998C12.0312 3.87498 12.3125 3.42185 12.8438 3.1406C13.4375 2.8906 13.9844 2.9531 14.4844 3.3281L23.4844 10.8281C23.8281 11.1406 24 11.5312 24 12C24 12.4687 23.8281 12.8594 23.4844 13.1719L14.4844 20.6719C13.9844 21.0469 13.4375 21.1094 12.8438 20.8594C12.3125 20.5781 12.0312 20.125 12 19.5V4.49998Z"/>
  </svg>
);

const forwardFilledIconDefinition = svgToIconDefinition(
  forwardFilledSvg,
  'forward-filled'
);

/**![ForwardFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi40ODQzOCAyMC42NzE5QzEuOTg0MzggMjEuMDQ2OSAxLjQzNzUgMjEuMTA5NCAwLjg0Mzc1IDIwLjg1OTRDMC4zMTI1IDIwLjU3ODEgMC4wMzEyNSAyMC4xMjUgMCAxOS41VjQuNDk5OThDMC4wMzEyNSAzLjg3NDk4IDAuMzEyNSAzLjQyMTg1IDAuODQzNzUgMy4xNDA2QzEuNDM3NSAyLjg5MDYgMS45ODQzOCAyLjk1MzEgMi40ODQzOCAzLjMyODFMMTAuNSAxMC4wMzEyVjEzLjk2ODdMMi40ODQzOCAyMC42NzE5Wk0xMiA0LjQ5OTk4QzEyLjAzMTIgMy44NzQ5OCAxMi4zMTI1IDMuNDIxODUgMTIuODQzOCAzLjE0MDZDMTMuNDM3NSAyLjg5MDYgMTMuOTg0NCAyLjk1MzEgMTQuNDg0NCAzLjMyODFMMjMuNDg0NCAxMC44MjgxQzIzLjgyODEgMTEuMTQwNiAyNCAxMS41MzEyIDI0IDEyQzI0IDEyLjQ2ODcgMjMuODI4MSAxMi44NTk0IDIzLjQ4NDQgMTMuMTcxOUwxNC40ODQ0IDIwLjY3MTlDMTMuOTg0NCAyMS4wNDY5IDEzLjQzNzUgMjEuMTA5NCAxMi44NDM4IDIwLjg1OTRDMTIuMzEyNSAyMC41NzgxIDEyLjAzMTIgMjAuMTI1IDEyIDE5LjVWNC40OTk5OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={forwardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardFilled';
}

export default RefIcon;
