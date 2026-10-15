// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSReleaseSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 2H7V4H9C9.267 4 9.513 4.142 9.648 4.372L11.181 7H15.25C15.519 7 15.768 7.144 15.901 7.378C16.035 7.612 16.033 7.9 15.896 8.132L13.009 13.018C12.649 13.626 11.994 14 11.287 14H2C0.895 14 0 13.105 0 12V7.75C0 7.336 0.336 7 0.75 7H2V4.75C2 4.336 2.336 4 2.75 4H4V2ZM3.5 7H9.444L8.569 5.5H3.5V7ZM1.5 8.5V12C1.5 12.276 1.724 12.5 2 12.5H11.287C11.464 12.5 11.627 12.407 11.717 12.254L13.936 8.5H1.5Z"/>
  </svg>
);

const aDSReleaseIconDefinition = svgToIconDefinition(
  aDSReleaseSvg,
  'ads-release'
);

/**![ADSRelease](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMkg3VjRIOUM5LjI2NyA0IDkuNTEzIDQuMTQyIDkuNjQ4IDQuMzcyTDExLjE4MSA3SDE1LjI1QzE1LjUxOSA3IDE1Ljc2OCA3LjE0NCAxNS45MDEgNy4zNzhDMTYuMDM1IDcuNjEyIDE2LjAzMyA3LjkgMTUuODk2IDguMTMyTDEzLjAwOSAxMy4wMThDMTIuNjQ5IDEzLjYyNiAxMS45OTQgMTQgMTEuMjg3IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY3Ljc1QzAgNy4zMzYgMC4zMzYgNyAwLjc1IDdIMlY0Ljc1QzIgNC4zMzYgMi4zMzYgNCAyLjc1IDRINFYyWk0zLjUgN0g5LjQ0NEw4LjU2OSA1LjVIMy41VjdaTTEuNSA4LjVWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxMS4yODdDMTEuNDY0IDEyLjUgMTEuNjI3IDEyLjQwNyAxMS43MTcgMTIuMjU0TDEzLjkzNiA4LjVIMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSReleaseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRelease';
}

export default RefIcon;
