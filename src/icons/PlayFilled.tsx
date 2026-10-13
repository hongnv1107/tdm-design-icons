// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const playFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5.38881 0.388439L21.3888 9.80611C22.2036 10.3412 22.6295 11.0725 22.6666 12C22.6295 12.9632 22.2036 13.6945 21.3888 14.1939L5.38881 23.6116C4.49992 24.111 3.61103 24.1288 2.72214 23.6651C1.83325 23.1656 1.37029 22.4165 1.33325 21.4177V2.58233C1.37029 1.58348 1.83325 0.834352 2.72214 0.33493C3.61103 -0.128819 4.49992 -0.110983 5.38881 0.388439Z"/>
  </svg>
);

const playFilledIconDefinition = svgToIconDefinition(
  playFilledSvg,
  'play-filled'
);

/**![PlayFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNS4zODg4MSAwLjM4ODQzOUwyMS4zODg4IDkuODA2MTFDMjIuMjAzNiAxMC4zNDEyIDIyLjYyOTUgMTEuMDcyNSAyMi42NjY2IDEyQzIyLjYyOTUgMTIuOTYzMiAyMi4yMDM2IDEzLjY5NDUgMjEuMzg4OCAxNC4xOTM5TDUuMzg4ODEgMjMuNjExNkM0LjQ5OTkyIDI0LjExMSAzLjYxMTAzIDI0LjEyODggMi43MjIxNCAyMy42NjUxQzEuODMzMjUgMjMuMTY1NiAxLjM3MDI5IDIyLjQxNjUgMS4zMzMyNSAyMS40MTc3VjIuNTgyMzNDMS4zNzAyOSAxLjU4MzQ4IDEuODMzMjUgMC44MzQzNTIgMi43MjIxNCAwLjMzNDkzQzMuNjExMDMgLTAuMTI4ODE5IDQuNDk5OTIgLTAuMTEwOTgzIDUuMzg4ODEgMC4zODg0MzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={playFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'PlayFilled';
}

export default RefIcon;
