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
    <path d="M6 3.88C7.86384 3.88 9.42998 5.15477 9.87402 6.88H21C21.5523 6.88 22 7.32772 22 7.88C22 8.43229 21.5523 8.88 21 8.88H9.87402C9.42998 10.6052 7.86384 11.88 6 11.88C3.79086 11.88 2 10.0891 2 7.88C2 5.67087 3.79086 3.88 6 3.88ZM22 15.88C22 18.0891 20.2091 19.88 18 19.88C16.1362 19.88 14.57 18.6052 14.126 16.88H3C2.44772 16.88 2 16.4323 2 15.88C2 15.3277 2.44772 14.88 3 14.88H14.126C14.57 13.1548 16.1362 11.88 18 11.88C20.2091 11.88 22 13.6709 22 15.88Z"/>
  </svg>
);

const slidersSimpleFilledIconDefinition = svgToIconDefinition(
  slidersSimpleFilledSvg,
  'sliders-simple-filled'
);

/**![SlidersSimpleFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiAzLjg4QzcuODYzODQgMy44OCA5LjQyOTk4IDUuMTU0NzcgOS44NzQwMiA2Ljg4SDIxQzIxLjU1MjMgNi44OCAyMiA3LjMyNzcyIDIyIDcuODhDMjIgOC40MzIyOSAyMS41NTIzIDguODggMjEgOC44OEg5Ljg3NDAyQzkuNDI5OTggMTAuNjA1MiA3Ljg2Mzg0IDExLjg4IDYgMTEuODhDMy43OTA4NiAxMS44OCAyIDEwLjA4OTEgMiA3Ljg4QzIgNS42NzA4NyAzLjc5MDg2IDMuODggNiAzLjg4Wk0yMiAxNS44OEMyMiAxOC4wODkxIDIwLjIwOTEgMTkuODggMTggMTkuODhDMTYuMTM2MiAxOS44OCAxNC41NyAxOC42MDUyIDE0LjEyNiAxNi44OEgzQzIuNDQ3NzIgMTYuODggMiAxNi40MzIzIDIgMTUuODhDMiAxNS4zMjc3IDIuNDQ3NzIgMTQuODggMyAxNC44OEgxNC4xMjZDMTQuNTcgMTMuMTU0OCAxNi4xMzYyIDExLjg4IDE4IDExLjg4QzIwLjIwOTEgMTEuODggMjIgMTMuNjcwOSAyMiAxNS44OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={slidersSimpleFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SlidersSimpleFilledIcon';
}

export default RefIcon;
