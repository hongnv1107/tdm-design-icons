// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeParallelogramSkewLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.854 2.374C11.647 1.847 11.139 1.5 10.573 1.5H1.415C0.447 1.5 -0.218 2.474 0.135 3.376L4.146 13.626C4.352 14.153 4.86 14.5 5.426 14.5H14.584C15.552 14.5 16.217 13.526 15.864 12.624L11.854 2.374ZM10.488 3L14.401 13H5.512L1.599 3H10.488Z"/>
  </svg>
);

const aDSShapeParallelogramSkewLeftIconDefinition = svgToIconDefinition(
  aDSShapeParallelogramSkewLeftSvg,
  'ads-shape-parallelogram-skew-left'
);

/**![ADSShapeParallelogramSkewLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuODU0IDIuMzc0QzExLjY0NyAxLjg0NyAxMS4xMzkgMS41IDEwLjU3MyAxLjVIMS40MTVDMC40NDcgMS41IC0wLjIxOCAyLjQ3NCAwLjEzNSAzLjM3Nkw0LjE0NiAxMy42MjZDNC4zNTIgMTQuMTUzIDQuODYgMTQuNSA1LjQyNiAxNC41SDE0LjU4NEMxNS41NTIgMTQuNSAxNi4yMTcgMTMuNTI2IDE1Ljg2NCAxMi42MjRMMTEuODU0IDIuMzc0Wk0xMC40ODggM0wxNC40MDEgMTNINS41MTJMMS41OTkgM0gxMC40ODhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeParallelogramSkewLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeParallelogramSkewLeft';
}

export default RefIcon;
