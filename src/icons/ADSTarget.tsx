// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTargetSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.543 7.25H4V8.75H1.543C1.886 11.741 4.26 14.114 7.25 14.457V12H8.75V14.457C11.741 14.114 14.114 11.741 14.457 8.75H12V7.25H14.457C14.114 4.26 11.741 1.886 8.75 1.543V4H7.25V1.543C4.26 1.886 1.886 4.26 1.543 7.25ZM0 8C0 3.582 3.582 0 8 0C12.418 0 16 3.582 16 8C16 12.418 12.418 16 8 16C3.582 16 0 12.418 0 8Z"/>
  </svg>
);

const aDSTargetIconDefinition = svgToIconDefinition(
  aDSTargetSvg,
  'ads-target'
);

/**![ADSTarget](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNTQzIDcuMjVINFY4Ljc1SDEuNTQzQzEuODg2IDExLjc0MSA0LjI2IDE0LjExNCA3LjI1IDE0LjQ1N1YxMkg4Ljc1VjE0LjQ1N0MxMS43NDEgMTQuMTE0IDE0LjExNCAxMS43NDEgMTQuNDU3IDguNzVIMTJWNy4yNUgxNC40NTdDMTQuMTE0IDQuMjYgMTEuNzQxIDEuODg2IDguNzUgMS41NDNWNEg3LjI1VjEuNTQzQzQuMjYgMS44ODYgMS44ODYgNC4yNiAxLjU0MyA3LjI1Wk0wIDhDMCAzLjU4MiAzLjU4MiAwIDggMEMxMi40MTggMCAxNiAzLjU4MiAxNiA4QzE2IDEyLjQxOCAxMi40MTggMTYgOCAxNkMzLjU4MiAxNiAwIDEyLjQxOCAwIDhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTargetIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTarget';
}

export default RefIcon;
