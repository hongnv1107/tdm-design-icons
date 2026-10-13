// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const backwardFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.5625 20.6719L13.5 13.9687V10.0312L21.5625 3.3281C22.0312 2.9531 22.5625 2.8906 23.1562 3.1406C23.6875 3.42185 23.9688 3.87498 24 4.49998V19.5C23.9688 20.125 23.6875 20.5781 23.1562 20.8594C22.5625 21.1094 22.0312 21.0469 21.5625 20.6719ZM12 19.5C11.9688 20.125 11.6875 20.5781 11.1562 20.8594C10.5625 21.1094 10.0312 21.0469 9.5625 20.6719L0.5625 13.1719C0.1875 12.8594 0 12.4687 0 12C0 11.5312 0.1875 11.1406 0.5625 10.8281L9.5625 3.3281C10.0312 2.9531 10.5625 2.8906 11.1562 3.1406C11.6875 3.42185 11.9688 3.87498 12 4.49998V19.5Z"/>
  </svg>
);

const backwardFilledIconDefinition = svgToIconDefinition(
  backwardFilledSvg,
  'backward-filled'
);

/**![BackwardFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjEuNTYyNSAyMC42NzE5TDEzLjUgMTMuOTY4N1YxMC4wMzEyTDIxLjU2MjUgMy4zMjgxQzIyLjAzMTIgMi45NTMxIDIyLjU2MjUgMi44OTA2IDIzLjE1NjIgMy4xNDA2QzIzLjY4NzUgMy40MjE4NSAyMy45Njg4IDMuODc0OTggMjQgNC40OTk5OFYxOS41QzIzLjk2ODggMjAuMTI1IDIzLjY4NzUgMjAuNTc4MSAyMy4xNTYyIDIwLjg1OTRDMjIuNTYyNSAyMS4xMDk0IDIyLjAzMTIgMjEuMDQ2OSAyMS41NjI1IDIwLjY3MTlaTTEyIDE5LjVDMTEuOTY4OCAyMC4xMjUgMTEuNjg3NSAyMC41NzgxIDExLjE1NjIgMjAuODU5NEMxMC41NjI1IDIxLjEwOTQgMTAuMDMxMiAyMS4wNDY5IDkuNTYyNSAyMC42NzE5TDAuNTYyNSAxMy4xNzE5QzAuMTg3NSAxMi44NTk0IDAgMTIuNDY4NyAwIDEyQzAgMTEuNTMxMiAwLjE4NzUgMTEuMTQwNiAwLjU2MjUgMTAuODI4MUw5LjU2MjUgMy4zMjgxQzEwLjAzMTIgMi45NTMxIDEwLjU2MjUgMi44OTA2IDExLjE1NjIgMy4xNDA2QzExLjY4NzUgMy40MjE4NSAxMS45Njg4IDMuODc0OTggMTIgNC40OTk5OFYxOS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={backwardFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardFilled';
}

export default RefIcon;
