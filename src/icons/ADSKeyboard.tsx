// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSKeyboardSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSKeyboard](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTQuNSA0QzE0LjUgMy43MjQgMTQuMjc2IDMuNSAxNCAzLjVIMkMxLjcyNCAzLjUgMS41IDMuNzI0IDEuNSA0VjEyQzEuNSAxMi4yNzYgMS43MjQgMTIuNSAyIDEyLjVIMTRDMTQuMjc2IDEyLjUgMTQuNSAxMi4yNzYgMTQuNSAxMlY0Wk0xNiAxMkMxNiAxMy4xMDUgMTUuMTA1IDE0IDE0IDE0SDJDMC44OTUgMTQgMCAxMy4xMDUgMCAxMlY0QzAgMi44OTUgMC44OTUgMiAyIDJIMTRDMTUuMTA1IDIgMTYgMi44OTUgMTYgNFYxMloiLz48cGF0aCBkPSJNMTEuNSAxMFYxMS41SDQuNVYxMEgxMS41WiIvPjxwYXRoIGQ9Ik00LjUgNC41VjZIM1Y0LjVINC41WiIvPjxwYXRoIGQ9Ik03LjI1IDQuNVY2SDUuNzVWNC41SDcuMjVaIi8+PHBhdGggZD0iTTYgN1Y4LjVINC41VjdINloiLz48cGF0aCBkPSJNOC43NSA3VjguNUg3LjI1VjdIOC43NVoiLz48cGF0aCBkPSJNMTEuNSA3VjguNUgxMFY3SDExLjVaIi8+PHBhdGggZD0iTTEwLjI1IDQuNVY2SDguNzVWNC41SDEwLjI1WiIvPjxwYXRoIGQ9Ik0xMyA0LjVWNkgxMS41VjQuNUgxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSKeyboardIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSKeyboard';
}

export default RefIcon;
