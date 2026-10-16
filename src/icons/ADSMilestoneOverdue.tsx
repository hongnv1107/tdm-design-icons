// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSMilestoneOverdueSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.585 2.603C7.366 1.822 8.633 1.823 9.414 2.603L13.396 6.585C14.128 7.318 14.174 8.477 13.534 9.262L13.396 9.414L9.414 13.396C8.633 14.177 7.366 14.177 6.585 13.396L2.603 9.414C1.823 8.633 1.822 7.366 2.603 6.585L6.585 2.603ZM8 10C7.448 10 7.001 10.447 7 11C7 11.552 7.448 12 8 12C8.553 11.999 9 11.552 9 11C9 10.448 8.552 10 8 10ZM7.25 4V9H8.75V4H7.25Z"/>
  </svg>
);

const aDSMilestoneOverdueIconDefinition = svgToIconDefinition(
  aDSMilestoneOverdueSvg,
  'ads-milestone-overdue'
);

/**![ADSMilestoneOverdue](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNTg1IDIuNjAzQzcuMzY2IDEuODIyIDguNjMzIDEuODIzIDkuNDE0IDIuNjAzTDEzLjM5NiA2LjU4NUMxNC4xMjggNy4zMTggMTQuMTc0IDguNDc3IDEzLjUzNCA5LjI2MkwxMy4zOTYgOS40MTRMOS40MTQgMTMuMzk2QzguNjMzIDE0LjE3NyA3LjM2NiAxNC4xNzcgNi41ODUgMTMuMzk2TDIuNjAzIDkuNDE0QzEuODIzIDguNjMzIDEuODIyIDcuMzY2IDIuNjAzIDYuNTg1TDYuNTg1IDIuNjAzWk04IDEwQzcuNDQ4IDEwIDcuMDAxIDEwLjQ0NyA3IDExQzcgMTEuNTUyIDcuNDQ4IDEyIDggMTJDOC41NTMgMTEuOTk5IDkgMTEuNTUyIDkgMTFDOSAxMC40NDggOC41NTIgMTAgOCAxMFpNNy4yNSA0VjlIOC43NVY0SDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSMilestoneOverdueIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSMilestoneOverdue';
}

export default RefIcon;
