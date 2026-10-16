// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowCurvedLeftUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 13.5C8.343 13.5 7 12.157 7 10.5V3.561L10.22 6.78L11.28 5.72L6.78 1.22C6.64 1.079 6.449 1 6.25 1C6.051 1 5.86 1.079 5.72 1.22L1.22 5.72L2.28 6.78L5.5 3.561V10.5C5.5 12.985 7.515 15 10 15H15V13.5H10Z"/>
  </svg>
);

const aDSArrowCurvedLeftUpIconDefinition = svgToIconDefinition(
  aDSArrowCurvedLeftUpSvg,
  'ads-arrow-curved-left-up'
);

/**![ADSArrowCurvedLeftUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMCAxMy41QzguMzQzIDEzLjUgNyAxMi4xNTcgNyAxMC41VjMuNTYxTDEwLjIyIDYuNzhMMTEuMjggNS43Mkw2Ljc4IDEuMjJDNi42NCAxLjA3OSA2LjQ0OSAxIDYuMjUgMUM2LjA1MSAxIDUuODYgMS4wNzkgNS43MiAxLjIyTDEuMjIgNS43MkwyLjI4IDYuNzhMNS41IDMuNTYxVjEwLjVDNS41IDEyLjk4NSA3LjUxNSAxNSAxMCAxNUgxNVYxMy41SDEwWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowCurvedLeftUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowCurvedLeftUp';
}

export default RefIcon;
