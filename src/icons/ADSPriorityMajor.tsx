// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityMajorSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.913 4.75L8.413 1.125C8.163 0.959 7.837 0.959 7.587 1.125L2.087 4.75L2.913 6.001L8 2.649L13.087 6.001L13.913 4.75ZM13.913 9.25L8.413 5.625C8.163 5.459 7.837 5.459 7.587 5.625L2.087 9.25L2.913 10.502L8 7.149L13.087 10.502L13.913 9.25ZM13.913 13.75L8.413 10.125C8.163 9.959 7.837 9.959 7.587 10.125L2.087 13.75L2.913 15.002L8 11.649L13.087 15.002L13.913 13.75Z"/>
  </svg>
);

const aDSPriorityMajorIconDefinition = svgToIconDefinition(
  aDSPriorityMajorSvg,
  'ads-priority-major'
);

/**![ADSPriorityMajor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik0xMy45MTMgNC43NUw4LjQxMyAxLjEyNUM4LjE2MyAwLjk1OSA3LjgzNyAwLjk1OSA3LjU4NyAxLjEyNUwyLjA4NyA0Ljc1TDIuOTEzIDYuMDAxTDggMi42NDlMMTMuMDg3IDYuMDAxTDEzLjkxMyA0Ljc1Wk0xMy45MTMgOS4yNUw4LjQxMyA1LjYyNUM4LjE2MyA1LjQ1OSA3LjgzNyA1LjQ1OSA3LjU4NyA1LjYyNUwyLjA4NyA5LjI1TDIuOTEzIDEwLjUwMkw4IDcuMTQ5TDEzLjA4NyAxMC41MDJMMTMuOTEzIDkuMjVaTTEzLjkxMyAxMy43NUw4LjQxMyAxMC4xMjVDOC4xNjMgOS45NTkgNy44MzcgOS45NTkgNy41ODcgMTAuMTI1TDIuMDg3IDEzLjc1TDIuOTEzIDE1LjAwMkw4IDExLjY0OUwxMy4wODcgMTUuMDAyTDEzLjkxMyAxMy43NVoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityMajorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityMajor';
}

export default RefIcon;
