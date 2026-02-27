// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 19.0633L19 12L7 4.93675V19.0633ZM6.04167 3.2512C6.70833 2.90339 7.375 2.91676 8.04167 3.29133L20.0417 10.3546C20.6528 10.7291 20.9722 11.2776 21 12C20.9722 12.7224 20.6528 13.2708 20.0417 13.6454L8.04167 20.7087C7.375 21.0832 6.70833 21.0966 6.04167 20.7488C5.375 20.3742 5.02778 19.8124 5 19.0633V4.93675C5.02778 4.18761 5.375 3.62576 6.04167 3.2512Z"/>
  </svg>
);

const playOutlinedIconDefinition = svgToIconDefinition(
  playOutlinedSvg,
  'play-outlined'
);

/**![PlayOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNyAxOS4wNjMzTDE5IDEyTDcgNC45MzY3NVYxOS4wNjMzWk02LjA0MTY3IDMuMjUxMkM2LjcwODMzIDIuOTAzMzkgNy4zNzUgMi45MTY3NiA4LjA0MTY3IDMuMjkxMzNMMjAuMDQxNyAxMC4zNTQ2QzIwLjY1MjggMTAuNzI5MSAyMC45NzIyIDExLjI3NzYgMjEgMTJDMjAuOTcyMiAxMi43MjI0IDIwLjY1MjggMTMuMjcwOCAyMC4wNDE3IDEzLjY0NTRMOC4wNDE2NyAyMC43MDg3QzcuMzc1IDIxLjA4MzIgNi43MDgzMyAyMS4wOTY2IDYuMDQxNjcgMjAuNzQ4OEM1LjM3NSAyMC4zNzQyIDUuMDI3NzggMTkuODEyNCA1IDE5LjA2MzNWNC45MzY3NUM1LjAyNzc4IDQuMTg3NjEgNS4zNzUgMy42MjU3NiA2LjA0MTY3IDMuMjUxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayOutlinedIcon';
}

export default RefIcon;
