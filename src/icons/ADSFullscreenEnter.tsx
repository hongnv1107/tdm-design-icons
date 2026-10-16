// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFullscreenEnterSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 2.5L10 2.5V1L13 1C14.105 1 15 1.895 15 3V6H13.5V3C13.5 2.724 13.276 2.5 13 2.5ZM3 2.5C2.724 2.5 2.5 2.724 2.5 3L2.5 6H1L1 3C1 1.895 1.895 1 3 1L6 1V2.5L3 2.5ZM2.5 10L2.5 13C2.5 13.276 2.724 13.5 3 13.5H6V15H3C1.896 15 1 14.105 1 13L1 10H2.5ZM13.5 13V10H15V13C15 14.105 14.105 15 13 15H10V13.5H13C13.276 13.5 13.5 13.276 13.5 13Z"/>
  </svg>
);

const aDSFullscreenEnterIconDefinition = svgToIconDefinition(
  aDSFullscreenEnterSvg,
  'ads-fullscreen-enter'
);

/**![ADSFullscreenEnter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTMgMi41TDEwIDIuNVYxTDEzIDFDMTQuMTA1IDEgMTUgMS44OTUgMTUgM1Y2SDEzLjVWM0MxMy41IDIuNzI0IDEzLjI3NiAyLjUgMTMgMi41Wk0zIDIuNUMyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzTDIuNSA2SDFMMSAzQzEgMS44OTUgMS44OTUgMSAzIDFMNiAxVjIuNUwzIDIuNVpNMi41IDEwTDIuNSAxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDZWMTVIM0MxLjg5NiAxNSAxIDE0LjEwNSAxIDEzTDEgMTBIMi41Wk0xMy41IDEzVjEwSDE1VjEzQzE1IDE0LjEwNSAxNC4xMDUgMTUgMTMgMTVIMTBWMTMuNUgxM0MxMy4yNzYgMTMuNSAxMy41IDEzLjI3NiAxMy41IDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFullscreenEnterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFullscreenEnter';
}

export default RefIcon;
