// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSWorkItemsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.5 4C11.5 3.724 11.276 3.5 11 3.5H2C1.724 3.5 1.5 3.724 1.5 4V10C1.5 10.276 1.724 10.5 2 10.5H11C11.276 10.5 11.5 10.276 11.5 10V4ZM9.448 5.608L6.281 9.358C6.139 9.527 5.929 9.625 5.708 9.625C5.515 9.625 5.33 9.551 5.191 9.419L5.136 9.358L3.552 7.483L4.698 6.517L5.708 7.713L8.302 4.642L9.448 5.608ZM13 10C13 11.105 12.105 12 11 12H2C0.895 12 0 11.105 0 10V4C0 2.895 0.895 2 2 2H11C12.105 2 13 2.895 13 4V10Z"/><path d="M14.5 11.75V7H16V11.75C16 13.545 14.545 15 12.75 15H5V13.5H12.75C13.717 13.5 14.5 12.717 14.5 11.75Z"/>
  </svg>
);

const aDSWorkItemsIconDefinition = svgToIconDefinition(
  aDSWorkItemsSvg,
  'ads-work-items'
);

/**![ADSWorkItems](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTEuNSA0QzExLjUgMy43MjQgMTEuMjc2IDMuNSAxMSAzLjVIMkMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjEwQzEuNSAxMC4yNzYgMS43MjQgMTAuNSAyIDEwLjVIMTFDMTEuMjc2IDEwLjUgMTEuNSAxMC4yNzYgMTEuNSAxMFY0Wk05LjQ0OCA1LjYwOEw2LjI4MSA5LjM1OEM2LjEzOSA5LjUyNyA1LjkyOSA5LjYyNSA1LjcwOCA5LjYyNUM1LjUxNSA5LjYyNSA1LjMzIDkuNTUxIDUuMTkxIDkuNDE5TDUuMTM2IDkuMzU4TDMuNTUyIDcuNDgzTDQuNjk4IDYuNTE3TDUuNzA4IDcuNzEzTDguMzAyIDQuNjQyTDkuNDQ4IDUuNjA4Wk0xMyAxMEMxMyAxMS4xMDUgMTIuMTA1IDEyIDExIDEySDJDMC44OTUgMTIgMCAxMS4xMDUgMCAxMFY0QzAgMi44OTUgMC44OTUgMiAyIDJIMTFDMTIuMTA1IDIgMTMgMi44OTUgMTMgNFYxMFoiLz48cGF0aCBkPSJNMTQuNSAxMS43NVY3SDE2VjExLjc1QzE2IDEzLjU0NSAxNC41NDUgMTUgMTIuNzUgMTVINVYxMy41SDEyLjc1QzEzLjcxNyAxMy41IDE0LjUgMTIuNzE3IDE0LjUgMTEuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSWorkItemsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSWorkItems';
}

export default RefIcon;
