// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSShrinkVerticalSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 9.75L8.75 16H7.25L7.25 9.75H8.75ZM7.25 6.25L7.25 0L8.75 0L8.75 6.25H7.25Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.811L5.03 13.78L3.97 12.72L7.47 9.22C7.763 8.927 8.237 8.927 8.53 9.22L12.03 12.72L10.97 13.78L8 10.811ZM7.47 6.78L3.97 3.28L5.03 2.22L8 5.189L10.97 2.22L12.03 3.28L8.53 6.78C8.237 7.073 7.763 7.073 7.47 6.78Z"/>
  </svg>
);

const aDSShrinkVerticalIconDefinition = svgToIconDefinition(
  aDSShrinkVerticalSvg,
  'ads-shrink-vertical'
);

/**![ADSShrinkVertical](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTguNzUgOS43NUw4Ljc1IDE2SDcuMjVMNy4yNSA5Ljc1SDguNzVaTTcuMjUgNi4yNUw3LjI1IDBMOC43NSAwTDguNzUgNi4yNUg3LjI1WiIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNOCAxMC44MTFMNS4wMyAxMy43OEwzLjk3IDEyLjcyTDcuNDcgOS4yMkM3Ljc2MyA4LjkyNyA4LjIzNyA4LjkyNyA4LjUzIDkuMjJMMTIuMDMgMTIuNzJMMTAuOTcgMTMuNzhMOCAxMC44MTFaTTcuNDcgNi43OEwzLjk3IDMuMjhMNS4wMyAyLjIyTDggNS4xODlMMTAuOTcgMi4yMkwxMi4wMyAzLjI4TDguNTMgNi43OEM4LjIzNyA3LjA3MyA3Ljc2MyA3LjA3MyA3LjQ3IDYuNzhaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSShrinkVerticalIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSShrinkVertical';
}

export default RefIcon;
