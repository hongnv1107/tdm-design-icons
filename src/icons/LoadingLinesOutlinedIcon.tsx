// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const loadingLinesOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.8368 14.3278C20.3575 14.442 20.8773 14.1124 20.9381 13.5828C21.0717 12.4187 20.989 11.237 20.6913 10.0979C20.312 8.64675 19.5946 7.30601 18.5976 6.1854C17.6006 5.0648 16.3525 4.19619 14.9553 3.65065C13.8586 3.22244 12.6946 3.00283 11.5228 3.00003C10.9897 2.99875 10.6019 3.47673 10.6547 4.00718C10.7075 4.53764 11.1814 4.91838 11.7143 4.93347C12.5815 4.95803 13.4405 5.13158 14.2532 5.44888C15.3664 5.88356 16.3609 6.57566 17.1553 7.46856C17.9497 8.36145 18.5214 9.42975 18.8236 10.586C19.0442 11.4301 19.1166 12.3035 19.0401 13.1677C18.993 13.6987 19.3161 14.2137 19.8368 14.3278Z"/>
  </svg>
);

const loadingLinesOutlinedIconDefinition = svgToIconDefinition(
  loadingLinesOutlinedSvg,
  'loading-lines-outlined'
);

/**![LoadingLinesOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTkuODM2OCAxNC4zMjc4QzIwLjM1NzUgMTQuNDQyIDIwLjg3NzMgMTQuMTEyNCAyMC45MzgxIDEzLjU4MjhDMjEuMDcxNyAxMi40MTg3IDIwLjk4OSAxMS4yMzcgMjAuNjkxMyAxMC4wOTc5QzIwLjMxMiA4LjY0Njc1IDE5LjU5NDYgNy4zMDYwMSAxOC41OTc2IDYuMTg1NEMxNy42MDA2IDUuMDY0OCAxNi4zNTI1IDQuMTk2MTkgMTQuOTU1MyAzLjY1MDY1QzEzLjg1ODYgMy4yMjI0NCAxMi42OTQ2IDMuMDAyODMgMTEuNTIyOCAzLjAwMDAzQzEwLjk4OTcgMi45OTg3NSAxMC42MDE5IDMuNDc2NzMgMTAuNjU0NyA0LjAwNzE4QzEwLjcwNzUgNC41Mzc2NCAxMS4xODE0IDQuOTE4MzggMTEuNzE0MyA0LjkzMzQ3QzEyLjU4MTUgNC45NTgwMyAxMy40NDA1IDUuMTMxNTggMTQuMjUzMiA1LjQ0ODg4QzE1LjM2NjQgNS44ODM1NiAxNi4zNjA5IDYuNTc1NjYgMTcuMTU1MyA3LjQ2ODU2QzE3Ljk0OTcgOC4zNjE0NSAxOC41MjE0IDkuNDI5NzUgMTguODIzNiAxMC41ODZDMTkuMDQ0MiAxMS40MzAxIDE5LjExNjYgMTIuMzAzNSAxOS4wNDAxIDEzLjE2NzdDMTguOTkzIDEzLjY5ODcgMTkuMzE2MSAxNC4yMTM3IDE5LjgzNjggMTQuMzI3OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={loadingLinesOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LoadingLinesOutlinedIcon';
}

export default RefIcon;
