// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const noteStickyFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.57143 3H18.4286C19.1518 3.02679 19.7545 3.28125 20.2366 3.76339C20.7188 4.24554 20.9732 4.84821 21 5.57143V14.5714H16.5C15.9643 14.5982 15.5089 14.7857 15.1339 15.1339C14.7857 15.5089 14.5982 15.9643 14.5714 16.5V21H5.57143C4.84821 20.9732 4.24554 20.7188 3.76339 20.2366C3.28125 19.7545 3.02679 19.1518 3 18.4286V5.57143C3.02679 4.84821 3.28125 4.24554 3.76339 3.76339C4.24554 3.28125 4.84821 3.02679 5.57143 3ZM21 15.8571L15.8571 21V16.5C15.8839 16.0982 16.0982 15.8839 16.5 15.8571H21Z"/>
  </svg>
);

const noteStickyFilledIconDefinition = svgToIconDefinition(
  noteStickyFilledSvg,
  'note-sticky-filled'
);

/**![NoteStickyFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS41NzE0MyAzSDE4LjQyODZDMTkuMTUxOCAzLjAyNjc5IDE5Ljc1NDUgMy4yODEyNSAyMC4yMzY2IDMuNzYzMzlDMjAuNzE4OCA0LjI0NTU0IDIwLjk3MzIgNC44NDgyMSAyMSA1LjU3MTQzVjE0LjU3MTRIMTYuNUMxNS45NjQzIDE0LjU5ODIgMTUuNTA4OSAxNC43ODU3IDE1LjEzMzkgMTUuMTMzOUMxNC43ODU3IDE1LjUwODkgMTQuNTk4MiAxNS45NjQzIDE0LjU3MTQgMTYuNVYyMUg1LjU3MTQzQzQuODQ4MjEgMjAuOTczMiA0LjI0NTU0IDIwLjcxODggMy43NjMzOSAyMC4yMzY2QzMuMjgxMjUgMTkuNzU0NSAzLjAyNjc5IDE5LjE1MTggMyAxOC40Mjg2VjUuNTcxNDNDMy4wMjY3OSA0Ljg0ODIxIDMuMjgxMjUgNC4yNDU1NCAzLjc2MzM5IDMuNzYzMzlDNC4yNDU1NCAzLjI4MTI1IDQuODQ4MjEgMy4wMjY3OSA1LjU3MTQzIDNaTTIxIDE1Ljg1NzFMMTUuODU3MSAyMVYxNi41QzE1Ljg4MzkgMTYuMDk4MiAxNi4wOTgyIDE1Ljg4MzkgMTYuNSAxNS44NTcxSDIxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={noteStickyFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'NoteStickyFilledIcon';
}

export default RefIcon;
