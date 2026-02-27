// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const bookmarkFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 5.5C6.02083 5.08333 6.16667 4.72917 6.4375 4.4375C6.72917 4.16667 7.08333 4.02083 7.5 4H16.5C16.9167 4.02083 17.2708 4.16667 17.5625 4.4375C17.8333 4.72917 17.9792 5.08333 18 5.5V19.25C17.9583 19.7083 17.7083 19.9583 17.25 20C17.0833 20 16.9375 19.9583 16.8125 19.875L12 16.5L7.1875 19.875C7.0625 19.9583 6.91667 20 6.75 20C6.29167 19.9583 6.04167 19.7083 6 19.25V5.5Z"/>
  </svg>
);

const bookmarkFilledIconDefinition = svgToIconDefinition(
  bookmarkFilledSvg,
  'bookmark-filled'
);

/**![BookmarkFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNiA1LjVDNi4wMjA4MyA1LjA4MzMzIDYuMTY2NjcgNC43MjkxNyA2LjQzNzUgNC40Mzc1QzYuNzI5MTcgNC4xNjY2NyA3LjA4MzMzIDQuMDIwODMgNy41IDRIMTYuNUMxNi45MTY3IDQuMDIwODMgMTcuMjcwOCA0LjE2NjY3IDE3LjU2MjUgNC40Mzc1QzE3LjgzMzMgNC43MjkxNyAxNy45NzkyIDUuMDgzMzMgMTggNS41VjE5LjI1QzE3Ljk1ODMgMTkuNzA4MyAxNy43MDgzIDE5Ljk1ODMgMTcuMjUgMjBDMTcuMDgzMyAyMCAxNi45Mzc1IDE5Ljk1ODMgMTYuODEyNSAxOS44NzVMMTIgMTYuNUw3LjE4NzUgMTkuODc1QzcuMDYyNSAxOS45NTgzIDYuOTE2NjcgMjAgNi43NSAyMEM2LjI5MTY3IDE5Ljk1ODMgNi4wNDE2NyAxOS43MDgzIDYgMTkuMjVWNS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={bookmarkFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BookmarkFilledIcon';
}

export default RefIcon;
