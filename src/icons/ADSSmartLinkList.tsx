// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSmartLinkListSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3ZM5.5 5.5H4V4H5.5V5.5ZM12 5.5H7V4H12V5.5ZM5.5 8.75H4V7.25H5.5V8.75ZM12 8.75H7V7.25H12V8.75ZM5.5 12H4V10.5H5.5V12ZM12 12H7V10.5H12V12Z"/>
  </svg>
);

const aDSSmartLinkListIconDefinition = svgToIconDefinition(
  aDSSmartLinkListSvg,
  'ads-smart-link-list'
);

/**![ADSSmartLinkList](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDNaTTUuNSA1LjVINFY0SDUuNVY1LjVaTTEyIDUuNUg3VjRIMTJWNS41Wk01LjUgOC43NUg0VjcuMjVINS41VjguNzVaTTEyIDguNzVIN1Y3LjI1SDEyVjguNzVaTTUuNSAxMkg0VjEwLjVINS41VjEyWk0xMiAxMkg3VjEwLjVIMTJWMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSmartLinkListIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSmartLinkList';
}

export default RefIcon;
