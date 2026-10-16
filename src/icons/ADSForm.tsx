// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFormSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 14.5H13.5V13H2.5V14.5ZM7 9V10.5H1V9H7ZM2.5 5.5H13.5V4H2.5V5.5ZM7 0V1.5H1V0H7ZM15 14.625C15 15.384 14.384 16 13.625 16H2.375C1.616 16 1 15.384 1 14.625V12.875C1 12.116 1.616 11.5 2.375 11.5H13.625C14.384 11.5 15 12.116 15 12.875V14.625ZM15 5.625C15 6.384 14.384 7 13.625 7H2.375C1.616 7 1 6.384 1 5.625V3.875C1 3.116 1.616 2.5 2.375 2.5H13.625C14.384 2.5 15 3.116 15 3.875V5.625Z"/>
  </svg>
);

const aDSFormIconDefinition = svgToIconDefinition(
  aDSFormSvg,
  'ads-form'
);

/**![ADSForm](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMi41IDE0LjVIMTMuNVYxM0gyLjVWMTQuNVpNNyA5VjEwLjVIMVY5SDdaTTIuNSA1LjVIMTMuNVY0SDIuNVY1LjVaTTcgMFYxLjVIMVYwSDdaTTE1IDE0LjYyNUMxNSAxNS4zODQgMTQuMzg0IDE2IDEzLjYyNSAxNkgyLjM3NUMxLjYxNiAxNiAxIDE1LjM4NCAxIDE0LjYyNVYxMi44NzVDMSAxMi4xMTYgMS42MTYgMTEuNSAyLjM3NSAxMS41SDEzLjYyNUMxNC4zODQgMTEuNSAxNSAxMi4xMTYgMTUgMTIuODc1VjE0LjYyNVpNMTUgNS42MjVDMTUgNi4zODQgMTQuMzg0IDcgMTMuNjI1IDdIMi4zNzVDMS42MTYgNyAxIDYuMzg0IDEgNS42MjVWMy44NzVDMSAzLjExNiAxLjYxNiAyLjUgMi4zNzUgMi41SDEzLjYyNUMxNC4zODQgMi41IDE1IDMuMTE2IDE1IDMuODc1VjUuNjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFormIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSForm';
}

export default RefIcon;
