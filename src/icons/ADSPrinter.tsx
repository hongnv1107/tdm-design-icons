// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPrinterSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0.75C3 0.336 3.336 0 3.75 0H12.25C12.664 0 13 0.336 13 0.75V4H14C15.105 4 16 4.895 16 6V11C16 12.105 15.105 13 14 13H13V15.25C13 15.664 12.664 16 12.25 16H3.75C3.336 16 3 15.664 3 15.25V13H2C0.895 13 0 12.105 0 11V6C0 4.895 0.895 4 2 4H3V0.75ZM4.5 4H11.5V1.5H4.5V4ZM3 11.5V10.25C3 9.836 3.336 9.5 3.75 9.5H12.25C12.664 9.5 13 9.836 13 10.25V11.5H14C14.276 11.5 14.5 11.276 14.5 11V6C14.5 5.724 14.276 5.5 14 5.5H2C1.724 5.5 1.5 5.724 1.5 6V11C1.5 11.276 1.724 11.5 2 11.5H3ZM11 7H13V8.5H11V7ZM4.5 11V14.5H11.5V11H4.5Z"/>
  </svg>
);

const aDSPrinterIconDefinition = svgToIconDefinition(
  aDSPrinterSvg,
  'ads-printer'
);

/**![ADSPrinter](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgMC43NUMzIDAuMzM2IDMuMzM2IDAgMy43NSAwSDEyLjI1QzEyLjY2NCAwIDEzIDAuMzM2IDEzIDAuNzVWNEgxNEMxNS4xMDUgNCAxNiA0Ljg5NSAxNiA2VjExQzE2IDEyLjEwNSAxNS4xMDUgMTMgMTQgMTNIMTNWMTUuMjVDMTMgMTUuNjY0IDEyLjY2NCAxNiAxMi4yNSAxNkgzLjc1QzMuMzM2IDE2IDMgMTUuNjY0IDMgMTUuMjVWMTNIMkMwLjg5NSAxMyAwIDEyLjEwNSAwIDExVjZDMCA0Ljg5NSAwLjg5NSA0IDIgNEgzVjAuNzVaTTQuNSA0SDExLjVWMS41SDQuNVY0Wk0zIDExLjVWMTAuMjVDMyA5LjgzNiAzLjMzNiA5LjUgMy43NSA5LjVIMTIuMjVDMTIuNjY0IDkuNSAxMyA5LjgzNiAxMyAxMC4yNVYxMS41SDE0QzE0LjI3NiAxMS41IDE0LjUgMTEuMjc2IDE0LjUgMTFWNkMxNC41IDUuNzI0IDE0LjI3NiA1LjUgMTQgNS41SDJDMS43MjQgNS41IDEuNSA1LjcyNCAxLjUgNlYxMUMxLjUgMTEuMjc2IDEuNzI0IDExLjUgMiAxMS41SDNaTTExIDdIMTNWOC41SDExVjdaTTQuNSAxMVYxNC41SDExLjVWMTFINC41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPrinterIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPrinter';
}

export default RefIcon;
