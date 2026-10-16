// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDockWindowBottomLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.25 7C8.664 7 9 7.336 9 7.75V11.25C9 11.664 8.664 12 8.25 12H4.75C4.336 12 4 11.664 4 11.25V7.75C4 7.336 4.336 7 4.75 7H8.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3Z"/>
  </svg>
);

const aDSDockWindowBottomLeftIconDefinition = svgToIconDefinition(
  aDSDockWindowBottomLeftSvg,
  'ads-dock-window-bottom-left'
);

/**![ADSDockWindowBottomLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNOC4yNSA3QzguNjY0IDcgOSA3LjMzNiA5IDcuNzVWMTEuMjVDOSAxMS42NjQgOC42NjQgMTIgOC4yNSAxMkg0Ljc1QzQuMzM2IDEyIDQgMTEuNjY0IDQgMTEuMjVWNy43NUM0IDcuMzM2IDQuMzM2IDcgNC43NSA3SDguMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMyAxQzE0LjEwNSAxIDE1IDEuODk1IDE1IDNWMTNDMTUgMTQuMTA1IDE0LjEwNSAxNSAxMyAxNUgzQzEuODk1IDE1IDEgMTQuMTA1IDEgMTNWM0MxIDEuODk1IDEuODk1IDEgMyAxSDEzWk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTNDMTMuMjc2IDEzLjUgMTMuNSAxMy4yNzYgMTMuNSAxM1YzQzEzLjUgMi43MjQgMTMuMjc2IDIuNSAxMyAyLjVIM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDockWindowBottomLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDockWindowBottomLeft';
}

export default RefIcon;
