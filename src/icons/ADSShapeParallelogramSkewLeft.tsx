// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeParallelogramSkewLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShapeParallelogramSkewLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjg1NCAyLjM3NEMxMS42NDcgMS44NDcgMTEuMTM5IDEuNSAxMC41NzMgMS41SDEuNDE1QzAuNDQ3IDEuNSAtMC4yMTggMi40NzQgMC4xMzUgMy4zNzZMNC4xNDYgMTMuNjI2QzQuMzUyIDE0LjE1MyA0Ljg2IDE0LjUgNS40MjYgMTQuNUgxNC41ODRDMTUuNTUyIDE0LjUgMTYuMjE3IDEzLjUyNiAxNS44NjQgMTIuNjI0TDExLjg1NCAyLjM3NFpNMTAuNDg4IDNMMTQuNDAxIDEzSDUuNTEyTDEuNTk5IDNIMTAuNDg4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeParallelogramSkewLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeParallelogramSkewLeft';
}

export default RefIcon;
