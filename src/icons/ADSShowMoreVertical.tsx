// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShowMoreVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.5C6.5 0.672 7.172 0 8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5ZM6.5 8C6.5 7.172 7.172 6.5 8 6.5C8.828 6.5 9.5 7.172 9.5 8C9.5 8.828 8.828 9.5 8 9.5C7.172 9.5 6.5 8.828 6.5 8ZM6.5 14.5C6.5 13.672 7.172 13 8 13C8.828 13 9.5 13.672 9.5 14.5C9.5 15.328 8.828 16 8 16C7.172 16 6.5 15.328 6.5 14.5Z"/>
  </svg>
);

const aDSShowMoreVerticalIconDefinition = svgToIconDefinition(
  aDSShowMoreVerticalSvg,
  'ads-show-more-vertical'
);

/**![ADSShowMoreVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi41IDEuNUM2LjUgMC42NzIgNy4xNzIgMCA4IDBDOC44MjggMCA5LjUgMC42NzIgOS41IDEuNUM5LjUgMi4zMjggOC44MjggMyA4IDNDNy4xNzIgMyA2LjUgMi4zMjggNi41IDEuNVpNNi41IDhDNi41IDcuMTcyIDcuMTcyIDYuNSA4IDYuNUM4LjgyOCA2LjUgOS41IDcuMTcyIDkuNSA4QzkuNSA4LjgyOCA4LjgyOCA5LjUgOCA5LjVDNy4xNzIgOS41IDYuNSA4LjgyOCA2LjUgOFpNNi41IDE0LjVDNi41IDEzLjY3MiA3LjE3MiAxMyA4IDEzQzguODI4IDEzIDkuNSAxMy42NzIgOS41IDE0LjVDOS41IDE1LjMyOCA4LjgyOCAxNiA4IDE2QzcuMTcyIDE2IDYuNSAxNS4zMjggNi41IDE0LjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShowMoreVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShowMoreVertical';
}

export default RefIcon;
