// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 9.75L8.75 16H7.25L7.25 9.75H8.75ZM7.25 6.25L7.25 0L8.75 0L8.75 6.25H7.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.811L5.03 13.78L3.97 12.72L7.47 9.22C7.763 8.927 8.237 8.927 8.53 9.22L12.03 12.72L10.97 13.78L8 10.811ZM7.47 6.78L3.97 3.28L5.03 2.22L8 5.189L10.97 2.22L12.03 3.28L8.53 6.78C8.237 7.073 7.763 7.073 7.47 6.78Z"/>
  </svg>
);

const aDSShrinkVerticalIconDefinition = svgToIconDefinition(
  aDSShrinkVerticalSvg,
  'ads-shrink-vertical'
);

/**![ADSShrinkVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSA5Ljc1TDguNzUgMTZINy4yNUw3LjI1IDkuNzVIOC43NVpNNy4yNSA2LjI1TDcuMjUgMEw4Ljc1IDBMOC43NSA2LjI1SDcuMjVaIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEwLjgxMUw1LjAzIDEzLjc4TDMuOTcgMTIuNzJMNy40NyA5LjIyQzcuNzYzIDguOTI3IDguMjM3IDguOTI3IDguNTMgOS4yMkwxMi4wMyAxMi43MkwxMC45NyAxMy43OEw4IDEwLjgxMVpNNy40NyA2Ljc4TDMuOTcgMy4yOEw1LjAzIDIuMjJMOCA1LjE4OUwxMC45NyAyLjIyTDEyLjAzIDMuMjhMOC41MyA2Ljc4QzguMjM3IDcuMDczIDcuNzYzIDcuMDczIDcuNDcgNi43OFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkVertical';
}

export default RefIcon;
