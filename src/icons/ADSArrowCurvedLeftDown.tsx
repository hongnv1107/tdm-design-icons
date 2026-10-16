// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedLeftDownSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 2.5C8.343 2.5 7 3.843 7 5.5V12.44L10.22 9.22L11.28 10.28L6.78 14.78C6.64 14.921 6.449 15 6.25 15C6.051 15 5.86 14.921 5.72 14.78L1.22 10.28L2.28 9.22L5.5 12.44V5.5C5.5 3.015 7.515 1 10 1H15V2.5H10Z"/>
  </svg>
);

const aDSArrowCurvedLeftDownIconDefinition = svgToIconDefinition(
  aDSArrowCurvedLeftDownSvg,
  'ads-arrow-curved-left-down'
);

/**![ADSArrowCurvedLeftDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMCAyLjVDOC4zNDMgMi41IDcgMy44NDMgNyA1LjVWMTIuNDRMMTAuMjIgOS4yMkwxMS4yOCAxMC4yOEw2Ljc4IDE0Ljc4QzYuNjQgMTQuOTIxIDYuNDQ5IDE1IDYuMjUgMTVDNi4wNTEgMTUgNS44NiAxNC45MjEgNS43MiAxNC43OEwxLjIyIDEwLjI4TDIuMjggOS4yMkw1LjUgMTIuNDRWNS41QzUuNSAzLjAxNSA3LjUxNSAxIDEwIDFIMTVWMi41SDEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedLeftDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedLeftDown';
}

export default RefIcon;
