// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSArrowDownSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 1V12.439L12.47 8.72L13.53 9.78L8.53 14.78C8.237 15.073 7.763 15.073 7.47 14.78L2.47 9.78L3.53 8.72L7.25 12.439V1H8.75Z"/>
  </svg>
);

const aDSArrowDownIconDefinition = svgToIconDefinition(
  aDSArrowDownSvg,
  'ads-arrow-down'
);

/**![ADSArrowDown](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgMVYxMi40MzlMMTIuNDcgOC43MkwxMy41MyA5Ljc4TDguNTMgMTQuNzhDOC4yMzcgMTUuMDczIDcuNzYzIDE1LjA3MyA3LjQ3IDE0Ljc4TDIuNDcgOS43OEwzLjUzIDguNzJMNy4yNSAxMi40MzlWMUg4Ljc1WiIvPjwvc3ZnPg==) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSArrowDownIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSArrowDown';
}

export default RefIcon;
