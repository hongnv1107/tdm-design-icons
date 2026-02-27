// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const minusSquareFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.57143 3H18.4286C19.1518 3.02679 19.7545 3.28125 20.2366 3.76339C20.7188 4.24554 20.9732 4.84821 21 5.57143V18.4286C20.9732 19.1518 20.7188 19.7545 20.2366 20.2366C19.7545 20.7188 19.1518 20.9732 18.4286 21H5.57143C4.84821 20.9732 4.24554 20.7188 3.76339 20.2366C3.28125 19.7545 3.02679 19.1518 3 18.4286V5.57143C3.02679 4.84821 3.28125 4.24554 3.76339 3.76339C4.24554 3.28125 4.84821 3.02679 5.57143 3ZM9.10714 11.0357C8.51786 11.0893 8.19643 11.4107 8.14286 12C8.19643 12.5893 8.51786 12.9107 9.10714 12.9643H14.8929C15.4821 12.9107 15.8036 12.5893 15.8571 12C15.8036 11.4107 15.4821 11.0893 14.8929 11.0357H9.10714Z"/>
  </svg>
);

const minusSquareFilledIconDefinition = svgToIconDefinition(
  minusSquareFilledSvg,
  'minus-square-filled'
);

/**![MinusSquareFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS41NzE0MyAzSDE4LjQyODZDMTkuMTUxOCAzLjAyNjc5IDE5Ljc1NDUgMy4yODEyNSAyMC4yMzY2IDMuNzYzMzlDMjAuNzE4OCA0LjI0NTU0IDIwLjk3MzIgNC44NDgyMSAyMSA1LjU3MTQzVjE4LjQyODZDMjAuOTczMiAxOS4xNTE4IDIwLjcxODggMTkuNzU0NSAyMC4yMzY2IDIwLjIzNjZDMTkuNzU0NSAyMC43MTg4IDE5LjE1MTggMjAuOTczMiAxOC40Mjg2IDIxSDUuNTcxNDNDNC44NDgyMSAyMC45NzMyIDQuMjQ1NTQgMjAuNzE4OCAzLjc2MzM5IDIwLjIzNjZDMy4yODEyNSAxOS43NTQ1IDMuMDI2NzkgMTkuMTUxOCAzIDE4LjQyODZWNS41NzE0M0MzLjAyNjc5IDQuODQ4MjEgMy4yODEyNSA0LjI0NTU0IDMuNzYzMzkgMy43NjMzOUM0LjI0NTU0IDMuMjgxMjUgNC44NDgyMSAzLjAyNjc5IDUuNTcxNDMgM1pNOS4xMDcxNCAxMS4wMzU3QzguNTE3ODYgMTEuMDg5MyA4LjE5NjQzIDExLjQxMDcgOC4xNDI4NiAxMkM4LjE5NjQzIDEyLjU4OTMgOC41MTc4NiAxMi45MTA3IDkuMTA3MTQgMTIuOTY0M0gxNC44OTI5QzE1LjQ4MjEgMTIuOTEwNyAxNS44MDM2IDEyLjU4OTMgMTUuODU3MSAxMkMxNS44MDM2IDExLjQxMDcgMTUuNDgyMSAxMS4wODkzIDE0Ljg5MjkgMTEuMDM1N0g5LjEwNzE0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={minusSquareFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'MinusSquareFilledIcon';
}

export default RefIcon;
