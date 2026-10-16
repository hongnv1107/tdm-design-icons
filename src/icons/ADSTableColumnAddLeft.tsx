// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTableColumnAddLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSTableColumnAddLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2IDIuMzc1QzE2IDEuNjE2IDE1LjM4NCAxIDE0LjYyNSAxSDguODc1QzguMTE2IDEgNy41IDEuNjE2IDcuNSAyLjM3NVYxMy42MjVDNy41IDE0LjM4NCA4LjExNiAxNSA4Ljg3NSAxNUgxNC42MjVDMTUuMzg0IDE1IDE2IDE0LjM4NCAxNiAxMy42MjVWMi4zNzVaTTE0LjUgMi41VjEzLjVIMTIuNVYyLjVIMTQuNVpNMTEgMi41VjEzLjVIOVYyLjVIMTFaTTMuNzUgOC43NVYxMUgyLjI1VjguNzVIMFY3LjI1SDIuMjVWNUgzLjc1VjcuMjVINlY4Ljc1SDMuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTableColumnAddLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTableColumnAddLeft';
}

export default RefIcon;
