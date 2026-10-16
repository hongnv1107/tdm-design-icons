// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDiagramSymbolSortSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.132 0.317C7.636 -0.094 8.364 -0.094 8.869 0.317L8.973 0.411L15.589 7.027L15.683 7.132C16.094 7.636 16.094 8.364 15.683 8.868L15.589 8.973L8.973 15.589C8.47 16.092 7.672 16.123 7.132 15.683L7.028 15.589L0.411 8.973C-0.125 8.436 -0.125 7.564 0.411 7.027L7.028 0.411L7.132 0.317ZM8 14.438L13.689 8.75H2.312L8 14.438ZM2.312 7.25H13.689L8 1.561L2.312 7.25Z"/>
  </svg>
);

const aDSDiagramSymbolSortIconDefinition = svgToIconDefinition(
  aDSDiagramSymbolSortSvg,
  'ads-diagram-symbol-sort'
);

/**![ADSDiagramSymbolSort](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03LjEzMiAwLjMxN0M3LjYzNiAtMC4wOTQgOC4zNjQgLTAuMDk0IDguODY5IDAuMzE3TDguOTczIDAuNDExTDE1LjU4OSA3LjAyN0wxNS42ODMgNy4xMzJDMTYuMDk0IDcuNjM2IDE2LjA5NCA4LjM2NCAxNS42ODMgOC44NjhMMTUuNTg5IDguOTczTDguOTczIDE1LjU4OUM4LjQ3IDE2LjA5MiA3LjY3MiAxNi4xMjMgNy4xMzIgMTUuNjgzTDcuMDI4IDE1LjU4OUwwLjQxMSA4Ljk3M0MtMC4xMjUgOC40MzYgLTAuMTI1IDcuNTY0IDAuNDExIDcuMDI3TDcuMDI4IDAuNDExTDcuMTMyIDAuMzE3Wk04IDE0LjQzOEwxMy42ODkgOC43NUgyLjMxMkw4IDE0LjQzOFpNMi4zMTIgNy4yNUgxMy42ODlMOCAxLjU2MUwyLjMxMiA3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDiagramSymbolSortIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDiagramSymbolSort';
}

export default RefIcon;
