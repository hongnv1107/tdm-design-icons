// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGrowDiagonalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.78 2.28L9.53 7.53L8.47 6.47L13.72 1.22L14.78 2.28ZM1.22 13.72L6.47 8.47L7.53 9.53L2.28 14.78L1.22 13.72Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 1H14.25C14.664 1 15 1.336 15 1.75V6.5H13.5V2.5H9.5V1ZM2.5 13.5V9.5H1V14.25C1 14.664 1.336 15 1.75 15H6.5V13.5H2.5Z"/>
  </svg>
);

const aDSGrowDiagonalIconDefinition = svgToIconDefinition(
  aDSGrowDiagonalSvg,
  'ads-grow-diagonal'
);

/**![ADSGrowDiagonal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTQuNzggMi4yOEw5LjUzIDcuNTNMOC40NyA2LjQ3TDEzLjcyIDEuMjJMMTQuNzggMi4yOFpNMS4yMiAxMy43Mkw2LjQ3IDguNDdMNy41MyA5LjUzTDIuMjggMTQuNzhMMS4yMiAxMy43MloiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuNSAxSDE0LjI1QzE0LjY2NCAxIDE1IDEuMzM2IDE1IDEuNzVWNi41SDEzLjVWMi41SDkuNVYxWk0yLjUgMTMuNVY5LjVIMVYxNC4yNUMxIDE0LjY2NCAxLjMzNiAxNSAxLjc1IDE1SDYuNVYxMy41SDIuNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGrowDiagonalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrowDiagonal';
}

export default RefIcon;
