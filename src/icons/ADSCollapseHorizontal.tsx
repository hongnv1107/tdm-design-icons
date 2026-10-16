// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCollapseHorizontalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.25 0V16H8.75V0H7.25ZM9.97 7.47C9.677 7.763 9.677 8.237 9.97 8.53L13.22 11.78L14.28 10.72L12.311 8.75H16V7.25H12.311L14.28 5.28L13.22 4.22L9.97 7.47ZM1.72 5.28L3.689 7.25H0V8.75H3.689L1.72 10.72L2.78 11.78L6.03 8.53C6.323 8.237 6.323 7.763 6.03 7.47L2.78 4.22L1.72 5.28Z"/>
  </svg>
);

const aDSCollapseHorizontalIconDefinition = svgToIconDefinition(
  aDSCollapseHorizontalSvg,
  'ads-collapse-horizontal'
);

/**![ADSCollapseHorizontal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03LjI1IDBWMTZIOC43NVYwSDcuMjVaTTkuOTcgNy40N0M5LjY3NyA3Ljc2MyA5LjY3NyA4LjIzNyA5Ljk3IDguNTNMMTMuMjIgMTEuNzhMMTQuMjggMTAuNzJMMTIuMzExIDguNzVIMTZWNy4yNUgxMi4zMTFMMTQuMjggNS4yOEwxMy4yMiA0LjIyTDkuOTcgNy40N1pNMS43MiA1LjI4TDMuNjg5IDcuMjVIMFY4Ljc1SDMuNjg5TDEuNzIgMTAuNzJMMi43OCAxMS43OEw2LjAzIDguNTNDNi4zMjMgOC4yMzcgNi4zMjMgNy43NjMgNi4wMyA3LjQ3TDIuNzggNC4yMkwxLjcyIDUuMjhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCollapseHorizontalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCollapseHorizontal';
}

export default RefIcon;
