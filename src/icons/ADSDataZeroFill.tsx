// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataZeroFillSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 5.759L4.871 11.944C5.382 12.871 6.367 13.5 7.5 13.5H8.5C10.157 13.5 11.5 12.157 11.5 10.5V5.759ZM13 10.5C13 12.985 10.985 15 8.5 15H7.5C5.015 15 3 12.985 3 10.5V5.5C3 3.015 5.015 1 7.5 1H8.5C10.985 1 13 3.015 13 5.5V10.5ZM4.5 10.241L11.128 4.055C10.617 3.128 9.633 2.5 8.5 2.5H7.5C5.843 2.5 4.5 3.843 4.5 5.5V10.241Z"/>
  </svg>
);

const aDSDataZeroFillIconDefinition = svgToIconDefinition(
  aDSDataZeroFillSvg,
  'ads-data-zero-fill'
);

/**![ADSDataZeroFill](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMS41IDUuNzU5TDQuODcxIDExLjk0NEM1LjM4MiAxMi44NzEgNi4zNjcgMTMuNSA3LjUgMTMuNUg4LjVDMTAuMTU3IDEzLjUgMTEuNSAxMi4xNTcgMTEuNSAxMC41VjUuNzU5Wk0xMyAxMC41QzEzIDEyLjk4NSAxMC45ODUgMTUgOC41IDE1SDcuNUM1LjAxNSAxNSAzIDEyLjk4NSAzIDEwLjVWNS41QzMgMy4wMTUgNS4wMTUgMSA3LjUgMUg4LjVDMTAuOTg1IDEgMTMgMy4wMTUgMTMgNS41VjEwLjVaTTQuNSAxMC4yNDFMMTEuMTI4IDQuMDU1QzEwLjYxNyAzLjEyOCA5LjYzMyAyLjUgOC41IDIuNUg3LjVDNS44NDMgMi41IDQuNSAzLjg0MyA0LjUgNS41VjEwLjI0MVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataZeroFillIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataZeroFill';
}

export default RefIcon;
