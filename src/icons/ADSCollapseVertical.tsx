// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSCollapseVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 7.25L16 7.25V8.75H0L0 7.25ZM7.47 9.97C7.61 9.829 7.801 9.75 8 9.75C8.199 9.75 8.39 9.829 8.53 9.97L11.78 13.22L10.72 14.28L8.75 12.311V16H7.25L7.25 12.311L5.28 14.28L4.22 13.22L7.47 9.97ZM5.28 1.72L7.25 3.689L7.25 0L8.75 0V3.689L10.72 1.72L11.78 2.78L8.53 6.03C8.237 6.323 7.763 6.323 7.47 6.03L4.22 2.78L5.28 1.72Z"/>
  </svg>
);

const aDSCollapseVerticalIconDefinition = svgToIconDefinition(
  aDSCollapseVerticalSvg,
  'ads-collapse-vertical'
);

/**![ADSCollapseVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBkPSJNMCA3LjI1TDE2IDcuMjVWOC43NUgwTDAgNy4yNVpNNy40NyA5Ljk3QzcuNjEgOS44MjkgNy44MDEgOS43NSA4IDkuNzVDOC4xOTkgOS43NSA4LjM5IDkuODI5IDguNTMgOS45N0wxMS43OCAxMy4yMkwxMC43MiAxNC4yOEw4Ljc1IDEyLjMxMVYxNkg3LjI1TDcuMjUgMTIuMzExTDUuMjggMTQuMjhMNC4yMiAxMy4yMkw3LjQ3IDkuOTdaTTUuMjggMS43Mkw3LjI1IDMuNjg5TDcuMjUgMEw4Ljc1IDBWMy42ODlMMTAuNzIgMS43MkwxMS43OCAyLjc4TDguNTMgNi4wM0M4LjIzNyA2LjMyMyA3Ljc2MyA2LjMyMyA3LjQ3IDYuMDNMNC4yMiAyLjc4TDUuMjggMS43MloiLz48L3N2Zz4=) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSCollapseVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSCollapseVertical';
}

export default RefIcon;
