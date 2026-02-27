// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const closeOutlinedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.2929 5.29302C17.6834 4.90249 18.3164 4.90249 18.707 5.29302C19.0975 5.68354 19.0975 6.31655 18.707 6.70708L13.414 12L18.707 17.293L18.7753 17.3692C19.0957 17.762 19.0731 18.341 18.707 18.7071C18.3408 19.0732 17.7618 19.0958 17.3691 18.7754L17.2929 18.7071L11.9999 13.4141L6.70696 18.7071C6.31643 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6835 5.29289 17.293L10.5859 12L5.29289 6.70708L5.22453 6.63091C4.90418 6.23813 4.92678 5.65913 5.29289 5.29302C5.65901 4.9269 6.23801 4.90431 6.63078 5.22466L6.70696 5.29302L11.9999 10.586L17.2929 5.29302Z"/>
  </svg>
);

const closeOutlinedIconDefinition = svgToIconDefinition(
  closeOutlinedSvg,
  'close-outlined'
);

/**![CloseOutlinedIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTcuMjkyOSA1LjI5MzAyQzE3LjY4MzQgNC45MDI0OSAxOC4zMTY0IDQuOTAyNDkgMTguNzA3IDUuMjkzMDJDMTkuMDk3NSA1LjY4MzU0IDE5LjA5NzUgNi4zMTY1NSAxOC43MDcgNi43MDcwOEwxMy40MTQgMTJMMTguNzA3IDE3LjI5M0wxOC43NzUzIDE3LjM2OTJDMTkuMDk1NyAxNy43NjIgMTkuMDczMSAxOC4zNDEgMTguNzA3IDE4LjcwNzFDMTguMzQwOCAxOS4wNzMyIDE3Ljc2MTggMTkuMDk1OCAxNy4zNjkxIDE4Ljc3NTRMMTcuMjkyOSAxOC43MDcxTDExLjk5OTkgMTMuNDE0MUw2LjcwNjk2IDE4LjcwNzFDNi4zMTY0MyAxOS4wOTc2IDUuNjgzNDIgMTkuMDk3NiA1LjI5Mjg5IDE4LjcwNzFDNC45MDIzNyAxOC4zMTY2IDQuOTAyMzcgMTcuNjgzNSA1LjI5Mjg5IDE3LjI5M0wxMC41ODU5IDEyTDUuMjkyODkgNi43MDcwOEw1LjIyNDUzIDYuNjMwOTFDNC45MDQxOCA2LjIzODEzIDQuOTI2NzggNS42NTkxMyA1LjI5Mjg5IDUuMjkzMDJDNS42NTkwMSA0LjkyNjkgNi4yMzgwMSA0LjkwNDMxIDYuNjMwNzggNS4yMjQ2Nkw2LjcwNjk2IDUuMjkzMDJMMTEuOTk5OSAxMC41ODZMMTcuMjkyOSA1LjI5MzAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={closeOutlinedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CloseOutlinedIcon';
}

export default RefIcon;
