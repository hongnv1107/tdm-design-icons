// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDatabaseSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V6.5H13.5V3C13.5 2.724 13.276 2.5 13 2.5H3ZM13.5 8H8.75V10H13.5V8ZM13.5 11.5H8.75V13.5H13C13.276 13.5 13.5 13.276 13.5 13V11.5ZM7.25 13.5V11.5H2.5V13C2.5 13.276 2.724 13.5 3 13.5H7.25ZM2.5 10H7.25V8H2.5V10Z"/>
  </svg>
);

const aDSDatabaseIconDefinition = svgToIconDefinition(
  aDSDatabaseSvg,
  'ads-database'
);

/**![ADSDatabase](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1Y2LjVIMTMuNVYzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM1pNMTMuNSA4SDguNzVWMTBIMTMuNVY4Wk0xMy41IDExLjVIOC43NVYxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWMTEuNVpNNy4yNSAxMy41VjExLjVIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVINy4yNVpNMi41IDEwSDcuMjVWOEgyLjVWMTBaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDatabaseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDatabase';
}

export default RefIcon;
