// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bookmarkOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 5.5C6.02083 5.08333 6.16667 4.72917 6.4375 4.4375C6.72917 4.16667 7.08333 4.02083 7.5 4V5.5V17.7812L11.5625 14.9062C11.8542 14.7188 12.1458 14.7188 12.4375 14.9062L16.5 17.7812V5.5H7.5V4H16.5C16.9167 4.02083 17.2708 4.16667 17.5625 4.4375C17.8333 4.72917 17.9792 5.08333 18 5.5V19.25C18 19.5417 17.8646 19.7604 17.5938 19.9062C17.3229 20.0312 17.0625 20.0208 16.8125 19.875L12 16.4375L7.1875 19.875C6.9375 20.0208 6.67708 20.0312 6.40625 19.9062C6.15625 19.7604 6.02083 19.5417 6 19.25V5.5Z"/>
  </svg>
);

const bookmarkOutlinedIconDefinition = svgToIconDefinition(
  bookmarkOutlinedSvg,
  'bookmark-outlined'
);

/**![BookmarkOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiA1LjVDNi4wMjA4MyA1LjA4MzMzIDYuMTY2NjcgNC43MjkxNyA2LjQzNzUgNC40Mzc1QzYuNzI5MTcgNC4xNjY2NyA3LjA4MzMzIDQuMDIwODMgNy41IDRWNS41VjE3Ljc4MTJMMTEuNTYyNSAxNC45MDYyQzExLjg1NDIgMTQuNzE4OCAxMi4xNDU4IDE0LjcxODggMTIuNDM3NSAxNC45MDYyTDE2LjUgMTcuNzgxMlY1LjVINy41VjRIMTYuNUMxNi45MTY3IDQuMDIwODMgMTcuMjcwOCA0LjE2NjY3IDE3LjU2MjUgNC40Mzc1QzE3LjgzMzMgNC43MjkxNyAxNy45NzkyIDUuMDgzMzMgMTggNS41VjE5LjI1QzE4IDE5LjU0MTcgMTcuODY0NiAxOS43NjA0IDE3LjU5MzggMTkuOTA2MkMxNy4zMjI5IDIwLjAzMTIgMTcuMDYyNSAyMC4wMjA4IDE2LjgxMjUgMTkuODc1TDEyIDE2LjQzNzVMNy4xODc1IDE5Ljg3NUM2LjkzNzUgMjAuMDIwOCA2LjY3NzA4IDIwLjAzMTIgNi40MDYyNSAxOS45MDYyQzYuMTU2MjUgMTkuNzYwNCA2LjAyMDgzIDE5LjU0MTcgNiAxOS4yNVY1LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bookmarkOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookmarkOutlinedIcon';
}

export default RefIcon;
