// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDeleteSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.75C5 0.336 5.336 0 5.75 0H10.25C10.664 0 11 0.336 11 0.75V2.5H14.5V4H13.5V14C13.5 15.105 12.605 16 11.5 16H4.5C3.395 16 2.5 15.105 2.5 14V4H1.5V2.5H5V0.75ZM6.5 2.5H9.5V1.5H6.5V2.5ZM4 4V14C4 14.276 4.224 14.5 4.5 14.5H11.5C11.776 14.5 12 14.276 12 14V4H4ZM5.75 13V5.5H7.25V13H5.75ZM8.75 13V5.5H10.25V13H8.75Z"/>
  </svg>
);

const aDSDeleteIconDefinition = svgToIconDefinition(
  aDSDeleteSvg,
  'ads-delete'
);

/**![ADSDelete](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMC43NUM1IDAuMzM2IDUuMzM2IDAgNS43NSAwSDEwLjI1QzEwLjY2NCAwIDExIDAuMzM2IDExIDAuNzVWMi41SDE0LjVWNEgxMy41VjE0QzEzLjUgMTUuMTA1IDEyLjYwNSAxNiAxMS41IDE2SDQuNUMzLjM5NSAxNiAyLjUgMTUuMTA1IDIuNSAxNFY0SDEuNVYyLjVINVYwLjc1Wk02LjUgMi41SDkuNVYxLjVINi41VjIuNVpNNCA0VjE0QzQgMTQuMjc2IDQuMjI0IDE0LjUgNC41IDE0LjVIMTEuNUMxMS43NzYgMTQuNSAxMiAxNC4yNzYgMTIgMTRWNEg0Wk01Ljc1IDEzVjUuNUg3LjI1VjEzSDUuNzVaTTguNzUgMTNWNS41SDEwLjI1VjEzSDguNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDeleteIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDelete';
}

export default RefIcon;
