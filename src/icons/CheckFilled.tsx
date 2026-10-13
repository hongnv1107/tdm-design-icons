// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const checkFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.7657 3.71289C21.5057 2.97294 22.7051 2.97294 23.445 3.71289C24.185 4.45284 24.185 5.65225 23.445 6.3922L9.55014 20.2871C8.81019 21.0271 7.61078 21.0271 6.87083 20.2871L0.554962 13.9712C-0.184987 13.2313 -0.184987 12.0319 0.554962 11.2919C1.24848 10.5984 2.34574 10.5547 3.08994 11.1612L3.23427 11.2919L8.21048 16.2681L20.7657 3.71289Z"/>
  </svg>
);

const checkFilledIconDefinition = svgToIconDefinition(
  checkFilledSvg,
  'check-filled'
);

/**![CheckFilled](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMjAuNzY1NyAzLjcxMjg5QzIxLjUwNTcgMi45NzI5NCAyMi43MDUxIDIuOTcyOTQgMjMuNDQ1IDMuNzEyODlDMjQuMTg1IDQuNDUyODQgMjQuMTg1IDUuNjUyMjUgMjMuNDQ1IDYuMzkyMkw5LjU1MDE0IDIwLjI4NzFDOC44MTAxOSAyMS4wMjcxIDcuNjEwNzggMjEuMDI3MSA2Ljg3MDgzIDIwLjI4NzFMMC41NTQ5NjIgMTMuOTcxMkMtMC4xODQ5ODcgMTMuMjMxMyAtMC4xODQ5ODcgMTIuMDMxOSAwLjU1NDk2MiAxMS4yOTE5QzEuMjQ4NDggMTAuNTk4NCAyLjM0NTc0IDEwLjU1NDcgMy4wODk5NCAxMS4xNjEyTDMuMjM0MjcgMTEuMjkxOUw4LjIxMDQ4IDE2LjI2ODFMMjAuNzY1NyAzLjcxMjg5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={checkFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'CheckFilled';
}

export default RefIcon;
