// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.061 12H10.25V13.5H3.25C2.836 13.5 2.5 13.164 2.5 12.75V5.75H4V10.939L12.47 2.47L13.53 3.53L5.061 12Z"/>
  </svg>
);

const aDSArrowDownLeftIconDefinition = svgToIconDefinition(
  aDSArrowDownLeftSvg,
  'ads-arrow-down-left'
);

/**![ADSArrowDownLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNS4wNjEgMTJIMTAuMjVWMTMuNUgzLjI1QzIuODM2IDEzLjUgMi41IDEzLjE2NCAyLjUgMTIuNzVWNS43NUg0VjEwLjkzOUwxMi40NyAyLjQ3TDEzLjUzIDMuNTNMNS4wNjEgMTJaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDownLeft';
}

export default RefIcon;
