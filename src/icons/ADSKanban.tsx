// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSKanbanSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.25 13.5H14.5V2.5H13.25V13.5ZM1.5 11.5H2.75V2.5H1.5V11.5ZM7.25 9.5H8.75V2.5H7.25V9.5ZM4.25 11.625C4.25 12.384 3.634 13 2.875 13H1.375C0.616 13 0 12.384 0 11.625V2.375C0 1.616 0.616 1 1.375 1H2.875C3.634 1 4.25 1.616 4.25 2.375V11.625ZM10.25 9.625C10.25 10.384 9.634 11 8.875 11H7.125C6.366 11 5.75 10.384 5.75 9.625V2.375C5.75 1.616 6.366 1 7.125 1H8.875C9.634 1 10.25 1.616 10.25 2.375V9.625ZM16 13.625C16 14.384 15.384 15 14.625 15H13.125C12.366 15 11.75 14.384 11.75 13.625V2.375C11.75 1.616 12.366 1 13.125 1H14.625C15.384 1 16 1.616 16 2.375V13.625Z"/>
  </svg>
);

const aDSKanbanIconDefinition = svgToIconDefinition(
  aDSKanbanSvg,
  'ads-kanban'
);

/**![ADSKanban](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuMjUgMTMuNUgxNC41VjIuNUgxMy4yNVYxMy41Wk0xLjUgMTEuNUgyLjc1VjIuNUgxLjVWMTEuNVpNNy4yNSA5LjVIOC43NVYyLjVINy4yNVY5LjVaTTQuMjUgMTEuNjI1QzQuMjUgMTIuMzg0IDMuNjM0IDEzIDIuODc1IDEzSDEuMzc1QzAuNjE2IDEzIDAgMTIuMzg0IDAgMTEuNjI1VjIuMzc1QzAgMS42MTYgMC42MTYgMSAxLjM3NSAxSDIuODc1QzMuNjM0IDEgNC4yNSAxLjYxNiA0LjI1IDIuMzc1VjExLjYyNVpNMTAuMjUgOS42MjVDMTAuMjUgMTAuMzg0IDkuNjM0IDExIDguODc1IDExSDcuMTI1QzYuMzY2IDExIDUuNzUgMTAuMzg0IDUuNzUgOS42MjVWMi4zNzVDNS43NSAxLjYxNiA2LjM2NiAxIDcuMTI1IDFIOC44NzVDOS42MzQgMSAxMC4yNSAxLjYxNiAxMC4yNSAyLjM3NVY5LjYyNVpNMTYgMTMuNjI1QzE2IDE0LjM4NCAxNS4zODQgMTUgMTQuNjI1IDE1SDEzLjEyNUMxMi4zNjYgMTUgMTEuNzUgMTQuMzg0IDExLjc1IDEzLjYyNVYyLjM3NUMxMS43NSAxLjYxNiAxMi4zNjYgMSAxMy4xMjUgMUgxNC42MjVDMTUuMzg0IDEgMTYgMS42MTYgMTYgMi4zNzVWMTMuNjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSKanbanIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSKanban';
}

export default RefIcon;
