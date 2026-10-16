// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnsDistributeSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 2.375C2 1.616 2.616 1 3.375 1H12.625C13.384 1 14 1.616 14 2.375V13.625C14 14.384 13.384 15 12.625 15H3.375C2.616 15 2 14.384 2 13.625V2.375ZM3.5 2.5V13.5H5.5V2.5H3.5ZM7 2.5V13.5H9V2.5H7ZM10.5 2.5V13.5H12.5V2.5H10.5Z"/>
  </svg>
);

const aDSTableColumnsDistributeIconDefinition = svgToIconDefinition(
  aDSTableColumnsDistributeSvg,
  'ads-table-columns-distribute'
);

/**![ADSTableColumnsDistribute](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjM3NUMyIDEuNjE2IDIuNjE2IDEgMy4zNzUgMUgxMi42MjVDMTMuMzg0IDEgMTQgMS42MTYgMTQgMi4zNzVWMTMuNjI1QzE0IDE0LjM4NCAxMy4zODQgMTUgMTIuNjI1IDE1SDMuMzc1QzIuNjE2IDE1IDIgMTQuMzg0IDIgMTMuNjI1VjIuMzc1Wk0zLjUgMi41VjEzLjVINS41VjIuNUgzLjVaTTcgMi41VjEzLjVIOVYyLjVIN1pNMTAuNSAyLjVWMTMuNUgxMi41VjIuNUgxMC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnsDistributeIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnsDistribute';
}

export default RefIcon;
