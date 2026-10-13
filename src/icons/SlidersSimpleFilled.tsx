// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const slidersSimpleFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.8 2.39999C7.03661 2.39999 8.91598 3.92972 9.44883 5.99999H22.8C23.4627 5.99999 24 6.53725 24 7.19999C24 7.86274 23.4627 8.39999 22.8 8.39999H9.44883C8.91598 10.4703 7.03661 12 4.8 12C2.14903 12 0 9.85096 0 7.19999C0 4.54903 2.14903 2.39999 4.8 2.39999ZM24 16.8C24 19.451 21.851 21.6 19.2 21.6C16.9634 21.6 15.084 20.0703 14.5512 18H1.2C0.537258 18 0 17.4627 0 16.8C0 16.1373 0.537258 15.6 1.2 15.6H14.5512C15.084 13.5297 16.9634 12 19.2 12C21.851 12 24 14.149 24 16.8Z"/>
  </svg>
);

const slidersSimpleFilledIconDefinition = svgToIconDefinition(
  slidersSimpleFilledSvg,
  'sliders-simple-filled'
);

/**![SlidersSimpleFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNC44IDIuMzk5OTlDNy4wMzY2MSAyLjM5OTk5IDguOTE1OTggMy45Mjk3MiA5LjQ0ODgzIDUuOTk5OTlIMjIuOEMyMy40NjI3IDUuOTk5OTkgMjQgNi41MzcyNSAyNCA3LjE5OTk5QzI0IDcuODYyNzQgMjMuNDYyNyA4LjM5OTk5IDIyLjggOC4zOTk5OUg5LjQ0ODgzQzguOTE1OTggMTAuNDcwMyA3LjAzNjYxIDEyIDQuOCAxMkMyLjE0OTAzIDEyIDAgOS44NTA5NiAwIDcuMTk5OTlDMCA0LjU0OTAzIDIuMTQ5MDMgMi4zOTk5OSA0LjggMi4zOTk5OVpNMjQgMTYuOEMyNCAxOS40NTEgMjEuODUxIDIxLjYgMTkuMiAyMS42QzE2Ljk2MzQgMjEuNiAxNS4wODQgMjAuMDcwMyAxNC41NTEyIDE4SDEuMkMwLjUzNzI1OCAxOCAwIDE3LjQ2MjcgMCAxNi44QzAgMTYuMTM3MyAwLjUzNzI1OCAxNS42IDEuMiAxNS42SDE0LjU1MTJDMTUuMDg0IDEzLjUyOTcgMTYuOTYzNCAxMiAxOS4yIDEyQzIxLjg1MSAxMiAyNCAxNC4xNDkgMjQgMTYuOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={slidersSimpleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlidersSimpleFilled';
}

export default RefIcon;
