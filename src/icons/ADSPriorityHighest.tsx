// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSPriorityHighestSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
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

/**![ADSPriorityHighest](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMTMuOTEzIDYuNzVMOC40MTMgMy4xMjVDOC4xNjMgMi45NTkgNy44MzcgMi45NTkgNy41ODcgMy4xMjVMMi4wODcgNi43NUwyLjkxMyA4LjAwMUw4IDQuNjQ5TDEzLjA4NyA4LjAwMUwxMy45MTMgNi43NVpNMTMuOTEzIDExLjI1TDguNDEzIDcuNjI1QzguMTYzIDcuNDU5IDcuODM3IDcuNDU5IDcuNTg3IDcuNjI1TDIuMDg3IDExLjI1TDIuOTEzIDEyLjUwMkw4IDkuMTQ5TDEzLjA4NyAxMi41MDJMMTMuOTEzIDExLjI1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSPriorityHighestIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSPriorityHighest';
}

export default RefIcon;
