// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPowerSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 0L8.75 8H7.25L7.25 0H8.75ZM5.142 3.213C3.557 4.185 2.5 5.939 2.5 7.943C2.5 11.007 4.97 13.5 8 13.5C11.03 13.5 13.5 11.007 13.5 7.943C13.5 5.939 12.443 4.185 10.858 3.213L11.642 1.934C13.655 3.169 15 5.399 15 7.943C15 11.821 11.873 15 8 15C4.127 15 1 11.821 1 7.943C1 5.399 2.345 3.169 4.358 1.934L5.142 3.213Z"/>
  </svg>
);

const aDSPowerIconDefinition = svgToIconDefinition(
  aDSPowerSvg,
  'ads-power'
);

/**![ADSPower](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSAwTDguNzUgOEg3LjI1TDcuMjUgMEg4Ljc1Wk01LjE0MiAzLjIxM0MzLjU1NyA0LjE4NSAyLjUgNS45MzkgMi41IDcuOTQzQzIuNSAxMS4wMDcgNC45NyAxMy41IDggMTMuNUMxMS4wMyAxMy41IDEzLjUgMTEuMDA3IDEzLjUgNy45NDNDMTMuNSA1LjkzOSAxMi40NDMgNC4xODUgMTAuODU4IDMuMjEzTDExLjY0MiAxLjkzNEMxMy42NTUgMy4xNjkgMTUgNS4zOTkgMTUgNy45NDNDMTUgMTEuODIxIDExLjg3MyAxNSA4IDE1QzQuMTI3IDE1IDEgMTEuODIxIDEgNy45NDNDMSA1LjM5OSAyLjM0NSAzLjE2OSA0LjM1OCAxLjkzNEw1LjE0MiAzLjIxM1oiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPowerIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPower';
}

export default RefIcon;
