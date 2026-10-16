// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.97 1.47L3.97 7.47C3.695 7.744 3.678 8.179 3.918 8.474L3.97 8.53L9.97 14.53L11.03 13.47L5.561 8L11.03 2.53L9.97 1.47Z"/>
  </svg>
);

const aDSChevronLeftIconDefinition = svgToIconDefinition(
  aDSChevronLeftSvg,
  'ads-chevron-left'
);

/**![ADSChevronLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik05Ljk3IDEuNDdMMy45NyA3LjQ3QzMuNjk1IDcuNzQ0IDMuNjc4IDguMTc5IDMuOTE4IDguNDc0TDMuOTcgOC41M0w5Ljk3IDE0LjUzTDExLjAzIDEzLjQ3TDUuNTYxIDhMMTEuMDMgMi41M0w5Ljk3IDEuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronLeft';
}

export default RefIcon;
