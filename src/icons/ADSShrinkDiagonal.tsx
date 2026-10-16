// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkDiagonalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.72 6.22L13.97 0.97L15.03 2.03L9.78 7.28L8.72 6.22ZM7.28 9.78L2.03 15.03L0.97 13.97L6.22 8.72L7.28 9.78Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10 6V2H8.5V6.75C8.5 7.164 8.836 7.5 9.25 7.5H14V6H10ZM2 8.5H6.75C7.164 8.5 7.5 8.836 7.5 9.25V14H6V10H2V8.5Z"/>
  </svg>
);

const aDSShrinkDiagonalIconDefinition = svgToIconDefinition(
  aDSShrinkDiagonalSvg,
  'ads-shrink-diagonal'
);

/**![ADSShrinkDiagonal](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43MiA2LjIyTDEzLjk3IDAuOTdMMTUuMDMgMi4wM0w5Ljc4IDcuMjhMOC43MiA2LjIyWk03LjI4IDkuNzhMMi4wMyAxNS4wM0wwLjk3IDEzLjk3TDYuMjIgOC43Mkw3LjI4IDkuNzhaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMCA2VjJIOC41VjYuNzVDOC41IDcuMTY0IDguODM2IDcuNSA5LjI1IDcuNUgxNFY2SDEwWk0yIDguNUg2Ljc1QzcuMTY0IDguNSA3LjUgOC44MzYgNy41IDkuMjVWMTRINlYxMEgyVjguNVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkDiagonalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkDiagonal';
}

export default RefIcon;
