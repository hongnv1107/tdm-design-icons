// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityHighestSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 6.75L8.413 3.125C8.163 2.959 7.837 2.959 7.587 3.125L2.087 6.75L2.913 8.001L8 4.649L13.087 8.001L13.913 6.75ZM13.913 11.25L8.413 7.625C8.163 7.459 7.837 7.459 7.587 7.625L2.087 11.25L2.913 12.502L8 9.149L13.087 12.502L13.913 11.25Z"/>
  </svg>
);

const aDSPriorityHighestIconDefinition = svgToIconDefinition(
  aDSPriorityHighestSvg,
  'ads-priority-highest'
);

/**![ADSPriorityHighest](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgNi43NUw4LjQxMyAzLjEyNUM4LjE2MyAyLjk1OSA3LjgzNyAyLjk1OSA3LjU4NyAzLjEyNUwyLjA4NyA2Ljc1TDIuOTEzIDguMDAxTDggNC42NDlMMTMuMDg3IDguMDAxTDEzLjkxMyA2Ljc1Wk0xMy45MTMgMTEuMjVMOC40MTMgNy42MjVDOC4xNjMgNy40NTkgNy44MzcgNy40NTkgNy41ODcgNy42MjVMMi4wODcgMTEuMjVMMi45MTMgMTIuNTAyTDggOS4xNDlMMTMuMDg3IDEyLjUwMkwxMy45MTMgMTEuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityHighestIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityHighest';
}

export default RefIcon;
