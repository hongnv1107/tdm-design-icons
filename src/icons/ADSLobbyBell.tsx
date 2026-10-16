// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSLobbyBellSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 1H10V2.5H8.75V4.25H9.67C12.09 4.25 14.124 6.07 14.391 8.475L14.745 11.667C14.769 11.879 14.701 12.091 14.559 12.25C14.417 12.409 14.213 12.5 14 12.5H2C1.787 12.5 1.583 12.409 1.441 12.25C1.299 12.091 1.231 11.879 1.255 11.667L1.609 8.475C1.877 6.07 3.91 4.25 6.33 4.25H7.25V2.5H6V1ZM6.33 5.75C4.674 5.75 3.283 6.995 3.1 8.641L2.838 11H13.162L12.9 8.641C12.717 6.995 11.326 5.75 9.67 5.75H6.33ZM15 13.5V15H1V13.5H15Z"/>
  </svg>
);

const aDSLobbyBellIconDefinition = svgToIconDefinition(
  aDSLobbyBellSvg,
  'ads-lobby-bell'
);

/**![ADSLobbyBell](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMUgxMFYyLjVIOC43NVY0LjI1SDkuNjdDMTIuMDkgNC4yNSAxNC4xMjQgNi4wNyAxNC4zOTEgOC40NzVMMTQuNzQ1IDExLjY2N0MxNC43NjkgMTEuODc5IDE0LjcwMSAxMi4wOTEgMTQuNTU5IDEyLjI1QzE0LjQxNyAxMi40MDkgMTQuMjEzIDEyLjUgMTQgMTIuNUgyQzEuNzg3IDEyLjUgMS41ODMgMTIuNDA5IDEuNDQxIDEyLjI1QzEuMjk5IDEyLjA5MSAxLjIzMSAxMS44NzkgMS4yNTUgMTEuNjY3TDEuNjA5IDguNDc1QzEuODc3IDYuMDcgMy45MSA0LjI1IDYuMzMgNC4yNUg3LjI1VjIuNUg2VjFaTTYuMzMgNS43NUM0LjY3NCA1Ljc1IDMuMjgzIDYuOTk1IDMuMSA4LjY0MUwyLjgzOCAxMUgxMy4xNjJMMTIuOSA4LjY0MUMxMi43MTcgNi45OTUgMTEuMzI2IDUuNzUgOS42NyA1Ljc1SDYuMzNaTTE1IDEzLjVWMTVIMVYxMy41SDE1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSLobbyBellIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSLobbyBell';
}

export default RefIcon;
