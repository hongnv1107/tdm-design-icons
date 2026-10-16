// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowsDiagonalUpRightDownLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1H9.25C9.664 1 10 1.336 10 1.75V7H8.5V3.561L2.03 10.03L0.97 8.97L7.439 2.5H4V1ZM7.5 12.439L13.97 5.97L15.03 7.03L8.561 13.5H12V15H6.75C6.336 15 6 14.664 6 14.25V9H7.5V12.439Z"/>
  </svg>
);

const aDSArrowsDiagonalUpRightDownLeftIconDefinition = svgToIconDefinition(
  aDSArrowsDiagonalUpRightDownLeftSvg,
  'ads-arrows-diagonal-up-right-down-left'
);

/**![ADSArrowsDiagonalUpRightDownLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMUg5LjI1QzkuNjY0IDEgMTAgMS4zMzYgMTAgMS43NVY3SDguNVYzLjU2MUwyLjAzIDEwLjAzTDAuOTcgOC45N0w3LjQzOSAyLjVINFYxWk03LjUgMTIuNDM5TDEzLjk3IDUuOTdMMTUuMDMgNy4wM0w4LjU2MSAxMy41SDEyVjE1SDYuNzVDNi4zMzYgMTUgNiAxNC42NjQgNiAxNC4yNVY5SDcuNVYxMi40MzlaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowsDiagonalUpRightDownLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowsDiagonalUpRightDownLeft';
}

export default RefIcon;
