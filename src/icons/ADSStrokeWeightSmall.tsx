// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightSmallSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 8C6.25 8.967 7.034 9.75 8 9.75C8.967 9.75 9.75 8.967 9.75 8C9.75 7.034 8.967 6.25 8 6.25C7.034 6.25 6.25 7.034 6.25 8Z"/>
  </svg>
);

const aDSStrokeWeightSmallIconDefinition = svgToIconDefinition(
  aDSStrokeWeightSmallSvg,
  'ads-stroke-weight-small'
);

/**![ADSStrokeWeightSmall](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNSA4QzYuMjUgOC45NjcgNy4wMzQgOS43NSA4IDkuNzVDOC45NjcgOS43NSA5Ljc1IDguOTY3IDkuNzUgOEM5Ljc1IDcuMDM0IDguOTY3IDYuMjUgOCA2LjI1QzcuMDM0IDYuMjUgNi4yNSA3LjAzNCA2LjI1IDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightSmallIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightSmall';
}

export default RefIcon;
