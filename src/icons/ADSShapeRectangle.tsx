// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShapeRectangleSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.875C1.5 2.116 2.116 1.5 2.875 1.5H13.125C13.884 1.5 14.5 2.116 14.5 2.875V13.125C14.5 13.884 13.884 14.5 13.125 14.5H2.875C2.116 14.5 1.5 13.884 1.5 13.125V2.875ZM3 3V13H13V3H3Z"/>
  </svg>
);

const aDSShapeRectangleIconDefinition = svgToIconDefinition(
  aDSShapeRectangleSvg,
  'ads-shape-rectangle'
);

/**![ADSShapeRectangle](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSAyLjg3NUMxLjUgMi4xMTYgMi4xMTYgMS41IDIuODc1IDEuNUgxMy4xMjVDMTMuODg0IDEuNSAxNC41IDIuMTE2IDE0LjUgMi44NzVWMTMuMTI1QzE0LjUgMTMuODg0IDEzLjg4NCAxNC41IDEzLjEyNSAxNC41SDIuODc1QzIuMTE2IDE0LjUgMS41IDEzLjg4NCAxLjUgMTMuMTI1VjIuODc1Wk0zIDNWMTNIMTNWM0gzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShapeRectangleIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShapeRectangle';
}

export default RefIcon;
