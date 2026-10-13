// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const emailFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 18.3C24 20.1493 22.4588 21.5999 20.6402 21.6H3.35977C1.54122 21.5999 0 20.1493 0 18.3V11.7L0.0117188 11.5348C0.0642901 11.1563 0.295074 10.8213 0.638672 10.6395C1.03155 10.4316 1.50748 10.4575 1.875 10.7075L12 17.5981L22.125 10.7075C22.4925 10.4575 22.9685 10.4316 23.3613 10.6395C23.7542 10.8474 24 11.2555 24 11.7V18.3Z"/><path d="M20.6402 2.39996C22.4588 2.40009 24 3.85066 24 5.69996C24 6.09713 23.8033 6.46909 23.475 6.69254L12.675 14.0425C12.2678 14.3195 11.7322 14.3195 11.325 14.0425L0.525 6.69254C0.196659 6.46909 0 6.09713 0 5.69996C0 3.85066 1.54122 2.40009 3.35977 2.39996H20.6402Z"/>
  </svg>
);

const emailFilledIconDefinition = svgToIconDefinition(
  emailFilledSvg,
  'email-filled'
);

/**![EmailFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjQgMTguM0MyNCAyMC4xNDkzIDIyLjQ1ODggMjEuNTk5OSAyMC42NDAyIDIxLjZIMy4zNTk3N0MxLjU0MTIyIDIxLjU5OTkgMCAyMC4xNDkzIDAgMTguM1YxMS43TDAuMDExNzE4OCAxMS41MzQ4QzAuMDY0MjkwMSAxMS4xNTYzIDAuMjk1MDc0IDEwLjgyMTMgMC42Mzg2NzIgMTAuNjM5NUMxLjAzMTU1IDEwLjQzMTYgMS41MDc0OCAxMC40NTc1IDEuODc1IDEwLjcwNzVMMTIgMTcuNTk4MUwyMi4xMjUgMTAuNzA3NUMyMi40OTI1IDEwLjQ1NzUgMjIuOTY4NSAxMC40MzE2IDIzLjM2MTMgMTAuNjM5NUMyMy43NTQyIDEwLjg0NzQgMjQgMTEuMjU1NSAyNCAxMS43VjE4LjNaIi8+PHBhdGggZD0iTTIwLjY0MDIgMi4zOTk5NkMyMi40NTg4IDIuNDAwMDkgMjQgMy44NTA2NiAyNCA1LjY5OTk2QzI0IDYuMDk3MTMgMjMuODAzMyA2LjQ2OTA5IDIzLjQ3NSA2LjY5MjU0TDEyLjY3NSAxNC4wNDI1QzEyLjI2NzggMTQuMzE5NSAxMS43MzIyIDE0LjMxOTUgMTEuMzI1IDE0LjA0MjVMMC41MjUgNi42OTI1NEMwLjE5NjY1OSA2LjQ2OTA5IDAgNi4wOTcxMyAwIDUuNjk5OTZDMCAzLjg1MDY2IDEuNTQxMjIgMi40MDAwOSAzLjM1OTc3IDIuMzk5OTZIMjAuNjQwMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={emailFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'EmailFilled';
}

export default RefIcon;
