// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 10.5C12.4166 10.5208 12.7708 10.6666 13.0625 10.9375C13.3333 11.2291 13.4791 11.5833 13.5 12V14.9687L16.5937 7.40623L9.03121 10.5H12ZM6.49996 12C5.97913 11.9583 5.65621 11.6875 5.53121 11.1875C5.44788 10.6666 5.6458 10.2916 6.12496 10.0625L17.125 5.56248C17.5208 5.41665 17.8854 5.48956 18.2187 5.78123C18.5104 6.11456 18.5833 6.47915 18.4375 6.87498L13.9375 17.875C13.7083 18.3541 13.3333 18.5521 12.8125 18.4687C12.3125 18.3437 12.0416 18.0208 12 17.5V12H6.49996Z"/>
  </svg>
);

const locationArrowOutlinedIconDefinition = svgToIconDefinition(
  locationArrowOutlinedSvg,
  'location-arrow-outlined'
);

/**![LocationArrowOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTIgMTAuNUMxMi40MTY2IDEwLjUyMDggMTIuNzcwOCAxMC42NjY2IDEzLjA2MjUgMTAuOTM3NUMxMy4zMzMzIDExLjIyOTEgMTMuNDc5MSAxMS41ODMzIDEzLjUgMTJWMTQuOTY4N0wxNi41OTM3IDcuNDA2MjNMOS4wMzEyMSAxMC41SDEyWk02LjQ5OTk2IDEyQzUuOTc5MTMgMTEuOTU4MyA1LjY1NjIxIDExLjY4NzUgNS41MzEyMSAxMS4xODc1QzUuNDQ3ODggMTAuNjY2NiA1LjY0NTggMTAuMjkxNiA2LjEyNDk2IDEwLjA2MjVMMTcuMTI1IDUuNTYyNDhDMTcuNTIwOCA1LjQxNjY1IDE3Ljg4NTQgNS40ODk1NiAxOC4yMTg3IDUuNzgxMjNDMTguNTEwNCA2LjExNDU2IDE4LjU4MzMgNi40NzkxNSAxOC40Mzc1IDYuODc0OThMMTMuOTM3NSAxNy44NzVDMTMuNzA4MyAxOC4zNTQxIDEzLjMzMzMgMTguNTUyMSAxMi44MTI1IDE4LjQ2ODdDMTIuMzEyNSAxOC4zNDM3IDEyLjA0MTYgMTguMDIwOCAxMiAxNy41VjEySDYuNDk5OTZaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowOutlinedIcon';
}

export default RefIcon;
