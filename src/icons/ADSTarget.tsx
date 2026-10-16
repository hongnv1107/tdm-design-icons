// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTargetSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.543 7.25H4V8.75H1.543C1.886 11.741 4.26 14.114 7.25 14.457V12H8.75V14.457C11.741 14.114 14.114 11.741 14.457 8.75H12V7.25H14.457C14.114 4.26 11.741 1.886 8.75 1.543V4H7.25V1.543C4.26 1.886 1.886 4.26 1.543 7.25ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8Z"/>
  </svg>
);

const aDSTargetIconDefinition = svgToIconDefinition(
  aDSTargetSvg,
  'ads-target'
);

/**![ADSTarget](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS41NDMgNy4yNUg0VjguNzVIMS41NDNDMS44ODYgMTEuNzQxIDQuMjYgMTQuMTE0IDcuMjUgMTQuNDU3VjEySDguNzVWMTQuNDU3QzExLjc0MSAxNC4xMTQgMTQuMTE0IDExLjc0MSAxNC40NTcgOC43NUgxMlY3LjI1SDE0LjQ1N0MxNC4xMTQgNC4yNiAxMS43NDEgMS44ODYgOC43NSAxLjU0M1Y0SDcuMjVWMS41NDNDNC4yNiAxLjg4NiAxLjg4NiA0LjI2IDEuNTQzIDcuMjVaTTAgOEMwIDMuNTgyIDMuNTgyIDAgOCAwQzEyLjQxOCAwIDE2IDMuNTgyIDE2IDhDMTYgMTIuNDE4IDEyLjQxOCAxNiA4IDE2QzMuNTgyIDE2IDAgMTIuNDE4IDAgOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTargetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTarget';
}

export default RefIcon;
