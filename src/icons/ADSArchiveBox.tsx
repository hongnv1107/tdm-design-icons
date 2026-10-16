// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArchiveBoxSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 1H15V6H14V13C14 14.105 13.105 15 12 15H4C2.895 15 2 14.105 2 13V6H1V1ZM3.5 6V13C3.5 13.276 3.724 13.5 4 13.5H12C12.276 13.5 12.5 13.276 12.5 13V6H3.5ZM13.5 4.5H2.5V2.5H13.5V4.5ZM10.5 9H5.5V7.5H10.5V9Z"/>
  </svg>
);

const aDSArchiveBoxIconDefinition = svgToIconDefinition(
  aDSArchiveBoxSvg,
  'ads-archive-box'
);

/**![ADSArchiveBox](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMSAxSDE1VjZIMTRWMTNDMTQgMTQuMTA1IDEzLjEwNSAxNSAxMiAxNUg0QzIuODk1IDE1IDIgMTQuMTA1IDIgMTNWNkgxVjFaTTMuNSA2VjEzQzMuNSAxMy4yNzYgMy43MjQgMTMuNSA0IDEzLjVIMTJDMTIuMjc2IDEzLjUgMTIuNSAxMy4yNzYgMTIuNSAxM1Y2SDMuNVpNMTMuNSA0LjVIMi41VjIuNUgxMy41VjQuNVpNMTAuNSA5SDUuNVY3LjVIMTAuNVY5WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArchiveBoxIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArchiveBox';
}

export default RefIcon;
