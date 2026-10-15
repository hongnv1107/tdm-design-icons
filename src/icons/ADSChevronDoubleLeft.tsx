// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDoubleLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.72 1.47L1.72 7.47C1.445 7.744 1.428 8.179 1.668 8.474L1.72 8.53L7.72 14.53L8.78 13.47L3.311 8L8.78 2.53L7.72 1.47Z"/><path d="M12.47 1.47L6.47 7.47C6.195 7.744 6.178 8.179 6.418 8.474L6.47 8.53L12.47 14.53L13.53 13.47L8.061 8L13.53 2.53L12.47 1.47Z"/>
  </svg>
);

const aDSChevronDoubleLeftIconDefinition = svgToIconDefinition(
  aDSChevronDoubleLeftSvg,
  'ads-chevron-double-left'
);

/**![ADSChevronDoubleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNNy43MiAxLjQ3TDEuNzIgNy40N0MxLjQ0NSA3Ljc0NCAxLjQyOCA4LjE3OSAxLjY2OCA4LjQ3NEwxLjcyIDguNTNMNy43MiAxNC41M0w4Ljc4IDEzLjQ3TDMuMzExIDhMOC43OCAyLjUzTDcuNzIgMS40N1oiLz48cGF0aCBkPSJNMTIuNDcgMS40N0w2LjQ3IDcuNDdDNi4xOTUgNy43NDQgNi4xNzggOC4xNzkgNi40MTggOC40NzRMNi40NyA4LjUzTDEyLjQ3IDE0LjUzTDEzLjUzIDEzLjQ3TDguMDYxIDhMMTMuNTMgMi41M0wxMi40NyAxLjQ3WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDoubleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDoubleLeft';
}

export default RefIcon;
