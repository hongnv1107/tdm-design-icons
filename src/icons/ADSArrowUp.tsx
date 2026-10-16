// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowUpSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 15V3.561L12.47 7.28L13.53 6.22L8.53 1.22C8.237 0.927 7.763 0.927 7.47 1.22L2.47 6.22L3.53 7.28L7.25 3.561V15H8.75Z"/>
  </svg>
);

const aDSArrowUpIconDefinition = svgToIconDefinition(
  aDSArrowUpSvg,
  'ads-arrow-up'
);

/**![ADSArrowUp](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOC43NSAxNVYzLjU2MUwxMi40NyA3LjI4TDEzLjUzIDYuMjJMOC41MyAxLjIyQzguMjM3IDAuOTI3IDcuNzYzIDAuOTI3IDcuNDcgMS4yMkwyLjQ3IDYuMjJMMy41MyA3LjI4TDcuMjUgMy41NjFWMTVIOC43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowUpIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowUp';
}

export default RefIcon;
