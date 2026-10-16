// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSScreenSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 3C1 1.895 1.895 1 3 1H13C14.105 1 15 1.895 15 3V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10V3ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V3C13.5 2.724 13.276 2.5 13 2.5H3Z"/>
  </svg>
);

const aDSScreenIconDefinition = svgToIconDefinition(
  aDSScreenSvg,
  'ads-screen'
);

/**![ADSScreen](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTBDMTUgMTEuMTA1IDE0LjEwNSAxMiAxMyAxMkg4Ljc1VjEzLjVIMTJWMTVINFYxMy41SDcuMjVWMTJIM0MxLjg5NSAxMiAxIDExLjEwNSAxIDEwVjNaTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTBDMi41IDEwLjI3NiAyLjcyNCAxMC41IDMgMTAuNUgxM0MxMy4yNzYgMTAuNSAxMy41IDEwLjI3NiAxMy41IDEwVjNDMTMuNSAyLjcyNCAxMy4yNzYgMi41IDEzIDIuNUgzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSScreenIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSScreen';
}

export default RefIcon;
