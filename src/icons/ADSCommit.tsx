// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCommitSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 5.354C6.096 5.68 5.25 6.741 5.25 8C5.25 9.259 6.096 10.32 7.25 10.647V16H8.75V10.647C9.904 10.32 10.75 9.259 10.75 8C10.75 6.741 9.904 5.68 8.75 5.354V0H7.25V5.354ZM8 6.75C7.31 6.75 6.75 7.31 6.75 8C6.75 8.69 7.31 9.25 8 9.25C8.69 9.25 9.25 8.69 9.25 8C9.25 7.31 8.69 6.75 8 6.75Z"/>
  </svg>
);

const aDSCommitIconDefinition = svgToIconDefinition(
  aDSCommitSvg,
  'ads-commit'
);

/**![ADSCommit](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNy4yNSA1LjM1NEM2LjA5NiA1LjY4IDUuMjUgNi43NDEgNS4yNSA4QzUuMjUgOS4yNTkgNi4wOTYgMTAuMzIgNy4yNSAxMC42NDdWMTZIOC43NVYxMC42NDdDOS45MDQgMTAuMzIgMTAuNzUgOS4yNTkgMTAuNzUgOEMxMC43NSA2Ljc0MSA5LjkwNCA1LjY4IDguNzUgNS4zNTRWMEg3LjI1VjUuMzU0Wk04IDYuNzVDNy4zMSA2Ljc1IDYuNzUgNy4zMSA2Ljc1IDhDNi43NSA4LjY5IDcuMzEgOS4yNSA4IDkuMjVDOC42OSA5LjI1IDkuMjUgOC42OSA5LjI1IDhDOS4yNSA3LjMxIDguNjkgNi43NSA4IDYuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCommitIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCommit';
}

export default RefIcon;
