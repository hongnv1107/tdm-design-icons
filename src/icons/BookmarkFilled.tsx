// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bookmarkFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 2.25C3.03125 1.625 3.25 1.09375 3.65625 0.65625C4.09375 0.25 4.625 0.03125 5.25 0H18.75C19.375 0.03125 19.9062 0.25 20.3438 0.65625C20.75 1.09375 20.9688 1.625 21 2.25V22.875C20.9375 23.5625 20.5625 23.9375 19.875 24C19.625 24 19.4062 23.9375 19.2188 23.8125L12 18.75L4.78125 23.8125C4.59375 23.9375 4.375 24 4.125 24C3.4375 23.9375 3.0625 23.5625 3 22.875V2.25Z"/>
  </svg>
);

const bookmarkFilledIconDefinition = svgToIconDefinition(
  bookmarkFilledSvg,
  'bookmark-filled'
);

/**![BookmarkFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMyAyLjI1QzMuMDMxMjUgMS42MjUgMy4yNSAxLjA5Mzc1IDMuNjU2MjUgMC42NTYyNUM0LjA5Mzc1IDAuMjUgNC42MjUgMC4wMzEyNSA1LjI1IDBIMTguNzVDMTkuMzc1IDAuMDMxMjUgMTkuOTA2MiAwLjI1IDIwLjM0MzggMC42NTYyNUMyMC43NSAxLjA5Mzc1IDIwLjk2ODggMS42MjUgMjEgMi4yNVYyMi44NzVDMjAuOTM3NSAyMy41NjI1IDIwLjU2MjUgMjMuOTM3NSAxOS44NzUgMjRDMTkuNjI1IDI0IDE5LjQwNjIgMjMuOTM3NSAxOS4yMTg4IDIzLjgxMjVMMTIgMTguNzVMNC43ODEyNSAyMy44MTI1QzQuNTkzNzUgMjMuOTM3NSA0LjM3NSAyNCA0LjEyNSAyNEMzLjQzNzUgMjMuOTM3NSAzLjA2MjUgMjMuNTYyNSAzIDIyLjg3NVYyLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bookmarkFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookmarkFilled';
}

export default RefIcon;
