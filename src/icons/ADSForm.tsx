// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFormSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
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

/**![ADSForm](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0yLjUgMTQuNUgxMy41VjEzSDIuNVYxNC41Wk03IDlWMTAuNUgxVjlIN1pNMi41IDUuNUgxMy41VjRIMi41VjUuNVpNNyAwVjEuNUgxVjBIN1pNMTUgMTQuNjI1QzE1IDE1LjM4NCAxNC4zODQgMTYgMTMuNjI1IDE2SDIuMzc1QzEuNjE2IDE2IDEgMTUuMzg0IDEgMTQuNjI1VjEyLjg3NUMxIDEyLjExNiAxLjYxNiAxMS41IDIuMzc1IDExLjVIMTMuNjI1QzE0LjM4NCAxMS41IDE1IDEyLjExNiAxNSAxMi44NzVWMTQuNjI1Wk0xNSA1LjYyNUMxNSA2LjM4NCAxNC4zODQgNyAxMy42MjUgN0gyLjM3NUMxLjYxNiA3IDEgNi4zODQgMSA1LjYyNVYzLjg3NUMxIDMuMTE2IDEuNjE2IDIuNSAyLjM3NSAyLjVIMTMuNjI1QzE0LjM4NCAyLjUgMTUgMy4xMTYgMTUgMy44NzVWNS42MjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFormIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSForm';
}

export default RefIcon;
