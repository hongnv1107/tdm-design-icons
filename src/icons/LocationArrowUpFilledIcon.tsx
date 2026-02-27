// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const locationArrowUpFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.12499 17.5L10.9687 5.6875C11.1771 5.25 11.5208 5.02083 12 5C12.4792 5.02083 12.8229 5.25 13.0312 5.6875L17.875 17.5C18.0208 17.875 17.9896 18.2188 17.7812 18.5312C17.5729 18.8229 17.2708 18.9792 16.875 19C16.625 19 16.4062 18.9271 16.2187 18.7812L12 15.5L7.78124 18.7812C7.59374 18.9271 7.37499 19 7.12499 19C6.72915 18.9792 6.42707 18.8229 6.21874 18.5312C6.0104 18.2188 5.97915 17.875 6.12499 17.5Z"/>
  </svg>
);

const locationArrowUpFilledIconDefinition = svgToIconDefinition(
  locationArrowUpFilledSvg,
  'location-arrow-up-filled'
);

/**![LocationArrowUpFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNi4xMjQ5OSAxNy41TDEwLjk2ODcgNS42ODc1QzExLjE3NzEgNS4yNSAxMS41MjA4IDUuMDIwODMgMTIgNUMxMi40NzkyIDUuMDIwODMgMTIuODIyOSA1LjI1IDEzLjAzMTIgNS42ODc1TDE3Ljg3NSAxNy41QzE4LjAyMDggMTcuODc1IDE3Ljk4OTYgMTguMjE4OCAxNy43ODEyIDE4LjUzMTJDMTcuNTcyOSAxOC44MjI5IDE3LjI3MDggMTguOTc5MiAxNi44NzUgMTlDMTYuNjI1IDE5IDE2LjQwNjIgMTguOTI3MSAxNi4yMTg3IDE4Ljc4MTJMMTIgMTUuNUw3Ljc4MTI0IDE4Ljc4MTJDNy41OTM3NCAxOC45MjcxIDcuMzc0OTkgMTkgNy4xMjQ5OSAxOUM2LjcyOTE1IDE4Ljk3OTIgNi40MjcwNyAxOC44MjI5IDYuMjE4NzQgMTguNTMxMkM2LjAxMDQgMTguMjE4OCA1Ljk3OTE1IDE3Ljg3NSA2LjEyNDk5IDE3LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={locationArrowUpFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'LocationArrowUpFilledIcon';
}

export default RefIcon;
