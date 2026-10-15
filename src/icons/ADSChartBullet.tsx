// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChartBulletSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSChartBullet](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxM1YxSDIuNVYxM0MyLjUgMTMuMjc2IDIuNzI0IDEzLjUgMyAxMy41SDE1VjE1SDNDMS44OTUgMTUgMSAxNC4xMDUgMSAxM1oiLz48cGF0aCBkPSJNMTEgOC41SDEzLjVWNkgxMVY4LjVaTTUuNSA4LjVIOS41VjZINS41VjguNVpNMTUgOC42MjVDMTUgOS4zODQgMTQuMzg0IDEwIDEzLjYyNSAxMEgxMVYxMS41SDkuNVYxMEg1LjM3NUM0LjYxNiAxMCA0IDkuMzg0IDQgOC42MjVWNS44NzVDNCA1LjExNiA0LjYxNiA0LjUgNS4zNzUgNC41SDkuNVYzSDExVjQuNUgxMy42MjVDMTQuMzg0IDQuNSAxNSA1LjExNiAxNSA1Ljg3NVY4LjYyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChartBulletIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChartBullet';
}

export default RefIcon;
