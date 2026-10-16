// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSBoardsSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 3.5C1.724 3.5 1.5 3.724 1.5 4V10C1.5 10.276 1.724 10.5 2 10.5H3.833V3.5H2ZM5.333 3.5V10.5H7.667V3.5H5.333ZM9.167 3.5V10.5H11C11.276 10.5 11.5 10.276 11.5 10V4C11.5 3.724 11.276 3.5 11 3.5H9.167ZM0 4C0 2.895 0.895 2 2 2H11C12.105 2 13 2.895 13 4V10C13 11.105 12.105 12 11 12H2C0.895 12 0 11.105 0 10V4ZM14.5 11.75L14.5 7H16V11.75C16 13.545 14.545 15 12.75 15H5V13.5H12.75C13.717 13.5 14.5 12.717 14.5 11.75Z"/>
  </svg>
);

const aDSBoardsIconDefinition = svgToIconDefinition(
  aDSBoardsSvg,
  'ads-boards'
);

/**![ADSBoards](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMy41QzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWMTBDMS41IDEwLjI3NiAxLjcyNCAxMC41IDIgMTAuNUgzLjgzM1YzLjVIMlpNNS4zMzMgMy41VjEwLjVINy42NjdWMy41SDUuMzMzWk05LjE2NyAzLjVWMTAuNUgxMUMxMS4yNzYgMTAuNSAxMS41IDEwLjI3NiAxMS41IDEwVjRDMTEuNSAzLjcyNCAxMS4yNzYgMy41IDExIDMuNUg5LjE2N1pNMCA0QzAgMi44OTUgMC44OTUgMiAyIDJIMTFDMTIuMTA1IDIgMTMgMi44OTUgMTMgNFYxMEMxMyAxMS4xMDUgMTIuMTA1IDEyIDExIDEySDJDMC44OTUgMTIgMCAxMS4xMDUgMCAxMFY0Wk0xNC41IDExLjc1TDE0LjUgN0gxNlYxMS43NUMxNiAxMy41NDUgMTQuNTQ1IDE1IDEyLjc1IDE1SDVWMTMuNUgxMi43NUMxMy43MTcgMTMuNSAxNC41IDEyLjcxNyAxNC41IDExLjc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSBoardsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSBoards';
}

export default RefIcon;
