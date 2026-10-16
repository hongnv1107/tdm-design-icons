// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSFileTextSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.5 14C12.5 14.276 12.276 14.5 12 14.5H4C3.724 14.5 3.5 14.276 3.5 14V2C3.5 1.724 3.724 1.5 4 1.5H8V5.25C8 5.664 8.336 6 8.75 6H12.5V14ZM9.5 2.061L11.94 4.5H9.5V2.061ZM11 9.5V8H5V9.5H11ZM9 12.5V11H5V12.5H9ZM14 5.25C14 4.731 13.794 4.233 13.427 3.866L10.134 0.573C9.767 0.206 9.269 0 8.75 0H4C2.895 0 2 0.895 2 2V14C2 15.105 2.895 16 4 16H12C13.105 16 14 15.105 14 14V5.25Z"/>
  </svg>
);

const aDSFileTextIconDefinition = svgToIconDefinition(
  aDSFileTextSvg,
  'ads-file-text'
);

/**![ADSFileText](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMi41IDE0QzEyLjUgMTQuMjc2IDEyLjI3NiAxNC41IDEyIDE0LjVINEMzLjcyNCAxNC41IDMuNSAxNC4yNzYgMy41IDE0VjJDMy41IDEuNzI0IDMuNzI0IDEuNSA0IDEuNUg4VjUuMjVDOCA1LjY2NCA4LjMzNiA2IDguNzUgNkgxMi41VjE0Wk05LjUgMi4wNjFMMTEuOTQgNC41SDkuNVYyLjA2MVpNMTEgOS41VjhINVY5LjVIMTFaTTkgMTIuNVYxMUg1VjEyLjVIOVpNMTQgNS4yNUMxNCA0LjczMSAxMy43OTQgNC4yMzMgMTMuNDI3IDMuODY2TDEwLjEzNCAwLjU3M0M5Ljc2NyAwLjIwNiA5LjI2OSAwIDguNzUgMEg0QzIuODk1IDAgMiAwLjg5NSAyIDJWMTRDMiAxNS4xMDUgMi44OTUgMTYgNCAxNkgxMkMxMy4xMDUgMTYgMTQgMTUuMTA1IDE0IDE0VjUuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSFileTextIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSFileText';
}

export default RefIcon;
