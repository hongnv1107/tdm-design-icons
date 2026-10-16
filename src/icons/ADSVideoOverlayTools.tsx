// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSVideoOverlayToolsSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 0H11.5C11.914 0 12.25 0.336 12.25 0.75V6H10.75V2.561L6.28 7.03L5.22 5.97L9.689 1.5H6.25V0ZM1.5 10V14.5H6V10H1.5ZM0 9.875C0 9.116 0.616 8.5 1.375 8.5H6.125C6.884 8.5 7.5 9.116 7.5 9.875V14.625C7.5 15.384 6.884 16 6.125 16H1.375C0.616 16 0 15.384 0 14.625V9.875ZM11.5 10H9V8.5H15.5V10H13V16H11.5V10Z"/>
  </svg>
);

const aDSVideoOverlayToolsIconDefinition = svgToIconDefinition(
  aDSVideoOverlayToolsSvg,
  'ads-video-overlay-tools'
);

/**![ADSVideoOverlayTools](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNSAwSDExLjVDMTEuOTE0IDAgMTIuMjUgMC4zMzYgMTIuMjUgMC43NVY2SDEwLjc1VjIuNTYxTDYuMjggNy4wM0w1LjIyIDUuOTdMOS42ODkgMS41SDYuMjVWMFpNMS41IDEwVjE0LjVINlYxMEgxLjVaTTAgOS44NzVDMCA5LjExNiAwLjYxNiA4LjUgMS4zNzUgOC41SDYuMTI1QzYuODg0IDguNSA3LjUgOS4xMTYgNy41IDkuODc1VjE0LjYyNUM3LjUgMTUuMzg0IDYuODg0IDE2IDYuMTI1IDE2SDEuMzc1QzAuNjE2IDE2IDAgMTUuMzg0IDAgMTQuNjI1VjkuODc1Wk0xMS41IDEwSDlWOC41SDE1LjVWMTBIMTNWMTZIMTEuNVYxMFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSVideoOverlayToolsIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSVideoOverlayTools';
}

export default RefIcon;
