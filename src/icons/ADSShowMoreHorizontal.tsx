// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShowMoreHorizontalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShowMoreHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgOEMwIDcuMTcyIDAuNjcyIDYuNSAxLjUgNi41QzIuMzI4IDYuNSAzIDcuMTcyIDMgOEMzIDguODI4IDIuMzI4IDkuNSAxLjUgOS41QzAuNjcyIDkuNSAwIDguODI4IDAgOFpNNi41IDhDNi41IDcuMTcyIDcuMTcyIDYuNSA4IDYuNUM4LjgyOCA2LjUgOS41IDcuMTcyIDkuNSA4QzkuNSA4LjgyOCA4LjgyOCA5LjUgOCA5LjVDNy4xNzIgOS41IDYuNSA4LjgyOCA2LjUgOFpNMTMgOEMxMyA3LjE3MiAxMy42NzIgNi41IDE0LjUgNi41QzE1LjMyOCA2LjUgMTYgNy4xNzIgMTYgOEMxNiA4LjgyOCAxNS4zMjggOS41IDE0LjUgOS41QzEzLjY3MiA5LjUgMTMgOC44MjggMTMgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShowMoreHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShowMoreHorizontal';
}

export default RefIcon;
