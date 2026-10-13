// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const forwardStepOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.5 1.5C17.5833 0.583333 18.0833 0.0833333 19 0C19.9167 0.0833333 20.4167 0.583333 20.5 1.5V22.5C20.4167 23.4167 19.9167 23.9167 19 24C18.0833 23.9167 17.5833 23.4167 17.5 22.5V15.9375L6.4375 23.6875C6.10417 23.8958 5.75 24 5.375 24C4.83333 24 4.39583 23.8125 4.0625 23.4375C3.6875 23.1042 3.5 22.6667 3.5 22.125V1.875C3.5 1.33333 3.6875 0.895833 4.0625 0.5625C4.39583 0.1875 4.83333 0 5.375 0C5.79167 0 6.14583 0.104167 6.4375 0.3125L17.5 8.0625V1.5ZM17.5 12.25V11.75L6.5 4.0625V20L17.5 12.25Z"/>
  </svg>
);

const forwardStepOutlinedIconDefinition = svgToIconDefinition(
  forwardStepOutlinedSvg,
  'forward-step-outlined'
);

/**![ForwardStepOutlined](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcuNSAxLjVDMTcuNTgzMyAwLjU4MzMzMyAxOC4wODMzIDAuMDgzMzMzMyAxOSAwQzE5LjkxNjcgMC4wODMzMzMzIDIwLjQxNjcgMC41ODMzMzMgMjAuNSAxLjVWMjIuNUMyMC40MTY3IDIzLjQxNjcgMTkuOTE2NyAyMy45MTY3IDE5IDI0QzE4LjA4MzMgMjMuOTE2NyAxNy41ODMzIDIzLjQxNjcgMTcuNSAyMi41VjE1LjkzNzVMNi40Mzc1IDIzLjY4NzVDNi4xMDQxNyAyMy44OTU4IDUuNzUgMjQgNS4zNzUgMjRDNC44MzMzMyAyNCA0LjM5NTgzIDIzLjgxMjUgNC4wNjI1IDIzLjQzNzVDMy42ODc1IDIzLjEwNDIgMy41IDIyLjY2NjcgMy41IDIyLjEyNVYxLjg3NUMzLjUgMS4zMzMzMyAzLjY4NzUgMC44OTU4MzMgNC4wNjI1IDAuNTYyNUM0LjM5NTgzIDAuMTg3NSA0LjgzMzMzIDAgNS4zNzUgMEM1Ljc5MTY3IDAgNi4xNDU4MyAwLjEwNDE2NyA2LjQzNzUgMC4zMTI1TDE3LjUgOC4wNjI1VjEuNVpNMTcuNSAxMi4yNVYxMS43NUw2LjUgNC4wNjI1VjIwTDE3LjUgMTIuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={forwardStepOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ForwardStepOutlined';
}

export default RefIcon;
