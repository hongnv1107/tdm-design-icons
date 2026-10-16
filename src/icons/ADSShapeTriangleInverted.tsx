// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeTriangleInvertedSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.8 14.143C7.325 15.081 8.675 15.081 9.2 14.143L15.134 3.547C15.647 2.631 14.984 1.5 13.934 1.5H2.066C1.016 1.5 0.353 2.631 0.867 3.547L6.8 14.143ZM8 13.215L2.28 3H13.721L8 13.215Z"/>
  </svg>
);

const aDSShapeTriangleInvertedIconDefinition = svgToIconDefinition(
  aDSShapeTriangleInvertedSvg,
  'ads-shape-triangle-inverted'
);

/**![ADSShapeTriangleInverted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi44IDE0LjE0M0M3LjMyNSAxNS4wODEgOC42NzUgMTUuMDgxIDkuMiAxNC4xNDNMMTUuMTM0IDMuNTQ3QzE1LjY0NyAyLjYzMSAxNC45ODQgMS41IDEzLjkzNCAxLjVIMi4wNjZDMS4wMTYgMS41IDAuMzUzIDIuNjMxIDAuODY3IDMuNTQ3TDYuOCAxNC4xNDNaTTggMTMuMjE1TDIuMjggM0gxMy43MjFMOCAxMy4yMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeTriangleInvertedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeTriangleInverted';
}

export default RefIcon;
