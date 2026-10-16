// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react';

import TdmIcon from '../components/TdmIcon';
import type { TdmIconProps } from '../components/TdmIcon';
import { svgToIconDefinition } from '../utils';

const aDSTabSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="#cacaca"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.28 3.47L11.28 7.47C11.573 7.763 11.573 8.237 11.28 8.53L7.28 12.53L6.22 11.47L8.939 8.75H1V7.25H8.939L6.22 4.53L7.28 3.47ZM15 3.5V12.5H13.5V3.5H15Z"/>
  </svg>
);

const aDSTabIconDefinition = svgToIconDefinition(
  aDSTabSvg,
  'ads-tab'
);

/**![ADSTab](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjY2FjYWNhIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjggMy40N0wxMS4yOCA3LjQ3QzExLjU3MyA3Ljc2MyAxMS41NzMgOC4yMzcgMTEuMjggOC41M0w3LjI4IDEyLjUzTDYuMjIgMTEuNDdMOC45MzkgOC43NUgxVjcuMjVIOC45MzlMNi4yMiA0LjUzTDcuMjggMy40N1pNMTUgMy41VjEyLjVIMTMuNVYzLjVIMTVaIi8+PC9zdmc+) */
const RefIcon: React.ForwardRefExoticComponent<
  Omit<TdmIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, TdmIconProps>((props, ref) => {
  return <TdmIcon {...props} ref={ref} icon={aDSTabIconDefinition} />;
});

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'ADSTab';
}

export default RefIcon;
