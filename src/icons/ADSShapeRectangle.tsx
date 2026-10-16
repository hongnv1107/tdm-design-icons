// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeRectangleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.875C1.5 2.116 2.116 1.5 2.875 1.5H13.125C13.884 1.5 14.5 2.116 14.5 2.875V13.125C14.5 13.884 13.884 14.5 13.125 14.5H2.875C2.116 14.5 1.5 13.884 1.5 13.125V2.875ZM3 3V13H13V3H3Z"/>
  </svg>
);

const aDSShapeRectangleIconDefinition = svgToIconDefinition(
  aDSShapeRectangleSvg,
  'ads-shape-rectangle'
);

/**![ADSShapeRectangle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41IDIuODc1QzEuNSAyLjExNiAyLjExNiAxLjUgMi44NzUgMS41SDEzLjEyNUMxMy44ODQgMS41IDE0LjUgMi4xMTYgMTQuNSAyLjg3NVYxMy4xMjVDMTQuNSAxMy44ODQgMTMuODg0IDE0LjUgMTMuMTI1IDE0LjVIMi44NzVDMi4xMTYgMTQuNSAxLjUgMTMuODg0IDEuNSAxMy4xMjVWMi44NzVaTTMgM1YxM0gxM1YzSDNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeRectangleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeRectangle';
}

export default RefIcon;
