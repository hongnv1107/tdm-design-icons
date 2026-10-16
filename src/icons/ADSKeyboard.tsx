// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSKeyboardSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M14.5 4C14.5 3.724 14.276 3.5 14 3.5H2C1.724 3.5 1.5 3.724 1.5 4V12C1.5 12.276 1.724 12.5 2 12.5H14C14.276 12.5 14.5 12.276 14.5 12V4ZM16 12C16 13.105 15.105 14 14 14H2C0.895 14 0 13.105 0 12V4C0 2.895 0.895 2 2 2H14C15.105 2 16 2.895 16 4V12Z"/><path d="M11.5 10V11.5H4.5V10H11.5Z"/><path d="M4.5 4.5V6H3V4.5H4.5Z"/><path d="M7.25 4.5V6H5.75V4.5H7.25Z"/><path d="M6 7V8.5H4.5V7H6Z"/><path d="M8.75 7V8.5H7.25V7H8.75Z"/><path d="M11.5 7V8.5H10V7H11.5Z"/><path d="M10.25 4.5V6H8.75V4.5H10.25Z"/><path d="M13 4.5V6H11.5V4.5H13Z"/>
  </svg>
);

const aDSKeyboardIconDefinition = svgToIconDefinition(
  aDSKeyboardSvg,
  'ads-keyboard'
);

/**![ADSKeyboard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xNC41IDRDMTQuNSAzLjcyNCAxNC4yNzYgMy41IDE0IDMuNUgyQzEuNzI0IDMuNSAxLjUgMy43MjQgMS41IDRWMTJDMS41IDEyLjI3NiAxLjcyNCAxMi41IDIgMTIuNUgxNEMxNC4yNzYgMTIuNSAxNC41IDEyLjI3NiAxNC41IDEyVjRaTTE2IDEyQzE2IDEzLjEwNSAxNS4xMDUgMTQgMTQgMTRIMkMwLjg5NSAxNCAwIDEzLjEwNSAwIDEyVjRDMCAyLjg5NSAwLjg5NSAyIDIgMkgxNEMxNS4xMDUgMiAxNiAyLjg5NSAxNiA0VjEyWiIvPjxwYXRoIGQ9Ik0xMS41IDEwVjExLjVINC41VjEwSDExLjVaIi8+PHBhdGggZD0iTTQuNSA0LjVWNkgzVjQuNUg0LjVaIi8+PHBhdGggZD0iTTcuMjUgNC41VjZINS43NVY0LjVINy4yNVoiLz48cGF0aCBkPSJNNiA3VjguNUg0LjVWN0g2WiIvPjxwYXRoIGQ9Ik04Ljc1IDdWOC41SDcuMjVWN0g4Ljc1WiIvPjxwYXRoIGQ9Ik0xMS41IDdWOC41SDEwVjdIMTEuNVoiLz48cGF0aCBkPSJNMTAuMjUgNC41VjZIOC43NVY0LjVIMTAuMjVaIi8+PHBhdGggZD0iTTEzIDQuNVY2SDExLjVWNC41SDEzWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSKeyboardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSKeyboard';
}

export default RefIcon;
