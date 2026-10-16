// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnAddLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.375C16 1.616 15.384 1 14.625 1H8.875C8.116 1 7.5 1.616 7.5 2.375V13.625C7.5 14.384 8.116 15 8.875 15H14.625C15.384 15 16 14.384 16 13.625V2.375ZM14.5 2.5V13.5H12.5V2.5H14.5ZM11 2.5V13.5H9V2.5H11ZM3.75 8.75V11H2.25V8.75H0V7.25H2.25V5H3.75V7.25H6V8.75H3.75Z"/>
  </svg>
);

const aDSTableColumnAddLeftIconDefinition = svgToIconDefinition(
  aDSTableColumnAddLeftSvg,
  'ads-table-column-add-left'
);

/**![ADSTableColumnAddLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTYgMi4zNzVDMTYgMS42MTYgMTUuMzg0IDEgMTQuNjI1IDFIOC44NzVDOC4xMTYgMSA3LjUgMS42MTYgNy41IDIuMzc1VjEzLjYyNUM3LjUgMTQuMzg0IDguMTE2IDE1IDguODc1IDE1SDE0LjYyNUMxNS4zODQgMTUgMTYgMTQuMzg0IDE2IDEzLjYyNVYyLjM3NVpNMTQuNSAyLjVWMTMuNUgxMi41VjIuNUgxNC41Wk0xMSAyLjVWMTMuNUg5VjIuNUgxMVpNMy43NSA4Ljc1VjExSDIuMjVWOC43NUgwVjcuMjVIMi4yNVY1SDMuNzVWNy4yNUg2VjguNzVIMy43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnAddLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnAddLeft';
}

export default RefIcon;
