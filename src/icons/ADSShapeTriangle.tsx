// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeTriangleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShapeTriangle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOCAxLjg1N0M3LjMyNSAwLjkyIDguNjc1IDAuOTIgOS4yIDEuODU3TDE1LjEzNCAxMi40NTNDMTUuNjQ3IDEzLjM3IDE0Ljk4NCAxNC41IDEzLjkzNCAxNC41SDIuMDY2QzEuMDE2IDE0LjUgMC4zNTMgMTMuMzcgMC44NjcgMTIuNDUzTDYuOCAxLjg1N1pNOCAyLjc4NUwyLjI4IDEzSDEzLjcyMUw4IDIuNzg1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeTriangleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeTriangle';
}

export default RefIcon;
