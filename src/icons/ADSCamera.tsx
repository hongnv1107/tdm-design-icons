// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCameraSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.4 0.8C5.542 0.611 5.764 0.5 6 0.5H10C10.236 0.5 10.458 0.611 10.6 0.8L11.875 2.5H13.25C14.769 2.5 16 3.731 16 5.25V12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V5.25C0 3.731 1.231 2.5 2.75 2.5H4.125L5.4 0.8ZM6.375 2L5.1 3.7C4.958 3.889 4.736 4 4.5 4H2.75C2.06 4 1.5 4.56 1.5 5.25V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V5.25C14.5 4.56 13.94 4 13.25 4H11.5C11.264 4 11.042 3.889 10.9 3.7L9.625 2H6.375ZM8 6.5C7.034 6.5 6.25 7.284 6.25 8.25C6.25 9.217 7.034 10 8 10C8.967 10 9.75 9.217 9.75 8.25C9.75 7.284 8.967 6.5 8 6.5ZM4.75 8.25C4.75 6.455 6.205 5 8 5C9.795 5 11.25 6.455 11.25 8.25C11.25 10.045 9.795 11.5 8 11.5C6.205 11.5 4.75 10.045 4.75 8.25Z"/>
  </svg>
);

const aDSCameraIconDefinition = svgToIconDefinition(
  aDSCameraSvg,
  'ads-camera'
);

/**![ADSCamera](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuNCAwLjhDNS41NDIgMC42MTEgNS43NjQgMC41IDYgMC41SDEwQzEwLjIzNiAwLjUgMTAuNDU4IDAuNjExIDEwLjYgMC44TDExLjg3NSAyLjVIMTMuMjVDMTQuNzY5IDIuNSAxNiAzLjczMSAxNiA1LjI1VjEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyVjUuMjVDMCAzLjczMSAxLjIzMSAyLjUgMi43NSAyLjVINC4xMjVMNS40IDAuOFpNNi4zNzUgMkw1LjEgMy43QzQuOTU4IDMuODg5IDQuNzM2IDQgNC41IDRIMi43NUMyLjA2IDQgMS41IDQuNTYgMS41IDUuMjVWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjUuMjVDMTQuNSA0LjU2IDEzLjk0IDQgMTMuMjUgNEgxMS41QzExLjI2NCA0IDExLjA0MiAzLjg4OSAxMC45IDMuN0w5LjYyNSAySDYuMzc1Wk04IDYuNUM3LjAzNCA2LjUgNi4yNSA3LjI4NCA2LjI1IDguMjVDNi4yNSA5LjIxNyA3LjAzNCAxMCA4IDEwQzguOTY3IDEwIDkuNzUgOS4yMTcgOS43NSA4LjI1QzkuNzUgNy4yODQgOC45NjcgNi41IDggNi41Wk00Ljc1IDguMjVDNC43NSA2LjQ1NSA2LjIwNSA1IDggNUM5Ljc5NSA1IDExLjI1IDYuNDU1IDExLjI1IDguMjVDMTEuMjUgMTAuMDQ1IDkuNzk1IDExLjUgOCAxMS41QzYuMjA1IDExLjUgNC43NSAxMC4wNDUgNC43NSA4LjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCameraIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCamera';
}

export default RefIcon;
