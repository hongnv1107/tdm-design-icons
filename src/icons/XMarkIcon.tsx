// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const xMarkSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.293 5.29302C17.6835 4.90249 18.3165 4.90249 18.707 5.29302C19.0976 5.68354 19.0976 6.31655 18.707 6.70708L13.4141 12L18.707 17.293L18.7754 17.3692C19.0957 17.762 19.0731 18.341 18.707 18.7071C18.3409 19.0732 17.7619 19.0958 17.3691 18.7754L17.293 18.7071L12 13.4141L6.70703 18.7071C6.31651 19.0976 5.68349 19.0976 5.29297 18.7071C4.90244 18.3166 4.90244 17.6835 5.29297 17.293L10.5859 12L5.29297 6.70708L5.22461 6.63091C4.90426 6.23813 4.92685 5.65913 5.29297 5.29302C5.65908 4.9269 6.23809 4.90431 6.63086 5.22466L6.70703 5.29302L12 10.586L17.293 5.29302Z" />
  </svg>
);

const xMarkIconDefinition = svgToIconDefinition(
  xMarkSvg,
  'xmark'
);

/**![XMarkIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuMjkzIDUuMjkzMDJDMTcuNjgzNSA0LjkwMjQ5IDE4LjMxNjUgNC45MDI0OSAxOC43MDcgNS4yOTMwMkMxOS4wOTc2IDUuNjgzNTQgMTkuMDk3NiA2LjMxNjU1IDE4LjcwNyA2LjcwNzA4TDEzLjQxNDEgMTJMMTguNzA3IDE3LjI5M0wxOC43NzU0IDE3LjM2OTJDMTkuMDk1NyAxNy43NjIgMTkuMDczMSAxOC4zNDEgMTguNzA3IDE4LjcwNzFDMTguMzQwOSAxOS4wNzMyIDE3Ljc2MTkgMTkuMDk1OCAxNy4zNjkxIDE4Ljc3NTRMMTcuMjkzIDE4LjcwNzFMMTIgMTMuNDE0MUw2LjcwNzAzIDE4LjcwNzFDNi4zMTY1MSAxOS4wOTc2IDUuNjgzNDkgMTkuMDk3NiA1LjI5Mjk3IDE4LjcwNzFDNC45MDI0NCAxOC4zMTY2IDQuOTAyNDQgMTcuNjgzNSA1LjI5Mjk3IDE3LjI5M0wxMC41ODU5IDEyTDUuMjkyOTcgNi43MDcwOEw1LjIyNDYxIDYuNjMwOTFDNC45MDQyNiA2LjIzODEzIDQuOTI2ODUgNS42NTkxMyA1LjI5Mjk3IDUuMjkzMDJDNS42NTkwOCA0LjkyNjkgNi4yMzgwOSA0LjkwNDMxIDYuNjMwODYgNS4yMjQ2Nkw2LjcwNzAzIDUuMjkzMDJMMTIgMTAuNTg2TDE3LjI5MyA1LjI5MzAyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={xMarkIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'XMarkIcon';
}

export default RefIcon;
