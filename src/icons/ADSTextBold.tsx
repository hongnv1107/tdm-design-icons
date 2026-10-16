// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextBoldSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.125C3 1.504 3.504 1 4.125 1H8.75C11.004 1 13 2.626 13 5.063C13 6.042 12.677 6.891 12.145 7.555C13.248 8.251 14 9.441 14 10.938C14 13.374 12.004 15 9.75 15H4.125C3.504 15 3 14.496 3 13.875V2.125ZM8.75 6.875C9.948 6.875 10.75 6.077 10.75 5.063C10.75 4.048 9.948 3.25 8.75 3.25H5.25V6.875H8.75ZM5.25 9.125H9.75C10.948 9.125 11.75 9.923 11.75 10.938C11.75 11.952 10.948 12.75 9.75 12.75H5.25V9.125Z"/>
  </svg>
);

const aDSTextBoldIconDefinition = svgToIconDefinition(
  aDSTextBoldSvg,
  'ads-text-bold'
);

/**![ADSTextBold](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi4xMjVDMyAxLjUwNCAzLjUwNCAxIDQuMTI1IDFIOC43NUMxMS4wMDQgMSAxMyAyLjYyNiAxMyA1LjA2M0MxMyA2LjA0MiAxMi42NzcgNi44OTEgMTIuMTQ1IDcuNTU1QzEzLjI0OCA4LjI1MSAxNCA5LjQ0MSAxNCAxMC45MzhDMTQgMTMuMzc0IDEyLjAwNCAxNSA5Ljc1IDE1SDQuMTI1QzMuNTA0IDE1IDMgMTQuNDk2IDMgMTMuODc1VjIuMTI1Wk04Ljc1IDYuODc1QzkuOTQ4IDYuODc1IDEwLjc1IDYuMDc3IDEwLjc1IDUuMDYzQzEwLjc1IDQuMDQ4IDkuOTQ4IDMuMjUgOC43NSAzLjI1SDUuMjVWNi44NzVIOC43NVpNNS4yNSA5LjEyNUg5Ljc1QzEwLjk0OCA5LjEyNSAxMS43NSA5LjkyMyAxMS43NSAxMC45MzhDMTEuNzUgMTEuOTUyIDEwLjk0OCAxMi43NSA5Ljc1IDEyLjc1SDUuMjVWOS4xMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextBoldIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextBold';
}

export default RefIcon;
