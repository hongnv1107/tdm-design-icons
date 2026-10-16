// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSKanbanSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSKanban](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy4yNSAxMy41SDE0LjVWMi41SDEzLjI1VjEzLjVaTTEuNSAxMS41SDIuNzVWMi41SDEuNVYxMS41Wk03LjI1IDkuNUg4Ljc1VjIuNUg3LjI1VjkuNVpNNC4yNSAxMS42MjVDNC4yNSAxMi4zODQgMy42MzQgMTMgMi44NzUgMTNIMS4zNzVDMC42MTYgMTMgMCAxMi4zODQgMCAxMS42MjVWMi4zNzVDMCAxLjYxNiAwLjYxNiAxIDEuMzc1IDFIMi44NzVDMy42MzQgMSA0LjI1IDEuNjE2IDQuMjUgMi4zNzVWMTEuNjI1Wk0xMC4yNSA5LjYyNUMxMC4yNSAxMC4zODQgOS42MzQgMTEgOC44NzUgMTFINy4xMjVDNi4zNjYgMTEgNS43NSAxMC4zODQgNS43NSA5LjYyNVYyLjM3NUM1Ljc1IDEuNjE2IDYuMzY2IDEgNy4xMjUgMUg4Ljg3NUM5LjYzNCAxIDEwLjI1IDEuNjE2IDEwLjI1IDIuMzc1VjkuNjI1Wk0xNiAxMy42MjVDMTYgMTQuMzg0IDE1LjM4NCAxNSAxNC42MjUgMTVIMTMuMTI1QzEyLjM2NiAxNSAxMS43NSAxNC4zODQgMTEuNzUgMTMuNjI1VjIuMzc1QzExLjc1IDEuNjE2IDEyLjM2NiAxIDEzLjEyNSAxSDE0LjYyNUMxNS4zODQgMSAxNiAxLjYxNiAxNiAyLjM3NVYxMy42MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSKanbanIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSKanban';
}

export default RefIcon;
