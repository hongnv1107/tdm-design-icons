// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSStrokeCurvatureDynamicSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5C8.974 3.5 8.75 3.724 8.75 4V12C8.75 13.105 7.855 14 6.75 14H1V12.5H6.75C7.026 12.5 7.25 12.276 7.25 12V4C7.25 2.895 8.145 2 9.25 2H15V3.5H9.25Z"/>
  </svg>
);

const aDSStrokeCurvatureDynamicIconDefinition = svgToIconDefinition(
  aDSStrokeCurvatureDynamicSvg,
  'ads-stroke-curvature-dynamic'
);

/**![ADSStrokeCurvatureDynamic](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMjUgMy41QzguOTc0IDMuNSA4Ljc1IDMuNzI0IDguNzUgNFYxMkM4Ljc1IDEzLjEwNSA3Ljg1NSAxNCA2Ljc1IDE0SDFWMTIuNUg2Ljc1QzcuMDI2IDEyLjUgNy4yNSAxMi4yNzYgNy4yNSAxMlY0QzcuMjUgMi44OTUgOC4xNDUgMiA5LjI1IDJIMTVWMy41SDkuMjVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSStrokeCurvatureDynamicIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSStrokeCurvatureDynamic';
}

export default RefIcon;
