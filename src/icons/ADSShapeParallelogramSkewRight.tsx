// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeParallelogramSkewRightSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShapeParallelogramSkewRight](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQuMTQ2IDIuMzc0QzQuMzUyIDEuODQ3IDQuODYgMS41IDUuNDI2IDEuNUgxNC41ODRDMTUuNTUyIDEuNSAxNi4yMTcgMi40NzQgMTUuODY0IDMuMzc2TDExLjg1NCAxMy42MjZDMTEuNjQ3IDE0LjE1MyAxMS4xMzkgMTQuNSAxMC41NzMgMTQuNUgxLjQxNUMwLjQ0NyAxNC41IC0wLjIxOCAxMy41MjYgMC4xMzUgMTIuNjI0TDQuMTQ2IDIuMzc0Wk01LjUxMiAzTDEuNTk5IDEzSDEwLjQ4OEwxNC40MDEgM0g1LjUxMloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeParallelogramSkewRightIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeParallelogramSkewRight';
}

export default RefIcon;
