// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSSortDescendingSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5L1 3.5L1 2L15 2L15 3.5ZM13.25 7.25L13.25 12.439L14.97 10.72L16.03 11.78L13.03 14.78C12.89 14.921 12.699 15 12.5 15C12.301 15 12.11 14.921 11.97 14.78L8.97 11.78L10.03 10.72L11.75 12.439L11.75 7.25L13.25 7.25ZM8 8.75L1 8.75L1 7.25L8 7.25L8 8.75ZM6 14L1 14L1 12.5L6 12.5L6 14Z"/>
  </svg>
);

const aDSSortDescendingIconDefinition = svgToIconDefinition(
  aDSSortDescendingSvg,
  'ads-sort-descending'
);

/**![ADSSortDescending](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDMuNUwxIDMuNUwxIDJMMTUgMkwxNSAzLjVaTTEzLjI1IDcuMjVMMTMuMjUgMTIuNDM5TDE0Ljk3IDEwLjcyTDE2LjAzIDExLjc4TDEzLjAzIDE0Ljc4QzEyLjg5IDE0LjkyMSAxMi42OTkgMTUgMTIuNSAxNUMxMi4zMDEgMTUgMTIuMTEgMTQuOTIxIDExLjk3IDE0Ljc4TDguOTcgMTEuNzhMMTAuMDMgMTAuNzJMMTEuNzUgMTIuNDM5TDExLjc1IDcuMjVMMTMuMjUgNy4yNVpNOCA4Ljc1TDEgOC43NUwxIDcuMjVMOCA3LjI1TDggOC43NVpNNiAxNEwxIDE0TDEgMTIuNUw2IDEyLjVMNiAxNFoiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSSortDescendingIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSSortDescending';
}

export default RefIcon;
