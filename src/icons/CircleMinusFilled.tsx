// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const circleMinusFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 24C9.8125 23.9688 7.8125 23.4375 6 22.4062C4.1875 21.3438 2.71875 19.875 1.59375 18C0.53125 16.0938 0 14.0938 0 12C0 9.90625 0.53125 7.90625 1.59375 6C2.71875 4.125 4.1875 2.65625 6 1.59375C7.8125 0.5625 9.8125 0.03125 12 0C14.1875 0.03125 16.1875 0.5625 18 1.59375C19.8125 2.65625 21.2812 4.125 22.4062 6C23.4688 7.90625 24 9.90625 24 12C24 14.0938 23.4688 16.0938 22.4062 18C21.2812 19.875 19.8125 21.3438 18 22.4062C16.1875 23.4375 14.1875 23.9688 12 24ZM8.625 10.875C7.9375 10.9375 7.5625 11.3125 7.5 12C7.5625 12.6875 7.9375 13.0625 8.625 13.125H15.375C16.0625 13.0625 16.4375 12.6875 16.5 12C16.4375 11.3125 16.0625 10.9375 15.375 10.875H8.625Z"/>
  </svg>
);

const circleMinusFilledIconDefinition = svgToIconDefinition(
  circleMinusFilledSvg,
  'circle-minus-filled'
);

/**![CircleMinusFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIgMjRDOS44MTI1IDIzLjk2ODggNy44MTI1IDIzLjQzNzUgNiAyMi40MDYyQzQuMTg3NSAyMS4zNDM4IDIuNzE4NzUgMTkuODc1IDEuNTkzNzUgMThDMC41MzEyNSAxNi4wOTM4IDAgMTQuMDkzOCAwIDEyQzAgOS45MDYyNSAwLjUzMTI1IDcuOTA2MjUgMS41OTM3NSA2QzIuNzE4NzUgNC4xMjUgNC4xODc1IDIuNjU2MjUgNiAxLjU5Mzc1QzcuODEyNSAwLjU2MjUgOS44MTI1IDAuMDMxMjUgMTIgMEMxNC4xODc1IDAuMDMxMjUgMTYuMTg3NSAwLjU2MjUgMTggMS41OTM3NUMxOS44MTI1IDIuNjU2MjUgMjEuMjgxMiA0LjEyNSAyMi40MDYyIDZDMjMuNDY4OCA3LjkwNjI1IDI0IDkuOTA2MjUgMjQgMTJDMjQgMTQuMDkzOCAyMy40Njg4IDE2LjA5MzggMjIuNDA2MiAxOEMyMS4yODEyIDE5Ljg3NSAxOS44MTI1IDIxLjM0MzggMTggMjIuNDA2MkMxNi4xODc1IDIzLjQzNzUgMTQuMTg3NSAyMy45Njg4IDEyIDI0Wk04LjYyNSAxMC44NzVDNy45Mzc1IDEwLjkzNzUgNy41NjI1IDExLjMxMjUgNy41IDEyQzcuNTYyNSAxMi42ODc1IDcuOTM3NSAxMy4wNjI1IDguNjI1IDEzLjEyNUgxNS4zNzVDMTYuMDYyNSAxMy4wNjI1IDE2LjQzNzUgMTIuNjg3NSAxNi41IDEyQzE2LjQzNzUgMTEuMzEyNSAxNi4wNjI1IDEwLjkzNzUgMTUuMzc1IDEwLjg3NUg4LjYyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={circleMinusFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CircleMinusFilled';
}

export default RefIcon;
