// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const textOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 6.5V8C6.45833 8.45833 6.20833 8.70833 5.75 8.75C5.29167 8.70833 5.04167 8.45833 5 8V6.25C5 5.89583 5.125 5.60417 5.375 5.375C5.60417 5.125 5.89583 5 6.25 5H17.75C18.1042 5 18.3958 5.125 18.625 5.375C18.875 5.60417 19 5.89583 19 6.25V8C18.9583 8.45833 18.7083 8.70833 18.25 8.75C17.7917 8.70833 17.5417 8.45833 17.5 8V6.5H12.75V17.5H14.25C14.7083 17.5417 14.9583 17.7917 15 18.25C14.9583 18.7083 14.7083 18.9583 14.25 19H9.75C9.29167 18.9583 9.04167 18.7083 9 18.25C9.04167 17.7917 9.29167 17.5417 9.75 17.5H11.25V6.5H6.5Z"/>
  </svg>
);

const textOutlinedIconDefinition = svgToIconDefinition(
  textOutlinedSvg,
  'text-outlined'
);

/**![TextOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi41IDYuNVY4QzYuNDU4MzMgOC40NTgzMyA2LjIwODMzIDguNzA4MzMgNS43NSA4Ljc1QzUuMjkxNjcgOC43MDgzMyA1LjA0MTY3IDguNDU4MzMgNSA4VjYuMjVDNSA1Ljg5NTgzIDUuMTI1IDUuNjA0MTcgNS4zNzUgNS4zNzVDNS42MDQxNyA1LjEyNSA1Ljg5NTgzIDUgNi4yNSA1SDE3Ljc1QzE4LjEwNDIgNSAxOC4zOTU4IDUuMTI1IDE4LjYyNSA1LjM3NUMxOC44NzUgNS42MDQxNyAxOSA1Ljg5NTgzIDE5IDYuMjVWOEMxOC45NTgzIDguNDU4MzMgMTguNzA4MyA4LjcwODMzIDE4LjI1IDguNzVDMTcuNzkxNyA4LjcwODMzIDE3LjU0MTcgOC40NTgzMyAxNy41IDhWNi41SDEyLjc1VjE3LjVIMTQuMjVDMTQuNzA4MyAxNy41NDE3IDE0Ljk1ODMgMTcuNzkxNyAxNSAxOC4yNUMxNC45NTgzIDE4LjcwODMgMTQuNzA4MyAxOC45NTgzIDE0LjI1IDE5SDkuNzVDOS4yOTE2NyAxOC45NTgzIDkuMDQxNjcgMTguNzA4MyA5IDE4LjI1QzkuMDQxNjcgMTcuNzkxNyA5LjI5MTY3IDE3LjU0MTcgOS43NSAxNy41SDExLjI1VjYuNUg2LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={textOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'TextOutlinedIcon';
}

export default RefIcon;
