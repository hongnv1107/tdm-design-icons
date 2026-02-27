// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const chartPollFilledSvg = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M18 20.88C19.6569 20.88 21 19.5369 21 17.88V5.88C21 4.22315 19.6569 2.88 18 2.88H6C4.34315 2.88 3 4.22315 3 5.88V17.88C3 19.5369 4.34315 20.88 6 20.88H18ZM16 10C15.4477 10 15 10.4477 15 11V16C15 16.5523 15.4477 17 16 17C16.5523 17 17 16.5523 17 16V11C17 10.4477 16.5523 10 16 10ZM11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44771 13 8V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16L11 8ZM8 12C7.44771 12 7 12.4477 7 13L7 16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16L9 13C9 12.4477 8.55228 12 8 12Z"/>
  </svg>
);

const chartPollFilledIconDefinition = svgToIconDefinition(
  chartPollFilledSvg,
  'chart-poll-filled'
);

/**![ChartPollFilledIcon](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDIwLjg4QzE5LjY1NjkgMjAuODggMjEgMTkuNTM2OSAyMSAxNy44OFY1Ljg4QzIxIDQuMjIzMTUgMTkuNjU2OSAyLjg4IDE4IDIuODhINkM0LjM0MzE1IDIuODggMyA0LjIyMzE1IDMgNS44OFYxNy44OEMzIDE5LjUzNjkgNC4zNDMxNSAyMC44OCA2IDIwLjg4SDE4Wk0xNiAxMEMxNS40NDc3IDEwIDE1IDEwLjQ0NzcgMTUgMTFWMTZDMTUgMTYuNTUyMyAxNS40NDc3IDE3IDE2IDE3QzE2LjU1MjMgMTcgMTcgMTYuNTUyMyAxNyAxNlYxMUMxNyAxMC40NDc3IDE2LjU1MjMgMTAgMTYgMTBaTTExIDhDMTEgNy40NDc3MiAxMS40NDc3IDcgMTIgN0MxMi41NTIzIDcgMTMgNy40NDc3MSAxMyA4VjE2QzEzIDE2LjU1MjMgMTIuNTUyMyAxNyAxMiAxN0MxMS40NDc3IDE3IDExIDE2LjU1MjMgMTEgMTZMMTEgOFpNOCAxMkM3LjQ0NzcxIDEyIDcgMTIuNDQ3NyA3IDEzTDcgMTZDNyAxNi41NTIzIDcuNDQ3NzIgMTcgOCAxN0M4LjU1MjI4IDE3IDkgMTYuNTUyMyA5IDE2TDkgMTNDOSAxMi40NDc3IDguNTUyMjggMTIgOCAxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={chartPollFilledIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ChartPollFilledIcon';
}

export default RefIcon;
