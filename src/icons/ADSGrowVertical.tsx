// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGrowVerticalSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47 15.78L3.97 12.28L5.03 11.22L7.25 13.439L7.25 9L8.75 9L8.75 13.439L10.97 11.22L12.03 12.28L8.53 15.78C8.237 16.073 7.763 16.073 7.47 15.78ZM7.25 2.561L5.03 4.78L3.97 3.72L7.47 0.22C7.763 -0.073 8.237 -0.073 8.53 0.22L12.03 3.72L10.97 4.78L8.75 2.561L8.75 7L7.25 7L7.25 2.561Z"/>
  </svg>
);

const aDSGrowVerticalIconDefinition = svgToIconDefinition(
  aDSGrowVerticalSvg,
  'ads-grow-vertical'
);

/**![ADSGrowVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy40NyAxNS43OEwzLjk3IDEyLjI4TDUuMDMgMTEuMjJMNy4yNSAxMy40MzlMNy4yNSA5TDguNzUgOUw4Ljc1IDEzLjQzOUwxMC45NyAxMS4yMkwxMi4wMyAxMi4yOEw4LjUzIDE1Ljc4QzguMjM3IDE2LjA3MyA3Ljc2MyAxNi4wNzMgNy40NyAxNS43OFpNNy4yNSAyLjU2MUw1LjAzIDQuNzhMMy45NyAzLjcyTDcuNDcgMC4yMkM3Ljc2MyAtMC4wNzMgOC4yMzcgLTAuMDczIDguNTMgMC4yMkwxMi4wMyAzLjcyTDEwLjk3IDQuNzhMOC43NSAyLjU2MUw4Ljc1IDdMNy4yNSA3TDcuMjUgMi41NjFaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGrowVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrowVertical';
}

export default RefIcon;
