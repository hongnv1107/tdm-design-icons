// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeParallelogramSkewRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.146 2.374C4.352 1.847 4.86 1.5 5.426 1.5H14.584C15.552 1.5 16.217 2.474 15.864 3.376L11.854 13.626C11.647 14.153 11.139 14.5 10.573 14.5H1.415C0.447 14.5 -0.218 13.526 0.135 12.624L4.146 2.374ZM5.512 3L1.599 13H10.488L14.401 3H5.512Z"/>
  </svg>
);

const aDSShapeParallelogramSkewRightIconDefinition = svgToIconDefinition(
  aDSShapeParallelogramSkewRightSvg,
  'ads-shape-parallelogram-skew-right'
);

/**![ADSShapeParallelogramSkewRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNC4xNDYgMi4zNzRDNC4zNTIgMS44NDcgNC44NiAxLjUgNS40MjYgMS41SDE0LjU4NEMxNS41NTIgMS41IDE2LjIxNyAyLjQ3NCAxNS44NjQgMy4zNzZMMTEuODU0IDEzLjYyNkMxMS42NDcgMTQuMTUzIDExLjEzOSAxNC41IDEwLjU3MyAxNC41SDEuNDE1QzAuNDQ3IDE0LjUgLTAuMjE4IDEzLjUyNiAwLjEzNSAxMi42MjRMNC4xNDYgMi4zNzRaTTUuNTEyIDNMMS41OTkgMTNIMTAuNDg4TDE0LjQwMSAzSDUuNTEyWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeParallelogramSkewRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeParallelogramSkewRight';
}

export default RefIcon;
