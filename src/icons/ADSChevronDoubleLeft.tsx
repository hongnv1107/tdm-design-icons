// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSChevronDoubleLeftSvg = (
  <svg
    width="24"
    height="24"
    viewBox="-4 -4 24 24"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.72 1.47L1.72 7.47C1.445 7.744 1.428 8.179 1.668 8.474L1.72 8.53L7.72 14.53L8.78 13.47L3.311 8L8.78 2.53L7.72 1.47Z"/><path d="M12.47 1.47L6.47 7.47C6.195 7.744 6.178 8.179 6.418 8.474L6.47 8.53L12.47 14.53L13.53 13.47L8.061 8L13.53 2.53L12.47 1.47Z"/>
  </svg>
);

const aDSChevronDoubleLeftIconDefinition = svgToIconDefinition(
  aDSChevronDoubleLeftSvg,
  'ads-chevron-double-left'
);

/**![ADSChevronDoubleLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9Ii00IC00IDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNjYWNhY2EiPjxwYXRoIGQ9Ik03LjcyIDEuNDdMMS43MiA3LjQ3QzEuNDQ1IDcuNzQ0IDEuNDI4IDguMTc5IDEuNjY4IDguNDc0TDEuNzIgOC41M0w3LjcyIDE0LjUzTDguNzggMTMuNDdMMy4zMTEgOEw4Ljc4IDIuNTNMNy43MiAxLjQ3WiIvPjxwYXRoIGQ9Ik0xMi40NyAxLjQ3TDYuNDcgNy40N0M2LjE5NSA3Ljc0NCA2LjE3OCA4LjE3OSA2LjQxOCA4LjQ3NEw2LjQ3IDguNTNMMTIuNDcgMTQuNTNMMTMuNTMgMTMuNDdMOC4wNjEgOEwxMy41MyAyLjUzTDEyLjQ3IDEuNDdaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSChevronDoubleLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSChevronDoubleLeft';
}

export default RefIcon;
