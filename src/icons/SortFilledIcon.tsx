// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const sortFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.875 11C7.47917 10.9792 7.20833 10.8021 7.0625 10.4688C6.9375 10.1354 7 9.82292 7.25 9.53125L11.4062 5.25C11.5729 5.08333 11.7708 5 12 5C12.2292 5 12.4375 5.08333 12.625 5.25L16.75 9.53125C17 9.82292 17.0625 10.1354 16.9375 10.4688C16.7917 10.8021 16.5208 10.9792 16.125 11H7.875ZM16.125 13C16.5208 13.0208 16.7917 13.1979 16.9375 13.5312C17.0625 13.8646 17 14.1771 16.75 14.4688L12.625 18.75C12.4375 18.9167 12.2292 19 12 19C11.75 19 11.5521 18.9167 11.4062 18.75L7.25 14.4688C7 14.1771 6.9375 13.8646 7.0625 13.5312C7.20833 13.1979 7.47917 13.0208 7.875 13H16.125Z"/>
  </svg>
);

const sortFilledIconDefinition = svgToIconDefinition(
  sortFilledSvg,
  'sort-filled'
);

/**![SortFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy44NzUgMTFDNy40NzkxNyAxMC45NzkyIDcuMjA4MzMgMTAuODAyMSA3LjA2MjUgMTAuNDY4OEM2LjkzNzUgMTAuMTM1NCA3IDkuODIyOTIgNy4yNSA5LjUzMTI1TDExLjQwNjIgNS4yNUMxMS41NzI5IDUuMDgzMzMgMTEuNzcwOCA1IDEyIDVDMTIuMjI5MiA1IDEyLjQzNzUgNS4wODMzMyAxMi42MjUgNS4yNUwxNi43NSA5LjUzMTI1QzE3IDkuODIyOTIgMTcuMDYyNSAxMC4xMzU0IDE2LjkzNzUgMTAuNDY4OEMxNi43OTE3IDEwLjgwMjEgMTYuNTIwOCAxMC45NzkyIDE2LjEyNSAxMUg3Ljg3NVpNMTYuMTI1IDEzQzE2LjUyMDggMTMuMDIwOCAxNi43OTE3IDEzLjE5NzkgMTYuOTM3NSAxMy41MzEyQzE3LjA2MjUgMTMuODY0NiAxNyAxNC4xNzcxIDE2Ljc1IDE0LjQ2ODhMMTIuNjI1IDE4Ljc1QzEyLjQzNzUgMTguOTE2NyAxMi4yMjkyIDE5IDEyIDE5QzExLjc1IDE5IDExLjU1MjEgMTguOTE2NyAxMS40MDYyIDE4Ljc1TDcuMjUgMTQuNDY4OEM3IDE0LjE3NzEgNi45Mzc1IDEzLjg2NDYgNy4wNjI1IDEzLjUzMTJDNy4yMDgzMyAxMy4xOTc5IDcuNDc5MTcgMTMuMDIwOCA3Ljg3NSAxM0gxNi4xMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={sortFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SortFilledIcon';
}

export default RefIcon;
