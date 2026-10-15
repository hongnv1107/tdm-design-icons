// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSHardwareAuditSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 10V3C1 1.895 1.895 1 3 1H7V2.5H3C2.724 2.5 2.5 2.724 2.5 3V10C2.5 10.276 2.724 10.5 3 10.5H13C13.276 10.5 13.5 10.276 13.5 10V8H15V10C15 11.105 14.105 12 13 12H8.75V13.5H12V15H4V13.5H7.25V12H3C1.895 12 1 11.105 1 10Z"/><path d="M11 4.5V6H9.5V4.5H11ZM16 4.5V6H12.5V4.5H16ZM11 1.5V3H9.5V1.5H11ZM16 1.5V3H12.5V1.5H16Z"/>
  </svg>
);

const aDSHardwareAuditIconDefinition = svgToIconDefinition(
  aDSHardwareAuditSvg,
  'ads-hardware-audit'
);

/**![ADSHardwareAudit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMSAxMFYzQzEgMS44OTUgMS44OTUgMSAzIDFIN1YyLjVIM0MyLjcyNCAyLjUgMi41IDIuNzI0IDIuNSAzVjEwQzIuNSAxMC4yNzYgMi43MjQgMTAuNSAzIDEwLjVIMTNDMTMuMjc2IDEwLjUgMTMuNSAxMC4yNzYgMTMuNSAxMFY4SDE1VjEwQzE1IDExLjEwNSAxNC4xMDUgMTIgMTMgMTJIOC43NVYxMy41SDEyVjE1SDRWMTMuNUg3LjI1VjEySDNDMS44OTUgMTIgMSAxMS4xMDUgMSAxMFoiLz48cGF0aCBkPSJNMTEgNC41VjZIOS41VjQuNUgxMVpNMTYgNC41VjZIMTIuNVY0LjVIMTZaTTExIDEuNVYzSDkuNVYxLjVIMTFaTTE2IDEuNVYzSDEyLjVWMS41SDE2WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSHardwareAuditIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSHardwareAudit';
}

export default RefIcon;
