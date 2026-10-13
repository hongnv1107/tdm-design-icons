// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chevronUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.4979 18.355C24.1674 17.6856 24.1674 16.6001 23.4979 15.9307L13.2122 5.64496C12.5427 4.97549 11.4573 4.97549 10.7878 5.64496L0.502102 15.9307C-0.167368 16.6001 -0.167368 17.6856 0.502102 18.355C1.17157 19.0245 2.257 19.0245 2.92647 18.355L12 9.28151L21.0735 18.355C21.743 19.0245 22.8284 19.0245 23.4979 18.355Z"/>
  </svg>
);

const chevronUpFilledIconDefinition = svgToIconDefinition(
  chevronUpFilledSvg,
  'chevron-up-filled'
);

/**![ChevronUpFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIzLjQ5NzkgMTguMzU1QzI0LjE2NzQgMTcuNjg1NiAyNC4xNjc0IDE2LjYwMDEgMjMuNDk3OSAxNS45MzA3TDEzLjIxMjIgNS42NDQ5NkMxMi41NDI3IDQuOTc1NDkgMTEuNDU3MyA0Ljk3NTQ5IDEwLjc4NzggNS42NDQ5NkwwLjUwMjEwMiAxNS45MzA3Qy0wLjE2NzM2OCAxNi42MDAxIC0wLjE2NzM2OCAxNy42ODU2IDAuNTAyMTAyIDE4LjM1NUMxLjE3MTU3IDE5LjAyNDUgMi4yNTcgMTkuMDI0NSAyLjkyNjQ3IDE4LjM1NUwxMiA5LjI4MTUxTDIxLjA3MzUgMTguMzU1QzIxLjc0MyAxOS4wMjQ1IDIyLjgyODQgMTkuMDI0NSAyMy40OTc5IDE4LjM1NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chevronUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChevronUpFilled';
}

export default RefIcon;
