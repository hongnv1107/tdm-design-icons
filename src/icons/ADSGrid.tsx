// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGridSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V7.25H7.25V2.5H3ZM8.75 2.5V7.25H13.5V3C13.5 2.724 13.276 2.5 13 2.5H8.75ZM13.5 8.75H8.75V13.5H13C13.276 13.5 13.5 13.276 13.5 13V8.75ZM7.25 13.5V8.75H2.5V13C2.5 13.276 2.724 13.5 3 13.5H7.25Z"/>
  </svg>
);

const aDSGridIconDefinition = svgToIconDefinition(
  aDSGridSvg,
  'ads-grid'
);

/**![ADSGrid](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y3LjI1SDcuMjVWMi41SDNaTTguNzUgMi41VjcuMjVIMTMuNVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIOC43NVpNMTMuNSA4Ljc1SDguNzVWMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjguNzVaTTcuMjUgMTMuNVY4Ljc1SDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDcuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGridIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrid';
}

export default RefIcon;
