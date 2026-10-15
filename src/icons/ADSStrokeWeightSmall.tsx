// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeWeightSmallSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSStrokeWeightSmall](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjUgOEM2LjI1IDguOTY3IDcuMDM0IDkuNzUgOCA5Ljc1QzguOTY3IDkuNzUgOS43NSA4Ljk2NyA5Ljc1IDhDOS43NSA3LjAzNCA4Ljk2NyA2LjI1IDggNi4yNUM3LjAzNCA2LjI1IDYuMjUgNy4wMzQgNi4yNSA4WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeWeightSmallIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeWeightSmall';
}

export default RefIcon;
