// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSDataNumberSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 4H2.75C3.164 4 3.5 4.336 3.5 4.75V12H2V5.5H0.75V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5 4H8.125C8.884 4 9.5 4.616 9.5 5.375V7.375C9.5 8.134 8.884 8.75 8.125 8.75H6.5V10.5H9.5V12H5.75C5.336 12 5 11.664 5 11.25V8.625C5 7.866 5.616 7.25 6.375 7.25H8V5.5H5V4Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M11 4H14.125C14.884 4 15.5 4.616 15.5 5.375V10.625C15.5 11.384 14.884 12 14.125 12H11V10.5H14V8.75H11V7.25H14V5.5H11V4Z"/>
  </svg>
);

const aDSDataNumberIconDefinition = svgToIconDefinition(
  aDSDataNumberSvg,
  'ads-data-number'
);

/**![ADSDataNumber](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMC43NSA0SDIuNzVDMy4xNjQgNCAzLjUgNC4zMzYgMy41IDQuNzVWMTJIMlY1LjVIMC43NVY0WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNSA0SDguMTI1QzguODg0IDQgOS41IDQuNjE2IDkuNSA1LjM3NVY3LjM3NUM5LjUgOC4xMzQgOC44ODQgOC43NSA4LjEyNSA4Ljc1SDYuNVYxMC41SDkuNVYxMkg1Ljc1QzUuMzM2IDEyIDUgMTEuNjY0IDUgMTEuMjVWOC42MjVDNSA3Ljg2NiA1LjYxNiA3LjI1IDYuMzc1IDcuMjVIOFY1LjVINVY0WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEgNEgxNC4xMjVDMTQuODg0IDQgMTUuNSA0LjYxNiAxNS41IDUuMzc1VjEwLjYyNUMxNS41IDExLjM4NCAxNC44ODQgMTIgMTQuMTI1IDEySDExVjEwLjVIMTRWOC43NUgxMVY3LjI1SDE0VjUuNUgxMVY0WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSDataNumberIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSDataNumber';
}

export default RefIcon;
