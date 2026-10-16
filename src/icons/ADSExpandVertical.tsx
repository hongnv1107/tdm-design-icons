// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSExpandVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1.5L15 1.5V0L1 0L1 1.5ZM1 16H15V14.5L1 14.5L1 16ZM7.47 14.28C7.763 14.573 8.237 14.573 8.53 14.28L11.78 11.03L10.72 9.97L8.75 11.94L8.75 4.061L10.72 6.03L11.78 4.97L8.53 1.72C8.237 1.427 7.763 1.427 7.47 1.72L4.22 4.97L5.28 6.03L7.25 4.061L7.25 11.94L5.28 9.97L4.22 11.03L7.47 14.28Z"/>
  </svg>
);

const aDSExpandVerticalIconDefinition = svgToIconDefinition(
  aDSExpandVerticalSvg,
  'ads-expand-vertical'
);

/**![ADSExpandVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xIDEuNUwxNSAxLjVWMEwxIDBMMSAxLjVaTTEgMTZIMTVWMTQuNUwxIDE0LjVMMSAxNlpNNy40NyAxNC4yOEM3Ljc2MyAxNC41NzMgOC4yMzcgMTQuNTczIDguNTMgMTQuMjhMMTEuNzggMTEuMDNMMTAuNzIgOS45N0w4Ljc1IDExLjk0TDguNzUgNC4wNjFMMTAuNzIgNi4wM0wxMS43OCA0Ljk3TDguNTMgMS43MkM4LjIzNyAxLjQyNyA3Ljc2MyAxLjQyNyA3LjQ3IDEuNzJMNC4yMiA0Ljk3TDUuMjggNi4wM0w3LjI1IDQuMDYxTDcuMjUgMTEuOTRMNS4yOCA5Ljk3TDQuMjIgMTEuMDNMNy40NyAxNC4yOFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSExpandVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSExpandVertical';
}

export default RefIcon;
