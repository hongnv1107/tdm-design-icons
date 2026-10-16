// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowStartSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8.78 4.03L5.561 7.25H16V8.75H5.561L8.78 11.97L7.72 13.03L3.22 8.53C2.927 8.237 2.927 7.763 3.22 7.47L7.72 2.97L8.78 4.03ZM1.5 3V13H0V3H1.5Z"/>
  </svg>
);

const aDSArrowStartIconDefinition = svgToIconDefinition(
  aDSArrowStartSvg,
  'ads-arrow-start'
);

/**![ADSArrowStart](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik04Ljc4IDQuMDNMNS41NjEgNy4yNUgxNlY4Ljc1SDUuNTYxTDguNzggMTEuOTdMNy43MiAxMy4wM0wzLjIyIDguNTNDMi45MjcgOC4yMzcgMi45MjcgNy43NjMgMy4yMiA3LjQ3TDcuNzIgMi45N0w4Ljc4IDQuMDNaTTEuNSAzVjEzSDBWM0gxLjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowStartIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowStart';
}

export default RefIcon;
