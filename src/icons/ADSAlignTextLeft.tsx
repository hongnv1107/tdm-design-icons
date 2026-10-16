// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSAlignTextLeftSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15 3.5L1 3.5L1 2L15 2L15 3.5ZM15 8.75H1L1 7.25H15V8.75ZM8 14L1 14L1 12.5L8 12.5V14Z"/>
  </svg>
);

const aDSAlignTextLeftIconDefinition = svgToIconDefinition(
  aDSAlignTextLeftSvg,
  'ads-align-text-left'
);

/**![ADSAlignTextLeft](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE1IDMuNUwxIDMuNUwxIDJMMTUgMkwxNSAzLjVaTTE1IDguNzVIMUwxIDcuMjVIMTVWOC43NVpNOCAxNEwxIDE0TDEgMTIuNUw4IDEyLjVWMTRaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSAlignTextLeftIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSAlignTextLeft';
}

export default RefIcon;
