// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramArrowheadManyUpRightSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.952 1.313L8.573 6.365L12.233 2.706L13.294 3.767L9.634 7.427L14.688 6.049L14.885 6.772L15.083 7.496L7.496 9.564L1.98 15.081L0.92 14.02L6.436 8.504L8.505 0.918L9.952 1.313Z"/>
  </svg>
);

const aDSDiagramArrowheadManyUpRightIconDefinition = svgToIconDefinition(
  aDSDiagramArrowheadManyUpRightSvg,
  'ads-diagram-arrowhead-many-up-right'
);

/**![ADSDiagramArrowheadManyUpRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik05Ljk1MiAxLjMxM0w4LjU3MyA2LjM2NUwxMi4yMzMgMi43MDZMMTMuMjk0IDMuNzY3TDkuNjM0IDcuNDI3TDE0LjY4OCA2LjA0OUwxNC44ODUgNi43NzJMMTUuMDgzIDcuNDk2TDcuNDk2IDkuNTY0TDEuOTggMTUuMDgxTDAuOTIgMTQuMDJMNi40MzYgOC41MDRMOC41MDUgMC45MThMOS45NTIgMS4zMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramArrowheadManyUpRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramArrowheadManyUpRight';
}

export default RefIcon;
