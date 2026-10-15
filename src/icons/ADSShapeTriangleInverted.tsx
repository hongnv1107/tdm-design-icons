// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeTriangleInvertedSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSShapeTriangleInverted](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuOCAxNC4xNDNDNy4zMjUgMTUuMDgxIDguNjc1IDE1LjA4MSA5LjIgMTQuMTQzTDE1LjEzNCAzLjU0N0MxNS42NDcgMi42MzEgMTQuOTg0IDEuNSAxMy45MzQgMS41SDIuMDY2QzEuMDE2IDEuNSAwLjM1MyAyLjYzMSAwLjg2NyAzLjU0N0w2LjggMTQuMTQzWk04IDEzLjIxNUwyLjI4IDNIMTMuNzIxTDggMTMuMjE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeTriangleInvertedIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeTriangleInverted';
}

export default RefIcon;
