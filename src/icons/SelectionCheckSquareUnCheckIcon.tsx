// GENERATE BY ./scripts/generate-icons.js
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import SmIcon from '../components/SmIcon';
import type { SmIconProps } from '../components/SmIcon';
import { svgToIconDefinition } from '../utils';

const selectionCheckSquareUnCheckSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.4286 5.04857H5.57143C5.16964 5.07535 4.95536 5.28964 4.92857 5.69142V18.5486C4.95536 18.9504 5.16964 19.1646 5.57143 19.1914H18.4286C18.8304 19.1646 19.0446 18.9504 19.0714 18.5486V5.69142C19.0446 5.28964 18.8304 5.07535 18.4286 5.04857ZM5.57143 3.12H18.4286C19.1518 3.14678 19.7545 3.40125 20.2366 3.88339C20.7188 4.36553 20.9732 4.96821 21 5.69142V18.5486C20.9732 19.2718 20.7188 19.8745 20.2366 20.3566C19.7545 20.8387 19.1518 21.0932 18.4286 21.12H5.57143C4.84821 21.0932 4.24554 20.8387 3.76339 20.3566C3.28125 19.8745 3.02679 19.2718 3 18.5486V5.69142C3.02679 4.96821 3.28125 4.36553 3.76339 3.88339C4.24554 3.40125 4.84821 3.14678 5.57143 3.12Z" />
  </svg>
);

const selectionCheckSquareUnCheckIconDefinition = svgToIconDefinition(
  selectionCheckSquareUnCheckSvg,
  'selection-check-square-un-check'
);

/**![SelectionCheckSquareUnCheckIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NhY2FjYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTguNDI4NiA1LjA0ODU3SDUuNTcxNDNDNS4xNjk2NCA1LjA3NTM1IDQuOTU1MzYgNS4yODk2NCA0LjkyODU3IDUuNjkxNDJWMTguNTQ4NkM0Ljk1NTM2IDE4Ljk1MDQgNS4xNjk2NCAxOS4xNjQ2IDUuNTcxNDMgMTkuMTkxNEgxOC40Mjg2QzE4LjgzMDQgMTkuMTY0NiAxOS4wNDQ2IDE4Ljk1MDQgMTkuMDcxNCAxOC41NDg2VjUuNjkxNDJDMTkuMDQ0NiA1LjI4OTY0IDE4LjgzMDQgNS4wNzUzNSAxOC40Mjg2IDUuMDQ4NTdaTTUuNTcxNDMgMy4xMkgxOC40Mjg2QzE5LjE1MTggMy4xNDY3OCAxOS43NTQ1IDMuNDAxMjUgMjAuMjM2NiAzLjg4MzM5QzIwLjcxODggNC4zNjU1MyAyMC45NzMyIDQuOTY4MjEgMjEgNS42OTE0MlYxOC41NDg2QzIwLjk3MzIgMTkuMjcxOCAyMC43MTg4IDE5Ljg3NDUgMjAuMjM2NiAyMC4zNTY2QzE5Ljc1NDUgMjAuODM4NyAxOS4xNTE4IDIxLjA5MzIgMTguNDI4NiAyMS4xMkg1LjU3MTQzQzQuODQ4MjEgMjEuMDkzMiA0LjI0NTU0IDIwLjgzODcgMy43NjMzOSAyMC4zNTY2QzMuMjgxMjUgMTkuODc0NSAzLjAyNjc5IDE5LjI3MTggMyAxOC41NDg2VjUuNjkxNDJDMy4wMjY3OSA0Ljk2ODIxIDMuMjgxMjUgNC4zNjU1MyAzLjc2MzM5IDMuODgzMzlDNC4yNDU1NCAzLjQwMTI1IDQuODQ4MjEgMy4xNDY3OCA1LjU3MTQzIDMuMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<SmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, SmIconProps>((props, ref) => {
  return <SmIcon {...props} ref={ref} icon={selectionCheckSquareUnCheckIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SelectionCheckSquareUnCheckIcon';
}

export default RefIcon;
