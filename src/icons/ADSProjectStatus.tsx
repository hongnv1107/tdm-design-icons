// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSProjectStatusSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.625C3.5 1.175 4.675 0 6.125 0H9.875C11.325 0 12.5 1.175 12.5 2.625V11.375C12.5 12.825 11.325 14 9.875 14H8.75V16H7.25L7.25 14H6.125C4.675 14 3.5 12.825 3.5 11.375V2.625ZM6.125 1.5C5.504 1.5 5 2.004 5 2.625V11.375C5 11.996 5.504 12.5 6.125 12.5H9.875C10.496 12.5 11 11.996 11 11.375V2.625C11 2.004 10.496 1.5 9.875 1.5H6.125ZM6.5 4.75C6.5 3.922 7.172 3.25 8 3.25C8.828 3.25 9.5 3.922 9.5 4.75C9.5 5.578 8.828 6.25 8 6.25C7.172 6.25 6.5 5.578 6.5 4.75ZM6.5 9.25C6.5 8.422 7.172 7.75 8 7.75C8.828 7.75 9.5 8.422 9.5 9.25C9.5 10.078 8.828 10.75 8 10.75C7.172 10.75 6.5 10.078 6.5 9.25Z"/>
  </svg>
);

const aDSProjectStatusIconDefinition = svgToIconDefinition(
  aDSProjectStatusSvg,
  'ads-project-status'
);

/**![ADSProjectStatus](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAyLjYyNUMzLjUgMS4xNzUgNC42NzUgMCA2LjEyNSAwSDkuODc1QzExLjMyNSAwIDEyLjUgMS4xNzUgMTIuNSAyLjYyNVYxMS4zNzVDMTIuNSAxMi44MjUgMTEuMzI1IDE0IDkuODc1IDE0SDguNzVWMTZINy4yNUw3LjI1IDE0SDYuMTI1QzQuNjc1IDE0IDMuNSAxMi44MjUgMy41IDExLjM3NVYyLjYyNVpNNi4xMjUgMS41QzUuNTA0IDEuNSA1IDIuMDA0IDUgMi42MjVWMTEuMzc1QzUgMTEuOTk2IDUuNTA0IDEyLjUgNi4xMjUgMTIuNUg5Ljg3NUMxMC40OTYgMTIuNSAxMSAxMS45OTYgMTEgMTEuMzc1VjIuNjI1QzExIDIuMDA0IDEwLjQ5NiAxLjUgOS44NzUgMS41SDYuMTI1Wk02LjUgNC43NUM2LjUgMy45MjIgNy4xNzIgMy4yNSA4IDMuMjVDOC44MjggMy4yNSA5LjUgMy45MjIgOS41IDQuNzVDOS41IDUuNTc4IDguODI4IDYuMjUgOCA2LjI1QzcuMTcyIDYuMjUgNi41IDUuNTc4IDYuNSA0Ljc1Wk02LjUgOS4yNUM2LjUgOC40MjIgNy4xNzIgNy43NSA4IDcuNzVDOC44MjggNy43NSA5LjUgOC40MjIgOS41IDkuMjVDOS41IDEwLjA3OCA4LjgyOCAxMC43NSA4IDEwLjc1QzcuMTcyIDEwLjc1IDYuNSAxMC4wNzggNi41IDkuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSProjectStatusIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSProjectStatus';
}

export default RefIcon;
