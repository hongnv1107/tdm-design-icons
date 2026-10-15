// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStatusWarningSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.242 1.168C6.999 -0.227 9.002 -0.227 9.758 1.168L15.658 12.046C16.381 13.379 15.416 14.999 13.9 14.999H2.1C0.584 14.999 -0.38 13.379 0.342 12.046L6.242 1.168ZM8 10.749C7.448 10.749 7 11.197 7 11.749C7 12.301 7.448 12.749 8 12.749C8.552 12.749 9 12.301 9 11.749C9 11.197 8.552 10.749 8 10.749ZM7.25 4.499V9.499H8.75V4.499H7.25Z"/>
  </svg>
);

const aDSStatusWarningIconDefinition = svgToIconDefinition(
  aDSStatusWarningSvg,
  'ads-status-warning'
);

/**![ADSStatusWarning](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjQyIDEuMTY4QzYuOTk5IC0wLjIyNyA5LjAwMiAtMC4yMjcgOS43NTggMS4xNjhMMTUuNjU4IDEyLjA0NkMxNi4zODEgMTMuMzc5IDE1LjQxNiAxNC45OTkgMTMuOSAxNC45OTlIMi4xQzAuNTg0IDE0Ljk5OSAtMC4zOCAxMy4zNzkgMC4zNDIgMTIuMDQ2TDYuMjQyIDEuMTY4Wk04IDEwLjc0OUM3LjQ0OCAxMC43NDkgNyAxMS4xOTcgNyAxMS43NDlDNyAxMi4zMDEgNy40NDggMTIuNzQ5IDggMTIuNzQ5QzguNTUyIDEyLjc0OSA5IDEyLjMwMSA5IDExLjc0OUM5IDExLjE5NyA4LjU1MiAxMC43NDkgOCAxMC43NDlaTTcuMjUgNC40OTlWOS40OTlIOC43NVY0LjQ5OUg3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStatusWarningIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStatusWarning';
}

export default RefIcon;
