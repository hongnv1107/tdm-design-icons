// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSaveSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.5C2.724 2.5 2.5 2.724 2.5 3V13C2.5 13.276 2.724 13.5 3 13.5H13C13.276 13.5 13.5 13.276 13.5 13V4.018C13.5 3.885 13.447 3.758 13.354 3.664L12.336 2.646C12.246 2.557 12.126 2.505 12 2.5V6.25C12 6.664 11.664 7 11.25 7H4.75C4.336 7 4 6.664 4 6.25V2.5H3ZM5.5 2.5V5.5H10.5V2.5H5.5ZM1 3C1 1.895 1.895 1 3 1H11.982C12.513 1 13.021 1.211 13.396 1.586L14.414 2.604C14.789 2.979 15 3.487 15 4.018V13C15 14.105 14.105 15 13 15H3C1.895 15 1 14.105 1 13V3Z"/>
  </svg>
);

const aDSSaveIconDefinition = svgToIconDefinition(
  aDSSaveSvg,
  'ads-save'
);

/**![ADSSave](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMi41QzIuNzI0IDIuNSAyLjUgMi43MjQgMi41IDNWMTNDMi41IDEzLjI3NiAyLjcyNCAxMy41IDMgMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzVjQuMDE4QzEzLjUgMy44ODUgMTMuNDQ3IDMuNzU4IDEzLjM1NCAzLjY2NEwxMi4zMzYgMi42NDZDMTIuMjQ2IDIuNTU3IDEyLjEyNiAyLjUwNSAxMiAyLjVWNi4yNUMxMiA2LjY2NCAxMS42NjQgNyAxMS4yNSA3SDQuNzVDNC4zMzYgNyA0IDYuNjY0IDQgNi4yNVYyLjVIM1pNNS41IDIuNVY1LjVIMTAuNVYyLjVINS41Wk0xIDNDMSAxLjg5NSAxLjg5NSAxIDMgMUgxMS45ODJDMTIuNTEzIDEgMTMuMDIxIDEuMjExIDEzLjM5NiAxLjU4NkwxNC40MTQgMi42MDRDMTQuNzg5IDIuOTc5IDE1IDMuNDg3IDE1IDQuMDE4VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzVjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSaveIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSave';
}

export default RefIcon;
