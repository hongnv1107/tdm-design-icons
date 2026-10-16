// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDockWindowBottomRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.25 7C11.664 7 12 7.336 12 7.75V11.25C12 11.664 11.664 12 11.25 12H7.75C7.336 12 7 11.664 7 11.25V7.75C7 7.336 7.336 7 7.75 7H11.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M13 1C14.105 1 15 1.895 15 3V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3C1 1.895 1.895 1 3 1H13ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V3C13.5 2.724 13.276 2.5 13 2.5H3Z"/>
  </svg>
);

const aDSDockWindowBottomRightIconDefinition = svgToIconDefinition(
  aDSDockWindowBottomRightSvg,
  'ads-dock-window-bottom-right'
);

/**![ADSDockWindowBottomRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS4yNSA3QzExLjY2NCA3IDEyIDcuMzM2IDEyIDcuNzVWMTEuMjVDMTIgMTEuNjY0IDExLjY2NCAxMiAxMS4yNSAxMkg3Ljc1QzcuMzM2IDEyIDcgMTEuNjY0IDcgMTEuMjVWNy43NUM3IDcuMzM2IDcuMzM2IDcgNy43NSA3SDExLjI1WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMUMxNC4xMDUgMSAxNSAxLjg5NSAxNSAzVjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxM1pNMyAyLjVDMi43MjQgMi41IDIuNSAyLjcyNCAyLjUgM1YxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDEzQzEzLjI3NiAxMy41IDEzLjUgMTMuMjc2IDEzLjUgMTNWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41SDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDockWindowBottomRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDockWindowBottomRight';
}

export default RefIcon;
