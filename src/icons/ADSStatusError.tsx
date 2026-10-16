// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusErrorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.586 0.603C7.367 -0.178 8.633 -0.178 9.414 0.603L15.396 6.586C16.177 7.367 16.177 8.633 15.396 9.414L9.414 15.396C8.633 16.177 7.367 16.177 6.586 15.396L0.603 9.414C-0.178 8.633 -0.178 7.367 0.603 6.586L6.586 0.603ZM8 10.25C7.448 10.25 7 10.698 7 11.25C7 11.802 7.448 12.25 8 12.25C8.552 12.25 9 11.802 9 11.25C9 10.698 8.552 10.25 8 10.25ZM7.25 3.75V9H8.75V3.75H7.25Z"/>
  </svg>
);

const aDSStatusErrorIconDefinition = svgToIconDefinition(
  aDSStatusErrorSvg,
  'ads-status-error'
);

/**![ADSStatusError](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNTg2IDAuNjAzQzcuMzY3IC0wLjE3OCA4LjYzMyAtMC4xNzggOS40MTQgMC42MDNMMTUuMzk2IDYuNTg2QzE2LjE3NyA3LjM2NyAxNi4xNzcgOC42MzMgMTUuMzk2IDkuNDE0TDkuNDE0IDE1LjM5NkM4LjYzMyAxNi4xNzcgNy4zNjcgMTYuMTc3IDYuNTg2IDE1LjM5NkwwLjYwMyA5LjQxNEMtMC4xNzggOC42MzMgLTAuMTc4IDcuMzY3IDAuNjAzIDYuNTg2TDYuNTg2IDAuNjAzWk04IDEwLjI1QzcuNDQ4IDEwLjI1IDcgMTAuNjk4IDcgMTEuMjVDNyAxMS44MDIgNy40NDggMTIuMjUgOCAxMi4yNUM4LjU1MiAxMi4yNSA5IDExLjgwMiA5IDExLjI1QzkgMTAuNjk4IDguNTUyIDEwLjI1IDggMTAuMjVaTTcuMjUgMy43NVY5SDguNzVWMy43NUg3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusErrorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusError';
}

export default RefIcon;
