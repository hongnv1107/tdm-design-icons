// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAPISvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 6C0.5 4.895 1.395 4 2.5 4H3.5C4.605 4 5.5 4.895 5.5 6V12H4V9.5H2V12H0.5V6ZM2 8H4V6C4 5.724 3.776 5.5 3.5 5.5H2.5C2.224 5.5 2 5.724 2 6V8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.75C7 4.336 7.336 4 7.75 4H10C11.105 4 12 4.895 12 6V7.5C12 8.605 11.105 9.5 10 9.5H8.5V12H7V4.75ZM8.5 8H10C10.276 8 10.5 7.776 10.5 7.5V6C10.5 5.724 10.276 5.5 10 5.5H8.5V8Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15 4V12H13.5V4H15Z"/>
  </svg>
);

const aDSAPIIconDefinition = svgToIconDefinition(
  aDSAPISvg,
  'ads-api'
);

/**![ADSAPI](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuNSA2QzAuNSA0Ljg5NSAxLjM5NSA0IDIuNSA0SDMuNUM0LjYwNSA0IDUuNSA0Ljg5NSA1LjUgNlYxMkg0VjkuNUgyVjEySDAuNVY2Wk0yIDhINFY2QzQgNS43MjQgMy43NzYgNS41IDMuNSA1LjVIMi41QzIuMjI0IDUuNSAyIDUuNzI0IDIgNlY4WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNyA0Ljc1QzcgNC4zMzYgNy4zMzYgNCA3Ljc1IDRIMTBDMTEuMTA1IDQgMTIgNC44OTUgMTIgNlY3LjVDMTIgOC42MDUgMTEuMTA1IDkuNSAxMCA5LjVIOC41VjEySDdWNC43NVpNOC41IDhIMTBDMTAuMjc2IDggMTAuNSA3Ljc3NiAxMC41IDcuNVY2QzEwLjUgNS43MjQgMTAuMjc2IDUuNSAxMCA1LjVIOC41VjhaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNSA0VjEySDEzLjVWNEgxNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAPIIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAPI';
}

export default RefIcon;
