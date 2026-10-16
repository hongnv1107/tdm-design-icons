// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBulletSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 13V1H2.5V13C2.5 13.276 2.724 13.5 3 13.5H15V15H3C1.895 15 1 14.105 1 13Z"/><path d="M11 8.5H13.5V6H11V8.5ZM5.5 8.5H9.5V6H5.5V8.5ZM15 8.625C15 9.384 14.384 10 13.625 10H11V11.5H9.5V10H5.375C4.616 10 4 9.384 4 8.625V5.875C4 5.116 4.616 4.5 5.375 4.5H9.5V3H11V4.5H13.625C14.384 4.5 15 5.116 15 5.875V8.625Z"/>
  </svg>
);

const aDSChartBulletIconDefinition = svgToIconDefinition(
  aDSChartBulletSvg,
  'ads-chart-bullet'
);

/**![ADSChartBullet](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEzVjFIMi41VjEzQzIuNSAxMy4yNzYgMi43MjQgMTMuNSAzIDEzLjVIMTVWMTVIM0MxLjg5NSAxNSAxIDE0LjEwNSAxIDEzWiIvPjxwYXRoIGQ9Ik0xMSA4LjVIMTMuNVY2SDExVjguNVpNNS41IDguNUg5LjVWNkg1LjVWOC41Wk0xNSA4LjYyNUMxNSA5LjM4NCAxNC4zODQgMTAgMTMuNjI1IDEwSDExVjExLjVIOS41VjEwSDUuMzc1QzQuNjE2IDEwIDQgOS4zODQgNCA4LjYyNVY1Ljg3NUM0IDUuMTE2IDQuNjE2IDQuNSA1LjM3NSA0LjVIOS41VjNIMTFWNC41SDEzLjYyNUMxNC4zODQgNC41IDE1IDUuMTE2IDE1IDUuODc1VjguNjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBulletIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBullet';
}

export default RefIcon;
