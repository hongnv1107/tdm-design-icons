// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const exclamationFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 6V14C13 14.2917 12.9062 14.5312 12.7188 14.7188C12.5312 14.9062 12.2917 15 12 15C11.7083 15 11.4688 14.9062 11.2812 14.7188C11.0938 14.5312 11 14.2917 11 14V6C11 5.70833 11.0938 5.46875 11.2812 5.28125C11.4688 5.09375 11.7083 5 12 5C12.2917 5 12.5312 5.09375 12.7188 5.28125C12.9062 5.46875 13 5.70833 13 6ZM12 19C11.5208 18.9792 11.1562 18.7708 10.9062 18.375C10.6979 17.9583 10.6979 17.5417 10.9062 17.125C11.1562 16.7292 11.5208 16.5208 12 16.5C12.4792 16.5208 12.8438 16.7292 13.0938 17.125C13.3021 17.5417 13.3021 17.9583 13.0938 18.375C12.8438 18.7708 12.4792 18.9792 12 19Z"/>
  </svg>
);

const exclamationFilledIconDefinition = svgToIconDefinition(
  exclamationFilledSvg,
  'exclamation-filled'
);

/**![ExclamationFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMgNlYxNEMxMyAxNC4yOTE3IDEyLjkwNjIgMTQuNTMxMiAxMi43MTg4IDE0LjcxODhDMTIuNTMxMiAxNC45MDYyIDEyLjI5MTcgMTUgMTIgMTVDMTEuNzA4MyAxNSAxMS40Njg4IDE0LjkwNjIgMTEuMjgxMiAxNC43MTg4QzExLjA5MzggMTQuNTMxMiAxMSAxNC4yOTE3IDExIDE0VjZDMTEgNS43MDgzMyAxMS4wOTM4IDUuNDY4NzUgMTEuMjgxMiA1LjI4MTI1QzExLjQ2ODggNS4wOTM3NSAxMS43MDgzIDUgMTIgNUMxMi4yOTE3IDUgMTIuNTMxMiA1LjA5Mzc1IDEyLjcxODggNS4yODEyNUMxMi45MDYyIDUuNDY4NzUgMTMgNS43MDgzMyAxMyA2Wk0xMiAxOUMxMS41MjA4IDE4Ljk3OTIgMTEuMTU2MiAxOC43NzA4IDEwLjkwNjIgMTguMzc1QzEwLjY5NzkgMTcuOTU4MyAxMC42OTc5IDE3LjU0MTcgMTAuOTA2MiAxNy4xMjVDMTEuMTU2MiAxNi43MjkyIDExLjUyMDggMTYuNTIwOCAxMiAxNi41QzEyLjQ3OTIgMTYuNTIwOCAxMi44NDM4IDE2LjcyOTIgMTMuMDkzOCAxNy4xMjVDMTMuMzAyMSAxNy41NDE3IDEzLjMwMjEgMTcuOTU4MyAxMy4wOTM4IDE4LjM3NUMxMi44NDM4IDE4Ljc3MDggMTIuNDc5MiAxOC45NzkyIDEyIDE5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={exclamationFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ExclamationFilledIcon';
}

export default RefIcon;
