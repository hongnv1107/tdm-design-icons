// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShowMoreVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShowMoreVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuNSAxLjVDNi41IDAuNjcyIDcuMTcyIDAgOCAwQzguODI4IDAgOS41IDAuNjcyIDkuNSAxLjVDOS41IDIuMzI4IDguODI4IDMgOCAzQzcuMTcyIDMgNi41IDIuMzI4IDYuNSAxLjVaTTYuNSA4QzYuNSA3LjE3MiA3LjE3MiA2LjUgOCA2LjVDOC44MjggNi41IDkuNSA3LjE3MiA5LjUgOEM5LjUgOC44MjggOC44MjggOS41IDggOS41QzcuMTcyIDkuNSA2LjUgOC44MjggNi41IDhaTTYuNSAxNC41QzYuNSAxMy42NzIgNy4xNzIgMTMgOCAxM0M4LjgyOCAxMyA5LjUgMTMuNjcyIDkuNSAxNC41QzkuNSAxNS4zMjggOC44MjggMTYgOCAxNkM3LjE3MiAxNiA2LjUgMTUuMzI4IDYuNSAxNC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShowMoreVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShowMoreVertical';
}

export default RefIcon;
