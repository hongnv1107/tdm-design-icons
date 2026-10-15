// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCommentAddSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.625 2C2.004 2 1.5 2.504 1.5 3.125V13.958L4.051 12.5H13.375C13.996 12.5 14.5 11.996 14.5 11.375V3.125C14.5 2.504 13.996 2 13.375 2H2.625ZM0 3.125C0 1.675 1.175 0.5 2.625 0.5H13.375C14.825 0.5 16 1.675 16 3.125V11.375C16 12.825 14.825 14 13.375 14H4.449L1.122 15.901C0.89 16.034 0.605 16.033 0.374 15.899C0.142 15.765 0 15.517 0 15.25V3.125ZM7.25 6.5V4.25H8.75V6.5H11V8H8.75V10.25H7.25V8H5V6.5H7.25Z"/>
  </svg>
);

const aDSCommentAddIconDefinition = svgToIconDefinition(
  aDSCommentAddSvg,
  'ads-comment-add'
);

/**![ADSCommentAdd](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIuNjI1IDJDMi4wMDQgMiAxLjUgMi41MDQgMS41IDMuMTI1VjEzLjk1OEw0LjA1MSAxMi41SDEzLjM3NUMxMy45OTYgMTIuNSAxNC41IDExLjk5NiAxNC41IDExLjM3NVYzLjEyNUMxNC41IDIuNTA0IDEzLjk5NiAyIDEzLjM3NSAySDIuNjI1Wk0wIDMuMTI1QzAgMS42NzUgMS4xNzUgMC41IDIuNjI1IDAuNUgxMy4zNzVDMTQuODI1IDAuNSAxNiAxLjY3NSAxNiAzLjEyNVYxMS4zNzVDMTYgMTIuODI1IDE0LjgyNSAxNCAxMy4zNzUgMTRINC40NDlMMS4xMjIgMTUuOTAxQzAuODkgMTYuMDM0IDAuNjA1IDE2LjAzMyAwLjM3NCAxNS44OTlDMC4xNDIgMTUuNzY1IDAgMTUuNTE3IDAgMTUuMjVWMy4xMjVaTTcuMjUgNi41VjQuMjVIOC43NVY2LjVIMTFWOEg4Ljc1VjEwLjI1SDcuMjVWOEg1VjYuNUg3LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCommentAddIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCommentAdd';
}

export default RefIcon;
