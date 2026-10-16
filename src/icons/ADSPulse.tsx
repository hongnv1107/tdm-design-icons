// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPulseSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 1C6.586 1 6.882 1.224 6.972 1.548L9.75 11.468L10.778 7.798C10.869 7.474 11.164 7.25 11.5 7.25H16V8.75H12.069L10.472 14.452C10.382 14.776 10.086 15 9.75 15C9.414 15 9.118 14.776 9.028 14.452L6.25 4.532L5.222 8.202C5.132 8.526 4.836 8.75 4.5 8.75H0V7.25H3.931L5.528 1.548C5.618 1.224 5.914 1 6.25 1Z"/>
  </svg>
);

const aDSPulseIconDefinition = svgToIconDefinition(
  aDSPulseSvg,
  'ads-pulse'
);

/**![ADSPulse](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNi4yNSAxQzYuNTg2IDEgNi44ODIgMS4yMjQgNi45NzIgMS41NDhMOS43NSAxMS40NjhMMTAuNzc4IDcuNzk4QzEwLjg2OSA3LjQ3NCAxMS4xNjQgNy4yNSAxMS41IDcuMjVIMTZWOC43NUgxMi4wNjlMMTAuNDcyIDE0LjQ1MkMxMC4zODIgMTQuNzc2IDEwLjA4NiAxNSA5Ljc1IDE1QzkuNDE0IDE1IDkuMTE4IDE0Ljc3NiA5LjAyOCAxNC40NTJMNi4yNSA0LjUzMkw1LjIyMiA4LjIwMkM1LjEzMiA4LjUyNiA0LjgzNiA4Ljc1IDQuNSA4Ljc1SDBWNy4yNUgzLjkzMUw1LjUyOCAxLjU0OEM1LjYxOCAxLjIyNCA1LjkxNCAxIDYuMjUgMVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPulseIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPulse';
}

export default RefIcon;
