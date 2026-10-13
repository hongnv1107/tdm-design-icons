// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const backwardStepOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 1.5V8.0625L17.5625 0.3125C17.8542 0.104167 18.2083 0 18.625 0C19.1667 0 19.6042 0.1875 19.9375 0.5625C20.3125 0.895833 20.5 1.33333 20.5 1.875V22.125C20.5 22.6667 20.3125 23.1042 19.9375 23.4375C19.6042 23.8125 19.1667 24 18.625 24C18.25 24 17.8958 23.8958 17.5625 23.6875L6.5 15.9375V22.5C6.41667 23.4167 5.91667 23.9167 5 24C4.08333 23.9167 3.58333 23.4167 3.5 22.5V1.5C3.58333 0.583333 4.08333 0.0833333 5 0C5.91667 0.0833333 6.41667 0.583333 6.5 1.5ZM6.5 12.25L17.5 20V4.0625L6.5 11.75V12.25Z"/>
  </svg>
);

const backwardStepOutlinedIconDefinition = svgToIconDefinition(
  backwardStepOutlinedSvg,
  'backward-step-outlined'
);

/**![BackwardStepOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi41IDEuNVY4LjA2MjVMMTcuNTYyNSAwLjMxMjVDMTcuODU0MiAwLjEwNDE2NyAxOC4yMDgzIDAgMTguNjI1IDBDMTkuMTY2NyAwIDE5LjYwNDIgMC4xODc1IDE5LjkzNzUgMC41NjI1QzIwLjMxMjUgMC44OTU4MzMgMjAuNSAxLjMzMzMzIDIwLjUgMS44NzVWMjIuMTI1QzIwLjUgMjIuNjY2NyAyMC4zMTI1IDIzLjEwNDIgMTkuOTM3NSAyMy40Mzc1QzE5LjYwNDIgMjMuODEyNSAxOS4xNjY3IDI0IDE4LjYyNSAyNEMxOC4yNSAyNCAxNy44OTU4IDIzLjg5NTggMTcuNTYyNSAyMy42ODc1TDYuNSAxNS45Mzc1VjIyLjVDNi40MTY2NyAyMy40MTY3IDUuOTE2NjcgMjMuOTE2NyA1IDI0QzQuMDgzMzMgMjMuOTE2NyAzLjU4MzMzIDIzLjQxNjcgMy41IDIyLjVWMS41QzMuNTgzMzMgMC41ODMzMzMgNC4wODMzMyAwLjA4MzMzMzMgNSAwQzUuOTE2NjcgMC4wODMzMzMzIDYuNDE2NjcgMC41ODMzMzMgNi41IDEuNVpNNi41IDEyLjI1TDE3LjUgMjBWNC4wNjI1TDYuNSAxMS43NVYxMi4yNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={backwardStepOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BackwardStepOutlined';
}

export default RefIcon;
