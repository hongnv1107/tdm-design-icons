// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFieldAlertSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9.5L7.25 3H8.75V9.5H7.25ZM2 6C1.724 6 1.5 6.224 1.5 6.5V9.5C1.5 9.776 1.724 10 2 10H4.5V11.5H2C0.895 11.5 0 10.605 0 9.5V6.5C0 5.395 0.895 4.5 2 4.5H4.5V6H2ZM14 6H11.5V4.5H14C15.105 4.5 16 5.395 16 6.5V9.5C16 10.605 15.105 11.5 14 11.5H11.5V10H14C14.276 10 14.5 9.776 14.5 9.5V6.5C14.5 6.224 14.276 6 14 6Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8.552 13 9 12.552 9 12C9 11.448 8.552 11 8 11C7.448 11 7 11.448 7 12C7 12.552 7.448 13 8 13Z"/>
  </svg>
);

const aDSFieldAlertIconDefinition = svgToIconDefinition(
  aDSFieldAlertSvg,
  'ads-field-alert'
);

/**![ADSFieldAlert](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjUgOS41TDcuMjUgM0g4Ljc1VjkuNUg3LjI1Wk0yIDZDMS43MjQgNiAxLjUgNi4yMjQgMS41IDYuNVY5LjVDMS41IDkuNzc2IDEuNzI0IDEwIDIgMTBINC41VjExLjVIMkMwLjg5NSAxMS41IDAgMTAuNjA1IDAgOS41VjYuNUMwIDUuMzk1IDAuODk1IDQuNSAyIDQuNUg0LjVWNkgyWk0xNCA2SDExLjVWNC41SDE0QzE1LjEwNSA0LjUgMTYgNS4zOTUgMTYgNi41VjkuNUMxNiAxMC42MDUgMTUuMTA1IDExLjUgMTQgMTEuNUgxMS41VjEwSDE0QzE0LjI3NiAxMCAxNC41IDkuNzc2IDE0LjUgOS41VjYuNUMxNC41IDYuMjI0IDE0LjI3NiA2IDE0IDZaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEzQzguNTUyIDEzIDkgMTIuNTUyIDkgMTJDOSAxMS40NDggOC41NTIgMTEgOCAxMUM3LjQ0OCAxMSA3IDExLjQ0OCA3IDEyQzcgMTIuNTUyIDcuNDQ4IDEzIDggMTNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFieldAlertIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFieldAlert';
}

export default RefIcon;
