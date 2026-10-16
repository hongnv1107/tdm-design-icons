// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSRepeatSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.78 3.72L5.78 0.72L4.72 1.78L6.439 3.5L4.5 3.5C2.015 3.5 0 5.515 0 8C0 10.485 2.015 12.5 4.5 12.5H5.5V11H4.5C2.843 11 1.5 9.657 1.5 8C1.5 6.343 2.843 5 4.5 5L6.439 5L4.72 6.72L5.78 7.78L8.78 4.78C8.921 4.64 9 4.449 9 4.25C9 4.051 8.921 3.86 8.78 3.72Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 5C13.157 5 14.5 6.343 14.5 8C14.5 9.657 13.157 11 11.5 11H9.561L11.28 9.28L10.22 8.22L7.22 11.22C6.927 11.513 6.927 11.987 7.22 12.28L10.22 15.28L11.28 14.22L9.561 12.5H11.5C13.985 12.5 16 10.485 16 8C16 5.515 13.985 3.5 11.5 3.5H10.5V5H11.5Z"/>
  </svg>
);

const aDSRepeatIconDefinition = svgToIconDefinition(
  aDSRepeatSvg,
  'ads-repeat'
);

/**![ADSRepeat](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzggMy43Mkw1Ljc4IDAuNzJMNC43MiAxLjc4TDYuNDM5IDMuNUw0LjUgMy41QzIuMDE1IDMuNSAwIDUuNTE1IDAgOEMwIDEwLjQ4NSAyLjAxNSAxMi41IDQuNSAxMi41SDUuNVYxMUg0LjVDMi44NDMgMTEgMS41IDkuNjU3IDEuNSA4QzEuNSA2LjM0MyAyLjg0MyA1IDQuNSA1TDYuNDM5IDVMNC43MiA2LjcyTDUuNzggNy43OEw4Ljc4IDQuNzhDOC45MjEgNC42NCA5IDQuNDQ5IDkgNC4yNUM5IDQuMDUxIDguOTIxIDMuODYgOC43OCAzLjcyWiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuNSA1QzEzLjE1NyA1IDE0LjUgNi4zNDMgMTQuNSA4QzE0LjUgOS42NTcgMTMuMTU3IDExIDExLjUgMTFIOS41NjFMMTEuMjggOS4yOEwxMC4yMiA4LjIyTDcuMjIgMTEuMjJDNi45MjcgMTEuNTEzIDYuOTI3IDExLjk4NyA3LjIyIDEyLjI4TDEwLjIyIDE1LjI4TDExLjI4IDE0LjIyTDkuNTYxIDEyLjVIMTEuNUMxMy45ODUgMTIuNSAxNiAxMC40ODUgMTYgOEMxNiA1LjUxNSAxMy45ODUgMy41IDExLjUgMy41SDEwLjVWNUgxMS41WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSRepeatIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSRepeat';
}

export default RefIcon;
