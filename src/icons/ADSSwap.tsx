// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSwapSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.22 1.22L0.22 4.22L1.28 5.28L3 3.561L3 11.875C3 13.325 4.175 14.5 5.625 14.5H7.5V13H5.625C5.004 13 4.5 12.496 4.5 11.875L4.5 3.561L6.22 5.28L7.28 4.22L4.28 1.22C3.987 0.927 3.513 0.927 3.22 1.22ZM8.5 3L10.375 3C10.996 3 11.5 3.504 11.5 4.125V12.439L9.78 10.72L8.72 11.78L11.72 14.78C12.013 15.073 12.488 15.073 12.78 14.78L15.78 11.78L14.72 10.72L13 12.439V4.125C13 2.675 11.825 1.5 10.375 1.5L8.5 1.5V3Z"/>
  </svg>
);

const aDSSwapIconDefinition = svgToIconDefinition(
  aDSSwapSvg,
  'ads-swap'
);

/**![ADSSwap](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4yMiAxLjIyTDAuMjIgNC4yMkwxLjI4IDUuMjhMMyAzLjU2MUwzIDExLjg3NUMzIDEzLjMyNSA0LjE3NSAxNC41IDUuNjI1IDE0LjVINy41VjEzSDUuNjI1QzUuMDA0IDEzIDQuNSAxMi40OTYgNC41IDExLjg3NUw0LjUgMy41NjFMNi4yMiA1LjI4TDcuMjggNC4yMkw0LjI4IDEuMjJDMy45ODcgMC45MjcgMy41MTMgMC45MjcgMy4yMiAxLjIyWk04LjUgM0wxMC4zNzUgM0MxMC45OTYgMyAxMS41IDMuNTA0IDExLjUgNC4xMjVWMTIuNDM5TDkuNzggMTAuNzJMOC43MiAxMS43OEwxMS43MiAxNC43OEMxMi4wMTMgMTUuMDczIDEyLjQ4OCAxNS4wNzMgMTIuNzggMTQuNzhMMTUuNzggMTEuNzhMMTQuNzIgMTAuNzJMMTMgMTIuNDM5VjQuMTI1QzEzIDIuNjc1IDExLjgyNSAxLjUgMTAuMzc1IDEuNUw4LjUgMS41VjNaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSwapIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSwap';
}

export default RefIcon;
