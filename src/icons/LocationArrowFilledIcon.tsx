// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.4375 6.87498L13.9375 17.875C13.7083 18.3541 13.3333 18.5521 12.8125 18.4687C12.3125 18.3437 12.0416 18.0208 12 17.5V12H6.49996C5.97913 11.9583 5.65621 11.6875 5.53121 11.1875C5.44788 10.6666 5.6458 10.2916 6.12496 10.0625L17.125 5.56248C17.5208 5.41665 17.8854 5.48956 18.2187 5.78123C18.5104 6.11456 18.5833 6.47915 18.4375 6.87498Z"/>
  </svg>
);

const locationArrowFilledIconDefinition = svgToIconDefinition(
  locationArrowFilledSvg,
  'location-arrow-filled'
);

/**![LocationArrowFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTguNDM3NSA2Ljg3NDk4TDEzLjkzNzUgMTcuODc1QzEzLjcwODMgMTguMzU0MSAxMy4zMzMzIDE4LjU1MjEgMTIuODEyNSAxOC40Njg3QzEyLjMxMjUgMTguMzQzNyAxMi4wNDE2IDE4LjAyMDggMTIgMTcuNVYxMkg2LjQ5OTk2QzUuOTc5MTMgMTEuOTU4MyA1LjY1NjIxIDExLjY4NzUgNS41MzEyMSAxMS4xODc1QzUuNDQ3ODggMTAuNjY2NiA1LjY0NTggMTAuMjkxNiA2LjEyNDk2IDEwLjA2MjVMMTcuMTI1IDUuNTYyNDhDMTcuNTIwOCA1LjQxNjY1IDE3Ljg4NTQgNS40ODk1NiAxOC4yMTg3IDUuNzgxMjNDMTguNTEwNCA2LjExNDU2IDE4LjU4MzMgNi40NzkxNSAxOC40Mzc1IDYuODc0OThaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowFilledIcon';
}

export default RefIcon;
