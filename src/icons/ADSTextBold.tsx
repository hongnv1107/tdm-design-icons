// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTextBoldSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 2.125C3 1.504 3.504 1 4.125 1H8.75C11.004 1 13 2.626 13 5.063C13 6.042 12.677 6.891 12.145 7.555C13.248 8.251 14 9.441 14 10.938C14 13.374 12.004 15 9.75 15H4.125C3.504 15 3 14.496 3 13.875V2.125ZM8.75 6.875C9.948 6.875 10.75 6.077 10.75 5.063C10.75 4.048 9.948 3.25 8.75 3.25H5.25V6.875H8.75ZM5.25 9.125H9.75C10.948 9.125 11.75 9.923 11.75 10.938C11.75 11.952 10.948 12.75 9.75 12.75H5.25V9.125Z"/>
  </svg>
);

const aDSTextBoldIconDefinition = svgToIconDefinition(
  aDSTextBoldSvg,
  'ads-text-bold'
);

/**![ADSTextBold](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMyAyLjEyNUMzIDEuNTA0IDMuNTA0IDEgNC4xMjUgMUg4Ljc1QzExLjAwNCAxIDEzIDIuNjI2IDEzIDUuMDYzQzEzIDYuMDQyIDEyLjY3NyA2Ljg5MSAxMi4xNDUgNy41NTVDMTMuMjQ4IDguMjUxIDE0IDkuNDQxIDE0IDEwLjkzOEMxNCAxMy4zNzQgMTIuMDA0IDE1IDkuNzUgMTVINC4xMjVDMy41MDQgMTUgMyAxNC40OTYgMyAxMy44NzVWMi4xMjVaTTguNzUgNi44NzVDOS45NDggNi44NzUgMTAuNzUgNi4wNzcgMTAuNzUgNS4wNjNDMTAuNzUgNC4wNDggOS45NDggMy4yNSA4Ljc1IDMuMjVINS4yNVY2Ljg3NUg4Ljc1Wk01LjI1IDkuMTI1SDkuNzVDMTAuOTQ4IDkuMTI1IDExLjc1IDkuOTIzIDExLjc1IDEwLjkzOEMxMS43NSAxMS45NTIgMTAuOTQ4IDEyLjc1IDkuNzUgMTIuNzVINS4yNVY5LjEyNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTextBoldIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTextBold';
}

export default RefIcon;
