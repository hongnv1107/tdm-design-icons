// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSGrowVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.47 15.78L3.97 12.28L5.03 11.22L7.25 13.439L7.25 9L8.75 9L8.75 13.439L10.97 11.22L12.03 12.28L8.53 15.78C8.237 16.073 7.763 16.073 7.47 15.78ZM7.25 2.561L5.03 4.78L3.97 3.72L7.47 0.22C7.763 -0.073 8.237 -0.073 8.53 0.22L12.03 3.72L10.97 4.78L8.75 2.561L8.75 7L7.25 7L7.25 2.561Z"/>
  </svg>
);

const aDSGrowVerticalIconDefinition = svgToIconDefinition(
  aDSGrowVerticalSvg,
  'ads-grow-vertical'
);

/**![ADSGrowVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNDcgMTUuNzhMMy45NyAxMi4yOEw1LjAzIDExLjIyTDcuMjUgMTMuNDM5TDcuMjUgOUw4Ljc1IDlMOC43NSAxMy40MzlMMTAuOTcgMTEuMjJMMTIuMDMgMTIuMjhMOC41MyAxNS43OEM4LjIzNyAxNi4wNzMgNy43NjMgMTYuMDczIDcuNDcgMTUuNzhaTTcuMjUgMi41NjFMNS4wMyA0Ljc4TDMuOTcgMy43Mkw3LjQ3IDAuMjJDNy43NjMgLTAuMDczIDguMjM3IC0wLjA3MyA4LjUzIDAuMjJMMTIuMDMgMy43MkwxMC45NyA0Ljc4TDguNzUgMi41NjFMOC43NSA3TDcuMjUgN0w3LjI1IDIuNTYxWiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSGrowVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSGrowVertical';
}

export default RefIcon;
