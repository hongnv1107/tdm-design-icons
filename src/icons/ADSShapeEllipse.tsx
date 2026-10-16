// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeEllipseSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C11.038 13.5 13.5 11.038 13.5 8C13.5 4.962 11.038 2.5 8 2.5ZM1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8Z"/>
  </svg>
);

const aDSShapeEllipseIconDefinition = svgToIconDefinition(
  aDSShapeEllipseSvg,
  'ads-shape-ellipse'
);

/**![ADSShapeEllipse](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAyLjVDNC45NjIgMi41IDIuNSA0Ljk2MiAyLjUgOEMyLjUgMTEuMDM4IDQuOTYyIDEzLjUgOCAxMy41QzExLjAzOCAxMy41IDEzLjUgMTEuMDM4IDEzLjUgOEMxMy41IDQuOTYyIDExLjAzOCAyLjUgOCAyLjVaTTEgOEMxIDQuMTM0IDQuMTM0IDEgOCAxQzExLjg2NiAxIDE1IDQuMTM0IDE1IDhDMTUgMTEuODY2IDExLjg2NiAxNSA4IDE1QzQuMTM0IDE1IDEgMTEuODY2IDEgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeEllipseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeEllipse';
}

export default RefIcon;
