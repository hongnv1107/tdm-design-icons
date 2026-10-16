// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShowMoreHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 7.172 0.672 6.5 1.5 6.5C2.328 6.5 3 7.172 3 8C3 8.828 2.328 9.5 1.5 9.5C0.672 9.5 0 8.828 0 8ZM6.5 8C6.5 7.172 7.172 6.5 8 6.5C8.828 6.5 9.5 7.172 9.5 8C9.5 8.828 8.828 9.5 8 9.5C7.172 9.5 6.5 8.828 6.5 8ZM13 8C13 7.172 13.672 6.5 14.5 6.5C15.328 6.5 16 7.172 16 8C16 8.828 15.328 9.5 14.5 9.5C13.672 9.5 13 8.828 13 8Z"/>
  </svg>
);

const aDSShowMoreHorizontalIconDefinition = svgToIconDefinition(
  aDSShowMoreHorizontalSvg,
  'ads-show-more-horizontal'
);

/**![ADSShowMoreHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMCA4QzAgNy4xNzIgMC42NzIgNi41IDEuNSA2LjVDMi4zMjggNi41IDMgNy4xNzIgMyA4QzMgOC44MjggMi4zMjggOS41IDEuNSA5LjVDMC42NzIgOS41IDAgOC44MjggMCA4Wk02LjUgOEM2LjUgNy4xNzIgNy4xNzIgNi41IDggNi41QzguODI4IDYuNSA5LjUgNy4xNzIgOS41IDhDOS41IDguODI4IDguODI4IDkuNSA4IDkuNUM3LjE3MiA5LjUgNi41IDguODI4IDYuNSA4Wk0xMyA4QzEzIDcuMTcyIDEzLjY3MiA2LjUgMTQuNSA2LjVDMTUuMzI4IDYuNSAxNiA3LjE3MiAxNiA4QzE2IDguODI4IDE1LjMyOCA5LjUgMTQuNSA5LjVDMTMuNjcyIDkuNSAxMyA4LjgyOCAxMyA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShowMoreHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShowMoreHorizontal';
}

export default RefIcon;
