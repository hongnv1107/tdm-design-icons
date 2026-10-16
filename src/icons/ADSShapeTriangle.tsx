// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeTriangleSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8 1.857C7.325 0.92 8.675 0.92 9.2 1.857L15.134 12.453C15.647 13.37 14.984 14.5 13.934 14.5H2.066C1.016 14.5 0.353 13.37 0.867 12.453L6.8 1.857ZM8 2.785L2.28 13H13.721L8 2.785Z"/>
  </svg>
);

const aDSShapeTriangleIconDefinition = svgToIconDefinition(
  aDSShapeTriangleSvg,
  'ads-shape-triangle'
);

/**![ADSShapeTriangle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi44IDEuODU3QzcuMzI1IDAuOTIgOC42NzUgMC45MiA5LjIgMS44NTdMMTUuMTM0IDEyLjQ1M0MxNS42NDcgMTMuMzcgMTQuOTg0IDE0LjUgMTMuOTM0IDE0LjVIMi4wNjZDMS4wMTYgMTQuNSAwLjM1MyAxMy4zNyAwLjg2NyAxMi40NTNMNi44IDEuODU3Wk04IDIuNzg1TDIuMjggMTNIMTMuNzIxTDggMi43ODVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeTriangleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeTriangle';
}

export default RefIcon;
