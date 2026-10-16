// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityMajorSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSPriorityMajor](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDQuNzVMOC40MTMgMS4xMjVDOC4xNjMgMC45NTkgNy44MzcgMC45NTkgNy41ODcgMS4xMjVMMi4wODcgNC43NUwyLjkxMyA2LjAwMUw4IDIuNjQ5TDEzLjA4NyA2LjAwMUwxMy45MTMgNC43NVpNMTMuOTEzIDkuMjVMOC40MTMgNS42MjVDOC4xNjMgNS40NTkgNy44MzcgNS40NTkgNy41ODcgNS42MjVMMi4wODcgOS4yNUwyLjkxMyAxMC41MDJMOCA3LjE0OUwxMy4wODcgMTAuNTAyTDEzLjkxMyA5LjI1Wk0xMy45MTMgMTMuNzVMOC40MTMgMTAuMTI1QzguMTYzIDkuOTU5IDcuODM3IDkuOTU5IDcuNTg3IDEwLjEyNUwyLjA4NyAxMy43NUwyLjkxMyAxNS4wMDJMOCAxMS42NDlMMTMuMDg3IDE1LjAwMkwxMy45MTMgMTMuNzVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityMajorIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityMajor';
}

export default RefIcon;
