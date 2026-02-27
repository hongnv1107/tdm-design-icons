// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const houseFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.4179 10.4625L13.4179 3.42543C12.636 2.6394 11.364 2.6394 10.5821 3.42543L3.58206 10.4625C3.20927 10.8372 3 11.3443 3 11.8729V19C3 20.1046 3.89543 21 5 21H7.3C8.40457 21 9.3 20.1046 9.3 19V14.8571C9.3 13.7526 10.1954 12.8571 11.3 12.8571H12.7C13.8046 12.8571 14.7 13.7526 14.7 14.8571V19C14.7 20.1046 15.5954 21 16.7 21H19C20.1046 21 21 20.1046 21 19V11.8729C21 11.3443 20.7907 10.8372 20.4179 10.4625Z"/>
  </svg>
);

const houseFilledIconDefinition = svgToIconDefinition(
  houseFilledSvg,
  'house-filled'
);

/**![HouseFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAuNDE3OSAxMC40NjI1TDEzLjQxNzkgMy40MjU0M0MxMi42MzYgMi42Mzk0IDExLjM2NCAyLjYzOTQgMTAuNTgyMSAzLjQyNTQzTDMuNTgyMDYgMTAuNDYyNUMzLjIwOTI3IDEwLjgzNzIgMyAxMS4zNDQzIDMgMTEuODcyOVYxOUMzIDIwLjEwNDYgMy44OTU0MyAyMSA1IDIxSDcuM0M4LjQwNDU3IDIxIDkuMyAyMC4xMDQ2IDkuMyAxOVYxNC44NTcxQzkuMyAxMy43NTI2IDEwLjE5NTQgMTIuODU3MSAxMS4zIDEyLjg1NzFIMTIuN0MxMy44MDQ2IDEyLjg1NzEgMTQuNyAxMy43NTI2IDE0LjcgMTQuODU3MVYxOUMxNC43IDIwLjEwNDYgMTUuNTk1NCAyMSAxNi43IDIxSDE5QzIwLjEwNDYgMjEgMjEgMjAuMTA0NiAyMSAxOVYxMS44NzI5QzIxIDExLjM0NDMgMjAuNzkwNyAxMC44MzcyIDIwLjQxNzkgMTAuNDYyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={houseFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'HouseFilledIcon';
}

export default RefIcon;
