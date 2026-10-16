// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnMoveRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.375C0 1.616 0.616 1 1.375 1H7.125C7.884 1 8.5 1.616 8.5 2.375V13.625C8.5 14.384 7.884 15 7.125 15H1.375C0.616 15 0 14.384 0 13.625V2.375ZM1.5 2.5V13.5H3.5V2.5H1.5ZM5 2.5V13.5H7V2.5H5ZM12.78 4.47L15.78 7.47C16.073 7.763 16.073 8.237 15.78 8.53L12.78 11.53L11.72 10.47L13.439 8.75H10V7.25H13.439L11.72 5.53L12.78 4.47Z"/>
  </svg>
);

const aDSTableColumnMoveRightIconDefinition = svgToIconDefinition(
  aDSTableColumnMoveRightSvg,
  'ads-table-column-move-right'
);

/**![ADSTableColumnMoveRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMi4zNzVDMCAxLjYxNiAwLjYxNiAxIDEuMzc1IDFINy4xMjVDNy44ODQgMSA4LjUgMS42MTYgOC41IDIuMzc1VjEzLjYyNUM4LjUgMTQuMzg0IDcuODg0IDE1IDcuMTI1IDE1SDEuMzc1QzAuNjE2IDE1IDAgMTQuMzg0IDAgMTMuNjI1VjIuMzc1Wk0xLjUgMi41VjEzLjVIMy41VjIuNUgxLjVaTTUgMi41VjEzLjVIN1YyLjVINVpNMTIuNzggNC40N0wxNS43OCA3LjQ3QzE2LjA3MyA3Ljc2MyAxNi4wNzMgOC4yMzcgMTUuNzggOC41M0wxMi43OCAxMS41M0wxMS43MiAxMC40N0wxMy40MzkgOC43NUgxMFY3LjI1SDEzLjQzOUwxMS43MiA1LjUzTDEyLjc4IDQuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnMoveRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnMoveRight';
}

export default RefIcon;
